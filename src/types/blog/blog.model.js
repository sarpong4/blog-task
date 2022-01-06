const { model, Schema, SchemaTypes } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Lifestyle",
        "Health",
        "Technology",
        "Music",
        "Arts",
        "Education",
        "Movies",
        "TV_Shows",
        "Sports",
        "Food",
      ],
    },
    author: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: "user",
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
module.exports = Blog;
