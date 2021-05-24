var unit1 = ["https://www.youtube.com/embed/hNkOCH29DOw","https://www.youtube.com/embed/1VDdR2elRrM","https://www.youtube.com/embed/ZfkSnaFkPj8","https://www.youtube.com/embed/5BKWvFyXfQY","https://www.youtube.com/embed/5BKWvFyXfQY","https://www.youtube.com/embed/wTk38yIkehs","https://www.youtube.com/embed/SJ2eFEK0wTQ","https://www.youtube.com/embed/YP-yH5DvkT0"];
var videoFrame = document.getElementsByTagName('iframe')[0];
var links = document.getElementsByClassName('slinks');
var lenght = links.length;
for(var i=0; i<lenght; i++){
    links[i].addEventListener("click",function(){
        var num = parseInt(this.getAttribute("value"));
        videoFrame.setAttribute("src",unit1[num-1]);
    });
}
