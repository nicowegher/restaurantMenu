// CONEXION A GOOGLE SHEET API //
fetch("https://api.apispreadsheets.com/data/11588/").then(res=>{
    if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
        const yourData = data;
        console.log(yourData);
        // console.log(yourData.data[1].descripcion);
        }).catch(err => console.log(err))
        }
    else{
        // ERROR
        }
})