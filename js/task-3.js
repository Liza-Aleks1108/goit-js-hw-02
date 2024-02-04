// Задача 3. Перевірка спаму

// 1 варіант (На мою думку, кращий ніж 2 варіант)
function checkForSpam(message) {
  return message.toLowerCase().includes('spam') ||
  message.toLowerCase().includes('sale')
}

// 2 варіант
// function checkForSpam(message) {
//     if (message.toLowerCase(message).includes('spam') || message.toLowerCase(message).includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
