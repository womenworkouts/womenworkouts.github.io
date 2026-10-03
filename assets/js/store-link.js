// Smart store link shared by /get/ and /go/<channel>/: phones go straight to their store, anything else
// stays on the page's two store buttons. The source reaches Google Play as utm_source, picked from
// ?src=, else the page's data-src (/go/ig/ -> instagram), else the in-app browser's user agent.
(function () {
  var ua = navigator.userAgent || "";
  var fixed = document.currentScript && document.currentScript.getAttribute("data-src");
  var inApp = /Instagram/i.test(ua) ? "instagram" : /FBAN|FBAV|FB_IAB/.test(ua) ? "facebook"
    : /TikTok|musical_ly|BytedanceWebview/i.test(ua) ? "tiktok" : "direct";
  var src = (new URLSearchParams(location.search).get("src") || fixed || inApp)
    .replace(/[^\w.-]/g, "").slice(0, 40);
  var ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var android = /Android/i.test(ua);
  if (ios) location.replace("https://apps.apple.com/app/id1599554806");
  else if (android) location.replace(
    "https://play.google.com/store/apps/details?id=com.betterlifewithapps.womenworkouts&referrer=" +
    encodeURIComponent("utm_source=" + src + "&utm_medium=smartlink"));
})();
