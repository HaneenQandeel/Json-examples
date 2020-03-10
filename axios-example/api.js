axios.get('https://api.github.com/repositories/19438/issues')
  .then(response => {
    const data = response.data
    var renderHook = document.getElementById('demo');
    var prodList = document.createElement('ul');
    for(var i = 0; i < data.length; i++){
      var prodE = document.createElement('li');
      prodList.className = 'product-list';
      prodE.innerHTML =  `
        <div>
          <div class="product-item__content">
            <h2>${repName}</h2>
          </div>
        </div>
      `;
      prodList.append(prodE)
      console.log(prodE)
      var repositories = data[i];
      var repName = repositories.user.login;
      console.log(repName)

  }
  renderHook.append(prodList);

});


const app = document.querySelector("div#app");
axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
  for(let user in response.data){
    app.innerHTML = `<h1>Name: ${response.data[user].name}</h1>`
  }

});



const postUsers = () => {
  axios.post("https://jsonplaceholder.typicode.com/users", {
      name: "Haneen",
      email: "haneenqandeel2017@gmail.com",
      phone: "0592254"
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

const putUsers = () => {
  axios.put("https://jsonplaceholder.typicode.com/users/1", {
      name: "salem",
      email: "salem@gmail.com",
      phone: "0592244554"
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

const deleteItem = () => {
  axios.delete("https://jsonplaceholder.typicode.com/users/4")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};









