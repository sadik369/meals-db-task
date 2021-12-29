const initialState = {
    mealbyname: [],
    mealcatageries:[],
    mealbycatagery:[],
    
  };
  const mealbynameReducer = (state = initialState, action) => {
    if (action.type === 'ADD_M') {
      return { ...state, mealbyname: [action.payload] };
    }
    if (action.type === 'ADD_MEALCATAGERIES') {
      return { ...state, mealcatageries: [action.payload] };
    }
    if (action.type === 'ADD_BYCATAGERY') {
      return { ...state, mealbycatagery: [action.payload] };
    }
   
    return state;
    
  };

  
  export default mealbynameReducer;
  