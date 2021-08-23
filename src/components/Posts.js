import { Post } from "./generic_components/Post"

export function Posts () {
    const posts = [
        {
            username: "meowed",
            img: "assets/img/meowed.svg",
            content: "assets/img/gato-telefone.svg",
            likedBy: "respondeai",
            likedImg: "assets/img/respondeai.svg",
            likedAmount: "101.523"
        },
        {
            username: "barked",
            img: "assets/img/barked.svg",
            content: "assets/img/dog.svg",
            likedBy: "adorable_animals",
            likedImg: "assets/img/adorable_animals.svg",
            likedAmount: "99.159"
        }
    ];

    return (
        <div class="posts">
            {posts.map(post => <Post username={post.username} img={post.img} content={post.content} likedBy={post.likedBy} likedImg={post.likedImg} likedAmount={post.likedAmount} />)}
        </div>
    );
}