import {POST_TYPES} from "../core/constants";

function getTag(typeCode) {
  const tag = POST_TYPES[typeCode];
  const tagClass = typeCode === `news` ? `tag-blue` : ``

  return `<li class="tag ${tagClass} tag-rounded">${tag}</li>`;
}

function getButton(postId) {
  const isPostId = (JSON.parse(localStorage.getItem(`favorites`)) || []).includes(postId);
  
  const buttonText = isPostId ? `Удалить` : `Сохранить`;
  const buttonClass = isPostId ? `button-danger` : `button-primary`;

  return `<button data-postid="${postId}" type="button" class="button-round button-small ${buttonClass}">${buttonText}</button>`;
}

export default function renderPost(postData, withActionButton = true) {
  const {title, fulltext, date, type, id} = postData;

  const tagMorkup = getTag(type);
  const button = !withActionButton ? `` : getButton(id);


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