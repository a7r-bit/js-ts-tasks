/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) reject("PromisesArray isn't Array");

    if (promisesArray.length === 0) resolve([]);

    let result = [];
    let completed = 0;

    promisesArray.forEach((item, index) => {
      Promise.resolve(item)
        .then(value => {
          result[index] = value;
          completed++;
          if (completed === promisesArray.length) resolve(result);
        })
        .catch(err => reject(err));
    });
  });
};
