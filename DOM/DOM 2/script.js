/*
*/



 let allImportant = document.querySelectorAll(".important")
 let allImg = document.querySelectorAll("img")
 let allTxt = document.querySelectorAll("p")

//  for (let index = 0; index < allImportant.length; index++) {
//      const element = allImportant[index];
//      element.setAttribute("title" , "This is an important item")
//      console.log(allImportant)
     
//     }

//     for (let index = 0; index < allImg.length; index++) {
//         const element = allImg[index];
        
//         if(element.className !== "important") {
//             element.style.display = "none";
//         }
//     }
    
    for (let index = 0; index < allTxt.length; index++) {
        const element = allTxt[index];
        console.log(element.textContent)
        
        if (element.className == "important") {

            console.log(element.className + "" + element.textContent)
        }
        
    }
















//        var num = Math.round(0xffffff * Math.random());
//         var r = num >> 16;
//         var g = num >> 8 & 255;
//         var b = num & 255  function getRandomRgb() {
//    ;
//         return 'rgb(' + r + ', ' + g + ', ' + b + ')';

//         document.getElementById("p").style.color = getRandomRgb();
//     for (let element of document.getElementsByClassName("important")){
//         element.style.display="inital";

//         if(element.className !== "important") {
//             element.style.display = "none";
//     }

        
//   }

