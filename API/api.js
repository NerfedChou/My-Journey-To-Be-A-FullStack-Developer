/* const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target2");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function (response) {
            const processingPromise = response.json(); // json instead of text
            return processingPromise;
        })
        .then(function (processedResponse) {
            // we get to skip this line since it'll already be an object
            // const dogObject = JSON.parse(processedResponse);
            //Okay Jan why is it instead of using response.txt() we use response.json()?

            // because we want to skip the step of converting the String into objects?
             //  since the response is text, String as we know so we need another work around to parse it into an object
               //like json.parse(andYourresponsehere) is that right?


            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
} */

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);


const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

async function addNewDoggo() {
    const promise = await fetch(DOG_URL);
    const processedResponse = await promise.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);