import React from 'react'
import { connect } from "react-redux"
import { getmealbycat } from './store/actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const Mealcatagery = (props) => {
    const { cat } = useParams();
    React.useEffect(() => {
        props.dispatch(getmealbycat(cat))
    }, [])
    return (
        <div className="container">
            <div className='mainarea-main-container'>
                <div className='mainarea-inner-container '>
                    <div className='dh'>
                        <h2>
                            {cat} Meals
                        </h2>
                    </div>
                    <div className="row"> {
                        props.mealbynameReducer.mealbycatagery[0] && props.mealbynameReducer.mealbycatagery[0].map((s, i) => {
                            return (
                                <div key={i} className="col-2 custom-product-sec product-box1"  >
                                    <div className="img-cnt" > <img src={s.strMealThumb} alt='' width="150px" height='150px' />  </div>
                                    <div className="img-caption" >
                                        <h6>{s.strMeal}<br />
                                        </h6>
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
export default connect(store => store)(Mealcatagery)