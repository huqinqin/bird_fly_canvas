/**
 * Created by wl on 2017/9/18.
 */
function loadImage(imgUrl,fn){
    var imgObj = {};
    var tempImg,load = 0, imgLength = 0;
    for(var key in imgUrl){
        imgLength++;
        tempImg = new Image();
        tempImg.onload = function () {
            load++;
            if( load >= imgLength){
                fn( imgObj );
            }
        };

        tempImg.src = imgUrl[key];
        imgObj[key] = tempImg;
    }
}