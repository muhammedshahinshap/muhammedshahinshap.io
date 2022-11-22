
/* 
-------------------------------
Controlling Header Transparency 
-------------------------------
*/
function transparent_header()
{
    if ( $(window).scrollTop() < Math.floor( (window.innerHeight * 0.12), 10 ) ) {
        $('.kayden-header > .header-inside').addClass('transparent_header');
    }else {
        $('.kayden-header > .header-inside').removeClass('transparent_header'); 
    }
}
/* 
-------------------------------
Before loading function. 
-------------------------------
*/
function loading()
{
    var scrollerwidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = scrollerwidth + "px";

    window.scrollTo(0,0);

}

/* 
-------------------------------
After loaded function. 
-------------------------------
*/

function loaded(elem)
{
    
    $preloader = $("#preloader");

    var event = new CustomEvent('kaydenLoaded');

    $preloader.fadeOut( 400, function(){

        $('body').removeAttr('style');

        $('body').addClass('loaded');

        elem.dispatchEvent(event);
    });
}

loading();

/* 
-------------------------------
On Page Load. 
-------------------------------
*/
$(window).on('load', function(){
    loaded( document.body );
});


