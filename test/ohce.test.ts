import {AnalyseurPalindrome} from "../src/AnalyseurPalindrome";

describe('ETANT DONNE une chaîne QUAND on l\'analyse ALORS on obtient son miroir',
    () => {
        test.each(["test", "ynov"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindrome.Analyser(chaîne)
            let expected = chaîne.split('').reverse().join('')
            expect(résultat).toBe(expected)
        })
    });

describe('ETANT DONNE un palindrome QUAND on l\'analyse ALORS il ressort suivi de \'Bien dit !\'',
    () => {
        test.each(["radar", "kayak"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindrome.Analyser(chaîne)
            expect(résultat).toBe(chaîne + '\n' + "Bien dit !")
        })
    });