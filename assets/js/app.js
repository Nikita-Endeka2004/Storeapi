

const url = "https://fakestoreapi.com/products";

let data = await fetch(url);
    data = await data.json();

    let cardsForJs = document.getElementById('card_inner');

    cardsForJs.innerHTML = data.map( (item) => `
    
    <div class="card m-2 p-2 text-justify" id="faf">

            <div class="midle">

                <img src="${item.image}" class="m-2 rounded p-2" style="max-width: 100%;" alt="...">

            </div>

            <div class="card-body">

              <h5 class="card-title">${item.category}</h5>
              <p class="card-text">${item.description}</p>

            </div>

            <strong class="font-weight-bold text-end pl-3">${item.price} $</strong>

    </div>

    
    `).join('');



    let MaxCostInCard = document.documentElement('squaredThree');

        
  

