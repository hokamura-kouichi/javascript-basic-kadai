const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', function() {
    setTimeout(function() {
        text.innerText = '2秒後の表示';
    }, 2000); // 2000ミリ秒 = 2秒後
});