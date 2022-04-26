function randomRGB(max)
{
    let arr = [];
    arr[0] = Math.floor(Math.random() * max);
    arr[1] = Math.floor(Math.random() * max);
    arr[2] = Math.floor(Math.random() * max);
    return arr;
}

function pickLearner(arr)
{
    let ret = [];
    let rand;
    while (arr.length)
    {
        rand = randomRGB(arr.length)[0];
        ret.push(arr[rand]);
        arr.splice(rand, 1);
    }
    return ret;
}

function addLearners()
{
    let learners = ["tibedo", "Sébastien", "Rayhane", "Rayan", "Jason","Martin", "Emre", "Zackaria", "Ricardo", "Jérémy", "Jamie", "Tanguy", "Steffanie", "Gilles", "Eric"];
    let newSection;
    let newContent;
    let randColor;
    let art = document.querySelector("article");
    let h = document.querySelector("h2");
    let p;
    learners = pickLearner(learners);
    for (const learner of learners)
    {
        randColor = randomRGB(256);
        newSection = document.createElement("section");
        p = document.createElement("p");
        newContent = document.createTextNode(learner);
        p.appendChild(newContent);
        newSection.appendChild(p);
        art.insertBefore(newSection, h.nextSibling);
        newSection.style.backgroundColor = "rgb(" + randColor[0] + "," + randColor[1] + "," + randColor[2] + ")";
        if((randColor[0] + randColor[1] + randColor[2]) < 382.5)
            newSection.style.color = "white";
    }
}
addLearners();let main = document.querySelector('main')
let mainChild = main.children


let firstSection = main.children[0];
firstSection.setAttribute('id', 'first');

let secondSection = main.children[1];
secondSection.setAttribute('id', 'second');

let thirdSection = main.children[2];
thirdSection.setAttribute('id', 'third');






console.log(mainChild);

secondSection.children[0].setAttribute('id', 'h2-second');

let divSection = thirdSection.children[0].setAttribute('id', 'h2-third');


let h2Second = document.getElementById('h2-second');
let h2Third = document.getElementById('h2-third');

secondSection.appendChild(h2Third);
thirdSection.appendChild(h2Second);


const elem = document.getElementById('third')
elem.remove();