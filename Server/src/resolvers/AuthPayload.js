export const user = (root, _, { db }, info) =>
  db.query.user({ where: { id: root.user.id } }, info);
