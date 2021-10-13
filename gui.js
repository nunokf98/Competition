import { competitionManager, Competition } from "./app.js"; // Refereri a um objeto declarado como exportado naquele outro ficheiro

const teams = document.getElementById('teams');

let td;

let div;

function loadTableData(items) {
    const table = document.getElementById("competitions");
    table.innerHTML = "";
    items.forEach( item => {
      let row = table.insertRow();
      let name = row.insertCell(0);
      name.innerHTML = item.name;
      let startDate = row.insertCell(1);
      startDate.innerHTML = `${item.startDate.toLocaleString()}`;
      let endDate = row.insertCell(2);
      endDate.innerHTML = `${item.endDate.toLocaleString()}`;
    });
  }
loadTableData(competitionManager.competitions);


for (const competition of competitionManager.competitions.values()) { // Criar uma iteração para obter todas as consultas
    div = document.createElement("div"); // Criar um <div> a inserir na <table>
    let h4 = document.createElement("h4");
    h4.textContent = competition.name;
    div.appendChild(h4);
    let table = document.createElement('table');
    let headers = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let header1 = document.createElement('td');
    header1.textContent = "Equipas";
    let header2 = document.createElement('td');
    header2.textContent = "Pontos";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    headers.appendChild(headerRow);
    table.appendChild(headers);
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


let formulario = document.getElementById("competicao");
formulario.addEventListener("submit", criarCompeticao); // Aquando de registo de "listeners" (também chamados "handlers" ou "delegates"), é preciso nomear o evento e fornecer o nome da função a invocar

function criarCompeticao(submissão) { // Este é um método "callback, isto é, será invocado pelo navegador (e não pelo nosso código fonte)
    const formulário = submissão.target;
    submissão.preventDefault(); // Evitar que o página recarregue, o comportamento padrão aquando de submissão de formulários
    // Opcionalmente validar se os valores são conforme o que a app requer
    const competicao = new Competition(formulário.name.value, new Date(formulário.startDate.value), new Date(formulário.endDate.value));
    competitionManager.competitions.set(competicao.name, competicao);
    loadTableData(competitionManager.competitions);
    refrescarCompeticoes();
}

function refrescarCompeticoes() {
    const select = document.getElementById("equipa").competicao_equipa; // Um <select> no formulário com id="consulta"
    while (select.firstChild)
        select.removeChild(select.firstChild); // Remover para poder reencher
    let option;
    for (const competicao of competitionManager.competitions.keys()) { // Criar uma iteração para visualizar todos os emails dos paciente
        option = document.createElement("option");
        option.setAttribute("value", competicao);
        option.textContent = competicao;
        select.appendChild(option);
    }
}

let formulario_equipas = document.getElementById("equipa");
formulario_equipas.addEventListener("submit", criarEquipa); // Aquando de registo de "listeners" (também chamados "handlers" ou "delegates"), é preciso nomear o evento e fornecer o nome da função a invocar

function criarEquipa(submissão) { // Este é um método "callback, isto é, será invocado pelo navegador (e não pelo nosso código fonte)
    const formulário = submissão.target;
    submissão.preventDefault(); // Evitar que o página recarregue, o comportamento padrão aquando de submissão de formulários
    // Opcionalmente validar se os valores são conforme o que a app requer
    competitionManager.addNewTeam(formulario_equipas.competicao_equipa.value,formulario_equipas.team_name.value)
    loadTableData(competitionManager.competitions);
    refrescarCompeticoes();
}

refrescarCompeticoes();