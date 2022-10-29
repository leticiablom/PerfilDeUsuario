
function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                    {"nome":"Maria Eduarda","aniversario":"12/02","email":"dudinha.maria@gmail.com","status":"estudante universitária"}
    ]}
    }
    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = $("#inputNome").val();
    let strAniversario = $("#inputAniversario").val();
    let strEmail = $('#inputEmail').val();
    let strStatus = $("#inputStatus").val();

        let contato = {
        nome: strNome,
        aniversario: strAniversario,
        email: strEmail,
        status: strStatus
    };

    objDados.contatos.push (contato);
    contato = localStorage.setItem('db',  JSON.stringify (contato));
    


    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();


    for (i=0; i< objDados.contatos.length; i++) {
        strHtml = `
        <h2>${objDados.contatos[i].nome}</h2>
        <p><b>Aniversário:</b> ${objDados.contatos[i].aniversario}<br>
        <b>Email:</b> ${objDados.contatos[i].email}<br>
        <b>Status:</b> ${objDados.contatos[i].status}</p>`
        localStorage.getItem('db');
    }
    tela.innerHTML = strHtml;
}


window.onload = function (){
    imprimeDados();
}

function deletarAnterior(){
    localStorage.clear();
}




// Configura os botões
document.getElementById ('btnInsert').addEventListener ('click',deletarAnterior);
document.getElementById ('btnInsert').addEventListener ('click',incluirContato);
localStorage.clear()