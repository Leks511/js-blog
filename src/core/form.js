export class Form {
  constructor(formElement, controls) {
    this.formElement = formElement;
    this.controls = controls;
  }

  value() {
    const value = {};

    Object.keys(this.controls).forEach(control => {
      value[control] = this.formElement[control].value;
    });

    return value;
  }
}
