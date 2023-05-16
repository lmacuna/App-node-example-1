


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