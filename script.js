
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

    });


        var typed = new Typed(".typing", {
            strings: ["Web Developer",  "Coder", ],
            typeSpeed: 50,
            backSpeed: 60,
            loop: true
        });
});