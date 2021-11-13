const axios = require('axios').default;
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

 * With the results from this request, inside "content", 
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should 
 * be in alphabetical order.
 */

module.exports = async function organiseMaintainers() {
  // TODO
  const myData = await axios
    .get('https://api.npms.io/v2/search/suggestions?q=react')
    .then(res => {
      return res.data;
    });
  const getMaintainers = await myData.map(element => {
    return element.package.maintainers;
  });
  let uniqu = getMaintainers
    .flat()
    .map(element => ({ username: element.username }));
  const removeRepeting = [...new Set(uniqu.map(s => JSON.stringify(s)))].map(
    s => JSON.parse(s),
  );

  const sortMaintainer = removeRepeting.sort((a, b) =>
    a.username > b.username ? 1 : -1,
  );
  const maintainerPackage = sortMaintainer.map(maintainer => {
    return {
      username: maintainer.username,
      packageNames: myData
        .filter(packageName => {
          if (
            packageName.package.maintainers.find(
              x => x.username === maintainer.username,
            )
          ) {
            return packageName;
          }
        })
        .map(value => value.package.name).sort(),
    };
  });

  return maintainerPackage;
};
