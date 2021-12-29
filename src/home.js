import React from 'react'
import { connect } from "react-redux"
import { getmealbyname } from "./store/actions"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = (props) => {
    console.log(props.mealbynameReducer.mealbyname[0])
    const [mealname, setMealname] = React.useState('')
    const searchmealbyname = () => {
        props.dispatch(getmealbyname(mealname))
    }
    return (
        <div className="container">
            <div className='mainarea-main-container'>

                <div className='mainarea-inner-container '>
                    <div className='sad '>
                        <h2 className='product-heading '>
                            Enter Meal Name To Search :<input type="text" onChange={(e) => { setMealname(e.target.value) }} />
                            <button onClick={searchmealbyname}>search</button>
                        </h2>
                       
                    </div>

                <div className={props.mealbynameReducer.mealbyname[0]===undefined?"block":"none" }>
                   <h1 > PLEASE SEARCH MEAL YOU WANT</h1>
                </div>

                <div className={props.mealbynameReducer.mealbyname[0]===null?"block":"none"  }>
                   <h1 > NO ITEMS FOUND!!!</h1>
                </div>
                 <div className="row"> {
                        props.mealbynameReducer.mealbyname[0] && props.mealbynameReducer.mealbyname[0].map((s, i) => {
                            return (
                                <div key={i} className="col-2 custom-product-sec product-box1"  >
                                    
                                        <div className="img-cnt" > <img src={s.strMealThumb} alt='' width="150px" height='150px' /> </div>
                                   
                                        <div className="img-caption" >
                                            <h6>{s.strMeal}<br /> 
                                            <span className="product-price-sec">&nbsp;{s.strArea}</span></h6>
                                        </div>
                                    
                                </div>
                            )
                        })
                    } </div> 
                </div>
            </div>
        </div>
    )
}
export default connect(store => store)(Home)