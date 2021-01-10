import React, {Component} from 'react';
import axios from 'axios';
import RecordsList from './RecordsList'

export default class View extends Component{

    constructor(props){
        super(props);
        this.state = {student: []};
    }

    componentDidMount(){
        axios.get('http://localhost/crud/view.php')
        .then(response => {
            this.setState({student: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    usersList(){
        return this.state.student.map(function(object, i){
            return <RecordsList obj = {object} key = {i}/>
        });
    }


    render(){
        return(
            <div>
                <h3 align="center"> USER LIST</h3>
                    <table className = "table table-striped" style={{marginTop: 50}}> 
                           <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th colSpan="2">Action</th>
                                </tr>   
                            </thead> 
                            <tbody>
                                {this.usersList()}
                            </tbody>
                    </table>
                
            </div>
        )
    }
}