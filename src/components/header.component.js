import {Component} from "../core/component";

class HeaderComponent extends Component {
  constructor(id, {application}) {
    super(id);
    
    this.application = application;
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
  this.application.show();
};

export default HeaderComponent;
