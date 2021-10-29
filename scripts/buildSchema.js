const fs = require("fs-extra");
const path = require("path");
const { graphql } = require("graphql");
const { instrospectionQuery, printSchema } = require("graphql/utilities");

const Schema = require("../schema");

async function buildSchema() {
  await fs.ensureFile("../data/schema.graphql.json");
  await fs.ensureFile("../data/schema.graphql");

  fs.writeFileSync(
    path.join(__dirname, "../data/schema.graphql.json"),
    JSON.stringify(await graphql(Schema, instrospectionQuery), null, 2)
  );
  fs.writeFileSync(
    path.join(__dirname, "../data/schema.graphql.txt"),
    printSchema(Schema)
  );
}

async function run() {
  await buildSchema();
  console.log("Schema build complete!");
}

run().catch(e => {
    console.log(e)
    process.exit(0)
})