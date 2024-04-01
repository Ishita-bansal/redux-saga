
export const addToCart = (data)=>{
    console.log("action called",data);
    return{
       type:'ADD_To_CART',
        data:data
    }  
}