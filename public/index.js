
const getData=async()=>{

    var res=await fetch('https://rickandmortyapi.com/api/character/?page=19')

    res=await res.json()

    return (console.log(res.results),localStorage.setItem("data",JSON.stringify(res.results)),vista())

}

getData()


const vista=()=>{
    let data=localStorage.getItem("data")
    data=JSON.parse(data)
    document.querySelector("#data").classList.add("data")
    document.querySelector("#data").innerHTML='<h2>Rick and Morty</h2>'
    data.forEach(item => {
        document.querySelector("#data").innerHTML+=`
         <img style="width:20%;heigth:200px"  src=${item.image}></img>
    `
    });
    
}

if(localStorage.getItem("data")!==null){
    vista()
}