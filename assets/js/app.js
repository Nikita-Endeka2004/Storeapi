const url = "https://fakestoreapi.com/products";

    const model = {

      rates: [],

      async load(){

            let data = await fetch(url);
            data = await data.json();

        this.rates = data;    

        console.table(data);

        this.output();

      },

      sort: null,

      doSort(direction){

        this.sort = direction;
        this.output();

      },

      output(){

        let ratesToShow = this.rates;

        if(this.sort){
          if(this.sort == 'up'){
              ratesToShow.sort((a, b) => a.price - b.price);
          }else if(this.sort == 'down'){
              ratesToShow.sort((a, b) => b.price - a.price);
          }
      }

        let cardsForJs = document.getElementById('card_inner');

        cardsForJs.innerHTML = ratesToShow.map( (item) => `
        
        <div class="card m-2 p-2 text-justify">
    
                <div class="midle">
    
                    <img src="${item.image}" class="m-2 rounded p-2" style="max-width: 100%;" alt="...">
    
                </div>
    
                <div class="card-body">
    
                  <h5 class="card-title">${item.category}</h5>
                  <p class="card-text">${item.description.substring(0, 50) + (item.description.lenght > 50 ? '...' : '')}</p>
    
                </div>
    
                <strong class="font-weight-bold text-end pl-3">${item.price} $</strong>
    
        </div>
    
        
        `).join('');

      }

    }

    model.load();

    let down = document.getElementById('button-down');
    let up = document.getElementById('button-up');

    up.addEventListener('click', function(){
      model.doSort('up');
  });

  down.addEventListener('click', function(){
    model.doSort('down');
});

        
  

