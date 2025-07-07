window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});


$(function () {
    $(window).scroll(function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});

// 小説リーダー機能
class NovelReader {
    constructor() {
        this.init();
    }

    init() {
        this.loadNovelData();
    }

    loadNovelData() {
        // URLパラメータから小説IDを取得
        const urlParams = new URLSearchParams(window.location.search);
        const novelId = urlParams.get('id');
        
        // 実際の実装では、ここでサーバーまたはローカルストレージから小説データを取得
        this.novelData = {
            id: novelId || 1,
            title: 'サンプル小説タイトル',
            author: '作者名',
            publishDate: '2025年7月7日',
            content: 'これは小説の内容です。小説の始まりです。\n\n物語は静かな町から始まりました。主人公は朝の散歩をしながら、新しい一日の始まりを感じていました。\n\n空は青く、鳥たちが美しい歌声を響かせていました。\n\n主人公は不思議な出来事に遭遇しました。それは彼の人生を大きく変える出来事でした。\n\n謎めいた老人が現れ、重要な手がかりを与えました。\n\n真実が明らかになり始めました。主人公は困難な選択を迫られました。\n\n物語は予想外の展開を見せ、読者を驚かせます。'
        };

        this.updateNovelDisplay();
    }

    updateNovelDisplay() {
        const titleElement = document.getElementById('novelTitle');
        const authorElement = document.getElementById('novelAuthor');
        const publishDateElement = document.getElementById('publishDate');
        const textContentElement = document.getElementById('textContent');

        if (titleElement) titleElement.textContent = this.novelData.title;
        if (authorElement) authorElement.textContent = this.novelData.author;
        if (publishDateElement) publishDateElement.textContent = this.novelData.publishDate;

        if (textContentElement) {
            textContentElement.innerHTML = this.novelData.content
                .split('\n\n')
                .map(paragraph => `<p>${paragraph}</p>`)
                .join('');
        }
    }
}

// 小説リーダーページでのみ初期化
if (document.querySelector('.novel-reader')) {
    document.addEventListener('DOMContentLoaded', () => {
        new NovelReader();
    });
}