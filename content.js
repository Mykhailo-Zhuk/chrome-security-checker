(async () => {
  const currentHost = window.location.hostname;

  // HTTPS перевірка
  const isHttps = location.protocol === "https:";
  const connectionStatus = {
    host: currentHost,
    isHttps,
    dnsOk: false,
  };

  // DNS перевірка
  try {
    const res = await fetch(`https://${currentHost}`, { method: "HEAD" });
    connectionStatus.dnsOk = res.ok;
  } catch (e) {
    connectionStatus.dnsOk = false;
  }

  // Зберігаємо статус для popup
  chrome.storage.local.set({ connectionStatus });
})();
