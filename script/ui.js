import api from "./api.js"

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos')

        try {
           const pensamento = await api.bucarPensamentos()
           pensamento.forEach( pensamento => {
            listaPensamentos.innerHTML += `
            <li class="li-pensamento" data-id="${pensamento.id}">
            <img src="assets/img/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
            <div class="pensamento-conteudo">${pensamento.conteudo}</div>
            <div class="pensamento-autoria">${pensamento.autoria}</div>
            </li>
            `
           });
        } 
        catch {
            alert('Erro ao renderizar pensamentos')
        }
    }
}

export default ui;