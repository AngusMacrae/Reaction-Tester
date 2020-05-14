colorValues = ["Red", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "Orange"];

let startTime;
let endTime;
let times = [];

recentTimeDisplay = document.getElementById("recentTimeDisplay");
averageTimeDisplay = document.getElementById("averageTimeDisplay");
shape = document.getElementById("shape");

shape.onclick = hideShape;

randomCountdown(displayShape);

function randomCountdown(callback) {

    setTimeout(callback, randomIntInc(1000, 2000));

}

function hideShape() {

    shape.style.display = "none";
    endTime = new Date();
    updateTimeDisplay(startTime, endTime);
    randomCountdown(displayShape);

}

function displayShape() {

    shape.style.backgroundColor = randomArrayElement(colorValues);
    if (Math.random() > 0.5) {
        shape.style.borderRadius = "0";
    } else {
        shape.style.borderRadius = "50%";
    }
    shape.style.height = randomIntInc(70, 200) + "px";
    shape.style.width = randomIntInc(70, 200) + "px";
    shape.style.top = randomIntInc(0, 300) + "px";
    shape.style.left = randomIntInc(0, 250) + "px";
    shape.style.display = "block";
    startTime = new Date();

}

function updateTimeDisplay(startTime, endTime) {

    let timeDiff = (endTime - startTime) / 1000;
    recentTimeDisplay.innerHTML = "Most recent time: " + timeDiff + " s";
    times.push(timeDiff);
    averageTimeDisplay.innerHTML = "Average time: " + (Math.round(averageArrayElements(times) * 1000) / 1000) + " s";
    console.log(timeDiff);
    recentTimeDisplay.style.display = "block";
    averageTimeDisplay.style.display = "block";

}

function averageArrayElements(inputArray) {

    let total = 0;

    for (let i = 0; i < inputArray.length; i++) {

        total += inputArray[i];

    }

    return total / inputArray.length;

}

function randomArrayElement(inputArray) {

    return inputArray[Math.floor(Math.random() * (inputArray.length))];

}

function randomIntInc(lowerBound, upperBound) {

    let range = upperBound - lowerBound;
    return (Math.floor(Math.random() * range) + lowerBound);

}
