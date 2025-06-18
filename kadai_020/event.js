const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', function() {
    text.textContent = 'クリック後の表示';
});