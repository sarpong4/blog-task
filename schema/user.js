const { User, userTC } = require("../models/user");

const UserQuery = {
  userById: userTC.getResolver("findById"),
  userByIds: userTC.getResolver("findByIds"),
  userOne: userTC.getResolver("findOne"),
  userMany: userTC.getResolver("findMany"),
};

const UserMutation = {
  userCreate: userTC.getResolver("createOne"),
  userUpdateById: userTC.getResolver("updateById"),
  userUpdateOne: userTC.getResolver("updateOne"),
  userRemoveById: userTC.getResolver("removeById"),
  userRemoveOne: userTC.getResolver("removeOne"),
};

module.exports = { UserQuery, UserMutation };
