// function Rand10() {
//     return Math.floor(Math.random() * 11);
// }
    
    
    
//     let inputAr = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];


//     function pickLearner(inputAr, n) {
//         const randomIndex =Math.floor(Math.random() * arr.length);
//         const item= arr[randomIndex];
//         return item;
//     }

//         const result = getRandomItem(array);
//         console.log(result);

let learners = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];

function pickLearner(n, inputAr) {
    let returnArray = []
    for (let i = 0; i < n; i++) {
        let randomAr = inputAr[Math.floor(Math.random() *inputAr.length)];

        if (returnArray.includes(randomAr)){
            randomAr = inputAr[Math.floor(Math.random() *inputAr.length)];
        }
        
        returnArray.push(randomAr)
        
    }
          
    
    return returnArray
}



console.log(pickLearner(5, learners))