async function insertion() {
    const ele = document.querySelectorAll('.bar');
    let n = ele.length;
    for (let i = 1; i < n; i++) {
        let key = ele[i].style.height;
        let j = i - 1;
        ele[i].style.background = 'blue';
        await waitForClarity(timeOfDelay);

        while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
            // arr[j+1] = arr[j] 
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitForClarity(timeOfDelay);
            for (let k = 0; k <= i; k++) {
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const InsertSortbtn = document.querySelector("#insertion-sort");
InsertSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});