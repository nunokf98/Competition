import { competitionManager } from "./app.js"; // Refereri a um objeto declarado como exportado naquele outro ficheiro

const competitions = document.getElementById('competitions');

const teams = document.getElementById('teams');

let tr; // Referirão a novos elementos HTML a inserir na página
let td;

let div;

for (const competition of competitionManager.competitions.values()) { // Criar uma iteração para obter todas as consultas
    tr = document.createElement("tr"); // Criar um <tr> a inserir na <table>
    competitions.appendChild(tr);
    for (const campo of Object.values(competition)) { // Iterar em todos os campos de cada consulta
        td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
        td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
        tr.appendChild(td);
    }
}


for (const competition of competitionManager.competitions.values()) { // Criar uma iteração para obter todas as consultas
    div = document.createElement("div"); // Criar um <div> a inserir na <table>
    let h4 = document.createElement("h4");
    h4.textContent = competition.name;
    div.appendChild(h4);
    let table = document.createElement('table');
    let body = document.createElement('tbody')
    for(let i = 0; i < competition.teams.length;i++) {
        let tr_teams = document.createElement('tr')
        for(const campo of Object.values(competition.teams[i])) {
            td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
            td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
            tr_teams.appendChild(td); 
        }
        body.appendChild(tr_teams);
        table.appendChild(body);
        div.appendChild(table);
    }
    teams.appendChild(div);
}