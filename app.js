 

$(document).ready(function(){
 
     

    let slider_event;
 
    window.addEventListener('resize', sliderEventsListener);
        
    // slider events
    function sliderEventsListener() {


        // genislik 500px-den asagi olarsa slider mehv edilib yeniden yaradilir.
        if(window.innerWidth<=500){
                       
            if(slider_event){
                slider_event.destroySlider();
            }
            slider_event =  $('.slider_events').bxSlider({
             slideWidth:350,
             maxSlides:1,
             slideMargin:10,
             controls:false,
         
            });
 
        }else
             {           
             
             if(slider_event){
                slider_event.destroySlider();
             }
             slider_event =  $('.slider_events').bxSlider({
             slideWidth:400,
             maxSlides:2,
             slideMargin:10,
             controls:false,
         
            });
     }
    }

    function sliders() { 
 
        // hamburgerMenuListener
            hamburgerMenu();
            

            // header slider
            $('.slider').bxSlider({
                slideWidth:200,
                maxSlides:4,
                slideMargin:73,
                controls:false,
                

            });


            // section 5 slider
           $('#slider_section_5').bxSlider({
            slideWidth:300,
            maxSlides:3,
            slideMargin:10,
            controls:false,
             
          });
    
        // section 6 slider
        $('#slider_section_6').bxSlider({
            slideWidth:300,
            maxSlides:3,
            slideMargin:10,
            controls:false
        });

 

    }


    // bu funksiyani modul sekilinde yazmisdim (modul ancaq serverde islediyi ucun nezere alaraq bu sekilde yazdim)
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
     
   
    sliderEventsListener();
    sliders();
 

     

  });