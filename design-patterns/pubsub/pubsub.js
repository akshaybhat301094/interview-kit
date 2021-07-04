let subscribers = {};

module.exports = {
  publish(event, data) {
    // method to publish an update
    if (!subscribers[event]) return;

    subscribers[event].forEach((callback) => callback(data));
  },
  subscribe(event, callback) {
    // method to subscribe to an update
    let index;

    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      },
    };
  },
};
