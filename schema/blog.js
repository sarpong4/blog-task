const { Blog, blogTC } = require("../models/blog");

const BlogQuery = {
  blogById: blogTC.getResolver("findById"),
  blogByIds: blogTC.getResolver("findByIds"),
  blogOne: blogTC.getResolver("findOne"),
  blogMany: blogTC.getResolver("findMany"),
};

const BlogMutation = {
  blogCreate: blogTC.getResolver("createOne"),
  blogUpdateById: blogTC.getResolver("updateById"),
  blogUpdateOne: blogTC.getResolver("updateOne"),
  blogRemoveById: blogTC.getResolver("removeById"),
  blogRemoveOne: blogTC.getResolver("removeOne"),
};

module.exports = { BlogQuery, BlogMutation };
