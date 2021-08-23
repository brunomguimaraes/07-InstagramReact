export function User (props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.login}</strong>
                {props.name}
            </div>
        </div>
    );
}