/*Menu vertical derecho responsive*/
$(document).ready(function(){
    
    var show = 0;
    
    $('.show2').on('click', function(){
        
        if(show == 1){
            $('.boton').addClass("content-menu-efect3");
            show = 0;
        }else{
            $('.boton').removeClass("content-menu-efect3");
            show = 1;
        }
    });
})