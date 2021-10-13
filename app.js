export const competitionManager = {
    name: "Gestor de Competições"
}

export class Competition{ // Criar classe
    name;
    startDate;
    endDate;
    teams = [];
    #matches = [];


    constructor(name, startDate,endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    addTeam(teamName) {
        this.teams.push(new Team(teamName));
    }

    getTeam(teamName) {
        for(let pos = 0; pos < this.teams.length; pos++) {
            if(this.teams[pos].name == teamName) {
                return this.teams[pos]
            }
        }
        return 0;
    }

    addMatch(homeTeam, awayTeam, location, winner) { // add a match and give 3 points to the winner
        this.#matches.push(new Match(homeTeam,awayTeam,location,winner));
        let winnerTeam = this.getTeam(winner.name);
        winnerTeam.points = 3;
        if(this.searchteam(winnerTeam.name) >= 0) {
            this.teams[this.searchteam(winnerTeam.name)] = winnerTeam;
        }
        this.teams.sort(this.compare);
    }


    searchteam(teamName) {
        for(let pos = 0; pos < this.teams.length; pos++) {
            if(this.teams[pos].name == teamName) {
                return pos
            }
        }
        return -1;
    }

    compare( a, b ) {
        if ( a.points < b.points ){
          return -1;
        }
        if ( a.points > b.points ){
          return 1;
        }
        return 0;
    }

    get showTeams() {
        let teamsList = '';
        for (let pos = 0; pos < this.teams.length; pos++) {
            teamsList = teamsList + ' <br> ' + this.teams[pos].toString();
        }
        return teamsList;    
    }

    toString() {
        return `${this.name} - (${this.startDate}) (${this.endDate})`;
    }


}  
class Team{
    name;
    points;
    #position;

    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    set rankingPosition(newPosition) {
        this.#position = newPosition;
    }

    get currentPosition() {
        return `${this.#position}`;
    }

    toString() {
        return `${this.name} - ${this.points}`;
    }
    
}

class Match{
    homeTeam;
    awayTeam;
    location;
    winner;

    constructor(homeTeam, awayTeam,location, winner)
    {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.location = location;
        this.winner = winner;
    }
}

const competicao1 = new Competition('Competição1',new Date(2021,1,1), new Date(2021,12,1));

competicao1.addTeam('FC Porto')
competicao1.addTeam('SL Benfica')
competicao1.addTeam('Sporting CP')
competicao1.addTeam('SC Braga')

const equipa1 = competicao1.getTeam('FC Porto')
const equipa2 = competicao1.getTeam('SL Benfica')
const equipa3 = competicao1.getTeam('Sporting CP')
const equipa4 = competicao1.getTeam('SC Braga')

competicao1.addMatch(equipa1, equipa2, 'Porto', equipa1)
competicao1.addMatch(equipa3, equipa4, 'Lisboa', equipa4)


const competicao2 = new Competition('Competição2',new Date(2021,9,1), new Date(2021,12,31));

competicao2.addTeam('A')
competicao2.addTeam('B')
competicao2.addTeam('C')
competicao2.addTeam('D')

const equipa_A = competicao2.getTeam('A')
const equipa_B = competicao2.getTeam('B')
const equipa_C = competicao2.getTeam('C')
const equipa_D = competicao2.getTeam('D')

competicao2.addMatch(equipa_A, equipa_B, 'Algarve', equipa_B)
competicao2.addMatch(equipa_C, equipa_D, 'Braga', equipa_C)


const competicoes = new Map(); 


competicoes.set(competicao1.name,competicao1);
competicoes.set(competicao2.name,competicao2);

    

Object.defineProperties(competitionManager, {
    competitions: { value: competicoes, writable: false} 
});

competitionManager.addNewTeam = function (competitionName,name) {
    const competition = competitions.find(competition => competition.name === competitionName); // Sintaxe mais concisa, que define o método de procura "em situ" como uma "arrow function" ("lambda")
    competition.addTeam(name);
    for (let i = 0;  i < competitionManager.competitions.length(); i++) {
        if(competitionManager.competitions[i].name == competitionName) {
            competitionManager.competitions[i] = competition;
        }
    }
}