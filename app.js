const tabs = document.querySelectorAll('.tab-slider .tab');
const images = document.querySelectorAll('.tab-slider .tab-image');
let current = 0;
let timer;

function showTab(index) {
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        images[i].style.display = i === index ? 'block' : 'none';
    });
    current = index;
}

function nextTab() {
    let next = (current + 1) % tabs.length;
    showTab(next);
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        showTab(i);
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextTab, 5000);
}

showTab(0);
timer = setInterval(nextTab, 2000);

