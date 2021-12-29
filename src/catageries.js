import React from 'react'
import { connect } from "react-redux"
import {getallcategeries } from "./store/actions"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const Catageries = (props) => {
 
    React.useEffect(()=>{
        props.dispatch(getallcategeries())
    },[])
   

    return (
        <div className="container">
            <div className='mainarea-main-container'>

                <div className='mainarea-inner-container mc '>
                    <div className='ap'>
                        <h1>ALL MEAL CATAGERY</h1>
                    </div>

                 <div className="row"> {
                        props.mealbynameReducer.mealcatageries[0] && props.mealbynameReducer.mealcatageries[0].map((s, i) => {
                            return (
                                <div key={i} className="col-2 custom-product-sec product-box1"  >
                                    <Link to={`/all/${s.strCategory}`}>
                                        <div className="img-cnt" > <img src={s.strCategoryThumb} alt='' width="150px" height='150px' />  </div>
                                    
                                        <div className="img-caption">
                                            <h6>{s.strCategory}<br /> 
                                            <span className="product-price-sec">&nbsp;{s.idCategory}</span><br/>
                                            </h6>
                                        </div>
                                    </Link>
                                    
                                </div>
                            )
                        })
                    } </div> 
                </div>
            </div>
        </div>
    )
}
export default connect(store => store)(Catageries)