// As props desse componente referenciam quando o botão está ativo ou não. Se ativo, o usuário consegue iteragir com ele, caso contrário, o botão fica desativado.

export function IconButton(props) {
    return (
        <button
            className={props.disabled ? "opacity-50 bg-blblack/20 border border-razzmatazz/50 rounded-md p-1.5" : "bg-blblack/20 border border-razzmatazz rounded-md p-1.5"}
            {...props}
        >
        </button>
    );
}