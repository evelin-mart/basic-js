const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    message = message.toUpperCase().split("");
    key = key.toUpperCase();
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let newIndex =
          this.alphabet.indexOf(message[i]) +
          this.alphabet.indexOf(key[keyIndex]);
        if (newIndex > this.alphabet.length - 1) {
          newIndex -= this.alphabet.length;
        }
        message[i] = this.alphabet[newIndex];
        keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;
      }
    }
    return this.type ? message.join("") : message.reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    message = message.toUpperCase().split("");
    key = key.toUpperCase();
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let newIndex =
          this.alphabet.indexOf(message[i]) -
          this.alphabet.indexOf(key[keyIndex]);
        if (newIndex < 0) {
          newIndex += this.alphabet.length;
        }
        message[i] = this.alphabet[newIndex];
        keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;
      }
    }
    return this.type ? message.join("") : message.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
