import {getRandomPositiveInteger} from './get-random-positive-integer.js';

const COMMENTS_MIN = 4;
const COMMENTS_MAX = 25;
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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {COMMENTS_MIN, COMMENTS_MAX, DESCRIPTIONS_ID_MIN, DESCRIPTIONS_ID_MAX, URL_ID_MIN, URL_ID_MAX, DESCRIPTION_PHOTOS, MIN_LIKES, MAX_LIKES, MESSAGE_ID_MAX, AVATAR_ID_MIN, AVATAR_ID_MAX, MESSAGES, NAMES, getRandomArrayElement};
