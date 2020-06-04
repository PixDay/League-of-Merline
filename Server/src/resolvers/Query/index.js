// exposing every requests

export async function user(_, args, { db }, info) {
  return db.query.user(args, info);
}

export async function users(_, args, { db }, info) {
  return db.query.users(args, info);
}
