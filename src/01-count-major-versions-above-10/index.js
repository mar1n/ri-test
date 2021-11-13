const axios = require('axios').default;


const response = async () => {
  const myData = await axios
    .get('https://api.npms.io/v2/search/suggestions?q=react')
    .then(res => {
      return res.data;
    });
  const countVersion = await myData
    .map(element => {
      return parseInt(element.package.version);
    })
    .filter(count => count > 10);

  return await countVersion.length;
};
response();
// console.log('response', response())
// const counter = response();
// counter.forEach(value => console.log('value.package.version', value.package.version));
// for(let x = 0; x< myData.length; x++) {
//   console.log('x', x);
//   console.log('data[x]', myData[x]);
// }
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

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */

module.exports = async function countMajorVersionsAbove10() {
  // TODO
  const myData = await axios
    .get('https://api.npms.io/v2/search/suggestions?q=react')
    .then(res => {
      return res.data;
    });
  const count = await myData
    .map(element => {
      return parseInt(element.package.version);
    })
    .filter(count => count > 10).length;
  return count;
};
