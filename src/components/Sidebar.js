import { Sugestao } from "./generic_components/Sugestao";
import { User } from "./generic_components/User"

export function Sidebar () {
    const user = {
        login: "catanacomics",
        name: "Catana",
        img: "assets/img/catanacomics.svg"
    }
    const sugestoes = [
        {
            username: "bad.vibes.memes",
            img: "assets/img/bad.vibes.memes.svg"
        },
        {
            username: "chibirdart",
            img: "assets/img/chibirdart.svg"
        },
        {
            username: "razoesparaacreditar",
            img: "assets/img/razoesparaacreditar.svg"
        },
        {
            username: "adorable_animals",
            img: "assets/img/adorable_animals.svg"
        },
        {
            username: "smallcutecats",
            img: "assets/img/smallcutecats.svg"
        }
    ]
    return (
        <div class="sidebar">
            <User login={user.login} name={user.name} img={user.img} />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(sugestao => <Sugestao username={sugestao.username} img={sugestao.img} />)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}