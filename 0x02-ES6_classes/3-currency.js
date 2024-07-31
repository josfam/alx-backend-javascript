export default class displayFullCurrency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getters and setters
  set code(newCode) {
    this._code = newCode;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
