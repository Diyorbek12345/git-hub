const boxFun = document.querySelector(".box")
const input = document.querySelector(".input")

function box (element) {
return `
<div class="wrapper">
<div class="card" style="width: 18rem;">
  <img src="${element.avatar_url
}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.login}</h5>
    <p class="info">Codding is useful for people's health</p>
    <a href="main.html?name=${element.login}" class="btn btn-primary">See akk</a>
  </div>
</div>
</div>
`
}


async function getPosts() {
  try {
    let imp = input.value;
    let res;
    if(imp === "") {
      res = await fetch('https://api.github.com/users');
    } else{
      const incommingValue = input.value
      res = await fetch(`https://api.github.com/search/users?q=${incommingValue}`);
    }

    if(res.ok === false) {
      throw new Error(`Error: ${res.status} ${res.statusText}`)
    }

    let info =await res.json();
    console.log(info);

    boxFun.innerHTML = "";

    let posts = imp === "" ? info : info.items;
    posts.map((item) => {
    boxFun.innerHTML += box(item)
    })
    
    // if (res.ok === false) {
    //   console.log("Error", res.statusText);
    // }
    // let posts = await res.json();
    // console.log(posts);
    // posts.map((item) => {
    // boxFun.innerHTML += box(item)
    // })
  } catch (err) {
    console.log("Error:", err);
  }
}

input.addEventListener("keyup", getPosts)

getPosts();