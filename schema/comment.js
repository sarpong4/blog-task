const { commentSchema, CommentTC } = require("../models/comment");

const CommentQuery = {
  commentById: commentTC.getResolver("findById"),
  commentByIds: commentTC.getResolver("findByIds"),
  commentOne: commentTC.getResolver("findOne"),
  commentMany: commentTC.getResolver("findMany"),
};

const CommentMutation = {
  commentCreate: commentTC.getResolver("createOne"),
  commentUpdateById: commentTC.getResolver("updateById"),
  commentUpdateOne: commentTC.getResolver("updateOne"),
  commentRemoveById: commentTC.getResolver("removeById"),
  commentRemoveOne: commentTC.getResolver("removeOne"),
};

module.exports = { CommentQuery, CommentMutation };
