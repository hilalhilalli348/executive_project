 


$(document).ready(function () {
    
    hamburgerMenu();

    $('#about_slider').bxSlider({
            
        infiniteLoop:true,
        maxSlides:1,
        controls:false,
        auto:true,
        
    
         
    });


    
    function hamburgerMenu(){

        $('.fa-bars').on('click',(e)=>{
            $('.fa-bars').addClass('vertical-fa-bars');
            $('#hamburger_menu').removeClass('gizle');
            $('#bg_lock').addClass('bg_lock');
        })
        
        $('#bg_lock,.fa-minus').on('click',(e)=>{
             
                $('.fa-bars').removeClass('vertical-fa-bars');
                $('#hamburger_menu').addClass('gizle');
                $('#bg_lock').removeClass('bg_lock');
        })
    
    }

});