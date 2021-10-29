const { commentSchema, CommentTC } = require("../models/comment");

const CommentQuery = {
  commentById: CommentTC.getResolver("findById"),
  commentByIds: CommentTC.getResolver("findByIds"),
  commentOne: CommentTC.getResolver("findOne"),
  commentMany: CommentTC.getResolver("findMany"),
};

const CommentMutation = {
  commentCreate: CommentTC.getResolver("createOne"),
  commentUpdateById: CommentTC.getResolver("updateById"),
  commentUpdateOne: CommentTC.getResolver("updateOne"),
  commentRemoveById: CommentTC.getResolver("removeById"),
  commentRemoveOne: CommentTC.getResolver("removeOne"),
};

module.exports = { CommentQuery, CommentMutation };
