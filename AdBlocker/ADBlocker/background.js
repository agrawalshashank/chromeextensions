const sites = [
    "*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.yt3.ggpht.com/*",
    "*://*/pagead/*",
	// "*://*.googlevideo.com/*"
]


chrome.webRequest.onBeforeRequest.addListener(
    function(details)
    { return { cancel: true } },
     {urls:  sites},
    ["blocking"]
    )

 