import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validators";
import {apiService} from "../services/api.service";

class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.el.addEventListener(`submit`, createPostFormSubmitHandler.bind(this));

    this.form = new Form(this.el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
    });
  }
}

async function createPostFormSubmitHandler(evt) {
  evt.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };

    await apiService.createPost(formData);

    this.form.clear();

    alert(`Вы внесли запись в БД`);
  } 
};

export default CreateComponent;
