class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(postData) {
    try {

      const request = new Request(`${this.url}/posts.json`, {
        method: `post`,
        body: JSON.stringify(postData)
      });

      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchPosts() {
    try {
      
      const request = new Request(`${this.url}/posts.json`, {
        method: `get`,
      });

      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return response.json();
}

export const apiService = new ApiService(`https://js-blog-d3a9c.firebaseio.com`);