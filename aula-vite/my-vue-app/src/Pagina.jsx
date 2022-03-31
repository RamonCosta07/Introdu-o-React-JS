import React from "react";

export default function Pagina() {
    var hoje = new Date();
    var horaAtual = hoje.getHours();
    return (
        <div>
            <Titulo hora={horaAtual} />
            <Conteudo />
            <Rodape />
        </div>
      );
}

function Titulo({hora}) {
    var mensagem;
    if (hora < 12) {
        mensagem = "Bom dia";
    } else if (hora < 18) {
        mensagem = "Boa tarde";
    } else {
        mensagem = "Boa noite";
    }
    return <h1>{mensagem}</h1>;
}

function Conteudo() {
    return <div>Conteúdo da Página</div>
}

function Rodape() {
    return <footer>Rodapé</footer>
}