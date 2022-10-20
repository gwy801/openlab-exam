var video=document.getElementById('c');
var c=document.getElementById('q');
function bfzt(){/*控制播放键*/
    if(video.paused){
        video.play();
         c.innerHTML="暂停";
    }else{
        video.pause();
         c.innerHTML="播放";
    }
}
function kj(){
        video.currentTime+=2;
}
function kt(){
    video.currentTime-=2;
}
var bfRate=document.getElementById('bfRate');
bfRate.addEventListener('change', function () { 
    video.playbackRate = bfRate.value; 
}); 
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
