import {Component} from "../core/component";

class MainComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    localStorage.getItem(`visited`) === `true` ? this.show() : true;
  }
}

export default MainComponent;
