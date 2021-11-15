import {COMMENTS_MIN, COMMENTS_MAX, DESCRIPTIONS_ID_MIN, DESCRIPTIONS_ID_MAX, URL_ID_MIN, URL_ID_MAX, DESCRIPTION_PHOTOS, MIN_LIKES, MAX_LIKES, MESSAGE_ID_MAX, AVATAR_ID_MIN, AVATAR_ID_MAX, MESSAGES, NAMES, getRandomArrayElement} from './data.js';
import {getRandomPositiveInteger} from './get-random-positive-integer.js';

const generateComments = () => {
  const commentsLength = getRandomPositiveInteger(COMMENTS_MIN, COMMENTS_MAX);
  return Array(commentsLength).fill(null).map(()=> ({
    id: getRandomPositiveInteger(0, MESSAGE_ID_MAX),
    avatar: (`img/avatar-${  getRandomPositiveInteger(AVATAR_ID_MIN, AVATAR_ID_MAX)  }.svg`),
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }));
};

const createPicture = function() {
  return {
    id: getRandomPositiveInteger(DESCRIPTIONS_ID_MIN, DESCRIPTIONS_ID_MAX),
    url: (`photos/${  getRandomPositiveInteger(URL_ID_MIN, URL_ID_MAX)  }.jpg`),
    description: getRandomArrayElement(DESCRIPTION_PHOTOS),
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: generateComments(),
  };
};

const generatePictureData = (count) => Array(count).fill(null).map(createPicture);

export {generatePictureData};
