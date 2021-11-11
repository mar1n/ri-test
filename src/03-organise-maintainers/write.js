const testData = require("./file");

const findSort = [
    [
      { username: 'sebmarkbage', email: 'sebastian@calyptus.eu' },
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'acdlite', email: 'npm@andrewclark.io' },
      { username: 'brianvaughn', email: 'briandavidvaughn@gmail.com' },
      { username: 'fb', email: 'opensource+npm@fb.com' },
      { username: 'trueadm', email: 'dg@domgan.com' },
      { username: 'sophiebits', email: 'npm@sophiebits.com' },
      { username: 'lunaruan', email: 'lunaris.ruan@gmail.com' }
    ],
    [
      { username: 'sebmarkbage', email: 'sebastian@calyptus.eu' },
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'zpao', email: 'paul@oshannessy.com' },
      { username: 'acdlite', email: 'npm@andrewclark.io' },
      { username: 'brianvaughn', email: 'briandavidvaughn@gmail.com' },
      { username: 'fb', email: 'opensource+npm@fb.com' },
      { username: 'trueadm', email: 'dg@domgan.com' },
      { username: 'sophiebits', email: 'npm@sophiebits.com' },
      { username: 'lunaruan', email: 'lunaris.ruan@gmail.com' }
    ],
    [
      { username: 'sebmarkbage', email: 'sebastian@calyptus.eu' },
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'acdlite', email: 'npm@andrewclark.io' },
      { username: 'brianvaughn', email: 'briandavidvaughn@gmail.com' },
      { username: 'fb', email: 'opensource+npm@fb.com' },
      { username: 'trueadm', email: 'dg@domgan.com' },
      { username: 'sophiebits', email: 'npm@sophiebits.com' },
      { username: 'lunaruan', email: 'lunaris.ruan@gmail.com' }
    ],
    [
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'timdorr', email: 'timdorr@timdorr.com' },
      { username: 'acemarke', email: 'mark.erikson@gmail.com' }
    ],
    [
      { username: 'timdorr', email: 'timdorr@timdorr.com' },
      { username: 'mjackson', email: 'npm@mjackson.me' },
      { username: 'chancestrickland', email: 'hi@chance.dev' }
    ],
    [
      { username: 'sebmarkbage', email: 'sebastian@calyptus.eu' },
      { username: 'necolas', email: 'nicolasgallagher@gmail.com' },
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'threepointone', email: 'threepointone@gmail.com' },
      { username: 'acdlite', email: 'npm@andrewclark.io' },
      { username: 'brianvaughn', email: 'briandavidvaughn@gmail.com' },
      { username: 'trueadm', email: 'dg@domgan.com' },
      { username: 'lunaruan', email: 'lunaris.ruan@gmail.com' }
    ],
    [
      { username: 'adrai', email: 'adriano@raiano.ch' },
      { username: 'jamuhl', email: 'jan.muehlemann@gmail.com' }
    ],
    [
      { username: 'rolandjitsu', email: 'rolandjitsu@gmail.com' },
      { username: 'rxmarbles', email: 'rmarkins@gmail.com' },
      { username: 'okonet', email: 'andrey@okonet.ru' }
    ],
    [
      { username: 'fezvrasta', email: 'federico.zivolo@gmail.com' },
      { username: 'souporserious', email: 'ftntravis@gmail.com' }
    ],
    [ { username: 'tannerlinsley', email: 'tannerlinsley@gmail.com' } ],
    [ { username: 'tannerlinsley', email: 'tannerlinsley@gmail.com' } ],
    [
      { username: 'timdorr', email: 'timdorr@timdorr.com' },
      { username: 'mjackson', email: 'npm@mjackson.me' },
      { username: 'chancestrickland', email: 'hi@chance.dev' }
    ],
    [ { username: 'bluebill1049', email: 'bluebill1049@gmail.com' } ],
    [
      { username: 'monastic.panic', email: 'monastic.panic@gmail.com' },
      { username: 'taion', email: 'tesrin@gmail.com' },
      { username: 'kytsang', email: 'ktsang.work@gmail.com' }
    ],
    [
      { username: 'johno', email: 'johnotander@gmail.com' },
      { username: 'wooorm', email: 'tituswormer@gmail.com' }
    ],
    [
      { username: 'longlho', email: 'holevietlong@gmail.com' },
      { username: 'redonkulus', email: 'seth@bertalotto.net' },
      { username: 'pyrocat', email: 'dinglinjie+npm@gmail.com' },
      { username: 'caridy', email: 'caridy@gmail.com' },
      { username: 'juandopazo', email: 'juan@dopazo.me' },
      { username: 'clarle', email: 'contact@clarle.com' },
      { username: 'okuryu', email: 'okuryu@okuryu.com' },
      { username: 'ericf', email: 'eferraiuolo@gmail.com' }
    ],
    [ { username: 'sniphpet', email: 'fdkhadra@gmail.com' } ],
    [ { username: 'streamich', email: 'vadimsdaleckis@gmail.com' } ],
    [
      { username: 'sebmarkbage', email: 'sebastian@calyptus.eu' },
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'zpao', email: 'paul@oshannessy.com' },
      { username: 'acdlite', email: 'npm@andrewclark.io' },
      { username: 'brianvaughn', email: 'briandavidvaughn@gmail.com' },
      { username: 'fb', email: 'opensource+npm@fb.com' },
      { username: 'trueadm', email: 'dg@domgan.com' },
      { username: 'sophiebits', email: 'npm@sophiebits.com' },
      { username: 'lunaruan', email: 'lunaris.ruan@gmail.com' }
    ],
    [ { username: 'omgovich', email: 'omgovich@ya.ru' } ],
    [
      { username: 'beccanelson', email: 'beccanelsonbailey@gmail.com' },
      { username: 'michaelmerrill', email: 'michael@michaelmerrill.me' },
      { username: 'sarmeyer', email: 'sarahmichellemeyer@gmail.com' },
      {
        username: 'mariano-formidable',
        email: 'mariano.martinez@formidable.com'
      },
      { username: 'carlospaelinck', email: 'me@carlos.dev' },
      { username: 'ryanisinallofus', email: 'ryanrray@gmail.com' },
      { username: 'samwhale', email: 'samuelestrella226@gmail.com' },
      { username: 'bmathews', email: 'spoonart@gmail.com' },
      { username: 'ryan.roemer', email: 'ryan@loose-bits.com' },
      { username: 'paulathevalley', email: 'lavalle.paula@gmail.com' },
      { username: 'tptee', email: 'tyler@tylerpaulthompson.com' },
      { username: 'formidable-owner', email: 'admin@formidablelabs.com' },
      { username: 'ebrillhart', email: 'emma.brillhart@gmail.com' },
      { username: 'stefvhuynh', email: 'huynh.stefan@gmail.com' },
      { username: 'eastridge', email: 'ryan@eastridge.me' },
      { username: 'exogen', email: 'exogen@gmail.com' },
      { username: 'boygirl', email: 'lauren.eastridge@formidable.com' },
      { username: 'philpl', email: 'phil@kitten.sh' },
      { username: 'hartzis', email: 'brianhartz@gmail.com' },
      { username: 'mfulgham', email: 'monet.fulgham@formidable.com' },
      { username: 'jmcbee1', email: 'jmcbee1@gmail.com' },
      { username: 'formidablelabs', email: 'npm@formidablelabs.com' },
      { username: 'carbonrobot', email: 'carbonrobot@gmail.com' },
      { username: 'manosim', email: 'hello@manos.im' },
      { username: 'masiddee', email: 'mansoor@msiddeeq.com' },
      { username: 'gksander', email: 'gksander93@gmail.com' },
      { username: 'chrisbolin', email: 'bolin.chris@gmail.com' }
    ],
    [ { username: 'cookpete', email: 'pete@cookpete.com' } ],
    [
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'fb', email: 'opensource+npm@fb.com' },
      { username: 'timer', email: 'timer150@gmail.com' },
      { username: 'iansu', email: 'ian@iansutherland.ca' },
      { username: 'ianschmitz', email: 'ianschmitz@gmail.com' }
    ],
    [
      { username: 'gaearon', email: 'dan.abramov@gmail.com' },
      { username: 'fb', email: 'opensource+npm@fb.com' },
      { username: 'timer', email: 'timer150@gmail.com' },
      { username: 'iansu', email: 'ian@iansutherland.ca' },
      { username: 'ianschmitz', email: 'ianschmitz@gmail.com' }
    ],
    [
      { username: 'fractal', email: 'contact@wearefractal.com' },
      { username: 'yocontra', email: 'ericbombhax@gmail.com' }
    ]
  ]
  
  //console.log('findSort',findSort.flat().map(element => ({ username: element.username})));
  let uniqu = findSort.flat().map(element => ({ username: element.username}))
  const removeRepeting = [...new Set(uniqu.map(s => JSON.stringify(s)))]
      .map(s => JSON.parse(s));
  console.log('name',  testData.filter(package => {
      if(package.package.maintainers.find(x => x.username === 'acdlite')) {
          return package;
      }
  }).map(value => ({name: value.package.name})));
const maintainer = removeRepeting.sort((a,b) => (a.username > b.username ? 1 : -1));
const maintainerPackage = maintainer.map(maintainer => {
    return {
        username: maintainer.username,
        packageNames: [...testData.filter(package => {
            if(package.package.maintainers.find(x => x.username === maintainer.username)) {
                return package;
            }
        }).map(value => ({name: value.package.name}))]
    }
})
console.log('maintainer', maintainerPackage[0].packageNames.forEach(p => console.log('p',p)));