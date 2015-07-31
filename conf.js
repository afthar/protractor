
// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:3000/wd/hub',
  specs: ['spec.js'],
  capabilities: {
      'browserName': 'chrome',
      shardTestFiles: true,
      maxInstances: 1,
//        'chromeOptions': {'args': [
//            'proxy-server=192.168.59.103:8090'
//        ]}
    },
}

