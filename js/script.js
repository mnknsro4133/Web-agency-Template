$(document).ready(function(){
	$("#cart1").css("background-image","url('images/up_blue.png')");
	$("#cart2").css("background-image","url('images/clock_blue.png')");
	$("#cart3").css("background-image","url('images/user_blue.png')");
	$("#cart4").css("background-image","url('images/app_blue.png')");
	$("#cart5").css("background-image","url('images/ad_blue.png')");
	$("#cart6").css("background-image","url('images/cafe_blue.png')");

	$("#hizmet_cart_1").mouseover(function(){
		$("#cart1").css("background-color","rgb( 0, 170, 254 )");
		$("#cart1").css("-webkit-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart1").css("-moz-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart1").css("box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart1").css("background-image","url('images/up_white.png')");
		$("#hizmetler_baslik1").css("color","rgb( 0, 170, 254 )");
	});

	$("#hizmet_cart_1").mouseout(function(){
		$("#cart1").css("background-image","url('images/up_blue.png')");
		$("#cart1").css("background-color","rgb( 235, 248, 255 )");
		$("#cart1").css("-webkit-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart1").css("-moz-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart1").css("box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#hizmetler_baslik1").css("color","#333");
	});


	$("#hizmet_cart_2").mouseover(function(){
		$("#cart2").css("background-color","rgb( 0, 170, 254 )");
		$("#cart2").css("-webkit-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart2").css("-moz-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart2").css("box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart2").css("background-image","url('images/clock_white.png')");
		$("#hizmetler_baslik2").css("color","rgb( 0, 170, 254 )");
	});

	$("#hizmet_cart_2").mouseout(function(){
		$("#cart2").css("background-image","url('images/clock_blue.png')");
		$("#cart2").css("background-color","rgb( 235, 248, 255 )");
		$("#cart2").css("-webkit-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart2").css("-moz-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart2").css("box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#hizmetler_baslik2").css("color","#333");
	});

	$("#hizmet_cart_3").mouseover(function(){
		$("#cart3").css("background-color","rgb( 0, 170, 254 )");
		$("#cart3").css("-webkit-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart3").css("-moz-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart3").css("box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart3").css("background-image","url('images/user_white.png')");
		$("#hizmetler_baslik3").css("color","rgb( 0, 170, 254 )");
	});

	$("#hizmet_cart_3").mouseout(function(){
		$("#cart3").css("background-image","url('images/user_blue.png')");
		$("#cart3").css("background-color","rgb( 235, 248, 255 )");
		$("#cart3").css("-webkit-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart3").css("-moz-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart3").css("box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#hizmetler_baslik3").css("color","#333");
	});

	$("#hizmet_cart_4").mouseover(function(){
		$("#cart4").css("background-color","rgb( 0, 170, 254 )");
		$("#cart4").css("-webkit-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart4").css("-moz-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart4").css("box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart4").css("background-image","url('images/app_white.png')");
		$("#hizmetler_baslik4").css("color","rgb( 0, 170, 254 )");
	});

	$("#hizmet_cart_4").mouseout(function(){
		$("#cart4").css("background-image","url('images/app_blue.png')");
		$("#cart4").css("background-color","rgb( 235, 248, 255 )");
		$("#cart4").css("-webkit-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart4").css("-moz-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart4").css("box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#hizmetler_baslik4").css("color","#333");
	});

	$("#hizmet_cart_5").mouseover(function(){
		$("#cart5").css("background-color","rgb( 0, 170, 254 )");
		$("#cart5").css("-webkit-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart5").css("-moz-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart5").css("box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart5").css("background-image","url('images/ad_white.png')");
		$("#hizmetler_baslik5").css("color","rgb( 0, 170, 254 )");
	});

	$("#hizmet_cart_5").mouseout(function(){
		$("#cart5").css("background-image","url('images/ad_blue.png')");
		$("#cart5").css("background-color","rgb( 235, 248, 255 )");
		$("#cart5").css("-webkit-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart5").css("-moz-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart5").css("box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#hizmetler_baslik5").css("color","#333");
	});

	$("#hizmet_cart_6").mouseover(function(){
		$("#cart6").css("background-color","rgb( 0, 170, 254 )");
		$("#cart6").css("-webkit-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart6").css("-moz-box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart6").css("box-shadow","0px 4px 22px 0px rgba(38,166,235,1)");
		$("#cart6").css("background-image","url('images/cafe_white.png')");
		$("#hizmetler_baslik6").css("color","rgb( 0, 170, 254 )");
	});

	$("#hizmet_cart_6").mouseout(function(){
		$("#cart6").css("background-image","url('images/cafe_blue.png')");
		$("#cart6").css("background-color","rgb( 235, 248, 255 )");
		$("#cart6").css("-webkit-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart6").css("-moz-box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#cart6").css("box-shadow","0px 4px 22px 0px rgba(0,0,0,0)");
		$("#hizmetler_baslik6").css("color","#333");
	});
	//Burdan sonrası projeler kısmının kodları
	$("#proje_cart_1").bind({
		mouseover: function(){
			$("#proje_cart_1").css("-webkit-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_1").css("-moz-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_1").css("box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_baslik_1").css("color","#337ab7");
			$("#proje_cart_1").css("cursor","pointer");
		},

		mouseout: function(){
			$("#proje_cart_1").css("-webkit-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_1").css("-moz-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_1").css("box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_baslik_1").css("color","#333");
			$("#proje_cart_1").css("cursor","pointer");
		}
	});

	$("#proje_cart_2").bind({
		mouseover: function(){
			$("#proje_cart_2").css("-webkit-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_2").css("-moz-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_2").css("box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_baslik_2").css("color","#337ab7");
			$("#proje_cart_2").css("cursor","pointer");
		},

		mouseout: function(){
			$("#proje_cart_2").css("-webkit-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_2").css("-moz-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_2").css("box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_baslik_2").css("color","#333");
			$("#proje_cart_2").css("cursor","pointer");
		}
	});

	$("#proje_cart_3").bind({
		mouseover: function(){
			$("#proje_cart_3").css("-webkit-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_3").css("-moz-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_3").css("box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_baslik_3").css("color","#337ab7");
			$("#proje_cart_3").css("cursor","pointer");
		},

		mouseout: function(){
			$("#proje_cart_3").css("-webkit-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_3").css("-moz-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_3").css("box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_baslik_3").css("color","#333");
			$("#proje_cart_3").css("cursor","pointer");
		}
	});

	$("#proje_cart_4").bind({
		mouseover: function(){
			$("#proje_cart_4").css("-webkit-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_4").css("-moz-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_4").css("box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_baslik_4").css("color","#337ab7");
			$("#proje_cart_4").css("cursor","pointer");
		},

		mouseout: function(){
			$("#proje_cart_4").css("-webkit-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_4").css("-moz-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_4").css("box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_baslik_4").css("color","#333");
			$("#proje_cart_4").css("cursor","pointer");
		}
	});

	$("#proje_cart_5").bind({
		mouseover: function(){
			$("#proje_cart_5").css("-webkit-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_5").css("-moz-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_5").css("box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_baslik_5").css("color","#337ab7");
			$("#proje_cart_5").css("cursor","pointer");
		},

		mouseout: function(){
			$("#proje_cart_5").css("-webkit-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_5").css("-moz-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_5").css("box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_baslik_5").css("color","#333");
			$("#proje_cart_5").css("cursor","pointer");
		}
	});

	$("#proje_cart_6").bind({
		mouseover: function(){
			$("#proje_cart_6").css("-webkit-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_6").css("-moz-box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_6").css("box-shadow","3px 3px 10px 0px rgba(201,201,201,1)");
			$("#proje_cart_baslik_6").css("color","#337ab7");
			$("#proje_cart_6").css("cursor","pointer");
		},

		mouseout: function(){
			$("#proje_cart_6").css("-webkit-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_6").css("-moz-box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_6").css("box-shadow","3px 3px 10px 0px rgba(0,0,0,0)");
			$("#proje_cart_baslik_6").css("color","#333");
			$("#proje_cart_6").css("cursor","pointer");
		}
	});


});
