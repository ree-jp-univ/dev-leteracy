async function loadArticles() {
    const listResponse = await fetch('articles/list.txt');
    if (!listResponse.ok) {
        throw new Error('記事リストの読み込みに失敗しました');
    }
    const listText = await listResponse.text();
    const articleFiles = listText.trim().split('\n').filter(line => line.trim());

    const articles = [];
    for (const filename of articleFiles) {
        const slug = filename.replace('.md', '');
        articles.push(await loadArticle(slug));
    }

    return articles;
}

async function loadArticle(slug) {
    const response = await fetch(`articles/${slug}.md`);
    if (!response.ok) {
        throw new Error(`記事「${slug}」の読み込みに失敗しました`);
    }
    const content = await response.text();
    const lines = content.split('\n');
    const meta = {};

    for (const line of lines) {
        if (line.includes(':')) {
            const [key, value] = line.split(':');
            meta[key] = value;
        } else if (line.startsWith('#')) {
            break;
        }
    }

    return { slug, title: meta['title'] || '不明', content, author: meta['author'] || '不明', publishDate: meta['publishDate'] || '不明', meta };
}
