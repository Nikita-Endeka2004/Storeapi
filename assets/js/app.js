

const url = "https://fakestoreapi.com/products";

let data = await fetch(url);
    data = await data.json();

    const model = {

      sort: null,

      doSort(direction){

        this.sort = direction;
        this.output();

      },

      output(){

        if(this.sort){
          if(this.sort == 'up'){
              ratesToShow.sort((a, b) => a.rate - b.rate);
          }else if(this.sort == 'down'){
              ratesToShow.sort((a, b) => b.rate - a.rate);
          }
      }

        let cardsForJs = document.getElementById('card_inner');

        cardsForJs.innerHTML = data.map( (item) => `
        
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


    let down = document.getElementById('button-down');
    let up = document.getElementById('button-up');

    up.addEventListener('click', function(){
      model.doSort('up');
  });

  down.addEventListener('click', function(){
    model.doSort('down');
});

    

        
  

