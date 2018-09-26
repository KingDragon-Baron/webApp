var JDCategory = function () {}
JDCategory.prototype = {
    //左边滑动效果实现
    leftCategoryEffect: function () {
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: true,
        });
    },
    //右边滑动效果实现
    rightCategoryEffect: function () {
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },
    //吸顶效果实现
    ceilingEffect: function () {
        var ul = document.querySelector('.category-left ul');
        var lis = ul.children;

        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
        }

        var liHeight = lis[0].offsetHeight;
        var ulHeight = ul.offsetHeight;
        var containerHeight = document.querySelector('.swiper-wrapper').offsetHeight;
        var maxHeight = containerHeight - ulHeight;
        
        ul.addEventListener('click', function (e) {
            e = e || window.event;
            var offsetY = -e.target.parentNode.index * liHeight;
            
            if(offsetY < maxHeight){
                document.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px,'+ maxHeight +'px, 0px)';
            }else {
                document.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px,'+ offsetY +'px, 0px)';
            }
            document.querySelector('.swiper-wrapper').style.transition = 'all 0.3s';
            for (let i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            e.target.parentNode.classList.add('active');
        }, true)
    }
}


window.addEventListener('load', function () {
    var jdCategory = new JDCategory();
    jdCategory.leftCategoryEffect();
    jdCategory.rightCategoryEffect();
    jdCategory.ceilingEffect();
})