const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const dot_tire = {
  '-': '11',
  '.': '10',
};
const space = '**********';

function parseMorse(stringMorse) {
  let result = '';
  for (let i = 0; i < stringMorse.length; i++) {
    result += dot_tire[stringMorse[i]];
  }
  return '0'.repeat(10 - result.length) + result;
}

function decode(expr) {
  const letters = {};
  let result = '';
  for (const [key, value] of Object.entries(MORSE_TABLE)) {
    letters[parseMorse(key)] = value;
  }
  letters[space] = ' ';

  for (let i = 0; i < expr.length; i += 10) {
    result += letters[expr.slice(i, i + 10)];
  }
  return result;
}

module.exports = {
  decode,
};
