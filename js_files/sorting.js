
function swapHeight(el1, el2) {
    console.log('In swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
    document.querySelector("#bubble-sort").disabled = true;
    document.querySelector("#insertion-sort").disabled = true;
    document.querySelector("#merge-sort").disabled = true;
    document.querySelector("#quick-sort").disabled = true;
    document.querySelector("#selection-sort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
    document.querySelector("#bubble-sort").disabled = false;
    document.querySelector("#insertion-sort").disabled = false;
    document.querySelector("#merge-sort").disabled = false;
    document.querySelector("#quick-sort").disabled = false;
    document.querySelector("#selection-sort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
    document.querySelector("#new-array").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
    document.querySelector("#new-array").disabled = false;
}

// wair for clarity
// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitForClarity(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function () {
    console.log(arraySize.value, typeof (arraySize.value));
    document.querySelector('#p_1').innerHTML = arraySize.value;
    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (180ms)
let timeOfDelay = 180;

// Selecting speed slider from DOM
let speedSelector = document.querySelector('#speed_input');

// Event listener to update delay time 
speedSelector.addEventListener('input', function () {
    console.log(speedSelector.value, typeof (speedSelector.value));
    timeOfDelay = 320 - parseInt(speedSelector.value); // timeOfDelay is inversly proportionl to speed
});

let bars_height = [];

// Helper function to delete all the previous bars so that new can be added
function deleteBars() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// To create new array input size of array
function createNewArray(noOfBars = 60) {
    // Remove all old bars from the UI
    deleteBars();

    // creating an array of random numbers 
    bars_height = [];
    for (let i = 0; i < noOfBars; i++) {
        // Math.random() lies from 0 to 1
        bars_height.push(Math.floor(Math.random() * 250) + 1); // +1 to refrain from zero height
    }
    console.log(bars_height);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        var height = bars_height[i] * 2;
        var bar = document.createElement("li");
        bar.style.height = height.toString() + 'px';
        bar.setAttribute('id', 'bar' + i.toString());
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        // bar.style.marginRight = '2px';
        // console.log(height);
        bars.appendChild(bar);
    }
}

createNewArray();

const newArray = document.querySelector('#new-array');
newArray.addEventListener('click', function () {
    console.log('No. of elements: ' + arraySize.value);
    // console.log('Delay time: ' + delayTime);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});