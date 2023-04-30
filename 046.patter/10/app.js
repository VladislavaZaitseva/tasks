// 10. Добавить переключение песен

const run = document.querySelector('.run');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const audio = document.querySelector('audio');
const artist = document.querySelector('.artist')
const nameOfSong = document.querySelector('.nameOfSong')
const songCover = document.querySelector('.songCover')

let flag = false;
const songs = [{
    id: 1,
    path: './rington_1.mp3',
    artist: 'Billie Eilish',
    nameOfSong: 'rington_1',
    imgPath : 'background-image: url(./assets/img1.jpg)'
}, {
    id: 2,
    path: './rington_2.mp3',
    artist: 'Stas Mikhailov',
    nameOfSong: 'rington_2',
    imgPath : 'background-image: url(./assets/img2.jpg)'
}, {
    id: 3,
    path: './rington_3.mp3',
    artist: 'The Beatles',
    nameOfSong: 'rington_3',
    imgPath : 'background-image: url(./assets/img3.jpg)'
}];

let currentIndexSong = 0;

run.addEventListener('click', function () {
    audio.src = songs[currentIndexSong].path
    artist.textContent = songs[currentIndexSong].artist
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong
    songCover.style = songs[currentIndexSong].imgPath

    if (flag == false) {
        audio.play()
        flag = true
        this.style = 'background-image: url(./assets/pause.svg)';
    } else {
        audio.pause()
        flag = false
        this.style = 'background-image: url(./assets/playBtn.svg)'
    }
});

left.addEventListener('click', function () {
    if (currentIndexSong == 0)
        return;

    currentIndexSong--;
    audio.src = songs[currentIndexSong].path
    audio.play()
    artist.textContent = songs[currentIndexSong].artist
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong
    songCover.style = songs[currentIndexSong].imgPath
    flag = true
    run.style = 'background-image: url(./assets/pause.svg) ;';
});

right.addEventListener('click', function () {
    if (currentIndexSong === songs.length - 1)
        return;

    currentIndexSong++;
    audio.src = songs[currentIndexSong].path
    audio.play();
    flag = true
    artist.textContent = songs[currentIndexSong].artist
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong
    songCover.style = songs[currentIndexSong].imgPath
    run.style = 'background-image: url(./assets/pause.svg) ;';
});