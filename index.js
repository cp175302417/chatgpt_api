var request = require('request');
const youkey = ''
var options = {
  'method': 'POST',
  'url': 'https://api.openai.com/v1/chat/completions',
  'headers': {
    'Authorization': 'Bearer ' + youkey,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});