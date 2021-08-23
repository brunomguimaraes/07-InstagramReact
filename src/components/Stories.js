import { Story } from "./generic_components/Story"

export function Stories () {
    const  stories = [
        {
            username: "9gag",
            img: "assets/img/9gag.svg"
        },
        {
            username: "meowed",
            img: "assets/img/meowed.svg"
        },
        {
            username: "barked",
            img: "assets/img/barked.svg"
        },
        {
            username: "nathanwpylestrangeplanet",
            img: "assets/img/nathanwpylestrangeplanet.svg"
        },
        {
            username: "wawawicomics",
            img: "assets/img/wawawicomics.svg"
        },
        {
            username: "respondeai",
            img: "assets/img/respondeai.svg"
        },
        {
            username: "filomoderna",
            img: "assets/img/filomoderna.svg"
        },
        {
            username: "memeriagourmet",
            img: "assets/img/memeriagourmet.svg"
        }
    ];
    return (
        <div class="stories">
            {stories.map(story => <Story username={story.username} img={story.img} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}