function logar(){
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value

    if (login == "admin" && senha == "admin"){
        location.href = "meuportifolio/index.html"
    }else{
        alert("Usuário ou senha inválida")
    }

    console.log(login + senha)
}