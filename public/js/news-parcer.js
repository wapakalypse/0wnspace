
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let russianNewsParser = new RSSParser();
russianNewsParser.parseURL(CORS_PROXY + 'https://russian.rt.com/rss', function(err, feed) {
    var rssContent = document.querySelector('.info-news-russian');

    for (let value of feed.items) {
        var title = value.title;
        var link = value.link;
        var newItem = document.createElement('div');
        newItem.className = 'news-item-russian';
        newItem.innerHTML = '<div class="news-item-title-russian"><a href="' + link + '">' + title + '</a></div></div>';
        rssContent.appendChild(newItem);
  }
});

let deutschNewsParser = new RSSParser();
deutschNewsParser.parseURL(CORS_PROXY + 'http://rss.sueddeutsche.de/rss/Topthemen', function(err, feed) {
    var rssContent = document.querySelector('.info-news-deutsch');
        for (let value of feed.items) {
        var title = value.title;
        var link = value.link;
        var content = value.content;
        var newItem = document.createElement('div');
        newItem.className = 'news-item';
        newItem.innerHTML = '<div class="news-item-title"><a href="' + link + '">' + title + '</a></div><div class="news-item-content">' + content + '</div></div><hr>';
        rssContent.appendChild(newItem);
  }
});

              (function() {
                var script = document.createElement("script");
                script.src = "//www.meteonova.ru/informer/html/js/install.min.js";
                script.charset = "UTF-8";
                script.defer = true;
                script.onload = function() {
                  new MeteonovaInf({
                    type: "240_90_2",
                    cities: ["36870"],
                    scheme: {"width":"100%","border_radius":"0","box_shadow":"none","border_color":"#e9ecef","background_color":"transparent","city_color":"#343a40","main_color":"#495057","params_color":"#868e96"}
                  });
                };
                document.getElementsByTagName("head")[0].appendChild(script);
              })();