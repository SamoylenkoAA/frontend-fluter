import React, {useState} from 'react'
import Button from "../../components/ui/button";

const SearchElement = ({searchHandler}) => {
    const [value, setValue] = useState('')
    return(
        <div className="input-group mt-3">
            <input
                type="text"
                className="form-control"
                placeholder="введите данные"
                value={value}
                onChange={(event => setValue(prevState => event.target.value))}
            />
            <Button
                type="secondary"
                title="Поиск"
                onChange={() => searchHandler(value)}
            />
        </div>
    )
}

export default SearchElement