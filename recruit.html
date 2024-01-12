// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $(".fadeUpTrigger").each(function () {
    //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp"); // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass("fadeUp"); // 画面外に出たらfadeInというクラス名を外す
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $(".fadeDownTrigger").each(function () {
    //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeDown"); // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass("fadeDown"); // 画面外に出たらfadeDownというクラス名を外す
    }
  });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

function delayScrollAnime() {
  var time = 0.2; //遅延時間を増やす秒数の値
  var value = time;
  $(".delayScroll").each(function () {
    var parent = this; //親要素を取得
    var elemPos = $(this).offset().top; //要素の位置まで来たら
    var scroll = $(window).scrollTop(); //スクロール値を取得
    var windowHeight = $(window).height(); //画面の高さを取得
    var childs = $(this).children(); //子要素を取得

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      //指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {
        if (!$(this).hasClass("fadeUp")) {
          //アニメーションのクラス名が指定されているかどうかをチェック

          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s"); //アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp"); //アニメーションのクラス名を追加
          value = value + time; //delay時間を増加させる

          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if (childs.length - 1 == index) {
            $(parent).removeClass("play");
          }
        }
      });
    } else {
      $(childs).removeClass("fadeUp"); //アニメーションのクラス名を削除
      value = time; //delay初期値の数値に戻す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述


//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});




$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#r-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#r-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});
