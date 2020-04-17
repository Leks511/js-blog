import {Component} from "../core/component";
import {apiService} from "../services/api.service";
import {TransformService} from "../services/transform.service";

class PostsComponent extends Component {
  constructor(id) {
    super(id);
  }

  async onShow() {
    const postsData = await apiService.fetchPosts();
    const posts = TransformService.fbObjectToArray(postsData);
    console.log(posts)
  }
}

export default PostsComponent;
