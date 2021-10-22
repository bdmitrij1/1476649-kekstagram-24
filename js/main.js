const MAX_COMMENT_LENGTH = 140;

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник функции - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function generateNumber(min, max) {
  min = Math.round(min);
  max = Math.round(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// временно вызвал функцию, чтобы убрать ошибку eslint
generateNumber(10, 20);

// Функция для проверки максимальной длины строки комментария.
function checkLengthComment(comment, maxLenght) {
  return maxLenght > comment.length;
}

// временно вызвал функцию, чтобы убрать ошибку eslint
checkLengthComment('Привет мир', MAX_COMMENT_LENGTH);

const DESCRIPTIONS_ID_MIN = 1;
const DESCRIPTIONS_ID_MAX = 25;
const URL_ID_MIN = 1;
const URL_ID_MAX = 25;
const DESCRIPTION_PHOTOS = [
  'Рыжий кот',
  'Пурпурный кот',
  'Белый кот',
  'Бледный кот',
  'Бедный кот',
  'Богатый кот',
  'Наглый кот',
  'Хитрый кот',
  'Кот с сапогах. Но это не точно',
  'Кот бармолей',
  'Кот который живёт на крыше',
  'Просто кот',
  'Кото-пёс',
  'Описание отсутсвует. Кот в отпуске',
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MESSAGE_ID_MAX = 10000;
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Борис',
  'Мурзик',
  'Рыжмонд',
  'Серый',
  'Быстрокот',
  'Бегунец',
  'Быстролап',
  'Бывалый',
  'Дворняга',
];

const getRandomArrayElement = (elements) => elements[generateNumber(0, elements.length - 1)];

const createPicture = function() {
  return {
    id: generateNumber(DESCRIPTIONS_ID_MIN, DESCRIPTIONS_ID_MAX),
    url: (`photos/${  generateNumber(URL_ID_MIN, URL_ID_MAX)  }.jpg`),
    description: getRandomArrayElement(DESCRIPTION_PHOTOS),
    likes: generateNumber(MIN_LIKES, MAX_LIKES),
    comments: {
      id: generateNumber(0, MESSAGE_ID_MAX),
      avatar: (`img/avatar-${  generateNumber(AVATAR_ID_MIN, AVATAR_ID_MAX)  }.svg`),
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },
  };
};

// временно вызвал функцию, чтобы убрать ошибку eslint
createPicture();
