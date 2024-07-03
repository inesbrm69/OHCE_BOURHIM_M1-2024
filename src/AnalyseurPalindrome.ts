import {Langue} from "./Langue.interface";

export class AnalyseurPalindrome {
    private _langue: Langue;

    constructor(langue: Langue) {
        this._langue = langue;
    }


    public Analyser(chaîne: string) : string {
        let miroir = chaîne.split('').reverse().join('')
        return this._langue.Saluer() + "\n" + (chaîne == miroir
            ?  miroir + '\n' + 'Bien dit !'
            : miroir) + '\n' + this._langue.Aurevoir()
    }
}