
const vista=()=>{
    let data=localStorage.getItem("data")
    data=JSON.parse(data)
    document.querySelector("#data").classList.add("data")
    document.querySelector("#data").innerHTML='<h2>Rick and Morty</h2>'
    data.forEach(item => {
        document.querySelector("#data").innerHTML+=`
         <p style="color:black;font-weight:bolder">${item.image}</p>
    `
    });
    
}
vista()