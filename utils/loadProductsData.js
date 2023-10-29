import axios from "axios";

const loadProductsData = async () =>{

    const res = await axios.get('http://localhost:3000/api/all-products/');
    return res.data.products[0];
    
  }

  export default loadProductsData;