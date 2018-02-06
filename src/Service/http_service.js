import 'whatwg-fetch';

class HttpService{

  getProducts = () =>{
    var promise = new Promise((resolve,reject)=>{
      fetch("http://localhost:3004/products")
      .then(Response =>{ 
        resolve(Response.json());
      }).catch(err=>{
        console.log(err);
      })
    })
   return promise;
  }

}

export default HttpService;