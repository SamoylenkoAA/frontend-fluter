import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Table from "../../components/table";
import * as func from "../../redux/actions";

const mapStateToProps = (state) => {
   const indexOfLastUser = state.user.currentPage * state.user.usersPerPage;
   const indexOfFirstUser = indexOfLastUser - state.user.usersPerPage;
   const currentUsers = state.user.filterUsers.slice(indexOfFirstUser, indexOfLastUser)

   return {
      users: state.user.users,
      spinner: state.spinner.loading,
      indexOfLastUser,
      indexOfFirstUser,
      currentUsers
   }
}
const mapDispatchToProps = (dispatch) => ({
   func: bindActionCreators(func, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);