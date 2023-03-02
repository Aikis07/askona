import axios from 'axios';

class GetProducts {
  async getCategories() {
    return await axios.get('http://localhost:3004/categories')
      .then((response) => response.data)
      .catch((error) => error);
  }
}

export default new GetProducts();
