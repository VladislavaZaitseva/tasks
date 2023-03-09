// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

document.querySelector(`img`).addEventListener(`mouseover`, () => {

    document.querySelector(`img`).src = `./assets/HS (11).png`

});

document.querySelector(`img`).addEventListener(`mouseout`, () => {

    document.querySelector(`img`).src = `./assets/HS (10).png`

});
