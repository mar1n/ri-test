const axios = require("axios").default;
/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

module.exports = async function oldestPackageName() {
  // TODO
  const myData = await axios
    .get('https://api.npms.io/v2/search/suggestions?q=react')
    .then(res => {
      return res.data;
    });
  const name = await myData
    .sort(
      function(a, b) {
        return new Date(a.package.date) - new Date(b.package.date);
      }
     );
  return await name[0].package.name;
};
