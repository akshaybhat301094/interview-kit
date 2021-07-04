// This is the subscriber module

const pubsub = require('./pubsub');
let subscription;
subscription = pubsub.subscribe('anEvent', (data) => {
  console.log(
    `this is the subscriber module and the data from publisher is ${data.msg}`
  );
  subscription.unsubscribe();
});
