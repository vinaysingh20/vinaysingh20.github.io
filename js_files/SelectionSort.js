async function selection() {
    const ele = document.querySelectorAll('.bar');
    let n = ele.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        ele[i].style.background = 'blue';
        for (let j = i + 1; j < n; j++) {
            ele[j].style.background = 'red';
            await waitForClarity(timeOfDelay);

            if (parseInt(ele[j].style.height) < parseInt(ele[minIndex].style.height)) {
                if (minIndex != i) {
                    ele[minIndex].style.background = 'pink';
                }
                minIndex = j;
            }
            else {
                ele[j].style.background = 'pink';
            }
        }
        await waitForClarity(timeOfDelay);
        swapHeight(ele[i], ele[minIndex]);
        ele[minIndex].style.background = 'pink';
        ele[i].style.background = 'green';
    }
    ele[n - 1].style.background = 'green';
}

const SelSortbtn = document.querySelector("#selection-sort");
SelSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});