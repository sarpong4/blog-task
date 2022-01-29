const Bookmark = require("./bookmark.model");
const Blog = require("../blog/blog.model");
const { AuthenticationError } = require("apollo-server");

const bookmark = (_, args, ctx) => {
  if (ctx.user) {
    return Bookmark.findById(args.id).exec();
  } else {
    throw new AuthenticationError("User not Signed in.");
  }
};

const newBookmark = (_, args, ctx) => {
  if (ctx.user) {
    const blog = Blog.findById(args.id);
    if (blog) {
      const bookmark = Bookmark.create({ ...args.id, createdBy: ctx.user._id });
      return bookmark;
    } else {
      throw new AuthenticationError("Blog ID provided is invalid");
    }
  } else {
    throw new AuthenticationError("User not Signed in.");
  }
};

const removeBookmark = (_, args, ctx) => {
  if (ctx.user) {
    return Bookmark.findByIdAndRemove(args.id);
  } else {
    throw new AuthenticationError("User not Signed in.");
  }
};

module.exports = {
  Query: { bookmark },
  Mutation: { newBookmark, removeBookmark },
};
