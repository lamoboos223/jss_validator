// Debug
require("./payload.js");
require("./validation_roles");
console.log("Debug: validations: ");
console.log(validations);
console.log("Debug: payload");
console.log(payload);
console.log("===========================================================");
// End Debug

// START VALIDATOR SCRIPT FROM HERE
// HELPERS
/***
 * @example parameterizedString("my name is %s1 and surname is %s2", "John", "Doe");
 * @return "my name is John and surname is Doe"
 *
 * @firstArgument {String} like "my name is %s1 and surname is %s2"
 * @otherArguments {String | Number}
 * @returns {String}
 */
const parameterizedString = (...args) => {
  const str = args[0];
  const params = args.filter((arg, index) => index !== 0);
  if (!str) return "";
  return str.replace(/%s[0-9]+/g, (matchedStr) => {
    const variableIndex = matchedStr.replace("%s", "") - 1;
    return params[variableIndex];
  });
};
// END HELPERS
//
var validate = function (payload, validations) {
  for (key in validations) {
    validations[key].roles.forEach((role) => {
      switch (role.condition) {
        case "regex":
          if (!role.regex.test(payload[key])) {
            console.log(role.error + ": " + role.message);
          }
          break;
        case "bigger_than":
          var vl =
            typeof role.value == "number"
              ? role.value
              : GetPropertyValue(payload, role.value);
          if (!(payload[key] > vl)) {
            console.log(
              parameterizedString(role.message, payload[key], role.value)
            );
          }
          break;
      }
    });
  }
};
// END VALIDATOR SCRIPT

// Execute the test
validate(payload, validations);
