const arg = process.argv[2];
const breedFetcher = require('./breedFetcher');

breedFetcher(arg, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
