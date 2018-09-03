$(function(){
	$('.header1,.headerbiao>ul>li,.daohang>div>ul>li,.nav3>div>ul>li,.wenzi2,.banner2>li,.lang>li,.ass1').mouseenter(function(){
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
	$('.wangzhan').mouseenter(function(){
		$('.wangzhan').css({borderLeft:'1px solid #ccc',borderRight:'1px solid #ccc',background:'#fff'});
		$('.daohang').show();
	}).mouseleave(function(){
		$('.wangzhan').css({borderLeft:'',borderRight:'',background:''});
		$('.daohang').hide();
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
	$('.shouji').mouseenter(function(){
		$('.shouji>div').show();
	}).mouseleave(function(){
		$('.shouji>div').hide();
	})
	$('.menul>div>ul>li').mouseenter(function(){
		$(this).css('text-decoration','underline')
	}).mouseleave(function(){
		$(this).css('text-decoration','none')
	}) 
	// 轮播
	var now=0;
	var len=$('.menur1tu>li').length;
	function run(){
		s=setInterval(function(){
			$('.menur1tu>li').hide();
			$('.menur1nu>li').css('opacity','0.5');
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}		
			$('.menur1tu>li:eq('+now+')').fadeIn();
			$('.menur1nu>li:eq('+now+')').css('opacity','1');
		},1500)
	}	
	run();
	$('.menur1tu').mouseover(function(){
		clearInterval(s);
	}).mouseout(function(){
		run();
	})
	$('.menur1nu>li').mouseover(function(){
		clearInterval(s);
		$('.menur1tu>li').hide();
		$('.menur1nu>li').css('opacity','0.5');		
		now=$(this).index();
		$('.menur1tu>li:eq('+now+')').show();
		$('.menur1nu>li:eq('+now+')').css('opacity','1');	
	})
	// 轮播结束
	$('.menur2>div>img').mouseenter(function(){
		$(this).css({opacity:'0.7',transition:'all 1s ease'})
	}).mouseleave(function(){
		$(this).css('opacity','')
	})
	$('.pinpai2>div').mouseenter(function(){
		$(this).css('border','1px solid #3c9');
	}).mouseleave(function(){
		$(this).css('border','1px solid #eee');
	})
	$('.ass2').mouseenter(function(){
		$(this).css({color:'#f00',textDecoration:'underline'});
	}).mouseleave(function(){
		$(this).css({color:'',textDecoration:'none'});
	}) 
	// 楼层
	$(function(){
		$('.lou>li').click(function(){
			var index=$(this).index();
			var top=$('.floor').eq(index).offset().top;
			$('body,html').animate({
				scrollTop:top
			},500);
		})
		var heights=[];
		$('.floor').each(function(){
			heights.push($(this).offset().top);
		})
		$(window).scroll(function(){
			var top=$(window).scrollTop();
			var index;
			for(var i=0;i<heights.length;i++){
				if(top>=heights[i] && top<heights[i+1]){
					index=i;
					$('.lou>li').eq(index).css('background','#29bcc9').siblings().css('background','#fff');
					break;
				}else if(top>=heights[heights.length-1]){
					index=heights.length-1;
					$('.lou>li').eq(index).css('background','#29bcc9').siblings().css('background','#fff');
					break;
				}
			}
		})
	})
})	