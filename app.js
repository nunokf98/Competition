const nome = "Competição";

class Competition{ // Criar classe
    name;
    startDate;
    endDate;


    constructor(name, startDate,endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    toString() {
        return `${this.name} - (${this.startDate}) (${this.endDate})`;
    }
}  
class Team{
    competition;
    name;
    points;

    constructor(competition,name) {
        this.competition = competition;
        this.name = name;
    }

    toString() {
        return `${this.name} - ${this.points}`;
    }
    
}

class Match{
    competition;
    homeTeam;
    awayTeam;
    location;
    result;

    constructor(competition,homeTeam, awayTeam,location)
    {
        this.competition = competition;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.location = location;
    }
}

class Ranking{
    competition
    team;
    position;

    constructor(competition, team, position) {
        this.competition = competition;
        this.team = team
        this.position = position;;
    }

    toString() {
        return `${this.team} - ${this.position}`;
    }
}

