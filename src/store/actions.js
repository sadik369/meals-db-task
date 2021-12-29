import axios from 'axios'

export const getmealbyname =(m)=>{    
    return (dispatch)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${m}`)
        .then(function (response) { 
          dispatch({type:'ADD_M',payload:response.data.meals})
        });
    };
}
export const getallcategeries =()=>{    
  return (dispatch)=>{
      axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(function (response) { 
        dispatch({type:'ADD_MEALCATAGERIES',payload:response.data.categories})
      });
  };
}

export const getmealbycat =(m)=>{    
  return (dispatch)=>{
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${m}`)
      .then(function (response) { 
        dispatch({type:'ADD_BYCATAGERY',payload:response.data.meals})
      });
  };
}


