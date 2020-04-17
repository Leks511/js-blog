import {Component} from "../core/component";

import {POST_TYPES} from "../core/constants";

import {apiService} from "../services/api.service";
import {TransformService} from "../services/transform.service";

class PostsComponent extends Component {
  constructor(id) {
    super(id);
  }

  async onShow() {
    const postsData = await apiService.fetchPosts();
    const posts = TransformService.fbObjectToArray(postsData);
    const html = posts.map(post => renderPosts(post)).join(``);

    this.el.insertAdjacentHTML(`afterbegin`, html);
  }

  onHide() {
    this.el.innerHTML = ``;
  }
}

function getTag(typeCode) {
  const tag = POST_TYPES[typeCode];
  const tagClass = typeCode === `news` ? `tag-blue` : ``

  return `<li class="tag ${tagClass} tag-rounded">${tag}</li>`;
}

function renderPosts(postData) {
  const {title, fulltext, date, type} = postData;

  const tagMorkup = getTag(type);

  const button = `<button type="button" class="button-round button-small button-primary">Сохранить</button>`;

  return (
    `<div class="panel">
      <div class="panel-head">
        <p class="panel-title">${title}</p>
        <ul class="tags">
          ${tagMorkup}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${date}</small>
        ${button}
      </div>
    </div>`
  );  
}

export default PostsComponent;
