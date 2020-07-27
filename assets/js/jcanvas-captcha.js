(function($){
    		var pos_x,pos_y;
            var capcha = false;
            var info_click = false;
            $('#info_img').click(function(){
                if(info_click){
                    info_click = false;
                    $('#info_guia').hide();
                }else{
                   info_click = true; 
                   $('#info_guia').show();  
                }
            });
            $('#loginform').submit(function(e){
    			if(capcha == false){
                    $('#mensaje').html('Demuestranos que no eres un robot');
                    return false;
                }
    		});

    		can('1');
    		var interval = setInterval(function(){
    		    $('#contenedor_canvas').find('canvas').remove();
    		    var code = Math.floor(Math.random() * 1000) + 1;
    		    $('#contenedor_canvas').append('<canvas id="myCanvas_'+code+'" width="270" height="100" style="background-color: cyan;;border:1px solid #d3d3d3;border-radius: 9px 9px 9px 9px;-moz-border-radius: 9px 9px 9px 9px;-webkit-border-radius: 9px 9px 9px 9px;border: 0px solid #000000;"></canvas>');
    		    setTimeout(function(codee){
    		        can(codee);
    		    }, 100,code);
    		    
    		}, 5000);

    		function can(code){
    		    var canvas = document.getElementById('myCanvas_'+code);
    		    var { width, height } = canvas.getBoundingClientRect();
    		    var radius = Math.floor(Math.random() * 40) + 1;
    		    radius = (radius < 25) ? 25 : radius;
    		    width = width - radius - 2;
    		    height = height - radius - 2;
    		    var x = Math.floor(Math.random() * width) + 1;
    		    var y = Math.floor(Math.random() * height) + 1
    		    x = (x < radius) ? radius : x;
    		    y = (y < radius) ? radius : y;


    		    $('#myCanvas_'+code).drawPolygon({
    		        layer:true,
    		        fillStyle: '#c33',
    		        x: x, y: y,
    		        radius: radius,
    		        sides: 5,
    		        concavity: 0.5,
    		        /*mousedown:function(layer){
    		            $(this).data("mousedownTime", $.now()); 
    		        },*/
    		        click: function(layer) {
    		            if(layer.event){
    		                var eventX = layer.eventX;
    		                var eventY = layer.eventY;
    		                var offsetX = layer.x + layer.radius;
    		                var offsetx = layer.x - layer.radius;
    		                var offsetY = layer.y + layer.radius;
    		                var offsety = layer.y - layer.radius;


    		                if(( eventX > offsetx && eventX < offsetX ) && (eventY > offsety && eventY < offsetX ) ) {
    		                    
    		                    
    		                    if(!capcha){
    		                        $(this).animateLayer(layer, {
    		                            rotate: '+=144',
    		                            fillStyle: 'blue'
    		                        });

    		                        //$('#pos_x').val(layer.x);
    		                        //$('#pos_y').val(layer.y);
    		                        pos_x = layer.x;
    		                        pos_y = layer.y;
    		                        capcha = true;
    		                        clearInterval(interval);

    		                        $( ".register" ).prop( "disabled", false );
    		                    }
    		                }

    		                
    		            }
    		            // Spin star
    		        },
    		        touchend:function(layer){
    		            if(layer.event){
    		                var eventX = layer.eventX;
    		                var eventY = layer.eventY;
    		                var offsetX = layer.x + layer.radius;
    		                var offsetx = layer.x - layer.radius;
    		                var offsetY = layer.y + layer.radius;
    		                var offsety = layer.y - layer.radius;


    		                if(( eventX > offsetx && eventX < offsetX ) && (eventY > offsety && eventY < offsetX ) ) {
    		                    
    		                    if(!capcha){
    		                        $(this).animateLayer(layer, {
    		                            rotate: '+=144',
    		                            fillStyle: 'blue'
    		                        });

    		                        //$('#pos_x').val(layer.x);
    		                        //$('#pos_y').val(layer.y);
    		                        pos_x = layer.x;
    		                        pos_y = layer.y;
    		                        capcha = true;

    		                        clearInterval(interval);
    		                        $( ".register" ).prop( "disabled", false );
    		                    }
    		                }

    		                
    		            }
    		            // Spin star
    		        }
    		    });
    		}	
    	})(jQuery);