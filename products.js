const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];
let body = document.body;
let tagMain = document.createElement("main");
tagMain.classList.add("container");
let tagsection1 = document.createElement("section");
tagsection1.classList.add("products-section");
let tagsection2 = document.createElement("section");
tagsection2.classList.add("products-section");
let tagsection3 = document.createElement("section");
tagsection3.classList.add("products-section");
let tagH1Frutas = document.createElement("h1");
tagH1Frutas.innerText = "Frutas";
let tagH1Bebidas = document.createElement("h1");
tagH1Bebidas.innerText = "Bebidas";
let tagH1Higiene = document.createElement("h1");
tagH1Higiene.innerText = "Higiene";
let tagDiv1 = document.createElement("div");
tagDiv1.classList.add("products-content");
let tagDiv2 = document.createElement("div");
tagDiv2.classList.add("products-content");
let tagDiv3 = document.createElement("div");
tagDiv3.classList.add("products-content");
let tagUl1 = document.createElement("ul");
tagUl1.classList.add("ul_fruits");
let tagUl2 = document.createElement("ul");
tagUl2.classList.add("ul_drinks");
let tagUl3 = document.createElement("ul");
tagUl3.classList.add("ul_hygiene");

body.appendChild(tagMain);
tagMain.append(tagsection1);
tagsection1.append(tagH1Frutas, tagDiv1);
tagDiv1.appendChild(tagUl1);
tagMain.append(tagsection2);
tagsection2.append(tagH1Bebidas, tagDiv2);
tagDiv2.appendChild(tagUl2);
tagMain.append(tagsection3);
tagsection3.append(tagH1Higiene, tagDiv3);
tagDiv3.appendChild(tagUl3);
console.log(tagMain);

function FiltrarProdutos(listaProdutos) {
  for (let i = 0; i < listaProdutos.length; i++) {
    let produtoAtual = listaProdutos[i];
    if (produtoAtual.image == undefined) {
      produtoAtual.image = "./img/products/no-img.svg";
      console.log(produtoAtual.image);
    }
    if (produtoAtual.category === "Frutas") {
      document.querySelector(".ul_fruits").insertAdjacentHTML(
        "afterbegin",
        `
      <li class="product">
        <img
          src="${produtoAtual.image}"
          alt=""
          title=""
          class="product-img"
          />
        <main class="product-main">
          <h1 class="product-title">${produtoAtual.title}</h1>
          <h5 class="product-category">${produtoAtual.category}</h5>
          <strong class="product-price">R$ ${produtoAtual.price}</strong>
        </main>
      </li>      
      `
      );
    } else if (produtoAtual.category === "Bebidas") {
      document.querySelector(".ul_drinks").insertAdjacentHTML(
        "afterbegin",
        `
      <li class="product">
        <img
          src="${produtoAtual.image}"
          alt=""
          title=""
          class="product-img"
          />
        <main class="product-main">
          <h1 class="product-title">${produtoAtual.title}</h1>
          <h5 class="product-category">${produtoAtual.category}</h5>
          <strong class="product-price">R$ ${produtoAtual.price}</strong>
        </main>
      </li>      
      `
      );
    } else if (produtoAtual.category === "Higiene") {
      document.querySelector(".ul_hygiene").insertAdjacentHTML(
        "afterbegin",
        `
      <li class="product">
        <img
          src="${produtoAtual.image}"
          alt=""
          title=""
          class="product-img"
          />
        <main class="product-main">
          <h1 class="product-title">${produtoAtual.title}</h1>
          <h5 class="product-category">${produtoAtual.category}</h5>
          <strong class="product-price">R$ ${produtoAtual.price}</strong>
        </main>
      </li>      
      `
      );
    }
  }
}
FiltrarProdutos(products);
