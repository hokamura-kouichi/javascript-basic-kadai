// numに1以上の正の数を代入します
let num = 15;

// 3と5の倍数であるかどうかを最初に判定します
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
}

// それぞれ3の倍数か5の倍数であるかを判定します
else if (num % 3 === 0) {
  console.log("3の倍数です");
}

else if (num % 5 === 0) {
  console.log("5の倍数です");
}

// どれにも当てはまらない場合
else {
  console.log(num);
}