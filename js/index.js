window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');

    // ハンバーガーメニューボタンが存在する場合のみイベントリスナーを追加
    if ($button && $menu) {
        $button.addEventListener('click', function () {
            if ($menu.classList.contains('is-show')) {
                $menu.classList.remove('is-show');
            } else {
                $menu.classList.add('is-show');
            }
        });

        // メニュー外をクリックした時にメニューを閉じる
        document.addEventListener('click', function(e) {
            if (!$button.contains(e.target) && !$menu.contains(e.target)) {
                $menu.classList.remove('is-show');
            }
        });

        // ウィンドウサイズが変更された時にメニューを閉じる
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                $menu.classList.remove('is-show');
            }
        });
    }
});


$(function () {
    $(window).scroll(function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});



