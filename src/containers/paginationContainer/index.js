import { connect } from 'react-redux';
import Pagination from "../../components/pagination";
import {handlerCurrentUser} from './../../redux/actions';

const mapStateToProps = (state) => {
    const totalUsers = state.user.filterUsers.length
    const usersPerPage = state.user.usersPerPage
    const currentPage = state.user.currentPage
    const numberOfButtons = state.user.numberOfButtons

    return {
        currentPage,
        usersPerPage,
        totalUsers,
        numberOfButtons
    }
}

export default connect(mapStateToProps,  {handlerCurrentUser})(Pagination);