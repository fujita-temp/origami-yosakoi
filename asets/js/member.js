// JavaScript Document
// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述





	$('.slider').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 7000,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		responsive: [
			{
			breakpoint: 700,//モニターの横幅が700px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 480,//モニターの横幅が480px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1.5枚見せる
			}
		}
	]
	});