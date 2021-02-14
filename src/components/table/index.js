import React, {useState} from 'react'
import PaginationContainer from "../../containers/paginationContainer";
import DetailsUser from "../../components/detailsUser";
import ButtonGroup from "../buttonGroup";
import IconDown from '../ui/icon/iconDown'
import IconUp from '../ui/icon/iconUp'
import IconExpand from '../ui/icon/iconExpand'
import AddUser from "../addUser";
import SearchElement from "../searchElement/index[";


const Table = (props) => {
    const [sortType, setSortType] = useState(null)
    const [directionSort, setDirectionSort] = useState(true)
    const [addUser, setAddUser] = useState(false)

    const style = {
        cursor: "pointer"
    }
    const handlerModal = (user) => {
       props.func.showDetails({user, bool: true})
    }
    const sortUsers = (type) => {
        props.func.sortUsers({type, directionSort})
        setSortType(prev => type)
        setDirectionSort(prev => !directionSort)
    }
    const Arrow = () => {
        return directionSort ? <IconDown/> : <IconUp/>

    }
    if(props.spinner){
        return (
            <div className="col-12" style={{marginTop: "250px"}}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
   if(!props.users.length){
       return  (
           <>
               <ButtonGroup
                   fetchUser ={(url) => props.func.fetchUser(url)}
                   disabled = {props.disabled}
               />
               <div className="col-12 mt-3" >
                   <div className="alert alert-secondary" role="alert">
                      Нет данных
                   </div>
               </div>
           </>
       )
   }
    return(
        <>
            <AddUser
                handlerAdd={(params) => props.func.addUser(params)}
                handlerUpdate={(params) => props.func.updateForm(params)}
            />
            <SearchElement
                searchHandler={(text) =>props.func.searchUser(text)}
            />
            <div className="col-12 mt-3" >
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th style={style} scope="col" onClick={() => sortUsers('id')}>
                            id {sortType === 'id' ? <Arrow/> : <IconExpand/> }
                        </th>
                        <th style={style} scope="col" onClick={() => sortUsers('firstName')}>
                            firstName {sortType === 'firstName' ? <Arrow/> : <IconExpand/> }
                        </th>
                        <th style={style} scope="col" onClick={() => sortUsers('lastName')}>
                            lastName {sortType === 'lastName' ? <Arrow/> : <IconExpand/> }
                        </th>
                        <th style={style} scope="col" onClick={() => sortUsers('email')}>
                            email {sortType === 'email' ? <Arrow/> : <IconExpand/> }
                        </th>
                        <th style={style} scope="col" onClick={() => sortUsers('phone')}>
                            phone {sortType === 'phone' ? <Arrow/> : <IconExpand/> }
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.currentUsers.map((item, index) => {
                            return(
                                <tr style={style} key={index}
                                    onClick={() => handlerModal(item) }
                                >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <PaginationContainer/>
            <DetailsUser/>
        </>
    )
}

export default Table;