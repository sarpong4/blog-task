const User = require("./user.model");
const { AuthenticationError } = require("apollo-server");
const { newApikey } = require("../../utils/auth");

const user = (_, args, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError();
  }
  return ctx.user;
};

const signup = (_, args) => {
  return User.create({ ...args.input, apiKey: newApikey() });
};

const login = async (_, args) => {
  const user = await User.findOne({ username: args.input.username });

  if (!user) {
    throw new AuthenticationError();
  }

  const pwdMatch = await user.checkPassword(args.input.password);
  if (!pwdMatch) {
    throw new AuthenticationError();
  }
  return user.select("-password").lean().exec();
};
const updateUser = (_, args, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError();
  }

  return User.findByIdAndUpdate(ctx.user._id, args.input, { new: true })
    .select("-password")
    .lean()
    .exec();
};
const deleteUser = (_, args, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError();
  }

  return User.findByIdAndRemove(ctx.user._id).select("-password").lean().exec();
};

module.exports = {
  Query: {
    user,
  },
  Mutation: {
    signup,
    login,
    updateUser,
    deleteUser,
  },
};
