import pubSub from "./pubsub";

export const executePublishEvent = () => {
  const data = {
    msg: "TOP SECRET DATA",
  };

  pubSub.publish("anEvent", data);
};
