const MAX_COMMENT_LENGTH = 140;

function checkStringLength (string, length) {
  return string.length <= length;
}

export {MAX_COMMENT_LENGTH, checkStringLength};
