import pubSub from "./pubsub";

export const executeSubScribeEvent = () => {
  let subscription: { unsubscribe(): void };

  subscription = pubSub.subscribe("anEvent", (data) => {
    console.log(`"anEvent", was published with this data: "${data.msg}"`);
    subscription.unsubscribe();
  });
};
