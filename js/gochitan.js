/* ------------------------------ メインビジュアル・スライドショー ------------------------------ */
const sourceSet = ["images/2022/0101_2x.webp", "images/2022/0201_2x.webp", "images/2022/0301_2x.webp", "images/2022/0401_2x.webp", "images/2022/0501_2x.webp", "images/2022/0601_2x.webp"];
const imgSrc = ["images/2022/0101_2x.png", "images/2022/0201_2x.png", "images/2022/0301_2x.png", "images/2022/0401_2x.png", "images/2022/0501_2x.png", "images/2022/0601_2x.png"];
const caption = ["和食レストラン「四季彩々」", "店2", "店3", "店4", "店5", "店6"];

let i = 0;

function switchTime() {
    if (i === 5) {
        i = 0;
    } else {
        i++;
    }
    document.getElementById('switch-webp').srcset = sourceSet[i];
    document.getElementById('switch-png').src = imgSrc[i];
    document.getElementById('switch-caption').textContent = caption[i];
}

setInterval(switchTime, 5000);

/* ------------------------------ フォトギャラリー・サムネイル切り替え ------------------------------ */
const mainImg = document.getElementById('main-img');
let thumbs = document.querySelectorAll('.thumb-img');

function srcAlter(e) {
    let source = e.target.getAttribute('src');
    mainImg.setAttribute('src', source);
}

for(let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', srcAlter);
}

/* ------------------------------ フォトギャラリー・ポップアップ ------------------------------ */
const zoom = document.querySelectorAll('.zoom');
const zoomback = document.getElementById('zoomback');
const zoomimg = document.getElementById('zoomimg');

// 一括でイベントリスナ
zoom.forEach(function(value) {
    value.addEventListener('click', kakudai);
});

function kakudai(e) {
    // 拡大領域を表示
    zoomback.style.display = "flex";
    // 押された画像のリンクを渡す
    zoomimg.setAttribute('src',e.target.getAttribute("src"));
    // 「zoomup」クラスを付与
    zoomimg.classList.add('zoomup');
}

// 元に戻すイベントリスナを指定
zoomback.addEventListener('click', modosu);

function modosu() {
    // 拡大領域を非表示
    zoomback.style.display = "none";
    // 「zoomup」クラスを削除
    zoomimg.classList.remove('zoomup');
}
