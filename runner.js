const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUzMjlmMjY5LTAxYmItNDhkMS04YjQ4LWU2YjU0NGIxMzA5YS0xNzUwNzY4NjM4MTE1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjc1ZGQxZWYtODNiYi00YWY1LWI1ZDgtZTM1ZDQ5OGUwOTM4IiwidHlwZSI6InQifQ.bI0Xneoq6rV8anISAejJnF60o3efWeTBHqzoHG-t8o4"
cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
