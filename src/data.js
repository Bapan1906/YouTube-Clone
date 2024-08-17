// YouTube API key for making requests
export const API_KEY = `AIzaSyBFNVk7OZBR9MCyvni76hCaEvKDAUViCe4`;

// Function to convert numerical values into a more readable format
export const value_conveter = (value) => {
  // Check if the value is greater than or equal to 1 million
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M"; // Convert to millions
  }
  // Check if the value is greater than or equal to 1 thousand
  else if (value >= 1000) {
    return Math.floor(value / 1000) + "K"; // Convert to thousands
  } else {
    return value; // Return the value as-is if less than 1 thousand
  }
};
