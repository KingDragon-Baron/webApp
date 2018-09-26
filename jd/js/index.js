

var JDIndex = function () { 

}

JDIndex.prototype = {
    //轮播图初始化
    bannerInit: function () { 
        var mySwiper = new Swiper('#banner-swiper', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            pagination: {
                el: '#banner-pagination',
            },
        })
    },
    //header背景颜色渐变
    headerColorChange: function () { 
        window.onscroll = function () { 
            var bannerHeight = document.querySelector('#banner').offsetHeight;
            var scrollHeight = document.documentElement.scrollTop;
            var opacity = scrollHeight/bannerHeight;
            if(opacity<1){
                document.querySelector('#header').style.backgroundColor='rgba(222, 24, 27,'+opacity+')';
            }else{
                document.querySelector('#header').style.backgroundColor='rgba(222, 24, 27, 1 )';
            }
            
        }
    },
    //倒计时功能实现
    downTimeEffect: function () {
        var nowTime = new Date().getTime();
        var targetTime = new Date(2018,8,26,00,00,00).getTime();
        var leaveTime = (targetTime - nowTime)/1000;
        
        
        if (leaveTime<=0){
            leaveTime = 7200;
        }
        setInterval(function () { 
            leaveTime--;
            var hour = Math.floor(leaveTime/3600);
            var min = Math.floor(leaveTime%3600/60);
            var second = Math.floor(leaveTime%60);
            

            var spans = document.querySelector('.seckill-time').children;
            spans[0].innerHTML = Math.floor(hour/10);
            spans[1].innerHTML = Math.floor(hour%10);
            spans[3].innerHTML = Math.floor(min/10);
            spans[4].innerHTML = Math.floor(min%10);
            spans[6].innerHTML = Math.floor(second/10);
            spans[7].innerHTML = Math.floor(second%10);
        
        },1000);
        
    }

}



window.onload = function () {
    var jdIndex = new JDIndex();
    jdIndex.bannerInit();
    jdIndex.headerColorChange();
    jdIndex.downTimeEffect();
}



