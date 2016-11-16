 $( document ).ready(function() {
                
                // Your code here.
                var val = 0;
                var lock = -1;
                var crt = 0;
                var sOn = false;
                var current = 0;
                
                var scl=0; // Create a variable
                var srlEvent = function (e) {
                                        var delta = (-e.originalEvent.deltaY);

                                        while(scl==0) { 
                                            if (delta < 0) {
                                                slideLeft();
                                                console.log('You scrolled down');
                                            } else if (delta > 0) {
                                                slideRight();
                                                console.log('You scrolled up');
                                            }

                                            scl++;
                                        }
                                 };
                
                window.setInterval(function(){
                   scl=0; // Reset this variable every 1.5 seconds
                }, 1500);
                
                
                function crrt(){
                    if(current==0){
                        $("#nav1").css("background","rgba(0,0,0,.8)");
                        $("#nav2").css("background","rgba(0,0,0,0)");
                        $("#nav3").css("background","rgba(0,0,0,0)");
                    }
                    else if(current==1){
                        $("#nav1").css("background","rgba(0,0,0,0)");
                        $("#nav2").css("background","rgba(0,0,0,.8)");
                        $("#nav3").css("background","rgba(0,0,0,0)");
                    }
                    else if(current==2){
                        $("#nav1").css("background","rgba(0,0,0,0)");
                        $("#nav2").css("background","rgba(0,0,0,0)");
                        $("#nav3").css("background","rgba(0,0,0,.8)");
                    }
                    
                    
                }
               crrt();
                function fixed(){
                        $("body").css("overflow", "hidden");
                        lock = 1;
                        
                    }
                
                function slideLeft(){
                    
                    
                    
                    if(crt==0 && !$("div").is(':animated') && lock == 0){
                        $('body').css("overflow","hidden");
                        $("#test").animate({left:0},600, function(){
                            current =1;
                            crrt();
                        });
                        
        
                    }
                    
                    if(lock == -1){
                        lock++;
                        $("#test").animate({left:'-100%'},600);
                    }
                    
                }
                
                function slideRight(){
                    
                    if(!$("div").is(':animated') && crt == 1){
                        
                        $('body').css("overflow","auto");
                            
                        crt = 0;
                        
                    }
                    
                    else if(!$("div").is(':animated') && crt == 0){
                        $("#test").animate({left:'-100%'},600, function(){
                            current =0;
                            crrt();
                            crt =1;
                        });
                        
                        lock = -1;
                    
                    }
                    
                }
                
                $("#nav1").click(function(){
                    
                    $("#test").animate({ left: "-100%" }, 900,'easeInOutExpo');
                    current=0;
                    crrt();
                });
                
                $("#nav2").click(function(){
                    
                    $("#test").animate({ left: 0 }, 850,'easeInOutExpo');
                    current = 1;
                    crrt();
                });
                
                $(window).scroll(function(){
                    var scrollTop     = $(window).scrollTop(),
                        elementOffset = $('#v2').offset().top,
                        distance      = (elementOffset - scrollTop);
                    var percent = $(document).scrollTop() / $(document).height();
                    var max = $(document).height() - $(window).height();
                    
                    
                    
                    if($(window).scrollTop()>20){
                        $("#scroll").fadeOut(100);
                        $("#b1").fadeOut(10);
                        $("#b2").fadeOut(10);
                    }
                    else{
                        $("#scroll").fadeIn(100);
                        $("#b1").fadeIn(100);
                        $("#b2").fadeIn(100);
                    }
                    
                    if($(window).scrollTop()>100){
                        
                        $("#vibe").css("opacity", 1 - percent*6.5);
                        $("#par").fadeOut(100);
                    }
                    else if($(window).scrollTop()<20)
                        {
                            $("#vibe").css("opacity", 1);
                            $("#par").fadeIn(100);
                        }
                    
                    
                    if($(window).scrollTop() == max){
                    
                         $('html').bind('wheel DOMMouseScroll', srlEvent);
                      
                    }
                    else if($(window).scrollTop() != max){
                        $('html').unbind('wheel DOMMouseScroll', srlEvent);
                    }
                    
                        
                });
                
                        
            });
