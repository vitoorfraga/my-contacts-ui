import HttpClient from "./utils/HttpClient";

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000");
  }

  async listCategories() {
    const categories = await this.httpClient.get("/catdsadasegories");
    return categories;
  }
}

export default new CategoriesService();