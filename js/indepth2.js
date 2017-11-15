var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();

	 var data = {
				  "preguntas": [
				    {
				      "pregunta": '<img src="images/preguntas/p1.png">',
				      "respuestas": [
				        {
				          "respuesta": "Haces la jugada sólo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Buscas apoyo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p2.png">',
				      "respuestas": [
				        {
				          "respuesta": "Sacas una jugada de magia y liberas espacios",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "No pierdes la calma y buscas la mejor opción",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p3.png">',
				      "respuestas": [
				        {
				          "respuesta": "Busco burlar a los defensas y acabar la jugada",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Tiras con fuerza buscando el ángulo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p4.png">',
				      "respuestas": [
				        {
				          "respuesta": "Buscas el desmarque para tener un espacio más cómodo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Esperas el centro, seguro lo ganas",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p5.png">',
				      "respuestas": [
				        {
				          "respuesta": "Sales en busca del contra golpe",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Esperas a tener opciones para salir jugando",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p6.png">',
				      "respuestas": [
				        {
				          "respuesta": "A lo panenka. ¡Hay que arriesgar!",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Buscas asegurarlo a tu perfil para anotarlo",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p7.png">',
				      "respuestas": [
				        {
				          "respuesta": " Metes golazo seguro al ángulo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Buscas hacer una jugada ensayada que siempre funciona",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p8.png">',
				      "respuestas": [
				        {
				          "respuesta": "Buscas el éxito en conjunto. Estás seguro que entre todos lo pueden sacar adelante",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Haces todo lo posible para resolver el juego porque confían en ti",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p9.png">',
				      "respuestas": [
				        {
				          "respuesta": "Nada como improvisar. Te arriesgas con una chilena para anotar",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Aseguras tu remate de cabeza para que el portero no lo alcance",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": '<img src="images/preguntas/p10.png">',
				      "respuestas": [
				        {
				          "respuesta": "Bailas con tus compañeros, el gol es de todos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Mandas a callar a la porra visitante, que les quede claro quién es la estrella",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+item.pregunta+
			'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img red" ele="'+i+'"><img src="'+urlIndepth+'images/preguntas/fire'+(i+1)+'.jpg"/></div>'+
			'<div class="indepth_pregunta_img blue" ele="'+i+'"><img src="'+urlIndepth+'images/preguntas/ice'+(i+1)+'.jpg"/></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				if(j == 0){
					div_items+='<div class="indepth_respuesta_item active hot" num="'+j+'">'+items.respuesta+'</div>';
				}else{
					div_items+='<div class="indepth_respuesta_item ice active" num="'+j+'">'+items.respuesta+'</div>';
				}
				
			});						
										
			var div_fin='</div></div></div>';
			 
			$("#indepth_pregunta_cont").append(div+div_items+div_fin); 
		});
		 
		$("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});

		var ancho = parseInt($( window ).width());

		if (ancho >= 768) {
			$(".red").mouseenter(function(){
				var ele = parseInt($(this).attr("ele"));
				$(this).children().attr("src", "images/preguntas/red"+(ele+1)+".jpg").css({"box-shadow": "1px 2px 15px 10px #C63031"});
				var bottom = $(this).next().next().children()[0];
				$(bottom).css({"background-color": "#C63031", "box-shadow": "1px 2px 15px 10px #C63031", "z-index" : "100"});
				$(this).css({"position":"relative"});		
			}).mouseleave(function(){
				var ele = parseInt($(this).attr("ele"));
				$(this).children().attr("src", "images/preguntas/fire"+(ele+1)+".jpg").css({"box-shadow": "none"});
				var bottom = $(this).next().next().children()[0];
				$(bottom).css({"background-color": "#464646", "box-shadow": "none", "z-index" : "1"});
				$(this).css({"position":"inherit"});	
			});

			$(".hot").mouseenter(function(){
				var parent = $(this).parent().parent().children()[0];
				var ele = parseInt($(parent).attr("ele"));
				$(parent).children().attr("src", "images/preguntas/red"+(ele+1)+".jpg").css({"box-shadow": "1px 2px 15px 10px #C63031"});
				$(parent).css({"position":"relative"});
				$(this).css({"background-color": "#C63031", "box-shadow": "1px 2px 15px 10px #C63031", "z-index" : "100"});
			}).mouseleave(function(){
				//var ele = parseInt($(".red").attr("ele"));
				var parent = $(this).parent().parent().children()[0];
				var ele = parseInt($(parent).attr("ele"));
				$(parent).children().attr("src", "images/preguntas/fire"+(ele+1)+".jpg").css({"box-shadow": "none"});
				$(parent).css({"position":"inherit"});
				$(this).css({"background-color": "#464646", "box-shadow": "none", "z-index" : "1"});					
			})

			$(".blue").mouseenter(function(){
				var ele = parseInt($(this).attr("ele"));
				$(this).children().attr("src", "images/preguntas/blue"+(ele+1)+".jpg").css({"box-shadow": "1px 2px 15px 10px #2db2de"});
				var bottom = $(this).next().children()[1];
				$(bottom).css({"background-color": "#2db2de", "box-shadow": "1px 2px 15px 10px #2db2de", "z-index" : "100"});	
				$(this).css({"position":"relative"});
			}).mouseleave(function(){
				var ele = parseInt($(this).attr("ele"));
				$(this).children().attr("src", "images/preguntas/ice"+(ele+1)+".jpg").css({"box-shadow": "none"});
				var bottom = $(this).next().children()[1];
				$(bottom).css({"background-color": "#464646", "box-shadow": "none", "z-index" : "1"});
				$(this).css({"position":"inherit"});		
			});

			$(".ice").mouseenter(function(){
				var parent = $(this).parent().parent().children()[1];
				var ele = parseInt($(parent).attr("ele"));
				$(parent).children().attr("src", "images/preguntas/blue"+(ele+1)+".jpg").css({"box-shadow": "1px 2px 15px 10px #2db2de"});
				$(parent).css({"position":"relative"});
				$(this).css({"background-color": "#2db2de", "box-shadow": "1px 2px 15px 10px #2db2de", "z-index" : "100"});	
			}).mouseleave(function(){
				var parent = $(this).parent().parent().children()[1];
				var ele = parseInt($(parent).attr("ele"));
				$(parent).children().attr("src", "images/preguntas/ice"+(ele+1)+".jpg").css({"box-shadow": "none"});
				$(parent).css({"position":"inherit"});
				$(this).css({"background-color": "#464646", "box-shadow": "none", "z-index" : "1"});			
			});
		} else {
			$(".red img").each(function(index) {
			  	$(this).attr("src", "images/preguntas/red"+(index+1)+".jpg");
				//$(".blue img").attr("src", "images/preguntas/blue"+(index+1)+".jpg");
			});

			$(".blue img").each(function(index) {
				$(this).attr("src", "images/preguntas/blue"+(index+1)+".jpg");
			});
			
			
		}
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			if(!$(this).hasClass("disable")){
				var respuesta_cont = $(this).parent();
				var pregunta_num = respuesta_cont.attr("num");
				var respuesta_num = $(this).attr("num");
				var pregunta_obj = preguntas[pregunta_num];
				var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
				
				$(this).addClass("select");
				respuesta.push(respuesta_num);
				console.log(respuesta);
				
				respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
				respuesta_cont.find('.indepth_respuesta_item').click(false);
				$(respuesta_cont).parent().children().addClass("disable");

				//$(".red,.hot,.fire,.ice").unbind();
				$(this).unbind();
				if($(this).hasClass("ice")){
					$(this).prev().unbind();
				}else{
					$(this).next().unbind();
				}
				
				$(this).parent().parent().children().unbind();
					
					if(respuesta.length == preguntas.length){
						var total = countMaxValue(respuesta);
						console.log(total);
						window.setTimeout(function(){
							console.log("time");
							console.log(total);
							finish_test(total);
						});
					}
				return respuesta;
			}
		});

		$(document).on("click",".red",function(){
				if(!$(this).hasClass("disable")){
				var respuesta_cont = $(this).next().next();
				var pregunta_num = respuesta_cont.attr("num");
				var respuesta_num = $(".hot").attr("num");
				var pregunta_obj = preguntas[pregunta_num];
				var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
				
				$(this).addClass("select");
				respuesta.push(respuesta_num);
				console.log(respuesta);
				
				respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
				respuesta_cont.find('.indepth_respuesta_item').click(false);
				$(this).parent().children().addClass("disable");
				$(this).click(false);

				//$(".red,.hot,.fire,.ice").unbind();
				$(this).unbind();
				$(this).next().unbind();
				
				$(this).parent().find('.indepth_respuestas_cont').children().unbind();
					
					if(respuesta.length == preguntas.length){
						var total = countMaxValue(respuesta);
						console.log(total);
						window.setTimeout(function(){
							console.log("time");
							console.log(total);
							finish_test(total);
						});
					}
				return respuesta;
			}
			
		});

		$(document).on("click",".blue",function(){
				if(!$(this).hasClass("disable")){
				var respuesta_cont = $(this).next();
				var pregunta_num = respuesta_cont.attr("num");
				var respuesta_num = $(".ice").attr("num");
				var pregunta_obj = preguntas[pregunta_num];
				var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
				
				$(this).addClass("select");
				respuesta.push(respuesta_num);
				console.log(respuesta);
				
				respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
				respuesta_cont.find('.indepth_respuesta_item').click(false);
				$(this).click(false);
				$(this).parent().children().addClass("disable");
				

				//$(".red,.hot,.fire,.ice").unbind();
				$(this).unbind();
				$(this).prev().unbind();
				
				$(this).parent().find('.indepth_respuestas_cont').children().unbind();
					
					if(respuesta.length == preguntas.length){
						var total = countMaxValue(respuesta);
						console.log(total);
						window.setTimeout(function(){
							console.log("time");
							console.log(total);
							finish_test(total);
						});
					}
				return respuesta;
			}
			
		});
});

function finish_test(total){

	console.log("time2");
	console.log(total);
	
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;
	console.log(total);

	if (img == 0) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho,
			"background-image": "url("+urlIndepth+"images/respuestas/" + img + ".png)",
			"background-color": "#C63031"
		});
	} else if (img == 1) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho,
			"background-image": "url("+urlIndepth+"images/respuestas/" + img + ".png)",
			"background-color": "#2C87AB"
		});
	}
	
	/*$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho,
		"background-image": "url("+urlIndepth+"images/respuestas/" + img + ".png)",
		"background-color": "#2C87AB"
	});*/

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total == 0) {
			text = encodeURIComponent("¡Lo tuyo es ser Fire! Ganan todos juntos por igual. Nadie es más o menos importante en el equipo.");
		} else if (total == 1) {
			text = encodeURIComponent("¡Lo tuyo es ser Ice! No importa que sean todos contra ti. Tú cargas al equipo completo cuando te necesita.");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/fire-ice");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFNike&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
  		var text = "";
		if (total == 0) {
			text = encodeURIComponent("¡Lo tuyo es ser Fire! Ganan todos juntos por igual. Nadie es más o menos importante en el equipo.");
		} else if (total == 1) {
			text = encodeURIComponent("¡Lo tuyo es ser Ice! No importa que sean todos contra ti. Tú cargas al equipo completo cuando te necesita.");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/fire-ice");
		window.open("https://facebook.com/share?text="+text+"&hashtags=JFNike&url="+url,"","width=500, height=300");
	});
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	});

	/*$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});*/
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    /*$("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});*/
});


