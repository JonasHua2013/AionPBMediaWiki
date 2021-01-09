function setPng24(obj) {obj.width=obj.height=1; obj.className=obj.className.replace(/\bpng24\b/i,''); obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');";
obj.src=''; return ''; }
/* 
jquery.event.drag.js ~ v1.4 ~ Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)  
Liscensed under the MIT License ~ http://threedubmedia.googlecode.com/files/MIT-LICENSE.txt
*/
(function(H){H.fn.drag=function(K,J,I){if(J){this.bind("dragstart",K)}if(I){this.bind("dragend",I)}return !K?this.trigger("drag"):this.bind("drag",J?J:K)};var D=H.event,B=D.special,F=B.drag={not:":input",distance:0,which:1,setup:function(I){I=H.extend({distance:F.distance,which:F.which,not:F.not},I||{});I.distance=G(I.distance);D.add(this,"mousedown",E,I)},teardown:function(){D.remove(this,"mousedown",E);if(this===F.dragging){F.dragging=F.proxy=null}C(this,true)}};function E(K){var J=this,I,L=K.data||{};if(L.elem){J=K.dragTarget=L.elem;K.dragProxy=F.proxy||J;K.cursorOffsetX=L.pageX-L.left;K.cursorOffsetY=L.pageY-L.top;K.offsetX=K.pageX-K.cursorOffsetX;K.offsetY=K.pageY-K.cursorOffsetY}else{if(F.dragging||(L.which>0&&K.which!=L.which)||H(K.target).is(L.not)){return }}switch(K.type){case"mousedown":H.extend(L,H(J).offset(),{elem:J,target:K.target,pageX:K.pageX,pageY:K.pageY});D.add(document,"mousemove mouseup",E,L);C(J,false);return false;case !F.dragging&&"mousemove":if(G(K.pageX-L.pageX)+G(K.pageY-L.pageY)<L.distance){break}K.target=L.target;I=A(K,"dragstart",J);if(I!==false){F.dragging=J;F.proxy=K.dragProxy=H(I||J)[0]}case"mousemove":if(F.dragging){I=A(K,"drag",J);if(B.drop){B.drop.allowed=(I!==false);B.drop.handler(K)}if(I!==false){break}K.type="mouseup"}case"mouseup":D.remove(document,"mousemove mouseup",E);if(F.dragging){if(B.drop){B.drop.handler(K)}A(K,"dragend",J)}C(J,true);F.dragging=F.proxy=L.elem=null;break}}function A(L,J,K){L.type=J;var I=D.handle.call(K,L);return I===false?false:I||L.result}function G(I){return Math.pow(I,2)}function C(J,I){if(!J){return }J.unselectable=I?"off":"on";J.onselectstart=function(){return I};if(document.selection&&document.selection.empty){document.selection.empty()}if(J.style){J.style.MozUserSelect=I?"":"none"}}})(jQuery);

//wheel lib
;(function($){
$.fn.wheel = function( fn ){	return this[ fn ? "bind" : "trigger" ]( "wheel", fn );	};
// special event config
$.event.special.wheel = {
	setup: function(){
		$.event.add( this, wheelEvents, wheelHandler, {} );
		},
	teardown: function(){
		$.event.remove( this, wheelEvents, wheelHandler );
		}
	};
// events to bind ( browser sniffed... )
var wheelEvents = !$.browser.mozilla ? "mousewheel" : "DOMMouseScroll"+( $.browser.version<"1.9" ? " mousemove" : "" ); 
// shared event handler
function wheelHandler( event ){ 
	switch ( event.type ){
		case "mousemove": // FF2 has incorrect event positions
			return $.extend( event.data, { // store the correct properties
				clientX: event.clientX, clientY: event.clientY,
				pageX: event.pageX, pageY: event.pageY
				});	
		case "DOMMouseScroll": // firefox
			$.extend( event, event.data ); // fix event properties in FF2
			event.delta = -event.detail/3; // normalize delta
			
			break;
		case "mousewheel": // IE, opera, safari
			event.delta = event.wheelDelta/120; // normalize delta
			if ( $.browser.opera ) event.delta *= -1; // normalize delta
			break;
		}
	event.type = "wheel"; // hijack the event	
	return $.event.handle.call( this, event, event.delta);
	};
})(jQuery);
// wheel lib end


