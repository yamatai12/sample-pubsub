let subscribers = {} as {
  [event: string]: ((data: { msg: string }) => void)[];
};

export = {
  publish(event: string, data: { msg: string }) {
    if (!subscribers[event]) return;
    subscribers[event].forEach((subscriberCallback) =>
      subscriberCallback(data)
    );
  },
  subscribe(event: string, callback: (data: { msg: string }) => void) {
    let index: number;
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
