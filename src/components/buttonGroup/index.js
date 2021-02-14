import React, {useState, useEffect} from 'react'
import Button from "../ui/button";
import {URL_ALL, URL_PART} from "../../redux/constants";

const ButtonGroup = ({fetchUser}) => {
    const handlerFetch = (url) => {
        fetchUser(url)
    }
    return(
        <div className="btn-group">
            <Button title={'Загрузить маленький объем данных'} type={'warning'} onChange = {(event) => handlerFetch(URL_PART)} />
            <Button title={'Загрузить большой объем данных'} type={'success'} onChange = {(event) => handlerFetch(URL_ALL)} />
        </div>
    )
}

export default ButtonGroup