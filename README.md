# ataturk-sozu

[![NPM](https://img.shields.io/badge/NPM-red?logo=NPM&style=flat-square)](https://www.npmjs.com/package/ataturk-sozu)

## Bir yada daha fazla Mustafa Kemal Atatürk'e ait söz çıktısı alın.

Kurulum:

    npm install ataturk-sozu

Kullanım:

    var ataturkSozu = require('ataturk-sozu');

    console.log(ataturkSozu()); // Bir adet çıktı almanızı sağlar.

    console.log(ataturkSozu(5)); // Belirlediğiniz kadar (Örn:5) çıktı almanızı sağlar.
    console.log(ataturkSozu({ count: 5 })); // Belirlediğiniz kadar (Örn:5) çıktı almanızı sağlar.

    console.log(ataturkSozu({ count: 5, join: ' ' })) // Sözleri boşluk ile birleştirir
    console.log(ataturkSozu({ count: 5, join: '-' })) // Sözleri tire ile birleştirir
    console.log(ataturkSozu({ count: 5, join: '' })) // Sözleri birleştirir, aralarına karakter koymaz

    console.log(ataturkSozu({ count: 5, wordsPerString: 2 })) // Her grupta 2 söz olacak şekilde 5 grup oluşturur

    console.log(ataturkSozu({ count: 5, wordsPerString: 2, separator: '-' })) // Gruplar arasına tire koyar
    console.log(ataturkSozu({ count: 5, wordsPerString: 2, formatter: (word) => word.toUpperCase() })) // Tüm harfleri büyük yapar
    console.log(ataturkSozu({
        count: 5, 
        wordsPerString: 2, 
        formatter: (word, index) => {
            return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;
        }
    })) // Her grubun ilk sözünün ilk harfini büyük yapar

Random-words [NPM](https://www.npmjs.com/package/random-words) üzerinde değişiklikler yapılarak oluşturulmuştur.
