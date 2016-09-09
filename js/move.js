//子元素在父元素内移动
function move(pObj,sObj,speed) {
    var pBox = document.getElementById(pObj);
    var sBox = document.getElementById(sObj);
//获取子元素最大的left值，top值
    var leftMax = pBox.offsetWidth - sBox.offsetWidth;
    var topMax = pBox.offsetHeight - sBox.offsetHeight;
//设置子元素随机出现的位置
    sBox.style.left = Math.floor(Math.random() * leftMax) + "px";
    sBox.style.top = Math.floor(Math.random() * topMax) + "px";
//获取子元素的left, top值
    var sleft = sBox.offsetLeft;
    var stop = sBox.offsetTop;
//设置初始时，top和left 为增大
    var leftBig = setInterval(leftB, speed);
    var topBig = setInterval(topB, speed);
//增大left值
    function leftB() {
        sleft++;
        //如果left值成最大值，则停止增大，改为减小left值
        if (sleft == leftMax) {
            clearInterval(leftBig);
            leftSmall = setInterval(leftS, speed);
        }
        sBox.style.left = sleft + "px";
    }

//减小left值
    function leftS() {
        sleft--;
        //如果left值成最小值，则停止减小，改为增大left值
        if (sleft == 0) {
            clearInterval(leftSmall);
            leftBig = setInterval(leftB, speed);
        }
        sBox.style.left = sleft + "px";
    }

//增大top值
    function topB() {
        stop++;
        //如果top值成最大值，则停止增大，改为减小top值
        if (stop == topMax) {
            clearInterval(topBig);
            topSmall = setInterval(topS, speed);
        }
        sBox.style.top = stop + "px";
    }

//减小top值
    function topS() {
        stop--;
        //如果top值成最小值，则停止减小，改为增大top值
        if (stop == 0) {
            clearInterval(topSmall);
            topBig = setInterval(topB, speed);
        }
        sBox.style.top = stop + "px";
    }
}

