$(function(){


// // 最上部への移動ボタンのclickイベント
  $('#go-top').click(function() {
    $('html, body').animate({
      'scrollTop': 0} , 900);
  });


  // ヘッダー内の<a>タグをクリックしたときのclickイベント
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate( {
      'scrollTop': position} ,500);
  });


});
