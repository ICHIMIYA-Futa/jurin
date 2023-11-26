//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {
  //id名を指定
  strokeWidth: 0, //進捗ゲージの太さ
  duration: 2500, //時間指定(1000＝1秒)
  trailWidth: 0, //線の太さ
  text: {
    //テキストの形状を直接指定
    style: {
      //天地中央に配置
      position: "absolute",
      left: "50%",
      top: "70%",
      padding: "0",
      margin: "0",
      transform: "translate(-50%,-50%)",
      "font-size": "2.5rem",
      color: "#fff",
    },
    autoStyleContainer: false, //自動付与のスタイルを切る
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + " %"); //テキストの数値
  },
});

//アニメーションスタート
bar.animate(1.0, function () {
  //バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800); //アニメーションが終わったら#splashエリアをフェードアウト
});

// ------------------------

var beforePos = 0; //スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
  var elemTop = $("#intro").offset().top; //#area-2の位置まできたら
  var scroll = $(window).scrollTop();
  //ヘッダーの出し入れをする
  if (scroll == beforePos) {
    //IE11対策で処理を入れない
  } else if (elemTop > scroll || 0 > scroll - beforePos) {
    //ヘッダーが上から出現する
    $("#header").removeClass("UpMove"); //#headerにUpMoveというクラス名を除き
    $("#header").addClass("DownMove"); //#headerにDownMoveのクラス名を追加
  } else {
    //ヘッダーが上に消える
    $("#header").removeClass("DownMove"); //#headerにDownMoveというクラス名を除き
    $("#header").addClass("UpMove"); //#headerにUpMoveのクラス名を追加
  }

  beforePos = scroll; //現在のスクロール値を比較用のbeforePosに格納
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  ScrollAnime(); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  ScrollAnime(); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
var headerH = $("#header").outerHeight(true); //headerの高さを取得
$("#g-navi li a").click(function () {
  var elmHash = $(this).attr("href");
  var pos = $(elmHash).offset().top - headerH; //header分の高さを引いた高さまでスクロール
  $("body,html").animate({ scrollTop: pos }, 1000);
  return false;
});

// ------------------------
particlesJS("particles-js", {
  particles: {
    number: { value: 9, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "image",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "images/leaf-2.png", width: 100, height: 100 },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 4.810221721157459,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 0.5, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

$(".slider").slick({
  arrows: false, //左右の矢印はなし
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900, //スライドのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: "linear", //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4, //スライドを画面に4枚見せる
  slidesToScroll: 1, //1回のスライドで動かす要素数
  responsive: [
    {
      breakpoint: 769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2, //スライドを画面に2枚見せる
      },
    },
    {
      breakpoint: 426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5, //スライドを画面に1.5枚見せる
      },
    },
  ],
});
