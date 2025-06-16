// 現在の日付を取得する
let today = new Date();

// 年、月、日を取得する
let year = today.getFullYear(2024); // 年を取得
let month = today.getMonth(9) + 1; // 月を取得（0から始まるので1を足します）
let day = today.getDate(12); // 日を取得

// 日付を「年-月-日」の形式で出力する
console.log(`${year}年${month}月${day}日`);