$(document).ready(function(){
    
    $(window).scroll(function() {
        $("nav").addClass("remove"); 
        $("nav h1").removeClass( [ "animate__animated", "animate__fadeInDown", "animate__fast" ] );
        $("nav li").removeClass( [ "animate__animated", "animate__fadeInDown", "animate__fast" ] );
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $("nav").removeClass("remove");
            $("nav h1").addClass( [ "animate__animated", "animate__fadeInDown", "animate__fast" ] );
            $("nav li").addClass( [ "animate__animated", "animate__fadeInDown", "animate__fast" ] );
        }, 500));
    });

    // $(window).scroll(function(){

    // }


    $(document).on("click",".faq-row",function(){

        if($(this)[0]==$(".activeFaq")[0]){
            $(".activeFaq").find(".faq-row-body").slideUp();
            $(".activeFaq").find("i").css({
                "color":"black",
                "transform":"rotate(0deg)"
            });
            $(".activeFaq").removeClass("activeFaq");
        }else{
            $(".activeFaq").find(".faq-row-body").slideUp();
            $(".activeFaq").find("i").css({
                "color":"black",
                "transform":"rotate(0deg)"
            });
            $(".activeFaq").removeClass("activeFaq");
            

            $(this).find(".faq-row-body").slideDown()
            $(this).addClass("activeFaq");
            $(this).find("i").css({
                "color":"red",
                "transform":"rotate(180deg)"
            }); 
        }

        

    });



    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 2,
            autoplay:true,
            autoplayTimeout:500,
            autoplaySpeed:500,
        });
      });
});