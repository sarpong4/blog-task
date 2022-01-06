const User = require("./user.model");
const { AuthenticationError } = require("apollo-server");
const { newApiKey } = require("../../utils/auth");

const me = (_, args, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError();
  }
  return ctx.user;
};

const user = (_, args, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError("Not Logged In");
  } else {
    return User.findById({ _id: args.id }).select("-password").lean().exec();
  }
};

const signup = (_, args) => {
  return User.create({ ...args.input, apiKey: newApiKey() });
};

const login = async (_, args, ctx) => {
  if (!ctx.user) {
    const user = await User.findOne({ username: args.input.username });

    if (!user) {
      throw new AuthenticationError("User not Found");
    }

    const pwdMatch = await user.checkPassword(args.input.password);
    if (!pwdMatch) {
      throw new AuthenticationError("Invalid Password");
    }
    return user;
  } else {
    throw new AuthenticationError("Already Logged In");
  }
};
const updateUser = (_, args, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError("Not Logged in or User Does not Exist!");
  }

  return User.findByIdAndUpdate(ctx.user._id, args.input, {
    new: true,
    runValidators: true,
  })
    .select("-password")
    .lean()
    .exec();
};
const deleteUser = (_, __, ctx) => {
  if (!ctx.user) {
    throw new AuthenticationError("Not Logged In or User Does not Exist");
  }

  return User.findByIdAndRemove(ctx.user._id).select("-password").lean().exec();
};

module.exports = {
  Query: {
    me,
    user,
  },
  Mutation: {
    signup,
    login,
    updateUser,
    deleteUser,
  },
};
