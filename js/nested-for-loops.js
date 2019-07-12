/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";
  let comma = `, `;

  for (let vertical = 0; vertical < depth; vertical++) {
    for (let horizontal = 0; horizontal < width; horizontal++) {
      let item = `{x:${horizontal}, y:${vertical}}`;
      result += item;
      if (horizontal === width - 1) {
      } else {
        result += comma;
      }
    }
    result += `\n`;
  }
  return result;
}

// To see your console output outside the tests add function calls here.

console.log(nestedForLoops(3));

console.log(nestedForLoops(10, 5));

console.log(nestedForLoops(5, 10));
