

async function partition(ele, low, high) {
    console.log('Inside partition()');
    let pivot = ele[high]; // consider pivot as the last element of array
    let i = low - 1; // index of smaller element to be kept

    // color pivot element (Indicate pivot element as red)
    ele[high].style.background = 'red';
    for (let j = low; j < high; j++) {
        // color the current element by blue
        ele[j].style.background = 'blue';
        await waitForClarity(timeOfDelay);
        if (parseInt(ele[j].style.height) < parseInt(pivot.style.height)) {
            i++;
            swapHeight(ele[j], ele[i]);
            ele[i].style.background = 'orange';
            ele[j].style.background = 'orange';
            await waitForClarity(timeOfDelay);
        }
        else {
            ele[j].style.background = 'grey';
        }
    }
    i++;
    await waitForClarity(timeOfDelay);
    swapHeight(ele[i], ele[high]);
    ele[i].style.background = 'green';
    ele[high].style.background = 'pink';

    await waitForClarity(timeOfDelay);

    for (let k = low; k <= high; k++) {
        if (ele[k].style.background != 'green') {
            ele[k].style.background = 'pink';
        }
    }
    // now return the partition index
    return i; // element at index i get placed at appropraite place
}

async function quickSort(ele, low, high) {
    console.log('Inside quickSort()');
    if (low < high) {
        // pi = partition index
        let pi = await partition(ele, low, high);
        await quickSort(ele, low, pi - 1);
        await quickSort(ele, pi + 1, high);
    }
    else {
        if (low >= 0 && high >= 0 && low < ele.length && high < ele.length) {

            ele[low].style.background = 'green';
            ele[high].style.background = 'green';
            await waitForClarity(timeOfDelay);
        }
    }
}

const QuickSortbtn = document.querySelector("#quick-sort");
QuickSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let low = 0;
    let high = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, low, high);
    ele[high].style.background = 'green';
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});