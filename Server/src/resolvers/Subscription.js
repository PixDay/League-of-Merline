export const user = {
  subscribe: (_, args, { db }, info) => db.subscription.user(args, info),
};
