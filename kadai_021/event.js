document.getElementById('btn').addEventListener('click', function() {
    // ボタンがクリックされたときの処理
    setTimeout(function() {
        document.getElementById('text').innerText = '2秒後の表示';
    }, 2000); // 2000ミリ秒 = 2秒後
});