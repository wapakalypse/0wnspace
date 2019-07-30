<template>
    <div class="info">

        <h1>{{title}}</h1>
 
        <div class="info-news">

            <div class="info-news-russian"></div>

            <div class="info-news-other">

                <div class="info-meteo">
                    <div class="info-meteo-inside">
                        <a style="display: block; position: relative; border: 0; padding: 0; margin: 0; text-decoration: none;" id="meteonova_inf_240_90_2_36870" href="//www.meteonova.ru/frc/36870.htm" alt="Погода в Алматы" title="Погода в Алматы"></a>
                    </div>
                </div> 

                <div class="info-news-rate">
                    <div class="content-first-rate-inside">
                        <iframe style="width:100%;border:0;overflow:hidden;background-color:transparent;height:78px" scrolling="no" src="https://fortrader.org/informers/getInformer?st=17&cat=7&title=%D0%9A%D1%83%D1%80%D1%81%D1%8B%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%20%D0%A6%D0%91%20%D0%A0%D0%A4&texts=%7B%22toolTitle%22%3A%22%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D0%B0%22%2C%22todayCourse%22%3A%22%22%7D&mult=1&showGetBtn=0&hideHeader=1&hideDate=1&w=0&codes=0&colors=titleTextColor%3D454545%2CtitleBackgroundColor%3Dfff%2CsymbolTextColor%3D444%2CtableTextColor%3D444%2CborderTdColor%3Dffffff%2CtableBorderColor%3Dffffff%2CtrBackgroundColor%3Dfff%2CitemImgBg%3De3e3e3%2CprofitTextColor%3D89bb50%2CprofitBackgroundColor%3Deaf7e1%2ClossTextColor%3Dff1616%2ClossBackgroundColor%3Df6e1e1%2CinformerLinkTextColor%3D454242%2CinformerLinkBackgroundColor%3Dfff&items=2%2C21%2C11111&columns=&toCur=27"></iframe>
                    </div>
                </div>

                <div class="info-news-deutsch"></div>

            </div>

        </div>

    </div>

</template>

<script>
export default {
  name: 'News',
  data(){
    return {
        title: 'News'
    }
  }
}


/********** News-Parser ******/

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let russianNewsParser = new RSSParser();
russianNewsParser.parseURL(CORS_PROXY + 'https://russian.rt.com/rss', function(err, feed) {
    var rssContent = document.querySelector('.info-news-russian');

    for (let value of feed.items) {
/*        if (i >= 15 ) { break; }; */
        var title = value.title;
        var link = value.link;
        var content = value.content;
        var newItem = document.createElement('div');
        newItem.className = 'news-item-russian';
        newItem.innerHTML = '<div class="news-item-title-russian"><a href="' + link + '">' + title + '</a></div></div>';
        rssContent.appendChild(newItem);
  };
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
  };
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

</script>


<style>

.info-news {
    display: flex;

}

.news-item-russian {
    background: #e2eaf5;  
}

.info-meteo-inside a iframe {
    margin: 0 auto 2rem;
}

.info-news-russian,
.info-news-other {
    width: 50%;
    background: rgba(255, 255, 255, 0.9);
    margin: 1rem;
    padding: 1rem;
    font-size: 14pt;
}

.info-news-russian a,
.info-news-deutsch a {
    color: #000;
}

.news-item-title {
    margin: 1rem 0;
    font-weight: bold;
}

.news-item-title-russian {
    margin: 1rem 0;
    padding: .5rem;
}

.news-item-content {
    display: flex;
}

.news-item-content img {
    border-radius: 3px;
    width: 100%;
    height: auto;
}

.news-item-content p {
    margin: 0 1rem;
}

</style>
