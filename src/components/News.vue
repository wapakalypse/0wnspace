<template>
    <div class="info">

        <h1>{{title}}</h1>
 
        <div class="info-news">

            <div class="info-news-russian">
                
                <div class="info-news-rate">
                    <div class="content-first-rate-inside">
                        <iframe style="width:100%;border:0;overflow:hidden;background-color:transparent;height:90px" scrolling="no" src="https://fortrader.org/informers/getInformer?st=17&cat=7&title=%D0%9A%D1%83%D1%80%D1%81%D1%8B%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%20%D0%A6%D0%91%20%D0%A0%D0%A4&texts=%7B%22toolTitle%22%3A%22%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D0%B0%22%2C%22todayCourse%22%3A%22%22%7D&mult=1&showGetBtn=0&hideHeader=1&hideDate=1&w=0&codes=0&colors=titleTextColor%3D454545%2CtitleBackgroundColor%3Dfff%2CsymbolTextColor%3D444%2CtableTextColor%3D444%2CborderTdColor%3Dffffff%2CtableBorderColor%3Dffffff%2CtrBackgroundColor%3Dfff%2CitemImgBg%3De3e3e3%2CprofitTextColor%3D89bb50%2CprofitBackgroundColor%3Deaf7e1%2ClossTextColor%3Dff1616%2ClossBackgroundColor%3Df6e1e1%2CinformerLinkTextColor%3D454242%2CinformerLinkBackgroundColor%3Dfff&items=2%2C21%2C11111&columns=&toCur=27"></iframe>
                    </div>

                </div>


            </div>

            <div class="info-news-other">

                <div class="info-meteo">
                    <div class="info-meteo-inside">
                        <a style="display: block; position: relative; border: 0; padding: 0; margin: 0; text-decoration: none;" id="meteonova_inf_240_90_2_36870" href="//www.meteonova.ru/frc/36870.htm" alt="Погода в Алматы" title="Погода в Алматы"></a>
                    </div>
                </div> 

                <div class="info-news-deutsch"></div>

            </div>

        </div>

    </div>

</template>

<script>

import RSSParser from 'rss-parser'

export default {
  name: 'News',
  data(){
    return {
        title: 'News'
    }
  }
}

/********** News-Parser ***/


const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let russianNewsParser = new RSSParser();
russianNewsParser.parseURL(CORS_PROXY + 'https://russian.rt.com/rss', function(err, feed) {

    var rssContent = document.querySelector('.info-news-russian');

    var iteration = 1;

    for (let item of feed.items) {
        var title = item.title;
        var link = item.link;
        var newItem = document.createElement('div');

         ++iteration;

        newItem.className = 'news-item-russian';
        newItem.innerHTML = '<div class="news-item-title-russian"><a href="' + link + '">' + title + iteration + '</a></div></div>';
        rssContent.appendChild(newItem);

        if (iteration > 35) break;
  }

/**

    var rssContent = document.querySelector('.info-news-russian');
    var item = feed.items;

    for (let index = 0; index < 10; ++index) {
            var newItem = document.createElement('div');
            var title = item.title;
            var link = item.link;          
            newItem.className = 'news-item-russian';
            newItem.innerHTML = '<div class="news-item-title-russian"><a href="' + link + '">' + title + '</a></div></div>';
            rssContent.appendChild(newItem);
  }


if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function(entry) {
    var rssContent = document.querySelector('.info-news-russian');
        var title = entry.title;
        var link = entry.link;
        var newItem = document.createElement('div');
        newItem.className = 'news-item-russian';
        newItem.innerHTML = '<div class="news-item-title-russian"><a href="' + link + '">' + title + '</a></div></div>';
        rssContent.appendChild(newItem);

  })


    var rssContent = document.querySelector('.info-news-russian');

    for (let value of feed.items) {
        var title = value.title;
        var link = value.link;
        var newItem = document.createElement('div');
        newItem.className = 'news-item-russian';
        newItem.innerHTML = '<div class="news-item-title-russian"><a href="' + link + '">' + title + '</a></div></div>';
        rssContent.appendChild(newItem);

        if (array.length < 5) break;
  }
*/
});




//        
let deutschNewsParser = new RSSParser();
deutschNewsParser.parseURL(CORS_PROXY + 'http://rss.sueddeutsche.de/rss/Topthemen', function(err, feed) {
    var rssContent = document.querySelector('.info-news-deutsch');
        for (let value of feed.items) {
        var title = value.title;
        var link = value.link;
        var content = value.content;
        var newItem = document.createElement('div');
        newItem.className = 'news-item';
        newItem.innerHTML = '<div class="news-item-title"><a href="' + link + '">' + title + '</a></div><div class="news-item-content">' + content + '</div></div>';
        rssContent.appendChild(newItem);
  }
});



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
    margin: 1%;
    font-size: 14pt;
}

.info-news-rate {
    background-color: #fff;
    margin: 1%;
    padding: 5%;
    border-radius: 50%;
    overflow: hidden;
}

.info-meteo-inside {
    background: radial-gradient(rgb(255,255,255,0.7), rgb(255,255,255,0.3));
    margin: 1%;
    padding: 5% 0 1%;
    border-radius: 50%;
}

.info-news-russian a,
.info-news-deutsch a {
    color: #000;
}

.news-item-title {
    margin: 1% 12% 5%;
    font-weight: bold;
}

 {
    margin: 1rem 0;
    padding: .5rem;
}

.news-item-content {

}

.news-item-russian,
.news-item {
    background: radial-gradient(rgb(255,255,255,0.7), rgb(255,255,255,0.3));
    margin: 3%;
    padding: 10% 5%;
    border-radius: 50%;
    overflow: hidden;
}

.news-item-content img {
    border-radius: 50%;
    width: 200px;
    float: left;
    shape-outside: ellipse(100px 72px at 40% 43%);
    margin: -2% 5% 5% -15%;
    opacity: 0.8;
}

.news-item-content p {
    margin: 0 1rem;
}

</style>
