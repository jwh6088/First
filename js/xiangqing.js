$(function(){
	$('.headerbiao>ul>li,.daohang>div>ul>li,.dong>ul>li,.wenzi2,.ban2,.menu1>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','');
	})
	$('.header2').mouseenter(function(){
		$('.header2').css({borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc',background:'#fff'});
		$('.header2>.headerbiao').show();
	}).mouseleave(function(){
		$('.header2').css({borderLeft:'',borderRight:'',background:'#e3e4e5'});
		$('.header2>.headerbiao').hide();
	})
	$('.wode').mouseenter(function(){
		$('.wode').css({borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc',background:'#fff'});
		$('.wode>.dong').show();
	}).mouseleave(function(){
		$('.wode').css({borderLeft:'',borderRight:'',background:'#e3e4e5'});
		$('.wode>.dong').hide();
	})
	$('.shouji').mouseenter(function(){
		$('.shouji').css({borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc',background:'#fff'});
		$('.shouji>div').show();
	}).mouseleave(function(){
		$('.shouji>div').hide();
		$('.shouji').css({borderLeft:'',borderRight:'',background:'#e3e4e5'});
	})
	$('.wangzhan').mouseenter(function(){
		$('.wangzhan').css({borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc',background:'#fff'});
		$('.daohang').show();
	}).mouseleave(function(){
		$('.wangzhan').css({borderLeft:'',borderRight:'',background:''}); 
		$('.daohang').hide();
	})
	$('.guanzhu').mouseenter(function(){
		$('.guanzhu').css({borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc',background:'#fff'});
		$('.guanzhu>div').show();
	}).mouseleave(function(){
		$('.guanzhu').css({borderLeft:'',borderRight:'',background:''}); 
		$('.guanzhu>div').hide();
	})
	$('.nav3').mouseenter(function(){
		$('.nav3>div').show();
	}).mouseleave(function(){
		$('.nav3>div').hide();
	})
	$('.nav5').mouseenter(function(){
		$('.nav5>div').show();
	}).mouseleave(function(){
		$('.nav5>div').hide();
	})
	// 放大镜
	$('.small').mousemove(function(e){
		$('#move,.big').show();
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;
		var x=x-$('#move').width()/2;
		var y=y-$('#move').height()/2;
		if(x<=0){
			x=0;
		}
		if(y<=0){
			y=0;
		}
		if(x>=$('.small').width()-$('#move').width()){
			x=$('.small').width()-$('#move').width();
		}
		if(y>=$('.small').height()-$('#move').height()){
			y=$('.small').height()-$('#move').height();
		}
		$('#move').css({left:x,top:y});
		var scale=$('.big>img').width()/$('.small>img').width();
		$('.big').scrollLeft(x*scale);
		$('.big').scrollTop(y*scale);
		$('.big>img').attr('src',$('.small>img').attr('src'));
	}).mouseleave(function(){
		$('#move,.big').hide();
	})
	$('.dian>li>img').click(function(){
		$('.small>img').attr('src',$(this).attr('src'));
		$(this).css('border','2px solid #f00').parent().siblings().children().css('border','');
	})
	$('.diant').mouseenter(function(){
		$(this).css('background','#f00');
	}).mouseleave(function(){
		$(this).css('background','#999');
	})
	var index=$('.dian>li').index();
	var index=1;
	$('.diantr').click(function(){
		$('.dian>li>img').parent().eq(index).children().css('border','2px solid #f00').parent().siblings().children().css('border','');
		$('.small>img').attr('src',$('.dian>li').eq(index+1).children().attr('src'));
		index++;
		if(index>=5){
			index=0;
		}
	})
	$('.diantl').click(function(){
		$('.dian>li>img').parent().eq(index).children().css('border','2px solid #f00').parent().siblings().children().css('border','');
		$('.small>img').attr('src',$('.dian>li').eq(index+1).children().attr('src'));
		index--;
		if(index<0){
			index=5;
		}
	})
	// 放大镜结束
	$('.right4a').mouseenter(function(){
		$(this).css('opacity','0.8');
	}).mouseleave(function(){
		$(this).css('opacity','');
	})
	$('.right4c').mouseenter(function(){
		$('.right4c>div').show();
		$('.right4c>img').css('opacity','0.7');
	}).mouseleave(function(){
		$('.right4c>div').hide();
		$('.right4c>img').css('opacity','');
	})
	// 选项卡
	$('.mainr1>li').click(function(){
		$(this).addClass('mainrt').siblings().removeClass('mainrt');
		var index=$(this).index();
		$('.mainrr>div').eq(index).show().siblings().hide();
	})
})