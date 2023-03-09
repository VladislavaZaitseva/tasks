// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const ulTag = document.querySelector(`ul`);

ulTag.addEventListener(`click`, (event) => {
    console.log(event.target.textContent);
    const div = document.querySelector(`div`)
    div.innerHTML = event.target.textContent;
})