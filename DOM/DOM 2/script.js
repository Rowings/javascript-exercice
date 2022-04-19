/*
*/

 let allImportant = document.querySelectorAll(".important")

 for (let index = 0; index < allImportant.length; index++) {
     const element = allImportant[index];
     element.setAttribute("title" , "This is an important item")
     console.log(allImportant)
     
    }
