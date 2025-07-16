chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    const locationHeader = details.responseHeaders.find(
      (h) => h.name.toLowerCase() === "location"
    );
    if (locationHeader && locationHeader.value.startsWith("http:")) {
      console.warn("⚠ HTTP редирект виявлений:", locationHeader.value);
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);
