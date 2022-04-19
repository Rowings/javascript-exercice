/*
*/



 let allImportant = document.querySelectorAll(".important")
 let allImg = document.querySelectorAll("img")

 for (let index = 0; index < allImportant.length; index++) {
     const element = allImportant[index];
     element.setAttribute("title" , "This is an important item")
     console.log(allImportant)
     
    }

    for (let index = 0; index < allImg.length; index++) {
        const element = allImg[index];
        
        if(element.className !== "important") {
            element.style.display = "none";
        }
    }
//     for (let element of document.getElementsByClassName("important")){
//         element.style.display="inital";

//         if(element.className !== "important") {
//             element.style.display = "none";
//     }

        
//   }

