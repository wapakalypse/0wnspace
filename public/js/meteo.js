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