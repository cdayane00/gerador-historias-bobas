const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 Fahrenheit outside, so I decided to make it :insertx: for dinner. When :inserty: at home, he was hungry and so he asked me to cook :insertx:. Bob heard the order, and reported that dinner was ready - Bob ignored and persisted with the order. How :insertz: !";
let insertX = ["noodles", "soup", "roast chicken"];
let insertY = ["George", "Alice", "Thomas"];
let insertZ = ["stupid", "bad", "smart"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText
    tam = storyText.length

    //inseri um laço porque apenas a primeira ocorrência da string era substituída
    while (tam > 0) {
        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(":insertx:", xItem);
        newStory = newStory.replace(":inserty:", yItem);
        newStory = newStory.replace(":insertz:", zItem);

        if(customName.value !== '') {
            const name = customName.value;
            newStory = newStory.replace("Bob", name);
        }

        tam--
    }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

    const weightInStones = Math.round(weightInPounds / 14);
    const temperatureInCelsius = Math.round((temperatureInFahrenheit - 32) * 5/9);

    newStory = newStory.replace("300 pounds", weightInStones + " stone");
    newStory = newStory.replace("94 fahrenheit", temperatureInCelsius + " centigrade");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
