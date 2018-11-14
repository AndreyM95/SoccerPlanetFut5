/*Menu vertical derecho responsive*/
$(document).ready(function(){
    
    var show = 0;
    
    $('.show2').on('click', function(){
        
        if(show == 1){
            $('.content-menu2').addClass("content-menu-efect2");
            show = 0;
        }else{
            $('.content-menu2').removeClass("content-menu-efect2");
            show = 1;
        }
    });
})