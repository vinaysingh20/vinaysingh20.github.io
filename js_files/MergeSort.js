async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1; // n1 is the size of the 1st array
    const n2 = high - mid;
    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    // filling 1st array
    for (let i = 0; i < n1; i++) {
        await waitForClarity(timeOfDelay);
        // giving color yellow for 1st array part
        ele[low + i].style.background = 'yellow';
        leftArray[i] = ele[low + i].style.height;
    }
    waitForClarity(timeOfDelay)
    // filling 2nd array
    for (let i = 0; i < n2; i++) {
        await waitForClarity(timeOfDelay);
        // giving color orange for 2nd array part
        ele[mid + 1 + i].style.background = 'orange';
        rightArray[i] = ele[mid + 1 + i].style.height;
    }

    await waitForClarity(timeOfDelay);

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = low;


    // merge operation
    while (i < n1 && j < n2) {
        await waitForClarity(timeOfDelay);
        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
            ele[k].style.height = leftArray[i];
            if ((n1 + n2) == ele.length) {
                // if we are in last phase of merging array
                ele[k].style.background = 'green';
            }
            else {
                // if this is some intermediate merge
                ele[k].style.background = 'lightblue';
            }
            i++;
            k++;
        }
        else {
            // leftArray[i] > rightArray[j]
            ele[k].style.height = rightArray[j];
            if ((n1 + n2) == ele.length) {
                // if we are in last phase of merging array
                ele[k].style.background = 'green';
            }
            else {
                // if this is some intermediate merge
                ele[k].style.background = 'lightblue';
            }
            j++;
            k++;
        }

    }

    // if some element left in 1st array to be processed
    while (i < n1) {
        await waitForClarity(timeOfDelay);
        ele[k].style.height = leftArray[i];
        if ((n1 + n2) == ele.length) {
            // if we are in last phase of merging array
            ele[k].style.background = 'green';
        }
        else {
            // if this is some intermediate merge
            ele[k].style.background = 'lightblue';
        }
        i++;
        k++;
    }
    // if some elemetns left in 2nd array to be processed
    while (j < n2) {
        await waitForClarity(timeOfDelay);
        ele[k].style.height = rightArray[j];
        if ((n1 + n2) == ele.length) {
            // if we are in last phase of merging array
            ele[k].style.background = 'green';
        }
        else {
            // if this is some intermediate merge
            ele[k].style.background = 'lightblue';
        }
        j++;
        k++;
    }

}

async function mergeSort(ele, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        await mergeSort(ele, low, mid);
        await mergeSort(ele, mid + 1, high);
        await waitForClarity(timeOfDelay)
        await merge(ele, low, mid, high);
    }
}

const MergeSortbtn = document.querySelector("#merge-sort");
MergeSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let low = 0;
    let high = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, low, high);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});