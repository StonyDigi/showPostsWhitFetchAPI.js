let divPosts = document.querySelector(".posts");

window.addEventListener("load", async() => {
    
    let api = "https://jsonplaceholder.typicode.com/posts";
    
    const response = await fetch(api);

    const data = await response.json();

    let output = "";

    data.map((c)=> {
        output += 
        `<div class="elements">
                        <h3>Cím: ${c.title}</h3>
                        <p>${c.body}</p>
                </div>`;         
    })

    divPosts.innerHTML = output;
})