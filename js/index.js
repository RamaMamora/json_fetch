/* import { fetchPosts } from "./fetch_data.js";
import { postTmplGrid, postTmplList } from "./templates.js"; 
*/
import { renderPosts } from "./render_posts.js";

const app = {};

app.init = async () => {
  renderPosts();
};

app.init();
