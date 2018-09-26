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
        // var ul = document.querySelector('.category-left ul');
        var ul = $('.category-left ul');
        var lis = ul.children();

        // for (var i = 0; i < lis.length; i++) {
        //     lis[i].index = i;
        // }
        lis.each(function (index,ele) { 
            $(ele).attr('index',index);
        });

        // var liHeight = lis[0].offsetHeight;
        var liHeight = $(lis[0]).height();
        var ulHeight = ul.height();
        var containerHeight = $('.category-left .swiper-wrapper').height();
        var maxHeight = containerHeight - ulHeight;
        
        ul.on('click', function (e) {
            var offsetY = -$(e.target).parent().attr('index') * liHeight;
            
            
            if(offsetY < maxHeight){
                $('.category-left .swiper-wrapper').css('transform','translate3d(0px,'+ maxHeight +'px, 0px)');
            }else {
                $('.category-left .swiper-wrapper').css('transform','translate3d(0px,'+ offsetY +'px, 0px)');
            }
            $('.category-left .swiper-wrapper').css('transition','all 0.3s');
            lis.removeClass('active');
            e.target.parentNode.classList.add('active');
        })
    }
}


window.addEventListener('load', function () {
    var jdCategory = new JDCategory();
    jdCategory.leftCategoryEffect();
    jdCategory.rightCategoryEffect();
    jdCategory.ceilingEffect();
})