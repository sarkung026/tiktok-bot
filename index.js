const { WebcastPushConnection } = require('tiktok-live-connector');

const TIKTOK_USERNAME = "sarkung_026";

let tiktok = new WebcastPushConnection(TIKTOK_USERNAME);

tiktok.connect().then(() => {
  console.log(`Connected ke @${TIKTOK_USERNAME}`);
}).catch(e => console.log(e));

tiktok.on('chat', data => {
  console.log(`${data.uniqueId}: ${data.comment}`);
});

tiktok.on('gift', data => {
  console.log(`GIFT dari ${data.uniqueId}: ${data.giftName} x${data.repeatCount}`);
});
