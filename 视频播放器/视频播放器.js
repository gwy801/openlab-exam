function get(){
    var url = null;  
var fileObj = document.getElementById("file").files[0];
if (window.createObjcectURL != undefined) {  
    url = window.createOjcectURL(fileObj);  
} else if (window.URL != undefined) {  
    url = window.URL.createObjectURL(fileObj);  
} else if (window.webkitURL != undefined) {  
    url = window.webkitURL.createObjectURL(fileObj);  
}
 alert("视频文件加载成功");
 video.src=url;
}
var video=document.getElementById('c');
var m=document.getElementById('bf');
function bfzt(){
    if(video.paused){
        video.play();
        m.innerHTML ="暂停";
    }else{
        video.pause();
        m.innerHTML="播放";
    }
}
function kj(){
        video.currentTime+=2;
}
function kt(){
    video.currentTime-=2;
}
function qp(){
    var element = document.documentElement;
    var bj=document.getElementById('qp')
    if(bj.innerHTML=='全屏'){
    if(element.requestFullScreen) {
        element.requestFullScreen(); 
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); 
    } else if(element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(); 
    }bj.innerHTML="退出全屏"
}else if(bj.innerHTML=='退出全屏'){
    if(document.exitFullScreen) {
        document.exitFullScreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }bj.innerHTML='全屏'
}
}
var bfRate=document.getElementById('bfRate');
bfRate.addEventListener('change', function () { 
    video.playbackRate = bfRate.value; 
}); 

