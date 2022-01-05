const User = require("../types/user/user.model");
const cuid = require("cuid");

const newApiKey = () => cuid();

const authenticate = async (req) => {
  const apiKey = req.headers.authorizaton;

  if (!apiKey) {
    return;
  }

  const user = await User.findOne({ apiKey }).select("-password").lean().exec();

  return user;
};

module.exports = { newApiKey, authenticate };
