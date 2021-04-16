import fetch from 'node-fetch';


// Django APIサーバーURL
const SERVERURL = 'https://127.0.0.1:8000/';

// 投稿一覧を取得
export async function getAllPostData() {
    const res = await fetch(new URL(`$(SERVERURL)api/post/`));
    const posts = await res.json();
    return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
    const res = await fetch(new URL(`$(SERVERURL)api/post/`));
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    })
}

// 投稿詳細を取得
export async function getAllPostData(id) {
    const res = await fetch(new URL(`$(SERVERURL)api/post/$(id)/`));
    const posts = await res.json();
    return posts;
}