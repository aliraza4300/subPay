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
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_name;
  } catch (error) {
    console.error('Error fetching country:', error);
    return 'Unknown';
  }
};
