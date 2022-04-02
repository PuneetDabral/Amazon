export const getProducts =()=>async(dispatch)=>{
    try{
        const data = await fetch('http://localhost:5000/getproducts',{
            method:'GET',
            headers:{  //to send data in json format
                'Content-Type':'application/json'
            }
        });
        const res = data.json();
        console.log(res);
        dispatch({type:"SUCESS GET_PRODUCTS",payload:res}); //function to trigger that value 
    }catch(err){
        dispatch({type:"FAIL TO GET_PRODUCTS",payload:err.response}); //function to trigger that value
    }

}