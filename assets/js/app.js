const url = "https://fakestoreapi.com/products";

    const model = {

      rates: [],
      search: '',
      searchElse: '',
      sort: null,

      async load(){

            let data = await fetch(url);
            data = await data.json();

        this.rates = data;    

        console.table(data);

        this.output();

      },

      doSort(direction){

        this.sort = direction;
        this.output();

      },

      doSearch(s){

          this.search = s.trim().toLowerCase();
          this.searchElse = this.search;
          this.output();

      },

      output(){

        let ratesToShow = this.rates.filter(item => item.category.toLowerCase().includes(this.search));
        let ratesToShow2 = this.rates.filter(item => item.description.toLowerCase().includes(this.searchElse));

        if(this.sort){
          if(this.sort == 'up'){
              ratesToShow.sort((a, b) => a.price - b.price);
          }else if(this.sort == 'down'){
              ratesToShow.sort((a, b) => b.price - a.price);
          }
      }

        let cardsForJs = document.getElementById('card_inner');

        console.log('1',ratesToShow.length);

        console.log('2',ratesToShow2);

        if(ratesToShow.length !== 0){

        cardsForJs.innerHTML = ratesToShow.map( (item) => `
        
        <div class="pod_unit">

                <div class="img_in_unit">

                    <img src="${item.image}">
    
                </div>

                <h5>${item.category}</h5>
    
                <p>${item.description.toLowerCase().substring(0, 60) + (item.description.lenght > 30 ? '' : '...')}</p>

                <div class="wrap">

                   <p>${item.price} $</p>

                </div>

            </div>
    
        
        `).join('');

        }else if(ratesToShow.length == 0 && ratesToShow2.length !== 0){

          cardsForJs.innerHTML = ratesToShow2.map( (item) => `
        
          <div class="pod_unit">
  
                  <div class="img_in_unit">
  
                      <img src="${item.image}">
      
                  </div>
  
                  <h5>${item.category}</h5>
      
                  <p>${item.description.toLowerCase().substring(0, 60) + (item.description.lenght > 30 ? '' : '...')}</p>
  
                  <div class="wrap">
  
                     <p>${item.price} $</p>
  
                  </div>
  
              </div>
      
          
          `).join('');  

        }else{

          cardsForJs.innerHTML = ratesToShow2.map( (item) => `
        
          <div class="pod_unit">
  
                  <div class="img_in_unit">
  
                      <img src="${item.image}">
      
                  </div>
  
                  <h5>${item.category}</h5>
      
                  <p>${item.description.toLowerCase().substring(0, 60) + (item.description.lenght > 30 ? '' : '...')}</p>
  
                  <div class="wrap">
  
                     <p>${item.price} $</p>
  
                  </div>
  
              </div>
      
          
          `).join(''); 

        }

      }

    }

    model.load();

    let down = document.getElementById('button-down');
    let up = document.getElementById('button-up');
    let searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function(){

      model.doSearch(this.value);

    });

    up.addEventListener('click', function(){
      model.doSort('up');
  });

  down.addEventListener('click', function(){
    model.doSort('down');
});

        
  

