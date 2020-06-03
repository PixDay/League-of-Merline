export async function user(_, args, { db }, info) {
  return db.query.user(args, info);
}

export async function users(_, args, { db }, info) {
  return db.query.users(args, info);
}

export async function createUser(_, args, { db }, info) {
  return db.mutation.createUser(args, info);
}

export async function updateUser(_, args, { db }, info) {
  return db.mutation.updateUser(args, info);
}

export async function deleteUser(_, args, { db }, info) {
  return db.mutation.deleteUser(args, info);
}
