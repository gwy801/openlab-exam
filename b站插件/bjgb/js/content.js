var changeBKColor = function() {
    $("body").css("background-color", "black");
    $(".bili-header__channel").css("background-color", "black");
    $(".header-channel").css("background-color","black");
    $(".container").css("background-color","black");
    $("#i_cecream").css("background-color","black");
    $("#i_cecream").css("color","blue");
    $(".header-channel-fixed").css("background-color","black");
    $("#app").css("background-color","black");
    $(".bili-header fixed-header").css("background-color","black");
    $(".bili-header large-header").css("background-color","black"); 
    $("p.title").css("color","white");
    $("h1.video-title tit").css("color","white");
};
 changeBKColor();
 (function() {
    'use strict';
    function createPage() {
        var div=document.createElement("div");
        var select=document.createElement("select");
        select.innerHTML="<option value='1' selected>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='6'>6</option><option value='8'>8</option><option value='16'>16</option>";
        select.setAttribute("style","width: 80px;padding: 5px;border-radius: 4px;background-color: #5af8eda6;font-weight: bolder;font-size: 15px;position: absolute;top: 60px;left: 10px;");
        select.setAttribute("onchange","document.getElementsByTagName('video')[0].playbackRate=this.value");
        div.appendChild(select);
        document.getElementsByTagName("body")[0].appendChild(div);
    }
    createPage();
})();