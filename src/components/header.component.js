import {Component} from "../core/component";

class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    localStorage.getItem(`visited`) === `true` ? this.hide() : true;
    
    const startButtonElement = this.el.querySelector(`.js-header-start`);
    startButtonElement.addEventListener(`click`, startButtonElementClickHandler.bind(this));
  }
}

function startButtonElementClickHandler() {
  localStorage.setItem(`visited`, JSON.stringify(true));
  this.hide();
};

export default HeaderComponent;
