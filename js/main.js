$(function(){

    function ThisIsWebP() {
        let def = $.Deferred(), crimg = new Image();
        crimg.onload = function () { def.resolve(); };
        crimg.onerror = function () { def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    let image_srcNotWebp,
        image_src = '.webp-bg';

    ThisIsWebP().then(function () {
        $.each($(image_src), function () {
        });
    }
        , function () {
            $.each($(image_src), function () {
                image_srcNotWebp = $(this).data('notwebp');
                $(this).css('background-image', 'url("' + image_srcNotWebp + '")');

            });

        });

    $('.box').hover(function(e) {
        let heightBox = $(this).height() / 2, widthBox = $(this).width() / 2;
        $('.box').on('mousemove', function(e) {
            $(this).css("transform", "rotateX(" + -(e.offsetY - heightBox) / 20 + "deg) rotateY(" + (e.offsetX - widthBox) / 20 + "deg) translate3d(0, 0, 45px)")

        });
        
    }, 
    function() {
        $(this).css('transform', 'rotateX(0deg) rotateY(0deg)');
    })

});
