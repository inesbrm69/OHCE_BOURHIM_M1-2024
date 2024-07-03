import {Langue} from "./Langue.interface";

export class LangueFrançaise implements Langue {
    Saluer(): string {
        return "Bonjour"
    }
    Aurevoir(): string{
        return "Aurevoir !"
    }
}