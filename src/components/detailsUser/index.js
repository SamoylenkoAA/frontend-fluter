import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {SHOW_DETAILS} from "../../redux/constants";

const DetailsUser = () => {
    const details = useSelector(state => state.user)
    const dispatch = useDispatch()
    const {user, showDetails} = details;

    if(!showDetails) return null
    return(
        <div className="col-12 mt-3" >
            <div className="card">
                <div className="modal-header">
                    Выбран пользователь: {user.firstName +' '+ user.lastName}
                    <button className="btn-close"
                            onClick={() => dispatch({type: SHOW_DETAILS, payload: {bool: false}}) } />
                </div>
                <div className="list-group m-1">
                    <textarea value={user.description} className="form-control" style={{height: "100px"}} disabled={true} />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Адрес проживания: {user.address.streetAddress}
                    </li>
                    <li className="list-group-item">
                        Город: {user.address.city}
                    </li>
                    <li className="list-group-item">
                        Провинция/штат: {user.address.state}
                    </li>
                    <li className="list-group-item">
                        Индекс: {user.address.zip}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DetailsUser