function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, (item) => {
    result.push(callback(item));
  });
  return result;
}

function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (i === 0 && initialValue === undefined) {
        accumulator = collection[i];
      } else {
        accumulator = callback(accumulator, collection[i], collection);
      }
    }
  } else if (typeof collection === 'object') {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (i === 0 && initialValue === undefined) {
        accumulator = collection[key];
      } else {
        accumulator = callback(accumulator, collection[key], collection);
      }
    }
  }

  return accumulator;
}


function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, (item) => {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  }
  return Object.keys(collection).length;
}

function myFirst(array, n = 1) {
  if (n === 1) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n = 1) {
  if (n === 1) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
