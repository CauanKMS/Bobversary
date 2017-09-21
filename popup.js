function showIndex() {
       var index_url = "https://i.ytimg.com/vi/xtAVrrWKgzQ/maxresdefault.jpg";
       chrome.tabs.create({
       url: index_url
    });
 }

document.getElementById('vamo').addEventListener("click", showIndex);