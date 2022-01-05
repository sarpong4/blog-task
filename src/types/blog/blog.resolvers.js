const Blog = require("./blog.model");
const User = require("../user/user.model");
const { AuthenticationError } = require("apollo-server");

const blog = (_, args, ctx) => {
  if (ctx.user) {
    return Blog.findById(args.id).exec();
  } else {
    throw new AuthenticationError();
  }
};
const blogsByAuthor = (_, args, ctx) => {
  if (ctx.user) {
    return Blog.find({ author: args.author }).exec();
  } else {
    throw new AuthenticationError();
  }
};
const blogsByDate = (_, args, ctx) => {
  if (ctx.user) {
    const date = new Date(args.writtenOn).setFullYear(year, month + 1, day);
    return Blog.find({ _createdAt: date }).exec();
  } else {
    throw new AuthenticationError();
  }
};

const newBlog = (_, args, ctx) => {
  if (ctx.user) {
    const blog = Blog.create({ ...args.input, author: ctx.user._id });
    blog._createdAt = new Date(blog._createdAt).setFullYear(
      year,
      month + 1,
      day
    );
    return blog;
  } else {
    throw new AuthenticationError();
  }
};
const updateBlog = (_, args, ctx) => {
  if (ctx.user) {
    const blog = Blog.findById({ _id: args.id });
    if (blog.author === ctx.user._id) {
      const blog = Blog.findByIdAndUpdate({ _id: args.id }, args.input, {
        new: true,
        runValidators: true,
      });
      blog._createdAt = new Date(blog._createdAt).setFullYear(
        year,
        month + 1,
        day
      );
      return blog.lean().exec();
    } else {
      throw new AuthenticationError();
    }
  } else {
    throw new AuthenticationError();
  }
};
const removeBlog = (_, args, ctx) => {
  if (ctx.user) {
    const blog = Blog.findById({ _id: args.id });
    if (blog.author === ctx.user._id) {
      const blog = Blog.findByIdAndremove({ _id: args.id });
      return blog.lean().exec();
    } else {
      throw new AuthenticationError();
    }
  } else {
    throw new AuthenticationError();
  }
};

module.exports = {
  Query: {
    blog,
    blogsByAuthor,
    blogsByDate,
  },
  Mutation: {
    newBlog,
    updateBlog,
    removeBlog,
  },
};
