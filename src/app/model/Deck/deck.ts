import { Flashcard } from "../Flashcard/flashcard";
import { Student } from "../Student/student";

export class Deck {

    id?: number;
    name?: string;
    description?: string;
    author?: Student
    flashcards?: Flashcard[]

    constructor() {
        
    }


}
