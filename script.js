// alert("hola soy un mensaje externo");

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
        return res.json();    
        console.log(res);   
    })
    .then((post)=>{
        for (let index=0;index<1; index++){
            div.innerHTML+=`
            <div class="card col-3 m-1 mx-auto" style="width: 18rem;">
            <img src="${post[con].thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${post[con].id}</h5>
              <p class="card-text">${post[con].title}</p>             
                 </div>
            </div>
            `
            con=con+1;            
        }
    })
    .catch((error)=>{
        console.log(error);
    })    
}

function stores(){
    fetch('https://api.mercadopago.com/users/446566691/stores/search?limit=80&access_token=APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-446566691')
    .then((res)=>{
        console.log(res);
        return res.json();           
    })
    .then((data)=>{
        console.log(data.results)
        data2 = data.results
    })
    .then((post)=>{
        for (let index=0;index<data2.length; index++){
        div2.innerHTML+=`
        <div class="card col-3 m-1 mx-auto" style="width: 18rem;">
        <img src="https://infonegocios.info/uploads/grido-helados-logo-fake-news-interna-cba.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data2[index].id}</h5>
          <p class="card-text">${data2[index].name}</p>   
          <a href="#" class="btn btn-primary">Go somewhere</a>          
             </div>
        </div>
        ` 
        con=con+1;
        }            
    })
}

