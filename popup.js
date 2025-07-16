document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["connectionStatus"], function (data) {
    const status = data.connectionStatus;

    const host = status?.host || "—";
    const isHttps = status?.isHttps ?? false;
    const dnsOk = status?.dnsOk ?? false;

    document.getElementById("host").textContent = host;
    document.getElementById("httpsStatus").textContent = isHttps
      ? "Захищене"
      : "Небезпечне";
    document.getElementById("httpsDot").className =
      "dot " + (isHttps ? "green" : "red");

    document.getElementById("dnsStatus").textContent = dnsOk
      ? "Доступний"
      : "Можлива підміна";
    document.getElementById("dnsDot").className =
      "dot " + (dnsOk ? "green" : "red");
  });
});
