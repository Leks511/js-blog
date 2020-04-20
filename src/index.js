import HeaderComponent from "./components/header.component";
import NavigationComponent from "./components/navigation.component";

import CreateComponent from "./components/create.component";
import PostsComponent from "./components/posts.component";
import FavoriteComponent from "./components/favorite.component";
import LoaderComponent from "./components/loader.component";

new HeaderComponent(`header`);

const navigationComponent = new NavigationComponent(`navigation`);
const loaderComponent = new LoaderComponent(`loader`);

const createComponent = new CreateComponent(`create`);
const postsComponent = new PostsComponent(`posts`, {loader: loaderComponent});
const favoriteComponent = new FavoriteComponent(`favorite`, {loader: loaderComponent});


navigationComponent.registerTabs([
  {name: `create`, component: createComponent},
  {name: `posts`, component: postsComponent},
  {name: `favorite`, component: favoriteComponent},
]);
