const getElement = (element) => {
  return document.getElementById(element);
};

// Event delegation
document.getElementById("news-details").addEventListener("click", () => {
  window.open("newsDetails.html", "_blank");
});

const appleGlassNews = getElement("apple-glass-news");
appleGlassNews.addEventListener("click", () => {
  const appleGlassNewsTitle = appleGlassNews.innerText;
  localStorage.setItem("newsTitle", appleGlassNewsTitle);
});

const elonMuskPhoneNews = getElement("elon-musk-phone");
elonMuskPhoneNews.addEventListener("click", () => {
  const elonMuskPhoneNewsTitle = elonMuskPhoneNews.innerText;
  localStorage.setItem("newsTitle", elonMuskPhoneNewsTitle);
});

const chrisPrattNews = getElement("chris-pratt-news");
chrisPrattNews.addEventListener("click", () => {
  const chrisPrattNewsTitle = chrisPrattNews.innerText;
  localStorage.setItem("newsTitle", chrisPrattNewsTitle);
});

const launchRocketNews = getElement("launch-rocket-news");
launchRocketNews.addEventListener("click", () => {
  const launchRocketNewsTitle = launchRocketNews.innerText;
  localStorage.setItem("newsTitle", launchRocketNewsTitle);
});

const twitterNewRetweet = getElement("twitter-new-retweet");
document.getElementById("twitter").addEventListener("click", () => {
  const twitterNewRetweetTitle = twitterNewRetweet.innerText;
  localStorage.setItem("newsTitle", twitterNewRetweetTitle);
});

const macOS = getElement("macOS-title");
document.getElementById("macOS").addEventListener("click", () => {
  const macOSTitle = macOS.innerText;
  localStorage.setItem("newsTitle", macOSTitle);
});

const virtualReality = getElement("virtual-reality-title");
document.getElementById("virtual-reality").addEventListener("click", () => {
  const virtualRealityTitle = virtualReality.innerText;
  localStorage.setItem("newsTitle", virtualRealityTitle);
});

const microprocessor = getElement("microprocessor-title");
document.getElementById("microprocessor").addEventListener("click", () => {
  const microprocessorTitle = microprocessor.innerText;
  localStorage.setItem("newsTitle", microprocessorTitle);
});

const paymentPortal = getElement("payment-portal-title");
document.getElementById("payment-portal").addEventListener("click", () => {
  const paymentPortalTitle = paymentPortal.innerText;
  localStorage.setItem("newsTitle", paymentPortalTitle);
});

const outdoorGames = getElement("outdoor-games-title");
document.getElementById("outdoor-games").addEventListener("click", () => {
  const outdoorGamesTitle = outdoorGames.innerText;
  localStorage.setItem("newsTitle", outdoorGamesTitle);
});

const eBike = getElement("eBike-title");
document.getElementById("eBike").addEventListener("click", () => {
  const eBikeTitle = eBike.innerText;
  localStorage.setItem("newsTitle", eBikeTitle);
});

const disneyland = getElement("disneyland-title");
document.getElementById("disneyland").addEventListener("click", () => {
  const disneylandTitle = disneyland.innerText;
  localStorage.setItem("newsTitle", disneylandTitle);
});

const bestCar = getElement("best-car-title");
document.getElementById("best-car").addEventListener("click", () => {
  const bestCarTitle = bestCar.innerText;
  localStorage.setItem("newsTitle", bestCarTitle);
});

const smartSpeaker = getElement("smart-speaker-title");
document.getElementById("smart-speaker").addEventListener("click", () => {
  const smartSpeakerTitle = smartSpeaker.innerText;
  localStorage.setItem("newsTitle", smartSpeakerTitle);
});

const ipadPro = getElement("ipad-pro-title");
document.getElementById("ipad-pro").addEventListener("click", () => {
  const ipadProTitle = ipadPro.innerText;
  localStorage.setItem("newsTitle", ipadProTitle);
});
