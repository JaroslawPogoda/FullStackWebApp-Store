axios({
    method: 'GET',
    baseURL: 'http://api.fakeshop-api.com',
    url: '/products/getAllProducts',
  })
    .then(({ data }) => {
      setData(data.products)
    })
    .catch(err => console.dir(err))