$(document).ready(function() {
  const Url = '';
  $.ajax({
    url :Url,
    type:"GET",
    success: function (result){
      console.log(result);
    },
    error
  })
})

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('demo').innerHTML = this.response;
		}
	};
	xhttp.open('GET', 'https://reqres.in/api/users?page=2', true);
	xhttp.send();
}

function loadApi() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('demo').innerHTML = this.responseText;
		}
	};
  xhttp.open('GET', 'https://api.wheretheiss.at/v1/satellites/25544', true);
  xhttp.onload = function () {

  }
	xhttp.send();
}

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'http://localhost:3000/products', true);
xhttp.onload = function (){
  const listOfPost = JSON.parse(xhttp.response);
  for (var i=0; i < listOfPost.length; i++){
    const data = listOfPost[i];
    var para = document.createElement("p");
    var parf = document.createElement('p');
    var node = document.createTextNode(data.name);
    var version = document.createTextNode(data.versions);
    para.appendChild(node);
    parf.appendChild(version);
    var element = document.getElementById("profit");
    element.appendChild(para);
    element.appendChild(parf);

  }
};
xhttp.send();


$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url: "https://api.wheretheiss.at/v1/satellites/25544", success: function(result){
      $("#results").html(result);
    }});
  });
});

// const data = {id:"548"}
// $.ajax({
//   type: "DELETE",
//   data: data,
//   url: "https://rsantana.us/www2/lab/axios/test02052019.php",
//   beforeSend: function(request) {
//     request.setRequestHeader("Y", "RSANTANA");
//   },
//   success: function(data){
//     console.log(data);
//   }
// });

// $.ajax({
//   url: '/script.cgi',
//   type: 'DELETE',
//   success: function(result) {
//       // Do something with the result
//   }
// });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json)
)

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "Post",
  body: JSON.stringify({fakeData: 1}),
  headers :{
    'Content-type': "application/json"
  }}).then(response => response.json())
  .then(json => console.log(json,'2020')
)

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: "Put",
  body: JSON.stringify({fakeData: 200,id:1}),
  headers :{
    'Content-type': "application/json"
  }}).then(response => response.json())
  .then(json => console.log(json,'nhanee')
)

