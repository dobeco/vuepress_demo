const documents = require('./documents/index.js');
const books = require('./books/index.js');
const frontEnd = require('./frontEnd/index.js');
const exercises = require('./exercises/index.js');
module.exports = Object.assign(
  {},
  documents,
  books,
  frontEnd,
  exercises
);
