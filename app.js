const competitionManager = {
    name: "Gestor de Competições"
}

class Competition{ // Criar classe
    name;
    startDate;
    endDate;
    #teams = [];
    #matches = [];


    constructor(name, startDate,endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    addTeam(teamName) {
        this.#teams.push(new Team(teamName));
    }

    getTeam(teamName) {
        for(let pos = 0; pos < this.#teams.length; pos++) {
            if(this.#teams[pos].name == teamName) {
                return this.#teams[pos]
            }
        }
        return 0;
    }

    addMatch(homeTeam, awayTeam, location, result) {
        this.#matches.push(new Match(homeTeam,awayTeam,location,result));
    }

    get showTeams() {
        let teamsList = '';
        for (let pos = 0; pos < this.#teams.length; pos++) {
            teamsList = teamsList + ' <br> ' + this.#teams[pos].toString();
        }
        return teamsList;    
    }

    toString() {
        return `${this.name} - (${this.startDate}) (${this.endDate})`;
    }


}  
class Team{
    name;
    #points;
    #position;

    constructor(name) {
        this.name = name;
    }

    set addPoints(newPoints) {
        this.#points = newPoints;
    }

    get CurrentPoints() {
        return `${this.#points}`
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

class Ranking{
    team;
    #position;

    constructor(team, position) {
        this.team = team
        this.position = position;
    }

    set addPosition(NewPosition) {
        this.#position = NewPosition;
    }

    get teamPosition() {
        return `${this.#position}`;
    }

    toString() {
        return `${this.team} - ${this.position}`;
    }
}


const competicao1 = new Competition('Competição1','01/01/2021', '01/12/2021');

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


const competicao2 = new Competition('Competição2','01/09/2021', '31/12/2021');

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