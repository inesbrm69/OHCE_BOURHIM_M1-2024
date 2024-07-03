import {AnalyseurPalindrome} from "../../src/AnalyseurPalindrome";
import {Langue} from "../../src/Langue.interface";
import {LangueQuandOnNeSaitPasQuoiMettre} from "./langueQuandOnNeSaitPasQuoiMettre";

export class AnalyseurPalindromeBuilder {
    public static Default() : AnalyseurPalindrome {
        return new AnalyseurPalindromeBuilder().Build();
    }

    private langue: Langue = new LangueQuandOnNeSaitPasQuoiMettre();

    public Build() : AnalyseurPalindrome {
        return new AnalyseurPalindrome(this.langue)
    }

    public AyantPourLangue(langue: Langue): this {
        this.langue = langue;
        return this
    }
}