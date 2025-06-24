const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: procees.env.TARGET_TOKEN_ELECTRON,
    files: './tmp/teste'
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
