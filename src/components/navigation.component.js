import {Component} from "../core/component";

class NavigationComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.el.addEventListener(`click`, tabClickHandler.bind(this));
  }
}

function tabClickHandler(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains(`active`)) {
    this.el.querySelectorAll(evt.target.tagName).forEach((tab) => tab.classList.remove(`active`));
    evt.target.classList.add(`active`)
  } 
}

export default NavigationComponent;
