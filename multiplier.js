document.addEventListener("DOMContentLoaded", function () {
    let numberEL = document.querySelector('#req-number');
    let rangeEL = document.querySelector('#multiplier');

    function calculate() {
        let theNumber = Number(numberEL.value);
        let selectedMultiplier = Number(rangeEL.value);
        let result = theNumber * selectedMultiplier;

        document.querySelector('#number').innerText = theNumber;
        document.querySelector('#multi').innerText = selectedMultiplier;
        document.querySelector('#result').innerText = result;
    }

    numberEL.addEventListener('input', calculate);
    rangeEL.addEventListener('input', calculate);
});
