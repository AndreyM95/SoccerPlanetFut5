/*Menu vertical izquierdo responsive*/
$(document).ready(function(){
    
    var show = 0;
    
    $('.show1').on('click', function(){
        
        if(show == 1){
            $('.content-menu1').addClass("content-menu-efect1");
            show = 0;
        }else{
            $('.content-menu1').removeClass("content-menu-efect1");
            show = 1;
        }
    });
})