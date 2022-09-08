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
        <div class="product-main">
          <h1 class="product-title">${produtoAtual.title}</h1>
          <h5 class="product-category">${produtoAtual.category}</h5>
          <strong class="product-price">R$ ${produtoAtual.price}</strong>
        </div>
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
        <div class="product-main">
          <h1 class="product-title">${produtoAtual.title}</h1>
          <h5 class="product-category">${produtoAtual.category}</h5>
          <strong class="product-price">R$ ${produtoAtual.price}</strong>
        </div>
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
        <div class="product-main">
          <h1 class="product-title">${produtoAtual.title}</h1>
          <h5 class="product-category">${produtoAtual.category}</h5>
          <strong class="product-price">R$ ${produtoAtual.price}</strong>
        </div>
      </li>      
      `
      );
    }
  }
}
FiltrarProdutos(products);
