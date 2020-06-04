export async function updateUser(_, args, { db }, info) {
  return db.mutation.updateUser(args, info);
}

export async function deleteUser(_, args, { db }, info) {
  return db.mutation.deleteUser(args, info);
}
