$(function(){
	$('.header>button').click(function(){
		$('.header').fadeOut();
	})
	$('.nav1').mouseenter(function(){
		$('.nav1').css('background','#fff');
		$('.beijing').show();
	}).mouseleave(function(){
		$('.nav1').css('background','');
		$('.beijing').hide();
	})
	$('.beijing>ul>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','');
	})
	$('.jingdong').mouseenter(function(){
		$('.jingdong').css('background','#fff');
		$('.dong').show();
	}).mouseleave(function(){
		$('.jingdong').css('background','');
		$('.dong').hide();
	})
	$('.dong>ul>li,.banner21b>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','');
	})
	$('.shouji').mouseenter(function(){
		$('.shouji2').show();
	}).mouseleave(function(){
		$('.shouji2').hide();
	})
	$('.banner2-2').mouseenter(function(){
		$('.banner2-2>div').show();
	}).mouseleave(function(){
		$('.banner2-2>div').hide();
	})
	$('.banner3>ul>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','');
	})
	$('.menu1>li').mouseenter(function(){
		$(this).css('background','#ccc').siblings().css('background','');
	})
	// 二级菜单开始
	$('.menu1>li:eq(0),.menu2').mouseenter(function(){
		$('.menu2').show(); 
	}).mouseleave(function(){
		$('.menu2').hide(); 
	})
	$('.menu1>li:eq(1),.menu3').mouseenter(function(){
		$('.menu3').show(); 
	}).mouseleave(function(){
		$('.menu3').hide(); 
	})
	$('.menu2b>ul>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','');
	})
	// 二级菜单结束
	// 轮播图开始
	var now=0;
	var len=$('.menu4>.tutu>li').length;
	function run(){
		s=setInterval(function(){
			$('.menu4>.tutu>li').fadeOut();
			$('.menu4>.num>li').css('background','');
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}		
			$('.menu4>.tutu>li:eq('+now+')').show();
			$('.menu4>.num>li:eq('+now+')').css('background','#fff');
		},2000)
	}	
	run();
	$('.menu4').mouseover(function(){
		clearInterval(s);
		$('.zuo,.you').css('display','block');
	}).mouseout(function(){
		run();
		$('.zuo,.you').css('display','none');
	})
	$('.menu4>.num>li').mouseover(function(){
		clearInterval(s);
		$('.menu4>.tutu>li').fadeOut();
		$('.menu4>.num>li').css('background','');		
		now=$(this).index();
		$('.menu4>.tutu>li:eq('+now+')').show();
		$('.menu4>.num>li:eq('+now+')').css('background','#fff');	
	})
	$('.zuo').click(function(){
		$('.menu4>.tutu>li').fadeOut();
		$('.menu4>.num>li').css('background','');		
		now--;
		if(now<0){
			now=len-1;
		}	
		$('.menu4>.tutu>li:eq('+now+')').show();
		$('.menu4>.num>li:eq('+now+')').css('background','#fff');	
	})
	$('.you').click(function(){
		$('.menu4>.tutu>li').fadeOut();
		$('.menu4>.num>li').css('background','');		
		now++;
		if(now>len-1){
			now=0;
		}	
		$('.menu4>.tutu>li:eq('+now+')').show();
		$('.menu4>.num>li:eq('+now+')').css('background','#fff');	
	})
	// 轮播图结束
	$('.menu5>div').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 0.7s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','',);
	})
	$('.span1').mouseenter(function(){
		$(this).css({background:'#f00',color:'#fff'})
	}).mouseleave(function(){
		$(this).css({background:'#fff',color:'#f00'})
	})
	$('.span2').mouseenter(function(){
		$(this).css({background:'#f00',color:'#fff'})
	}).mouseleave(function(){
		$(this).css({background:'#333',color:'#e5e58c'})
	}) 
	$('.menu6b1>ul>li').mouseenter(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index=$(this).index();
		$('.menu6b2>div').eq(index).show().siblings().hide();
	})
	$('.menu6b2>div>li').mouseenter(function(){
		$(this).css('color','#f00').siblings().css('color','#636363');
	})
	$('.menu6b3>ul>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','#c3a892');
	}) 
	// 倒计时
	setInterval(function(){
		var d1=new Date();
		var d2=new Date('2018/5/22');
		var cha=d2.valueOf()-d1.valueOf();
		var h=Math.floor(cha/(1000*60*60));
		cha%=1000*60*60;
		var m=Math.floor(cha/(1000*60));
		cha%=1000*60;
		var s=Math.floor(cha/(1000));
		$('.miao5>span:eq(0)').html(get(h));
		$('.miao5>span:eq(1)').html(get(m));
		$('.miao5>span:eq(2)').html(get(s));
	},1000)
	function get(num){
		if(num<10) num='0'+num;
		return num;
	}
	// 倒计时结束
	$('.miaosha2>.le').click(function(){
		$('.miaosha2>.run').animate({"left":"-788px"},1000,function(){
			}); 
	})
	$('.miaosha2>.rg').click(function(){
		$('.miaosha2>.run').animate({"left":"0"},1000,function(){
			}); 
	})
	var pa=0;
	var lent=$('.shatu>li').length;
	console.log(lent);
	function pao(){
		a=setInterval(function(){
			$('.shatu>li').fadeOut();
			$('.shabiao>li').css('background','#ccc');
			if(pa>=lent-1){
				pa=0;
			}else{
				pa++;
			}		
			$('.shatu>li:eq('+pa+')').show();
			$('.shabiao>li:eq('+pa+')').css('background','#f00');
		},2000)
	}	
	pao();
	// 主体开始 
	$('.one1>li').mouseenter(function(){
		$(this).addClass('one1ed').siblings().removeClass('one1ed');
		var index=$(this).index();
		$('.one2>div').eq(index).show().siblings().hide();
	})
	$('.one2>div>div').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
	})
	// 小轮播
	var xiao=0;
	var xlen=$('.lunbo>.lunzhu>li').length;
	console.log(xlen)	
	function xiaorun(){
		c=setInterval(function(){
			$('.lunbo>.lunzhu>li>div').hide();
			$('.lunnum>li').css('background','');
			xiao++;
			if(xiao>=xlen){
				xiao=0;
			}
			$('.lunbo>.lunzhu>li:eq('+xiao+')>div').show();
			$('.lunnum>li:eq('+xiao+')').css('background','#f00');
		},2000)
	}	
	xiaorun();
	$('.lunnum>li').mouseenter(function(){
		clearInterval(c);
		$('.lunbo>.lunzhu>li>div').hide();
		$('.lunnum>li').css('background','');
		xiao=$(this).index();;
		$('.lunbo>.lunzhu>li:eq('+xiao+')>div').show();
		$('.lunnum>li:eq('+xiao+')').css('background','#f00');	
	}).mouseleave(function(){
		xiaorun();
	})
	$('.lunzhu>li>div>div>img').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
	})
	$('.lunbo>.lunzhu>li>div').mouseenter(function(){
		clearInterval(c);
	}).mouseleave(function(){
		xiaorun();
	})
	// 小轮播结束
	$('.mright1>img').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
	})
	// 小轮播2
	var xiao2=0;
	var xlen2=$('.lunbo2>.lunzhu2>li').length;	
	function xiaorun2(){
		d=setInterval(function(){
			$('.lunbo2>.lunzhu2>li>div').hide();
			$('.lunnum2>li').css('background','');
			xiao2++;
			if(xiao2>=xlen2){
				xiao2=0;
			}
			$('.lunbo2>.lunzhu2>li:eq('+xiao2+')>div').show();
			$('.lunnum2>li:eq('+xiao2+')').css('background','#f00');
		},2000)
	}	
	xiaorun2();
	$('.lunnum2>li').mouseenter(function(){
		clearInterval(d);
		$('.lunbo2>.lunzhu2>li>div').hide();
		$('.lunnum2>li').css('background','');
		xiao2=$(this).index();;
		$('.lunbo2>.lunzhu2>li:eq('+xiao2+')>div').show();
		$('.lunnum2>li:eq('+xiao2+')').css('background','#f00');	
	}).mouseleave(function(){
		xiaorun2();
	})
	$('.lunzhu2>li>div>div>img').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
	})
	$('.lunbo2>.lunzhu2>li>div').mouseenter(function(){
		clearInterval(d);
	}).mouseleave(function(){
		xiaorun2();
	})
	// 小轮播2结束
	$('.gefour>div,.fourtu>div').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 1s ease'});
		$(this).children().css({color:'#f00',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
		$(this).children().css('color','');
	})
	$('.guang1,.guang2>img,.hot>img,.cool>img,.haotu>img,.twotu>img,.threetu1>img,.threetu2>img,.wentu1>img,.wentu2>img,.wentu3>img,.zhi').mouseenter(function(){
		$(this).css({opacity:'0.6',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
	})
	$('.kuang>img,.kuang2>div>img,.kuang3>img,.kuang4>div>img').mouseenter(function(){
		$(this).css({opacity:'0.95',transition:'all 1s ease'});
	}).mouseleave(function(){
		$(this).css('opacity','');
	}) 
	// 特色轮播
	var mow=0;
	var tlen=$('.maintesetu>div').length;
	function trun(){
		e=setInterval(function(){
			$('.maintesetu>div').hide();
			$('.maintese>ul>li').css('background','');
			if(mow>=tlen-1){
				mow=0;
			}else{
				mow++;
			}		
			$('.maintesetu>div:eq('+mow+')').show();
			$('.maintese>ul>li:eq('+mow+')').css('background','#f00');
		},2000)
	}	
	trun();
	$('.maintese').mouseover(function(){
		clearInterval(e);
	}).mouseout(function(){
		trun();
	})
	$('.maintese>ul>li').mouseover(function(){
		clearInterval(e);
		$('.maintesetu>div').hide();
		$('.maintese>ul>li').css('background','');		
		mow=$(this).index();
		$('.maintesetu>div:eq('+mow+')').show();
		$('.maintese>ul>li:eq('+mow+')').css('background','#f00');	
	})
	$('.guang>div').mouseenter(function(){
		$(this).children().eq(3).animate({top:'200'},200);
		$(this).css('opacity','0.7');
	}).mouseleave(function(){
		$(this).children().eq(3).animate({top:'300'},100);
		$(this).css('opacity','');
	})
})