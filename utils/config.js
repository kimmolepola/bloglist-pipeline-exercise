require('dotenv').config();

const { PORT } = process.env;
let { MONGODB_URI } = process.env;

console.log("---mongo uri-----", MONGODB_URI);

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  MONGODB_URI,
  PORT,
};
