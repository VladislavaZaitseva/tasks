// У вас есть кнопка. После каждого нажатия менять background.

const but = document.querySelector('button');
let flag = true;

btn.addEventListener('click', function () {
    if (flag == true) {
        btn.style.background = 'purple';
        flag = false;
    } else {
        btn.style.background = 'black';
        flag = true;
    }
})