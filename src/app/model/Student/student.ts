import { Deck } from "../Deck/deck";

export class Student {

    public id?: number;
    public username?: string;
    public email?: string;
    public password?: string;
    public confirmed?: boolean;
    public createdDecks?: Deck[];
    public followedDecks?: Deck[];

    constructor() {

    }

}
