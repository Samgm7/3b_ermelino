function logar(usuario, senha){
    alert("logado com a funcão nomeada!")
    alert('Olá, ' + usuario)
}
logar("ledson123", 12345)


const conectar = function(usuario, senha) {
    alert('logado coma função anonima!')
    alert('Olá, '+ usuario)
}
conectar("joilson", "13sdfs")


// ARROW FUNCTIONS OU FUNÇOES FLECHA
const colorir = () => {
    alert("função flecha em ação!")
}
colorido() // execução