import React, { Component} from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component{

    render(){
        console.log(this.props);
        if(!this.props.userDetails){
            return <div>Please click a user to get details</div>;
        }
        return (
            <div>
                <h3>User Details</h3>
                <div>Title: {this.props.userDetails.name}</div>
                <div>Pages: {this.props.userDetails.age}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userDetails: state.userDetails
      };
}

export default connect(mapStateToProps)(BookDetail)