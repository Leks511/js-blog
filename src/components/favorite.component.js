import {Component} from "../core/component";

import renderPost from "../templates/post.template";

import {apiService} from "../services/api.service";

class FavoriteComponent extends Component {
  constructor(id, {loader}) {
    super(id);

    this.loader = loader;
  }

  init() {
    this.el.addEventListener(`click`, linkClickHandler.bind(this));
  }

  onShow() {
    const favorites = JSON.parse(localStorage.getItem(`favorites`)) || [];
    const favoritesMorkup = renderList(favorites);

    this.el.insertAdjacentHTML(`afterbegin`, favoritesMorkup);
  }

  onHide() {
    this.el.innerHTML = ``;
  }
}

async function linkClickHandler(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains(`js-link`)) {
    const postId = evt.target.textContent;
    this.el.innerHTML = ``;
    
    this.loader.show();
    const post = await apiService.fetchPostsById(postId);
    this.loader.hide();
    
    this.el.insertAdjacentHTML(`afterbegin`, renderPost(post, false));
  }
}

function renderList(list) {
  if (list.length) {
    return (
    `<ul>
      ${list.map(i => `<li><a class="js-link" href="${i}">${i}</a></li>`).join(``)}
    </ul>`);
  }

  return `<p class="center">Вы пока ничего не добавили</p>`;
}

export default FavoriteComponent;
