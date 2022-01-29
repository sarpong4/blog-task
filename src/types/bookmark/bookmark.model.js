const { Schema, model, SchemaTypes } = require("mongoose");

const bkmarkSchema = new Schema(
  {
    blog: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: "blog",
    },
    createdBy: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Bookmark = model("Bookmark", bkmarkSchema);

module.exports = Bookmark;
