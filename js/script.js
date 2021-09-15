

$(function(){
    $('#course-list').on('click',function(){
        $('#acList li').slideToggle();
    });

})

$(function(){
    $(window).on('load scroll',function(){
        if($(window).scrollTop() > 80){
            $('#pagetop').fadeIn(300);
        }
        else {
            $('#pagetop').fadeOut(300);
        }
        $('#pagetop').on('click',function(){
            $('body').animate({scrollTop: 0}, 500, 'swing')
        });
    });

})

$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
})
