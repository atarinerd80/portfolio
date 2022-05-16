import axios from 'axios';

class ProductService {
    static async getProducts(itemOffset) {
        const options = {
            url: 'https://dummyjson.com/products',
            params: {
                limit: 8,
                skip: itemOffset
            },
            };
        
            try {
                const res = await axios.get(options.url, {params: options.params});
                return res.data;
            } catch (error) {
                return error.response;
            }
    }

    static async searchProducts(itemOffset, search) {
        const options = {
            url: 'https://dummyjson.com/products/search',
            params: {
                limit: 8,
                skip: itemOffset,
                q: search
            },
            };
        
            try {
                const res = await axios.get(options.url, {params: options.params});
                return res.data;
            } catch (error) {
                return error.response;
            }
    }
}
export default ProductService;