const rotarIcon=()=>{

    let estado=document.querySelector("#check").checked
    //console.log(estado)
    !estado?document.querySelector(".label-check").classList.add("icono-rotate"):document.querySelector(".label-check").classList.remove("icono-rotate")
}


// 20230427185315
    // https://jsonplaceholder.typicode.com/todos/


    const getDatos=async()=>{
        var res = await fetch('http://localhost:8000/data',{
            method:'GET'
        })
        res= await res.json()
        return console.log(res)
    }

    getDatos()