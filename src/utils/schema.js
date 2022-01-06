const fs = require("fs");
const path = require("path");

// Reads schema of every type provided into one schema definition
const loadTypeSchema = (type) =>
  new Promise((resolve, reject) => {
    const pathToSchema = path.join(
      process.cwd(),
      `src/types/${type}/${type}.gql`
    );
    fs.readFile(pathToSchema, { encoding: "utf-8" }, (err, schema) => {
      if (err) {
        return reject(err);
      }

      resolve(schema);
    });
  });

module.exports = loadTypeSchema;
