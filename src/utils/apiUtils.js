import axios from "axios";

import cheerio from "cheerio";

// const BLACK_LIST_ALLIANCE_API_KEY = process.env.BLACK_LIST_ALLIANCE_API_KEY;
const TOKEN = process.env.REACT_APP_TOKEN;

// Function to generate the API URL
function generateApiUrl(searchTerm) {
  const formattedSearchTerm = `${searchTerm.slice(0, 3)}-${searchTerm.slice(
    3,
    6
  )}-${searchTerm.slice(6, 10)}`;

  const baseUrl = "http://api.scrape.do";
  const targetUrl = `https://www.fastpeoplesearch.com/${formattedSearchTerm}`;
  return `${baseUrl}?token=${TOKEN}&url=${targetUrl}`;
}

export async function getFastPeopleData(searchTerm) {
  const apiUrl = generateApiUrl(searchTerm);
  try {
    const response = await axios.get(apiUrl);
    const html = response.data;

    // Load the HTML into Cheerio
    const $ = cheerio.load(html);

    // Extract relevant data using CSS selectors
    const name = $(".card-title .larger").text().trim();
    const location = $(".card-title .grey").text().trim();
    const age = $('h3:contains("Age:")').next().text().trim();
    const fullName = $('h3:contains("Full Name:")').next().text().trim();
    const currentAddress = $('h3:contains("Current Home Address:")')
      .next()
      .find("a")
      .text()
      .trim();

    // Extract past addresses
    const pastAddresses = [];
    $('h3:contains("Past Addresses:")')
      .nextAll("div")
      .each((i, elem) => {
        const address = $(elem).find("a").text().trim();
        if (address) {
          pastAddresses.push(address);
        }
      });

    // Extract phone numbers
    const phoneNumbers = [];
    $('h3:contains("Phone:")')
      .nextAll("a")
      .each((i, elem) => {
        phoneNumbers.push($(elem).text().trim());
      });

    // Extract aliases (AKA)
    const aliases = [];
    $('h3:contains("AKA:")')
      .next()
      .find("span")
      .each((i, elem) => {
        aliases.push($(elem).text().trim());
      });

    // Extract relatives
    const relatives = [];
    $('h3:contains("Relatives:")')
      .nextAll("a")
      .each((i, elem) => {
        relatives.push($(elem).text().trim());
      });

    // Create a JSON object with the extracted data
    const result = {
      name,
      location,
      age,
      fullName,
      currentAddress,
      pastAddresses,
      phoneNumbers,
      aliases,
      relatives,
    };

    return result;
  } catch (error) {
    console.error("Error fetching FastPeople data:", error);
    return null;
  }
}

// Function to fetch data from Blacklist Alliance API
export async function getBlackListAllianceData(searchTerm) {
  // const url = `https://YOUR_BLACKLIST_ALLIANCE_API_ENDPOINT?api_key=${BLACK_LIST_ALLIANCE_API_KEY}&q=${searchTerm}`;
  // try {
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching Blacklist Alliance data:", error);
  //   return null; // Handle errors appropriately in production
  // }
  return;
}
