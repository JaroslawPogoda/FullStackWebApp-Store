import axios from 'axios'


export default function getDataAllCategory(setAllCategory){
    const urlAllCategory='https://fakestoreapi.com/products/categories'
    axios({
        method: 'get',
        url: urlAllCategory,
        responseType: 'stream'
      })
        .then(response => setAllCategory(response.data))
        .catch(error => console.error(error))
        .finally(() => console.log('done'));
}