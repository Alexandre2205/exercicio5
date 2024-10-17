const valordeinput = () => {
    const inputElement = document.getElementById('tarefa'); 
    const valor = inputElement.value; 
    if(valor) {
        const usuario = !!paragrafo.find(tarefa => tarefa === valor);
        if(usuario){
            alert('Essa tarefa ja existe');
        } else {
            paragrafo.push(valor);
            let check = `<input type="checkbox" name="checkbox" id="${paragrafo.length}"></input>`
            const container = document.getElementById("paragrafos")
            paragrafo.forEach(e => {
            document.write(e + check + '<br>' )
            });
        }             
    } else alert('Digite a tarefa')
}

const paragrafo= [ 'tarefa 1','tarefa 2','tArefa 4']

botao = document.getElementById('botao');
botao.addEventListener('click',valordeinput)