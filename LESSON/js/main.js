const boxFun = document.querySelector(".box")
const main = new URLSearchParams(location.search).get("name");
console.log(main);

function box(element) {
return `
<div class="wrapper">
<div class="card" style="width: 18rem;">
  <img src="${element.avatar_url
}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.login}</h5>
    <a class="length"></a>
  </div>
</div>
</div>
`
}

async function getPosts() {
  try {
    let res = await fetch(`https://api.github.com/search/users?q=${main}`);
    console.log(res);
    if (res.ok === false) {
      console.log("Error", res.statusText);
    }
    let posts = await res.json();
    console.log(posts);
    let abc = posts.items;
    
    let uzb = abc.filter((item) => item.login === main)
    uzb.map((item) => {
      console.log(item);
      boxFun.innerHTML += box(item)
    });
    console.log(uzb);
  } catch (err) {
    console.log("Error:", err);
  }

}

getPosts()