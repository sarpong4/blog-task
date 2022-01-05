const fs = require("fs");
const path = require("path");

// Reads schema of every type provided into one schema definition
const loadTypeSchema = async (type) => {
  const pathToSchema = path.join(
    process.cwd(),
    `src/types/${type}/${type}.gql`
  );
  fs.readFile(pathToSchema, { encoding: "utf-8" });
};

module.exports = loadTypeSchema;
