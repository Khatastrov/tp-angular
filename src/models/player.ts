export class Player {

    id: number;
    name: string;
    number: number;
    role: string;
    team: string;
    hurt: boolean;

    constructor(
        id: number,
        name: string,
        number: number,
        role: string,
        team: string,
        hurt: boolean
    ) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.role = role;
        this.team = team;
        this.hurt = hurt;
    }

}
