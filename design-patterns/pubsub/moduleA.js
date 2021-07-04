// Publisher module
const pubSub = require('./pubsub');

module.exports = {
  publishEvent() {
    const data = {
      msg: 'THIS IS FROM PUBLISHER',
    };
    pubSub.publish('anEvent', data);
  },
};
