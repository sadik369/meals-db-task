import axios from 'axios'

export const getmealbyname =(m)=>{    
    return (dispatch)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${m}`)
        .then(function (response) {  
          console.log("response.data.meals",response.data.meals) 
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
        console.log("response.data",response.data.meals)  
        dispatch({type:'ADD_BYCATAGERY',payload:response.data.meals})
      });
  };
}
/* export const getslots =()=>{    
    return (dispatch)=>{
        axios.get('http://localhost:4000/slots')
        .then(function (response) {   
          dispatch({type:'UPDATE_SLOT_DETAILS',payload:response.data})
        });
    };
}

export const postS =(s)=>{
  return axios.post('http://localhost:2000/students', s);
}

export const getStudentsFromServer=()=>{
        return (dispatch)=>{
          axios.get('http://localhost:2000/students')
          .then(function (response) {   
            dispatch({type:'UPDATE_STUDENTS',payload:response.data})
          });
      };
} */


