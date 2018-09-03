$(function(){
	setTimeout(function(){
		$('.zhezhao').css("height",$(document).height());
		$('.zhezhao').css("width",$(document).width());
		$('.zhezhao').show();
		$('.shengming').show();
	},1500)
	$('.sheng1>span,.ss2').click(function(){
		$('.zhezhao').fadeOut();
	});
	//遮罩结束
	$('.deng').mouseenter(function(){
		$(this).css({color:'#c81623',textDecoration:'underline'})
	}).mouseleave(function(){
		$(this).css({color:'#f00',textDecoration:'none'})
	})
	$('.k2>input').focus(function(){
		$('.k2').css({borderTop:'1px solid #333',borderRight:'1px solid #333',borderBottom:'1px solid #333'});
		$('.k1').css('borderRight','1px solid #333');
		$('.zhu3').html('<i class="fa fa-exclamation-circle"></i> 验证完成后，你可以使用该手机登录或找回密码');
		$('.zhuk').unbind();
	}).blur(function(){
		$('.k2').css({borderTop:'1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'});
		$('.k1').css('border','1px solid #ccc');
		$('.zhu3').html('');
		$('.zhuk').bind({mouseenter:function(){
			$('.k1').css('border','1px solid #999');
			$('.k2').css({borderTop:'1px solid #999',borderRight:'1px solid #999',borderBottom:'1px solid #999'});
		},mouseleave:function(){
			$('.k1').css('border','1px solid #ccc');
			$('.k2').css({borderTop:'1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'});
		}});
	})
	$('.k1').focus(function(){
		$('.k1').css('border','1px solid #333');
		$('.k2').css({borderTop:'1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'});
		$('.guo').show();
		$('.zhuk').unbind();
	}).blur(function(){
		$('.k1').css('border','1px solid #ccc');
		$('.guo').hide();
		$('.zhuk').bind({mouseenter:function(){
			$('.k1').css('border','1px solid #999');
			$('.k2').css({borderTop:'1px solid #999',borderRight:'1px solid #999',borderBottom:'1px solid #999'});
		},mouseleave:function(){
			$('.k1').css('border','1px solid #ccc');
			$('.k2').css({borderTop:'1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'});
		}});
	})
	$('.zhuk').mouseenter(function(){
		$('.k1').css('border','1px solid #999');
		$('.k2').css({borderTop:'1px solid #999',borderRight:'1px solid #999',borderBottom:'1px solid #999'});
	}).mouseleave(function(){
		$('.k1').css('border','1px solid #ccc');
		$('.k2').css({borderTop:'1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'});
	})
	$('.zhu4').mouseenter(function(){
		$('.zhu4').css('border','1px solid #999');
	}).mouseleave(function(){
		$('.zhu4').css('border','1px solid #ccc');
	})
	$('.zhu5').mouseenter(function(){
		$('.zhu5').css('background','#c81623');
	}).mouseleave(function(){
		$('.zhu5').css('background','#e2231a');
	})
	$('.zhu5').click(function(){
		$('.zhu3').html('<span id="woc"><i class="fa fa-exclamation-circle"></i> 请输入手机号</span>');
	})
	$('.zhu6>li').mouseenter(function(){
		$(this).css('color','#f00');
	}).mouseleave(function(){
		$(this).css('color','');
	})
})