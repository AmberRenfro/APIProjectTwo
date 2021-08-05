let outTwo = document.querySelector(".outTwo");
let out = document.querySelector(".out");
let APIKEY = "HZ0cA3W01CdZfHcZELgh4Ho7XduMKoaI";

//----------------------Function1----------------------------------/
document.addEventListener("DOMContentLoaded",init);

function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
      ev.preventDefault(); //to stop the page reload
      
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
      let str = document.getElementById("search").value.trim();
      url = url.concat(str);
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(content => {
          //  data, pagination, meta
          console.log(content.data);
          console.log("META", content.meta);
          while (out.firstChild) {
          out.removeChild(out.firstChild); 
          }
          let output = document.createElement("figure");
          let img = document.createElement("img");
          let cap = document.createElement("caption");
          img.src = content.data[0].images.downsized.url;
          img.alt = content.data[0].title;
          cap.textContent = content.data[0].title;
          output.appendChild(img);
          output.appendChild(cap);
          out.insertAdjacentElement("afterbegin", output);
          document.querySelector("#search").value = "";
        })
        .catch(err => {
          console.error(err);
        });
    });
  }



//----------------------Function2---------------------------------/
document.addEventListener("DOMContentLoaded",initTwo);

function initTwo() {
  document.getElementById("randomButton").addEventListener("click", ev => {
    ev.preventDefault(); 
    
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1&q=`;
    console.log(url);
    fetch(url)
      .then(response => response.json()) 
      .then(content => {
        console.log(content.data);
        console.log("META", content.meta);
        while (outTwo.firstChild) {
        outTwo.removeChild(outTwo.firstChild); 
        }
        let figTwo = document.createElement("figureTwo");
        let imgTwo = document.createElement("img");
        let capTwo = document.createElement("captionTwo");
        imgTwo.src = content.data.images.downsized.url;
        imgTwo.alt = content.data.title;
        capTwo.textContent = content.data.title;
        figTwo.appendChild(imgTwo);
        figTwo.appendChild(capTwo);
        outTwo.insertAdjacentElement("afterbegin", figTwo);
      })
      .catch(err => {
        console.error(err);
      });
  });
}