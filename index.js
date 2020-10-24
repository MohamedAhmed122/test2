
const displayBtn = document.querySelector('.generate');
const displayArray = document.querySelector('#displayArray');
const sumBtn = document.querySelector('#sum');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const subBtn = document.querySelector('#sub');
const ArrayResult =document.querySelector('#result')

///////////-----------First Task MathCalculation ---------//////////


displayBtn.addEventListener('click',(e) =>{
    e.preventDefault()
    clearResult();
     const randoms =[...Array(10)].map(() => Math.floor(Math.random() * 9)+1);
    displayArray.innerHTML= randoms;

    sumBtn.addEventListener('click', ()=> math("sum",0,randoms))

    multiplyBtn.addEventListener('click', ()=>math("multiply" , 1 ,randoms))

    subBtn.addEventListener('click', ()=>math("sub", 0,randoms))

    divideBtn.addEventListener('click', ()=>math("divide", 1, randoms))

})

///////////////-------------///////////////


const clearResult =() =>   ArrayResult.innerHTML = ''

const math = (functionName,anc, array) =>{
    clearResult();
    array.reduce(function(a, b){
        if (functionName === 'sum')
           return  ArrayResult.innerHTML = a+b;
           
             if (functionName === 'divide')
            return  ArrayResult.innerHTML = a / b;

        if (functionName === 'multiply')
            return  ArrayResult.innerHTML = a * b;
        
        if (functionName === 'sub')
            return  ArrayResult.innerHTML = a - b;
        
       
        
    }, anc);
}



///////////-----------       Second Task Sorting       --------- ---------//////////

const list = document.querySelector('.list')
const populationBtn = document.querySelector('.population')

let desc =false;
populationBtn.addEventListener('click',()=>{

    let array = sortByCountry(listItems,desc,listItems.length);
     
    displayList(array)
    desc = !desc;
})

const sortByCountry = (array, desc, L)=>{
    for( var i =0; i<L-2;i++){
        for(var k = i+1; k<L; k++){
            if(array[i].country == array[k].country){
               return sortByCity(array,desc,L);
            }
        }
     }
     array.sort(function(a,b){
        if (a["country"] < b["country"]) return -1;
        if (a["country"] > b["country"]) return 1;
        return 0;
    })
    array.sort();
    if (desc) array.reverse();

    return array;
}

const sortByCity = (array,desc,L)=>{
    for( var i =0; i<L-2;i++){
        for(var k = i+1; k<L; k++){
            if(array[i].city == array[k].city){
                return  sortByPopulation(array,desc);
            }
        }
     }
     array.sort(function(a,b){
        if (a["city"] < b["city"]) return -1;
        if (a["city"] > b["city"]) return 1;
        return 0;
    })
    array.sort();
    if (desc) array.reverse();

    return array;
     
}

const sortByPopulation = (array,desc)=>{
    array.sort(function(a,b){
        if (a["population"] < b["population"]) return -1;
        if (a["population"] > b["population"]) return 1;
        return 0;
    })
    array.sort();
    if (desc) array.reverse();

    return array;
}

////////---------------------------------///////

let listItems =[
    {
    population: 1000,
    country: 'US',
    city: 'New York',
    
    },
    
  
    {
    population: 500,
    country: 'Russia',
    city: 'Tomsk',
    
    },
    {
    population: 700,
    country: 'Us',
    city: 'New Jersey',
    
    },
    {
    population: 50000,
    country: 'England',
    city: 'London',
    },
      
    {
    population: 900,
    country: 'China',
    city: 'Shanghai',
    
    },
        {
    population: 50090,
    country: 'Russia',
    city: 'Moscow',
    },
    {
    population: 9810,
    country: 'Egypt',
    city: 'Cairo',
    },
    
]



const displayList = (array =[] ) =>{
    list.innerHTML='';
    
    for(let i=0; i < array.length; i++ ){
        let item = array[i];
        
        let itemElement = document.createElement('div');
        itemElement.classList.add('list-item')

        let population = document.createElement('div');
        population.classList.add('item-first')
        population.innerHTML = item.population;

        let country = document.createElement('div');
        country.classList.add('item-second')
        country.innerHTML = item.country;

        let city = document.createElement('div');
        city.classList.add('item-city')
        city.innerHTML = item.city;

       

        itemElement.appendChild(population)
        itemElement.appendChild(country)
        itemElement.appendChild(city)
        list.appendChild(itemElement)
    }
}
displayList(listItems)


// ------------   ------ the Third task  ----------------- ----------//

const switchBox =document.querySelector('.box');
const WidthInput = document.querySelector('.width');
const heightInput = document.querySelector('.height');
const submitBtn = document.querySelector('.submit');



submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const width = WidthInput.value;
    const height = heightInput.value
    switchBox.style.height = `${width}px `;
    switchBox.style.width = `${height}px`;
    console.log('submit')
    console.log(width, height)
})
let text =true;
switchBox.addEventListener('click',()=>{
    switchBox.classList.toggle('box-flip');
    text =!text;
    if (text){
        switchBox.innerHTML='Black'
    }else{
        switchBox.innerHTML='White'
    }
    
} )