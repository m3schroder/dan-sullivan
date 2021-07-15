// http://blog.nicohaemhouts.com/2015/08/03/accessing-nested-javascript-objects-with-string-key/
export default function getNested(theObject, path, separator) {
  try {
    separator = separator || ".";

    return path
      .replace("[", separator)
      .replace("]", "")
      .split(separator)
      .reduce(function (obj, property) {
        return obj[property];
      }, theObject);
  } catch (err) {
    return undefined;
  }
}
