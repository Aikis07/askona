import axios from 'axios';

class GetProductsList {
  async getProducts() {
    return await axios.get('http://localhost:3004/products')
      .then((response) => response.data)
      .catch((error) => error);
  }
}

export default new GetProductsList();
