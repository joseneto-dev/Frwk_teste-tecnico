var src = `https://jsonplaceholder.typicode.com/`;
var page = "_page=1",
    limit = "_limit=10";
var pages = 100 / 20;

function getPosts() {
    fetch(`${src}posts?${page}&${limit}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let result = ``;
            data.forEach((posts) => {
                result += `<div class="post-wrapper">
        <div class="post-content">
          <div class="post">
            <p>Id: ${posts.id}</p>
            <p>Titulo: ${posts.title}</p>
            <p>${posts.body}</p>
          </div>
        </div>
      </div>
			`;
                document.getElementById("posts").innerHTML = result;
            });
        })
        .then(() => {
            let step = "";
            let page = 0;

            for (var i = 1; i <= 10; i++) {
                page++;
                step += `<li><a onmouseover="pagination()" val="https://jsonplaceholder.typicode.com/posts?_page=${page}&${limit}">${i}</a></li>`;
            }
            document.getElementById("pagination").innerHTML = step;
        });
}

function searchPosts() {
    let searchValue = document.getElementById("searchValue").value;

    fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchValue}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let result = ``;
            data.forEach((posts) => {
                result += `<div class="post-wrapper">
        <div class="post-content">
          <div class="post">
            <p>Id: ${posts.id}</p>
            <p>Titulo: ${posts.title}</p>
            <p>${posts.body}</p>
          </div>
        </div>
       
      </div>
			`;
                document.getElementById("posts").innerHTML = result;
            });
        });
}

function getalbums() {
    fetch(`${src}albums?${page}&${limit}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let result = ``;
            data.forEach((albums) => {
                result += `<div class="post-wrapper">
        <div class="post-content">
          <div class="post">
            <p>ID:${albums.id}</p>
            <p>Titulo: ${albums.title}</p>
          </div>
        </div>
      </div>
			`;
                document.getElementById("albums").innerHTML = result;
            });
        })
        .then(() => {
            let step = "";
            let page = 0;

            for (var i = 1; i <= 10; i++) {
                page++;
                step += `<li><a onmouseover="paginationalbums()" val="https://jsonplaceholder.typicode.com/albums?_page=${page}&${limit}">${i}</a></li>`;
            }
            document.getElementById("paginationalbums").innerHTML = step;
        });
}

function searchalbums() {
    let searchValue = document.getElementById("searchValue").value;

    fetch(`https://jsonplaceholder.typicode.com/albums?q=${searchValue}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let result = ``;
            data.forEach((albums) => {
                result += `<div class="post-wrapper">
        <div class="post-content">
          <div class="post">
            <p>Id: ${albums.id}</p>
            <p>Titulo: ${albums.title}</p>
          </div>
        </div>
      </div>
			`;
                document.getElementById("albums").innerHTML = result;
            });
        });
}

function getto_do() {
    fetch(`${src}todos?${page}&${limit}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let result = ``;
            data.forEach((to_do) => {
                result += `<div class="post-wrapper">
        <div class="post-content">
          <div class="post">
            <p>Id User: ${to_do.userId}</p>
            <p>Id : ${to_do.id}</p>
            <p>Titulo: ${to_do.title}</p>
            <p>Complete: ${to_do.completed}</p>
          </div>
        </div>
      </div>`;
                document.getElementById("to_do").innerHTML = result;
            });
        })
        .then(() => {
            let step = "";
            let page = 0;

            for (var i = 1; i <= 20; i++) {
                page++;
                step += `<li><a onmouseover="paginationtodo()" val="https://jsonplaceholder.typicode.com/todos?_page=${page}&${limit}">${i}</a></li>`;
            }
            document.getElementById("paginationtodo").innerHTML = step;
        });
}

function searchto_do() {
    let searchValue = document.getElementById("searchValue").value;

    fetch(`https://jsonplaceholder.typicode.com/todos?q=${searchValue}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let result = ``;
            data.forEach((to_do) => {
                result += `<div class="post-wrapper">
        <div class="post-content">
          <div class="post">
            <p>Id User: ${to_do.userId}</p>
            <p>Id : ${to_do.id}</p>
            <p>Titulo: ${to_do.title}</p>
            <p>Complete: ${to_do.completed}</p>
          </div>
        </div>
      </div>
			`;
                document.getElementById("to_do").innerHTML = result;
            });
        });
}

function pagination() {
    var button = document.querySelectorAll("a");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(e) {
            var href = e.target.getAttribute("val");

            fetch(href)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    let result = ``;
                    data.forEach((posts) => {
                        result += `<div class="post-wrapper">
            <div class="post-content">
              <div class="post">
                <p>Id: ${posts.id}</p>
                <p>Titulo: ${posts.title}</p>
                <p>${posts.body}</p>
              </div>
            </div>
           
          </div>
          `;
                        document.getElementById("posts").innerHTML = result;
                    });
                });
        });
    }
}

function paginationtodo() {
    var button = document.querySelectorAll("a");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(e) {
            var href = e.target.getAttribute("val");

            fetch(href)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    let result = ``;
                    data.forEach((to_do) => {
                        result += `<div class="post-wrapper">
            <div class="post-content">
              <div class="post">
                <p>Id User: ${to_do.userId}</p>
                <p>Id : ${to_do.id}</p>
                <p>Titulo: ${to_do.title}</p>
                <p>Complete: ${to_do.completed}</p>
              </div>
            </div>
          </div>
          `;
                        document.getElementById("to_do").innerHTML = result;
                    });
                });
        });
    }
}

function paginationalbums() {
    var button = document.querySelectorAll("a");
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(e) {
            var href = e.target.getAttribute("val");

            fetch(href)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    let result = ``;
                    data.forEach((albums) => {
                        result += `<div class="post-wrapper">
            <div class="post-content">
              <div class="post">
                <p>Id: ${albums.id}</p>
                <p>Titulo: ${albums.title}</p>
              </div>
            </div>
          </div>
          `;
                        document.getElementById("albums").innerHTML = result;
                    });
                });
        });
    }
}

function goBack() {
    window.history.back();
}