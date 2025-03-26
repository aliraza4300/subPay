export function fixAxiosResponse(response) {
  if (!Array.isArray(response) || response.length === 0) {
    return { statusCode: 500, body: "No valid response found", headers: {} };
  }

  // Find first valid response object
  const resObject = response.find((item) => item && typeof item === "object");

  // Fix missing properties
  const fixedResponse = {
    statusCode: resObject?.statusCode || 500,
    body: resObject?.body || "No Content",
    headers: resObject?.headers || {},
    messageId: resObject?.headers?.["x-message-id"] || "N/A",
    server: resObject?.headers?.server || "Unknown",
    date: resObject?.headers?.date || new Date().toUTCString(),
  };

  return fixedResponse;
}

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getUserCountry = async () => {
  try {
    // Try ip-api.com first (free, no API key needed)
    const response = await fetch('http://ip-api.com/json/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.status === 'success') {
      return data.country;
    }
    
    // Fallback to ipapi.co if ip-api.com fails
    const backupResponse = await fetch('https://ipapi.co/json/');
    if (!backupResponse.ok) {
      throw new Error(`HTTP error! status: ${backupResponse.status}`);
    }
    const backupData = await backupResponse.json();
    return backupData.country_name;
  } catch (error) {
    console.error('Error fetching country:', error);
    return 'Unknown';
  }
};

export const signingUpCountries = ["India", "Singapore", "Thailand", "Malaysia"];