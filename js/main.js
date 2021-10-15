const MAX_COMMENT_LENGTH = 140;

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник функции - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function generateNumber(min, max) {
  min = Math.round(min);
  max = Math.round(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateNumber(10, 20); // временно вызвал функцию

// Функция для проверки максимальной длины строки комментария.
function checkLengthComment(comment, maxLenght) {
  return maxLenght > comment.length;
}

checkLengthComment('Привет мир', MAX_COMMENT_LENGTH); // временно вызвал функцию
