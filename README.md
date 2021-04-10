# ataturk-sozu

## Bir yada daha fazla Mustafa Kemal Atatürk'e ait söz çıktısı alın.

Kurulum:

    npm install ataturk-sozu

Kullanım:

    var ataturkSozu = require('ataturk-sozu');

    console.log(ataturkSozu()); // Bir adet çıktı almanızı sağlar.

    console.log(ataturkSozu(5)); // Belirlediğiniz kadar (Örn:5) çıktı almanızı sağlar.

    console.log(ataturkSozu({ min: 3, max: 10 })); // Belirli sayı aralığı kadar (örn: 3-10 arası) çıktı almanızı sağlar.

    console.log(ataturkSozu({ exactly: 2 })); // Kesinlikle belirlediğiniz kadar (örn: 2) çıktı almanızı sağlar.

    console.log(ataturkSozu({ exactly: 5, join: ' ' })) // Kesinlikle belirlediğiniz kadar (örn: 5) çıktı almanızı sağlar. Çıktı alınan kelimelerin arasına belirlediğiniz karakteri (örn: boşluk) koyar.

    console.log(ataturkSozu({ exactly: 5, join: '' })) // Kesinlikle belirlediğiniz kadar (örn: 5) çıktı almanızı sağlar. Çıktı alınan kelimelerin arasına bir şey koymaz, yapışık çıktı verir.

    console.log(ataturkSozu({exactly: 5, maxLength: 4})) // Kesinlikle belirlediğiniz kadar (örn: 5) çıktı almanızı sağlar. En fazla belirlediğiniz uzunlukta (örn: 4) çıktı almanızı sağlar.

    console.log(ataturkSozu({exactly:5, wordsPerString:2})) // Kesinlikle belirlediğiniz kadar (örn: 5) çıktı almanızı sağlar. Alınan çıktının yanında kaç adet çıktı olmasını (örn: 2) seçmenizi sağlar.

    console.log(ataturkSozu({exactly:5, wordsPerString:2, separator:'-'})) // Kesinlikle belirlediğiniz kadar (örn: 2) çıktı almanızı sağlar. Alınan çıktının yanında kaç adet çıktı olmasını (örn: 2) seçmenizi sağlar. Çıktı alınan kelimelerin arasına belirlediğiniz karakteri (örn: -) koyar.

    console.log(ataturkSozu({exactly:5, wordsPerString:2, formatter: (word)=> word.toUpperCase()})) // Kesinlikle belirlediğiniz kadar (örn: 2) çıktı almanızı sağlar. Alınan çıktının yanında kaç adet çıktı olmasını (örn: 2) seçmenizi sağlar. Çıktıların tüm harflerini büyük harfle yazdırır.

    console.log(ataturkSozu({exactly:5, wordsPerString:2, formatter: (word, index)=> {return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;}}))  // Kesinlikle belirlediğiniz kadar (örn: 2) çıktı almanızı sağlar. Alınan çıktının yanında kaç adet çıktı olmasını (örn: 2) seçmenizi sağlar. Çıktıların ilk harfini büyük yazdırır.