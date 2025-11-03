const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
    baseUrl: 'https://www.qantasmoney.com',
    moneyApp: 'https://www.qantasmoney.com/app',
    buyCurrency: 'https://www.qantasmoney.com/qantas-pay/buy-currency',
    googlePlay: 'https://play.google.com',

    amountInAUD: '2500',
    qantasPoints: '5,000 PTS',


    redirectURLFromMoney: 'https://play.google.com/store/apps/details?id=com.qantas.fs',

    qantasFooterMessage: 'We acknowledge the Aboriginal and Torres Strait Islander Traditional Custodians of the land on which we work, live and fly.',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
  },
});
