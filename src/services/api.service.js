class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  async createPost(postData) {
    try {
      const request = new Request(this.url + `/posts.json`, {
        method: `post`,
        body: JSON.stringify(postData)
      });
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
    
  }
}

export const apiService = new ApiService(`https://js-blog-d3a9c.firebaseio.com`);