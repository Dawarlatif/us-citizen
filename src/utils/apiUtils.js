import axios from "axios";

const fastPeopleApiKey = "b9c6de8987714d199264fcb177c26291f2cbe7ee3a6";

// Function to generate the API URL
function generateApiUrl(searchTerm) {
  const baseUrl = "http://api.scrape.do";
  const token = "b9c6de8987714d199264fcb177c26291f2cbe7ee3a6";
  const targetUrl = `https://www.fastpeoplesearch.com/${searchTerm}`;
  return `${baseUrl}?token=${token}&url=${targetUrl}`;
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
  const blackListAllianceApiKey = "HC3rVJPRTxVHv8fRFxWM";
  const url = `https://YOUR_BLACKLIST_ALLIANCE_API_ENDPOINT?api_key=${blackListAllianceApiKey}&q=${searchTerm}`; // Replace with actual API endpoint

  // try {
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching Blacklist Alliance data:", error);
  //   return null; // Handle errors appropriately in production
  // }
  return;
}
