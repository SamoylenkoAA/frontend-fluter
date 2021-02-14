import React from 'react'
import {useSelector} from 'react-redux'
import InputMask from 'react-input-mask'
import {validateControl} from './handler'
import Input from '../ui/input'
import Button from "../ui/button";

const AddUser = ({handlerAdd, handlerUpdate}) => {
    const state = useSelector(state => state.user);

    const  onChangeHandler = (event, key) =>{
        let formControls = {...state.formControls};
        let control ={...formControls[key]}
        control.value = event.target.value;
        control.touched = true

        control.valid = validateControl(control.value, control.validation);
        formControls[key] = control;

        let isFormValid = Object.values(formControls).every((control) => control.valid);

        handlerUpdate({formControls, isFormValid});
    }

    const handlerAddUser = event => {
        let user = {}
        Object.keys(state.formControls).map((key, index) => {
            let input = state.formControls[key];
            user[key] = input.value
        })
        handlerAdd(user)

    }
    return(
       <div className="col-12 mt-3">
           <form className="input-group" onSubmit={(event) =>  event.preventDefault()}>
               {
                   Object.keys(state.formControls).map((key, index) =>{
                       let input = state.formControls[key]
                       return(
                           <InputMask
                               key={index}
                               value={input.value}
                               mask={input.mask}
                               onChange={(event) => onChangeHandler(event, key)}
                           >
                           <Input
                                type={input.type}
                                label={input.label}
                                errorMessage={input.errorMessage}
                                valid={input.valid}
                                touched={input.touched}
                                shouldValidate={!!input.validation}
                           />
                           </InputMask>
                       )
                   })
               }
           </form>
           <Button
               type='success'
               disabled={!state.isFormValid}
               title="Добавить пользователя"
               onChange={handlerAddUser}
           />

       </div>
    )
}

export default AddUser