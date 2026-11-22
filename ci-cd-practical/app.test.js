const add = require('./app');

const result = add(10, 20);

if (result !== 30) {
    throw new Error('Test failed!');
}

console.log('Test passed! Result:', result);