(function($) {
	
	var gameMapRatio = [0.1954, 0.3, 0.44, 0.66, 1, 1.33];
	var staticUrl = "https://aionpowerbook.com/" ;
	
	$.fn.aionMap = function(options) {
		var opts = $.extend({}, $.fn.aionMap.defaults, options);
		var obj = this;

		var action = {
			init : function() {
				obj.data("opts",opts);
				opts = obj.data("opts");
				obj.empty();

				action.initializeMapDisplayArea();
				action.initialiDdraghandler();
				action.initializeMapType();
				action.initializeZoomLevel();
				if (obj.data("opts").caption != null) action.initializeCaption();
				action.loadMap();
			},
			initializeMapDisplayArea : function() {
				obj.addClass("aionmap " + obj.data("opts").viewType);
				$("<h3/>")
				.attr({className: "area_name"})
				.html("<span class='" + mapSet[opts.zone].label+"'>" + mapSet[opts.zone].name + "</span>")
				.appendTo(obj);
				$("<div/>")
				.attr({className: "map_container"})
				.appendTo(obj);
				if (obj.data("opts").npcID != null) {
				$("<div/>")
				.attr({className: "expand_map_btn"})
				
				.attr({href: "https://aionpowerbook.com/powerbook/extensions/AionExtensions/bigmap.php?id=" + obj.data("opts").npcID})
				
				.appendTo(obj);
				}
				$("<div/>")
				.attr({className: "canvas_none"})
				.appendTo(obj);
			},
			initialiDdraghandler : function() {
				var mapContanerY = obj.find('.map_container').offset().top;
				var mapContanerX = obj.find('.map_container').offset().left;
				var mapContanerW = Math.round(3072 * gameMapRatio[obj.data("opts").zoomLevel]);
				var mapContanerH = Math.round(3072 * gameMapRatio[obj.data("opts").zoomLevel]);

				// create drag handler
				$("<div/>")
					.attr({className: "drag_handler"})
					.css({width:mapContanerW, height:mapContanerH})
					.bind('dragstart',function(){
						return $(this).addClass('active');
					})
					.bind('drag',function( event ){
						setX = event.offsetX - obj.find('.map_container').offset().left;
						setY = event.offsetY - obj.find('.map_container').offset().top;
						
						offsetX = obj.find('.map_container').width() - $('.mapimg',obj).width() ;
						offsetY =  obj.find('.map_container').height() - $('.mapimg',obj).height();

						if(setX >0 ) setX = 0;
						if(setX < offsetX)  setX = offsetX;
						if(setY >0 ) setY = 0;
						if(setY < offsetY)  setY = offsetY;
						
						$(event.dragProxy).css({left: setX,top: setY});
						$(obj.find('.map_canvas')).css({left: setX,top: setY});
						
					})
					.bind('dragend',function(event){
						action.getCenterPoint();
						return $(this).removeClass('active');
					})
					.bind('mousemove',function(event,delta){
						if($("#map_coords").attr("id") == "map_coords") {
							worldPoint = action.getWorldmapCoord(obj.data("opts").mapType,obj.data("opts").zone, event.pageX - obj.find('.mapimg').offset().left, event.pageY - obj.find('.mapimg').offset().top, obj.data("opts").zoomLevel);
							$("#map_coords").html(worldPoint[0] + " , " +  worldPoint[1]);
							$("#map_coords").css({left: event.pageX + 2,top: event.pageY -21});
						}
					})
					.bind('wheel',function(event,delta){
						var mapContanerPosY = obj.find('.map_container').offset().top;
						var mapContanerPosX = obj.find('.map_container').offset().left;
						if(obj.data('opts').mapType != "simple") {
							
							if(delta>0 && Number(obj.data('opts').zoomLevel) <5) {
								currentZoomLevel = parseInt(obj.data("opts").zoomLevel);
								rate = gameMapRatio[currentZoomLevel+1] / gameMapRatio[currentZoomLevel];

								eventX = event.pageX - mapContanerPosX;
								eventY = event.pageY - mapContanerPosY;

								marginX = parseInt(obj.find('.map_canvas').css('left'));
								marginY = parseInt(obj.find('.map_canvas').css('top'));

								afterMarginX = ((eventX - marginX) * rate - eventX) * -1;
								afterMarginY =  ((eventY - marginY) * rate - eventY) * -1;

								action.onChangeZoom(Number(obj.data('opts').zoomLevel) +1);

								$(".map_canvas", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								$(".drag_handler", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								action.getCenterPoint();
								action.onChangeZoom(Number(obj.data('opts').zoomLevel));


								return false;
							} else if(delta<0 && Number(obj.data('opts').zoomLevel) > 0) {
								currentZoomLevel = parseInt(obj.data("opts").zoomLevel);
								rate = gameMapRatio[currentZoomLevel-1] / gameMapRatio[currentZoomLevel];

								eventX = event.pageX - mapContanerPosX;
								eventY = event.pageY - mapContanerPosY;

								marginX = parseInt(obj.find('.map_canvas').css('left'));
								marginY = parseInt(obj.find('.map_canvas').css('top'));

								afterMarginX = ((eventX - marginX) * rate - eventX) * -1;
								afterMarginY =  ((eventY - marginY) * rate - eventY) * -1;


								action.onChangeZoom(Number(obj.data('opts').zoomLevel) -1);

								$(".map_canvas", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								$(".drag_handler", obj).css({top:afterMarginY +"px", left:afterMarginX +"px"});
								action.getCenterPoint();
								action.onChangeZoom(Number(obj.data('opts').zoomLevel));

								return false;
							}
							if(obj.attr("id") == "expand_map") return false;
						}
					})
					.appendTo($(obj.find('.map_container')));
			},
			initializeZoomLevel : function() {
				// create zoom pannel 
				$("<div/>")
				.attr({className: "zoom"})
				.appendTo(obj);
				$("<div/>")
				.attr({className: "zoom_cnt"})
				.appendTo($('.zoom', obj));

				// zoom button event 
				$("<div/>")
				.attr({className: "btn_current"})
				.appendTo($('.zoom_cnt', obj));
				$("<span/>")
				.attr({className: "btn_plus"})
				.html("+")
				.bind('click',function(){
					action.onChangeZoom(Number(obj.data('opts').zoomLevel) +1);
				})
				.appendTo($('.zoom_cnt', obj));
				$("<span/>")
				.attr({className: "btn_minus"})
				.html("-")
				.bind('click',function(){
					action.onChangeZoom(Number(obj.data('opts').zoomLevel) -1);
				})
				.appendTo($('.zoom_cnt', obj));
			},
			initializeMapType : function() {
				$("<div/>")
				.attr({className: "toolbar"})
				.appendTo(obj);

				$("<span/>")
				.attr({className: "satellite"})
				.html("<span>위성</span>")
				.bind('click',function(){
					action.onChangeMapType('satellite');
				})
				.appendTo($('.toolbar', obj));

				$("<span/>")
				.attr({className: "radar"})
				.html("<span>레이더</span>")
				.bind('click',function(){
					action.onChangeMapType('radar');
				})
				.appendTo($('.toolbar', obj));
				$("<span/>")
				.attr({className: "simple"})
				.html("<span>일반</span>")
				.bind('click',function(){
					action.onChangeMapType('simple');
				})
				.appendTo($('.toolbar', obj));
			},
			initializeCaption : function() {
				c = obj.data("opts").caption;
				var caption = "<ul>";
				$.each(c, function(i){
					caption += '<li class="'+ c[i].o +'"><input type="checkbox" id="' +obj.attr('id') + '_' +c[i].o +'" ';
					if(c[i].check == '1') caption += ' checked="checked" ';
					caption += '" /><label for="'+ obj.attr('id') + '_' +c[i].o  +'">'+ c[i].label +'</label></li>';
				});
				caption += "</ul>";
				$("<div/>")
				.attr({id:obj.attr('id')+"_caption", className: "aionmap_caption"})
				.html(caption)
				.find('input:checkbox').click(function(e){
					tmp = $(this).attr("id").split("_");
					if($(this).is(':checked')) {
						$(obj.find('.' +tmp[1])).show();
					} else {
						$(obj.find('.' +tmp[1])).hide();
					}
					c2 = $('#'+ tmp[0]).data("opts").caption;
					$.each(c2, function(i){
						if(c2[i].o == tmp[1]) {
							if(c2[i].check == '1') c2[i].check = '0';
							else c2[i].check = '1';
						}
					});
				}).end()
				.insertAfter(obj);
			},
			loadMap : function() {
				action.setMapBody();
				action.setToolbar();
				action.setZoomLevel();
				action.setMarks();
			},
			setMapBody : function() {
				var mapContainer = $(obj.find('.map_container'));

				var opts = obj.data("opts");
				if($('.map_canvas',mapContainer).length >0 ) {
					$('.map_canvas',mapContainer).remove();
				}
				$("<div/>")
					.attr({className: "map_canvas"})
					.html('<div class="canvas_normal"><div class="area"></div><div class="spots"></div></div><div class="canvas_simple"><div class="spots"></div></div>')
					.appendTo(mapContainer);

				frameW = $(obj.find('.map_container')).width();
				frameH = $(obj.find('.map_container')).height();

				if(obj.attr("id") == "expand_map") frameW = frameH = 600;

				if(obj.data("opts").coords[0].x == "null") {
					if(obj.data("opts").text == "null") {
						markCoord = action.getCenterMarksCoord();
						centerX = markCoord[0];
						centerY = markCoord[1];
					}else {
						centerX = obj.data("opts").marks[0].x;
						centerY = obj.data("opts").marks[0].y;
					}
				} else {
						centerX = obj.data("opts").coords[0].x;
						centerY = obj.data("opts").coords[0].y;
				}

				if(obj.data("opts").mapType == "simple") {
					imgSrc = staticUrl + mapSet[obj.data("opts").zone].map_simple;
					imgWidth = 768;
					imgHeight = 608;
					
					coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, centerX, centerY, obj.data("opts").zoomLevel);
					coord_x = frameW /2 - coord[0] ;
					coord_y = frameH /2 - coord[1];
					
					if(coord_x < frameW-imgWidth) coord_x = frameW-imgWidth;
					if(coord_x > 0) coord_x =0;
					if(coord_y < frameH-imgHeight) coord_y = frameH-imgHeight;
					if(coord_y > 0) coord_y =0;
					
					if(imgSrc == staticUrl) {
						$(".canvas_none", obj).show();
					} else {
						$(".canvas_none", obj).hide();
						$("<img />")
						.attr({className: "mapimg", src: imgSrc})
						.css({width:imgWidth, height:imgHeight})
						.appendTo($(mapContainer.find('.canvas_simple')));
						
						$(".map_canvas", obj).css({top:coord_y +"px", left:coord_x +"px"})
						$(".drag_handler", obj).css({top:coord_y +"px", left:coord_x +"px", width:imgWidth, height:imgHeight})
						$(".map_canvas", obj).show();
						$(".canvas_simple", obj).show();
						$(".canvas_normal", obj).hide();
					}
				} else {
					if(obj.data("opts").mapType == "satellite") {
						imgSrc = staticUrl + mapSet[obj.data("opts").zone].map_satellite;
					} else if(obj.data("opts").mapType == "radar") {
						imgSrc = staticUrl + mapSet[obj.data("opts").zone].map_radar;
					}
					imgWidth = imgHeight = Math.round(3072 * gameMapRatio[obj.data("opts").zoomLevel]);

					coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, centerX, centerY, obj.data("opts").zoomLevel);
					coord_x = frameW /2 - coord[0] ;
					coord_y = frameH /2 - coord[1];
					
					if(coord_x < frameW-imgWidth) coord_x = frameW-imgWidth;
					if(coord_x > 0) coord_x =0;
					if(coord_y < frameH-imgHeight) coord_y = frameH-imgHeight;
					if(coord_y > 0) coord_y =0;
					if(imgSrc == staticUrl) {
						$(".canvas_none", obj).show();
					} else {
						
						$(".canvas_none", obj).hide();
						$("<img />")
						.attr({className: "mapimg", src: imgSrc})
						.css({width:imgWidth, height:imgHeight})
						.appendTo($(mapContainer.find('.canvas_normal')));
						$(".map_canvas", obj).css({top:coord_y +"px", left:coord_x +"px"})
						$(".drag_handler", obj).css({top:coord_y +"px", left:coord_x +"px", width:imgWidth, height:imgHeight})
						
					}
				}
			},
			setToolbar : function() {
				tab = $('.toolbar span',obj).siblings().find('span');
				$.each(tab, function(i){
					if($($(this).parent()[0]).hasClass(obj.data("opts").mapType)) $(this).addClass('on');
					 else $(this).removeClass('on');
				});
			},
			setZoomLevel : function() {
				zoom_current = $('.btn_current',obj);
				zoomBarTop = 116 - 17 * obj.data("opts").zoomLevel;
				zoom_current.css({top:zoomBarTop +'px'});
				if (obj.data("opts").mapType == 'simple')
				{
					$('.zoom',obj).hide();
				} else {
					$('.zoom',obj).show();
				}
			},
			setMarks : function() {
				var zoneLabel ="";
				var spotLabel ="";
				if (obj.data("opts").mapType != "simple")
				{
					$.each(mapSet[obj.data("opts").zone].map_text, function(i){
						// with convert coords.
						coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, mapSet[obj.data("opts").zone].map_text[i].x,mapSet[obj.data("opts").zone].map_text[i].y, obj.data("opts").zoomLevel);
						coord_x = mapSet[obj.data("opts").zone].map_text[i].x * gameMapRatio[obj.data("opts").zoomLevel]- mapSet[obj.data("opts").zone].map_text[i].width/2;
						coord_y = mapSet[obj.data("opts").zone].map_text[i].y * gameMapRatio[obj.data("opts").zoomLevel]- mapSet[obj.data("opts").zone].map_text[i].height/2;
						zoneLabel += '<img src="' +staticUrl + mapSet[obj.data("opts").zone].map_text[i].filename + '" style="position:absolute;top:' + coord_y +'px; left:' + coord_x +'px;" alt="' + mapSet[obj.data("opts").zone].map_text[i].name+'" class="label_' + mapSet[obj.data("opts").zone].map_text[i].ui_map + ' png24" />';
					})
					$('.canvas_normal .area', obj).html(zoneLabel);
				}
				if(obj.data("opts").zoomLevel < 3) $('.label_zoom', obj).hide(); //3단계부터만 display

				m = obj.data("opts").marks;
				if(obj.data("opts").text != "null") {
						coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, m[0].x,m[0].y, obj.data("opts").zoomLevel);
						spotLabel += '<span class="icon '+ m[0].o +'" style="top:' + (parseInt(coord[1])-10)+'px; left:' + (parseInt(coord[0])-9)+'px;"></span>';
						spotLabel += '<span class="map_desc" style="top:' + (parseInt(coord[1])-9)+'px; left:' + (parseInt(coord[0])-10)+'px;">' + obj.data("opts").text + '</span>';
				} else {
					$.each(m, function(i){
						coord = action.getMapCoord(obj.data("opts").mapType, obj.data("opts").zone, m[i].x,m[i].y, obj.data("opts").zoomLevel);
						spotLabel += '<span class="icon '+ m[i].o +'" style="top:' + (parseInt(coord[1])-10)+'px; left:' + (parseInt(coord[0])-9)+'px;"></span>';
					});
				}
				if(spotLabel.indexOf("icon g2") != -1){
					$("<div/>")
					.attr({className: "help_gather"})
					.html("<p><span class='o2'></span> Random Spawn</p><p><span class='o1'></span> Fixed Spawn</p>")
					.appendTo(obj);
				}
				if (obj.data("opts").mapType != "simple") {
					$('.canvas_normal .spots', obj).html(spotLabel);
				} else {
					$('.canvas_simple .spots', obj).html(spotLabel);
				}
				if(obj.data("opts").text != "null") {
					descBox = $('.map_desc', obj);
					descBoxW = descBox.width()+7;
					descBoxH = descBox.height()+11;
					descBoxPosY = parseInt(descBox.css('top'));
					descBoxPosX = parseInt(descBox.css('left'));

					if($('.mapimg', obj).width() < descBoxW + descBoxPosX)  descBoxPosX= descBoxPosX  - descBoxW-11;
					if($('.mapimg', obj).height() < descBoxH + descBoxPosY)  descBoxPosY= descBoxPosY  - descBoxH -7;
					descBox.css({top:descBoxPosY +"px", left:descBoxPosX +"px"});
				}
				
				if(obj.data("opts").caption != null) {
					c = obj.data("opts").caption;
					$.each(c, function(i){
						if(c[i].check == '0') {
							$(obj.find('.' +c[i].o)).hide();
						}
					});
				}
			},
			getCenterMarksCoord : function() {
				var minX =99999,maxX =-99999,minY =99999,maxY =-99999;

				m = obj.data("opts").marks;
				$.each(m, function(i){
					if (minX > parseInt(m[i].x)) minX = parseInt(m[i].x);
					if (maxX < parseInt(m[i].x)) maxX = parseInt(m[i].x);
					if (minY > parseInt(m[i].y)) minY = parseInt(m[i].y);
					if (maxY < parseInt(m[i].y)) maxY = parseInt(m[i].y);
				})
				marksX = (minX + maxX)/2;
				marksY = (minY + maxY)/2;
				return new Array(marksX, marksY);
			},
			onChangeZoom : function(n) {
				if( n > 5 ) return false;
				if( n < 0 ) return false;
				obj.data("opts").zoomLevel = n;
				action.loadMap();
			},
			onChangeMapType : function(type) {
				obj.data("opts").mapType = type;
				var zone = obj.data("opts").zone;
				action.loadMap();
			},
			
			getMapCoord : function(type, zone, x, y, level) {
				var ix = 0;
				var iy = 0;
				var scale = 0;
				var map_width = 3072;
				var map_height = 3072;
				var newmap_width = 0;
				var newmap_height = 0;
				data =  mapSet[zone];
				if(type=="simple") {
					ix = y - data.offset_x;
					iy = x - data.offset_y;
					scale = data.map_width / data.world_width * data.scale;
					ix = ix * scale;
					iy = iy * scale;
					if(zone=="LC1") {
						ix = data.map_width - ix;
						iy = data.map_height - iy;
					}
				} else if(type=="satellite" || type=="radar") {
					if(zone == "LC1") {
						x = data.world_height - x;
						y = data.world_width - y;
					}
					newmap_width = data.newmap_width;
					newmap_height = data.newmap_height;
					if(newmap_width==0) newmap_width = data.world_width;
					if(newmap_height==0) newmap_height = data.world_height;
					scale = map_width / newmap_width;
					ix = y - data.newmap_offset_x;
					ix = ix * scale;
					iy = x - data.newmap_offset_y;
					iy = iy * scale;
					
					ix = Math.round(ix * gameMapRatio[level]);
					iy = Math.round(iy * gameMapRatio[level]);
				}
				return new Array(ix, iy);
			},
			getWorldmapCoord : function(type, zone, x, y, level) {
				var data;
				var wx = 0;
				var wy = 0;
				var scale = 0;
				var map_width = 3072;
				var map_height = 3072;
				var newmap_width = 0;
				var newmap_height = 0;
				data =  mapSet[zone];
				if(type=="simple") {
					if(zone=="LC1") {
						x = data.map_width - x;
						y = data.map_height - y;
					}
					scale = data.map_width / data.world_width * data.scale;
					wx = x / scale;
					wy = y / scale;
					wx = wx + data.offset_x;
					wy = wy + data.offset_y;
				} else if(type=="satellite" || type=="radar") {
					
					x = x / gameMapRatio[level];
					y= y/ gameMapRatio[level];

					newmap_width = data.newmap_width;
					newmap_height = data.newmap_height;
					if(newmap_width==0) newmap_width = data.world_width;
					if(newmap_height==0) newmap_height = data.world_height;
					scale = map_width / newmap_width;
					wx = x / scale;
					wx = wx + data.newmap_offset_x;
					wy = y / scale;
					wy = wy + data.newmap_offset_y;
					if(zone == "LC1") {
						wx = data.world_height - wx;
						wy = data.world_width - wy;
					}
					
				}
				return new Array(Math.round(wy), Math.round(wx));
			},
			getCenterPoint : function() {
				o =$(obj.find('.map_container'));
				frameW = o.width();
				frameH = o.height();
				framePosX =  parseInt($(o.find('.drag_handler')).css('left'));
				framePosY = parseInt($(o.find('.drag_handler')).css('top'));
				cx = frameW /2 - framePosX;
				cy = frameH /2 - framePosY;

				var worldPoint = action.getWorldmapCoord(obj.data("opts").mapType,obj.data("opts").zone, cx, cy, obj.data("opts").zoomLevel);
				obj.data("opts").coords= Array({'x':worldPoint[0],'y':worldPoint[1]});
			}
		};
		action.init();
	};

	$.fn.aionMap.defaults = {viewType:"gamemap1",zoomLevel:"0",zone:"LC1",mapType:"satellite",marks:"null", text:"null", coords:Array({'x':'null','y':'null'})};
	
	move_map =function (targetEl, zone, text, marks) {
			//map1', 'LF2',  'test1', '{o:m2,x:792,y:653}'); return false;
			
			targetEl = $("#" + targetEl);
			targetEl.data("opts").marks = marks;
			
			targetEl.data("opts").coords = Array({'x':'null','y':'null'});
			if(targetEl.data("opts").zone != zone) targetEl.data("opts").zoomLevle="0";
			targetEl.data("opts").text = text;

			targetEl.aionMap({mapType:targetEl.data("opts").mapType,viewType:targetEl.data("opts").viewType,zoomLevel:targetEl.data("opts").zoomLevel, zone:zone,marks:targetEl.data("opts").marks, text:targetEl.data("opts").text});

	};
	
	move_map_no_text =function (targetEl, zone, marks) {
			//map1', 'LF2',  'test1', '{o:m2,x:792,y:653}'); return false;
			
			targetEl = $("#" + targetEl);
			targetEl.data("opts").marks = marks;
			
			targetEl.data("opts").coords = Array({'x':'null','y':'null'});
			if(targetEl.data("opts").zone != zone) targetEl.data("opts").zoomLevle="0";

			targetEl.aionMap({mapType:targetEl.data("opts").mapType,viewType:targetEl.data("opts").viewType,zoomLevel:targetEl.data("opts").zoomLevel, zone:zone,marks:targetEl.data("opts").marks});

	};
})(jQuery);