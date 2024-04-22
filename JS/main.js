// letters
let letters ="abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

// select letters container
let lettersContainer = document.querySelector('.letters');

// generate letters
lettersArray.forEach(letter=> {
    let spanElmnt = document.createElement('span');
    let theLetter = document.createTextNode(letter);
    // append theletter to spanelmnt
    spanElmnt.appendChild(theLetter);
    spanElmnt.className = 'letter-box';
    // append spanelmnt to lettercontainer
    lettersContainer.appendChild(spanElmnt);
});

// object of words and categories
let wordsObj = {
    programming : ['php' , 'java script' , 'mysql' , 'python'],
    movies : ['prestige' , 'inception' , 'parasite' , 'memento' , 'coco' , 'up'],
    people : ['alpert einstein' , 'hotchock' , 'alexander' , 'cleopatra', 'ghandi'],
    countries : ['egypt' , 'syria' , 'palestine' , 'qatar']
}

// get random property
let allKeys = Object.keys(wordsObj);
let randomPropNumber = Math.floor(Math.random()*allKeys.length);
// category
let randomPropName = allKeys[randomPropNumber];
// category word
let randomPropValue = wordsObj[randomPropName];
// number depend on word
let randomValueNumber = Math.floor(Math.random()*randomPropValue.length);
// console.log(randomPropValue);
// console.log(randomValueNumber);
// chosen word
let randomVlueWord = randomPropValue[randomPropNumber];
// set category info
document.querySelector('.game-info .category span').innerHTML=randomPropName;

// select letters guess element
let lettersGuessContainer = document.querySelector('.letter-guess');

// convert chosen word to array
let lettersAndSpace = Array.from(randomVlueWord)

// create span depend on word
 lettersAndSpace.forEach(x=>{
     let emptySpan = document.createElement('span')

    //  if letter is space
     if(x == ' '){
         emptySpan.className ='with-space';
    }
    // append span to letter guess container
     lettersGuessContainer.appendChild(emptySpan);
 });

//  select guess spans
let guessSpans = document.querySelectorAll('.letter-guess span')

let wrongAttempts=0;
let theDraw = document.querySelector('.hangman-draw')

// handle clicking on letters
document.addEventListener("click" , (e) => {
    // set chosen statuse
    let theStatus = false;

    if(e.target.className === "letter-box"){
       e.target.classList.add("clicked"); 
    // the chosen word
    let theChosenWord = Array.from(randomVlueWord.toLowerCase());  
    //    get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    theChosenWord.forEach((wordLetter,wordIndex) => {
        if(theClickedLetter == wordLetter){
            theStatus=true;
            guessSpans.forEach((span,spanIndex)=>{
                if(wordIndex === spanIndex){
                    span.innerHTML=theClickedLetter;
                }
            });
        }
    });
    // console.log(theStatus);
    if(theStatus !== true){
        wrongAttempts++;
        theDraw.classList.add(`wrong-${wrongAttempts}`);
        if(wrongAttempts==8){
            lettersContainer.classList.add('finished')
            endGame()
        }
    }
    }
});
function endGame(){
    let div =document.createElement('div');
    let divText = document.createTextNode(`game over, the word is ${randomVlueWord}`);
    div.appendChild(divText);
    div.className="popUp";
    document.body.appendChild(div);
}