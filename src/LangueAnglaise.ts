import {Langue} from "./Langue.interface";

export class LangueAnglaise implements Langue {
    Saluer(): string {
        return "Hello"
    }
    Aurevoir(): string{
        return "Goodbye !"
    }
}