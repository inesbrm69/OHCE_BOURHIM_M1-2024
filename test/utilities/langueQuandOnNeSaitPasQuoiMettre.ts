import {Langue} from "../../src/Langue.interface";

export class LangueQuandOnNeSaitPasQuoiMettre implements Langue {
    Saluer(): string {
        return '';
    }
    Aurevoir(): string{
        return '';
    }
}