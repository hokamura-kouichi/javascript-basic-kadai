// 現在の日付を取得する
let today = new Date();

// 年、月、日を取得する
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月は0から始まるため+1が必要
let day = today.getDate();

// 日付を「年-月-日」の形式で出力する
console.log(`${year}年${month}月${day}日`);