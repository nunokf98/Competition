const nome = "Competição";

class Competition{ // Criar classe
    name;
    startDate;
    endDate;
    teams = [];
    matches = [];
    ranking = [];


    constructor(name, startDate,endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    addTeam(teamName) {
        this.teams.push(new Team(teamName));
    }

    addMatch(homeTeam, awayTeam, location, result) {
        this.matches.push(new Match(homeTeam,awayTeam,location,result));
    }

    get showTeams() {
        for (let pos = 0; pos < this.teams.length; pos++) {
            teamsList = teamslist + ' <br> ' + teams[pos];
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

    constructor(name) {
        this.name = name;
    }

    set Points(newPoints) {
        this.#points = newPoints;
    }

    get CurrentPoints() {
        return `${this.#points}`
    }

    toString() {
        return `${this.name} - ${this.points}`;
    }
    
}

class Match{
    homeTeam;
    awayTeam;
    location;
    result;

    constructor(homeTeam, awayTeam,location, result)
    {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.location = location;
        this.result = result;
    }
}

class Ranking{
    team;
    #position;

    constructor(team, position) {
        this.team = team
        this.position = position;
    }

    set Position(NewPosition) {
        this.#position = NewPosition;
    }

    get TeamPosition() {
        return `${this.#position}`;
    }

    toString() {
        return `${this.team} - ${this.position}`;
    }
}

