<template>

    <div class="info">

        <h1>{{title}}</h1>
 
        <div class="info-news">

            <div class="news-russian">
                
                <!-- RT News -->

            </div>

            <div class="news-deutsch">
                
                <!-- Deutsche News -->

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
    },
    created() {

        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        let russianNewsParser = new RSSParser();
        russianNewsParser.parseURL(CORS_PROXY + 'http://russian.rt.com/rss', function(err, feed) {
            var rssContent = document.querySelector('.news-russian');
            var iteration = 1;
            for (let item of feed.items) {
                var title = item.title;
                var link = item.link;
                var content = item.content;
                var newItem = document.createElement('div');

                 ++iteration;

                newItem.className = 'news-item-russian';
                newItem.innerHTML = '<a href="' + link + '" target="_blank">' + '<div class="news-item-title-russian">' + title + '</div><div class="news-item-russian-content">' + content + '</div></div></a>';
                rssContent.appendChild(newItem);

                if (iteration > 13) break;
          }

        });
    
        let deutschNewsParser = new RSSParser();
        deutschNewsParser.parseURL(CORS_PROXY + 'http://rss.sueddeutsche.de/rss/Topthemen', function(err, feed) {
            var rssContent = document.querySelector('.news-deutsch');
                for (let value of feed.items) {
                var title = value.title;
                var link = value.link;
                var content = value.content;
                var newItem = document.createElement('div');
                newItem.className = 'news-item-deutsch';
                newItem.innerHTML = '<a href="' + link + '" target="_blank"><div class="news-item-title-deutsch">' + title + '</div><div class="news-item-deutsch-content">' + content + '</div></div></a>';
                rssContent.appendChild(newItem);
          }
        });
    }
}



</script>


<style>

.info-news {
    display: flex;
    justify-content: center;
}

.news-russian {
    width: 60%;
}

.news-deutsch {
    width: 40%;
}

.news-item-russian {
    margin: 3%;
    padding: 3% 0;
    border-radius: 10px 5px;
    background: rgb(255,255,255,0.3);
    overflow: hidden;
}

.news-item-deutsch {
    position: relative;
    margin: 3%;
    padding: 10% 5%;
    border-radius: 5px 10px;
    background: rgb(255,255,255,.7);
    overflow: hidden;
}

.news-item-russian a {
    color: #000;
}

.news-item-russian a:nth-child(2) {
    display: none;
}

.news-item-deutsch a {
    color: #000;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


.news-item-title-russian {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0 3% 3%;
    font-size: 14pt;
    font-weight: bold;
    overflow: hidden;
}

.news-item-title-deutsch {
    display: block;
    margin: 2% 0;
    font-size: 18pt;
    font-weight: bold;
    overflow: hidden;
}

.news-item-deutsch-content img {
    width: 100%;
    position: absolute;
    top: -50%;
    left: 0;
    opacity: .35;

}

.news-item-russian-content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-item-russian-content img {
    width: 30%;
    border-radius: 3px 6px;
}

.news-item-deutsch-content p {
    display: none;
}

</style>
