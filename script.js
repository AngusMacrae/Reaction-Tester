let startTime;
let endTime;
let times = [];
let colorValues = ["Red", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "Orange"];

let recentTimeDisplay = document.getElementById("recentTimeDisplay");
let averageTimeDisplay = document.getElementById("averageTimeDisplay");
let shape = document.getElementById("shape");
let container = document.getElementById("container");

shape.addEventListener("click", hideShape);

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
    shape.style.borderRadius = (Math.random() > 0.5) ? "0" : "50%";
    let shapeWidth = randomIntInc(50, 200);
    let shapeHeight = randomIntInc(50, 200);
    shape.style.width = shapeWidth + "px";
    shape.style.height = shapeHeight + "px";
    let maxLeft = container.offsetWidth - shapeWidth;
    let maxTop = container.offsetHeight - shapeHeight;
    shape.style.left = randomIntInc(0, maxLeft) + "px";
    shape.style.top = randomIntInc(0, maxTop) + "px";
    shape.style.display = "block";
    startTime = new Date();

}

function updateTimeDisplay(startTime, endTime) {

    let timeDiff = (endTime - startTime) / 1000;
    recentTimeDisplay.innerHTML = "Most recent time: " + timeDiff + " s";
    times.push(timeDiff);
    averageTimeDisplay.innerHTML = "Average time: " + (Math.round(averageArrayElements(times) * 1000) / 1000) + " s";
    console.log("Reaction time: " + timeDiff + " s");
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
