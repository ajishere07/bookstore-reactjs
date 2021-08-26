export const getCartTotal = (cart) => cart.reduce((amount,item)=> item.price + amount,0 )

export const initialState ={
    buynow:[],
   cart: []
}

const reducer = (state, action) => {

    // console.log(action)
    switch (action.type) {
        case 'BUY_NOW':
            return{
                ...state,
                buynow: [action.itemmm],
            }
            break;
        case 'ADD_TO_CART':
            return { 
                ...state,
                cart: [...state.cart, action.item],
            };
            break;
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart]
            const index = state.cart.findIndex((cartItem)=>cartItem.id === action.id)
            if(index >=0){
                newCart.splice(index,1)
        
            }else{
                console.warn(`cant remove product (id: ${action.id})as its not exist`)
            }
            return { ...state, cart: newCart}
            break;
    
        default:
            return state;
    }
}

export default reducer;