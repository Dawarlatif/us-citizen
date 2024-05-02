import axios from "axios";

const FAST_PEOPLE_API_KEY = process.env.FAST_PEOPLE_API_KEY;
const BLACK_LIST_ALLIANCE_API_KEY = process.env.BLACK_LIST_ALLIANCE_API_KEY;
const TOKEN = process.env.TOKEN;
const API_KEY = process.env.API_KEY;

// Function to generate the API URL
function generateApiUrl(searchTerm) {
  const baseUrl = "http://api.scrape.do";
  const targetUrl = `https://www.fastpeoplesearch.com/${searchTerm}`;
  return `${baseUrl}?token=${TOKEN}&url=${targetUrl}`;
}

export async function getFastPeopleData(searchTerm) {
  const apiUrl = generateApiUrl(searchTerm);
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching FastPeople data:", error);
    return null;
  }
}

// Function to fetch data from Blacklist Alliance API
export async function getBlackListAllianceData(searchTerm) {
  const url = `https://YOUR_BLACKLIST_ALLIANCE_API_ENDPOINT?api_key=${BLACK_LIST_ALLIANCE_API_KEY}&q=${searchTerm}`; // Replace with actual API endpoint

  // try {
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching Blacklist Alliance data:", error);
  //   return null; // Handle errors appropriately in production
  // }
  return;
}
