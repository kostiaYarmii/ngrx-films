export class Film {
    id: number;
    name: string;
    rate: number;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.rate = 0;
    }
}