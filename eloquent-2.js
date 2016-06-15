// Looping A Triangle

var hash = ''

for (var i = 0; i < 7; i++) {
  hash += '#'
  console.log(hash)
}

// FizzBuzz

var count = 1
var fizz = 'Fizz'
var buzz = 'Buzz'

for (i = 0; i < 100; i++) {
  count = 1 + i

  if (count % 3 === 0 && count % 5 === 0) {
    console.log(fizz + buzz)
  } else if (count % 5 === 0) {
    console.log(buzz)
  } else if (count % 3 === 0) {
    console.log(fizz)
  } else {
    console.log(count)
  }
}

// Chess Board

var check = ''
var size = 8

for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      check += ' '
    } else {
      check += '#'
    }
  }
  check += '\n'
}
console.log(hash)
