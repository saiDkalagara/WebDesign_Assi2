

const url = 'https://restcountries.com/v2/all'
const fakestoreapi = 'https://jsonplaceholder.typicode.com/posts'
const fakestoreapi1 = 'https://fakestoreapi.com/products'
const catsapi = 'https://api.thecatapi.com/v1/breeds'

async function countriesapi(){
    
    
    const response = await fetch(url)

    const data = await response.json();

    for(i=0;i<data.length;i++){
        document.getElementById('caps').innerHTML += `<li> ${data[i].name} : ${data[i].capital} </li>`;    }
    
    for(i=0;i<data.length;i++){
        document.getElementById('Population').innerHTML += `<li> ${data[i].name} : ${data[i].population} </li>`;
        
    }
}
    const jsondata=[
        {
            "name":"Harry Potter",
             "city":"London"
        },
        {
            "name":"Don Quixote",
            "city":"Madrid"
        },
        {
            "name":"Joan of Arc",
            "city":"Paris"
        },
        {
            "name":"Rosa Park",
            "city":"Alabama"
        },
        {
            "name":"John",
            "city":" Paris"
        }
    
        ]	
        jsondata.map(x => {
            document.getElementById('names').innerHTML += `<li> ${x.name} </li> `
        })
        jsondata.map(x => {
            if(x.name == "London"){
                document.getElementById('name').innerHTML += `<li> ${x.name} </li>` 
            }
        
        })


async function fakeapi(){
    
    const response = await fetch(fakestoreapi)
    const data = await response.json();
    
    let car = data.filter(data => data.userId === 1);
    var table = document.getElementById('mytable')
    for(i=-0;i<car.length;i++){
        var row = `<tr>
                        <td>${car[i].userId}</td>
                        <td>${car[i].id}</td>
                        <td>${car[i].title}</td>
                        <td>${car[i].body}</td>
                        </tr>`
            table.innerHTML += row
    }
}
async function fakeapi1(){
    const response = await fetch(fakestoreapi1)
    const data = await response.json();
    arr = []
    for(i = 0;i<data.length;i++)
    {
        if(data[i].price >= 100){
            document.getElementById('prix').innerHTML += `<ul> Product Name:  ${data[i].title} :- &nbsp; Price: ${data[i].price} </ul>`
        }
    arr.push(data[i].title)
}
  document.getElementById('asc').innerHTML += `<ul> ${arr.sort()} </ul><br>`  
}

async function fakecats(){
    const response = await fetch(catsapi)
    const data = await response.json();

    
    arr = []
    data.forEach(i => {
        if(i.country_codes === "US"){
            document.getElementById('us').innerHTML += `<li> ${i.name} </li>`
        }
        arr.push(i.name)

      
    
    })
    arr.reverse()
    document.getElementById('dc').innerHTML += `${arr}`

      

       
    }
    
    
    

 


countriesapi();
fakeapi();
fakeapi1();
fakecats();