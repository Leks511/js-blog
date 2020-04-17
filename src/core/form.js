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

  clear() {
    Object.keys(this.controls).forEach(control => {
      this.formElement[control].value = ``;
    })
  }

  isValid() {
    let isFormValid = true;

    Object.keys(this.controls).forEach(control => {
      const validators = this.controls[control];

      let isValid = true;
      validators.forEach(validator => {
        isValid = validator(this.formElement[control].value) && isValid;
      });

      if (!isValid) {
        setError(this.formElement[control]);
      } else {
        removeError(this.formElement[control]);
      }

      isFormValid = isFormValid && isValid;
    })

    return isFormValid;
  }
}


function setError(controlElement) {
  removeError(controlElement)
  
  const errorMessageHTML = `<p class="validation-error">Введите корректное значение</p>`;
  controlElement.classList.add(`invalid`);
  controlElement.insertAdjacentHTML(`afterend`, errorMessageHTML);
};

function removeError(controlElement) {
  controlElement.classList.remove(`invalid`);

  if (controlElement.nextSibling) {
    controlElement.closest(`.form-control`).removeChild(controlElement.nextSibling);
  }
  
};
