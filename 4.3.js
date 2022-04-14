    function Rand10() {
        return Math.floor(Math.random() * 11);
    }

    console.log(Rand10())



    function multiRand(n) {
        return Array.from({length: n}, () => Rand10());
        }


        console.log(multiRand(10))