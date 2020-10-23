
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
const firstNameBtn = document.querySelector('.name')
const secondNameBtn = document.querySelector('.surname')
const dobBtn = document.querySelector('.dob')

let desc =false;
firstNameBtn.addEventListener('click',()=>{
    let array = getSorted(listItems ,'firstName', desc)

    displayList(array)
    desc = !desc;
})

secondNameBtn.addEventListener('click',()=>{
    let array = getSorted(listItems ,'lastName', desc)

    displayList(array)
    desc = !desc;
})

dobBtn.addEventListener('click',()=>{
    let array = sortDate(listItems ,'lastName', desc)

    displayList(array)
    desc = !desc;
})

const getSorted =(array, sort, desc) =>{
    array.sort(function(a,b){
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
    })
    if (desc) array.reverse();

    return array;
}
const sortDate = (array, sort ,desc)=>{
    array.sort(function(a,b){
            if (new Date(a[sort]) < new Date(b[sort])) return -1;
            if (new Date(a[sort]) > new Date(b[sort]))  return 1;
            return 0;
        }
    )
    if (desc) array.reverse();
    return array;
}

////////---------------------------------///////

let listItems =[
    {
        firstName: 'Neymar',
        lastName: 'Júnior',
        dob: '1991-09-07'
    },
    {
        firstName: 'Lionel',
        lastName: 'Messi',
        dob: '1987-10-10'
    },
    {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        dob: '1789-12-12'
    },
    {
        firstName: 'Mo',
        lastName: 'Salah',
        dob: '1648-03-07'
    },
    {
        firstName: 'Karim',
        lastName: 'Benzema',
        dob: '1953-12-10'
    },
    {
        firstName: 'Mohamed',
        lastName: 'Youssef',
        dob: '1998-15-07'
    }

]
const displayList = (array =[] ) =>{
    list.innerHTML='';
    
    for(let i=0; i < array.length; i++ ){
        let item = array[i];
        
        let itemElement = document.createElement('div');
        itemElement.classList.add('list-item')

        let firstName = document.createElement('div');
        firstName.classList.add('item-first')
        firstName.innerHTML = item.firstName;

        let secondName = document.createElement('div');
        secondName.classList.add('item-second')
        secondName.innerHTML = item.lastName;

        let dob = document.createElement('div');
        dob.classList.add('item-dob')
        dob.innerHTML = item.dob;

        itemElement.appendChild(firstName)
        itemElement.appendChild(secondName)
        itemElement.appendChild(dob)
        list.appendChild(itemElement)
    }
}
displayList(listItems)


// ------------   ------ the Third task  ----------------- ----------//

const indigo =document.querySelector('.indigo');
const lightblue =document.querySelector('.lightblue');
const cyan =document.querySelector('.cyan');


indigo.addEventListener('click',()=>{
    indigo.classList.toggle('cyan')   
})
lightblue.addEventListener('click',()=>{
    lightblue.classList.toggle('orange') 
})
cyan.addEventListener('click',()=>{
    cyan.classList.toggle('green') 

})


// cyan.addEventListener('click',()=>{
//     lightblue.classList.toggle('lightblue')   
// })

// indigo.addEventListener('click',()=>{
//     indigo.classList.toggle('cyan')   
// })

