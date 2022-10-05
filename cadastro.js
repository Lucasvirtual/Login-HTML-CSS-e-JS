let bancoUsuarios = []

function cadastrarUsuario(nome, usuario, email, senha) {

    if (bancoUsuarios.length == 0) {
        usuarioNew = {
            nome: nome,
            usuario: usuario,
            email: email,
            senha: senha,
        }
        bancoUsuarios.push(usuarioNew)
        console.log(bancoUsuarios)
        return alert("Usuario cadastrado com sucesso")

    } else {
        novoUsuarios = {
            nome: nome,
            usuario: usuario,
            email: email,
            senha: senha,
        }
        for (let i in bancoUsuarios) {

            if (bancoUsuarios[i].usuario == usuario || bancoUsuarios[i].email == email) {
                return alert("Nome de usuario ou email ja existem")
            } else {
                bancoUsuarios.push(novoUsuarios)
                console.log(bancoUsuarios)
                return alert("Usuário cadastrado com sucesso!")
            }
        }

    }
}

function cadastrar() {
    let nome = document.getElementById("nome").value
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    cadastrarUsuario(nome, usuario, email, senha)

}

console.log("------------------")
console.log("lista de usuarios")
console.log("------------------")
console.log(bancoUsuarios)