import {Component} from "../core/component";

import renderPost from "../templates/post.template";

import {apiService} from "../services/api.service";
import {TransformService} from "../services/transform.service";

class PostsComponent extends Component {
  constructor(id, {loader}) {
    super(id);

    this.loader = loader;
  }

  init() {
    this.el.addEventListener(`click`, postButtonClickHandler.bind(this));
  }

  async onShow() {
    this.loader.show();
    const postsData = await apiService.fetchPosts();
    const posts = TransformService.fbObjectToArray(postsData);
    const html = posts.map(post => renderPost(post)).join(``);
    this.loader.hide();
    this.el.insertAdjacentHTML(`afterbegin`, html);
  }

  onHide() {
    this.el.innerHTML = ``;
  }
}

function postButtonClickHandler(evt) {
  const el = evt.target;
  const addedPostId = el.dataset.postid;
  
  if (addedPostId) {
    let favorites = JSON.parse(localStorage.getItem(`favorites`)) || [];
    
    if (favorites.includes(addedPostId)) {
      el.textContent = `Сохранить`;
      el.classList.remove(`button-danger`);
      el.classList.add(`button-primary`);

      favorites = favorites.filter(favoritePostId => favoritePostId !== addedPostId);
    } else {
      el.textContent = `Удалить`;
      el.classList.add(`button-danger`);
      el.classList.remove(`button-primary`);

      favorites.push(addedPostId);
    }
    
    localStorage.setItem(`favorites`, JSON.stringify(favorites));
  }
  
}

export default PostsComponent;
