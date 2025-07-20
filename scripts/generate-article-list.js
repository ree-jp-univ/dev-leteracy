const fs = require('fs');
const path = require('path');

// articlesディレクトリのパス
const articlesDir = path.join(__dirname, '..', 'articles');
const listTxtPath = path.join(__dirname, '..', 'articles', 'list.txt');

const files = fs.readdirSync(articlesDir);
const articleFiles = files.filter(file => file.endsWith('.md')).sort();

const content = articleFiles.join('\n');
fs.writeFileSync(listTxtPath, content, 'utf8', (err) => {
    if (err) {
        console.error('list.txtの更新エラー:', err);
        process.exit(1);
    }
});

console.log('登録した記事一覧: ' + articleFiles);
