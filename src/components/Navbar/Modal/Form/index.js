
export const Form = () => {
    return (
        <form action="">
            <ul>
                <li>Nombre de usuario: </li>
                <input class="rounded border-black" type="text" name="userName" autoComplete="off" id="userNameInput" />
                <li>Contraseña: </li>
                <input class="rounded border-black" type="password" name="userPassword" id="userPasswordInput" autoComplete="off" />
            </ul>
        </form>
    )
}