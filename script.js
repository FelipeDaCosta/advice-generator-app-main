const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-image");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice").then(function(response) {
        return response.json()
    }).then(
        function(data) {
            
            adviceNumber.innerHTML = data.slip.id;
            adviceText.innerHTML = data.slip.advice;
        }
    ).catch(function(err) {
        console.warn('Something went wrong: ' + err);
    });
}

diceButton.addEventListener('click', (event) => {
    getAdvice();
})

getAdvice();