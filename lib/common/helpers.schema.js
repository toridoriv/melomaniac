const { z } = require("zod");
const { default: zodToJsonSchema } = require("zod-to-json-schema");

const NotEmptyStringSchema = z.string().min(1);

/**
 * Returns a function to handle Zod errors from
 * environment.
 *
 * @param {string} name
 * @returns {import("zod").ZodErrorMap}
 */
function getEnvironmentErrorHandler(name) {
  return function handleEnvironmentError(_issue, _context) {
    return { message: `${name} is missing from your environment` };
  };
}

/**
 * Creates a Zod schema for an environment variable.
 *
 * @param {string} name - Name of the environment variable
 * @param {string} [description] - Optional description for the variable
 * @returns {z.ZodString}
 */
function getSchemaForEnvironmentString(name, description) {
  const options = {
    description,
    invalid_type_error: `${name} must be a string`,
    required_error: `${name} is missing from your environment`,
  };
  const schema = z.string(options).min(1, `${name} cannot be empty`);

  return schema;
}

/**
 *
 * @param {z.Schema} schema
 * @param {string} [name]
 * @returns {() => ReturnType<typeof zodToJsonSchema>}
 */
function getToJsonSchemaFunction(schema, name) {
  return zodToJsonSchema.bind(zodToJsonSchema, schema, {
    $refStrategy: "root",
    basePath: ["https://toridoriv.github.io/melomaniac/schemas"],
    errorMessages: true,
    name,
    target: "jsonSchema7",
  });
}

/**
 *
 * @param {z.Schema} schema
 */
function parseEnvironment(schema) {}

module.exports = {
  getEnvironmentErrorHandler,
  getSchemaForEnvironmentString,
  getToJsonSchemaFunction,
  NotEmptyStringSchema,
};
