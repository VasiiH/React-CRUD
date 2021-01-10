import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

export default class Edit extends Component{

    constructor(props){
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            redirect: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost/crud/getByid.php?id='+this.props.match.params.id)
        .then(response => {
            this.setState({
                first_name: response.data.fName,
                last_name: response.data.LName,
                email: response.data.email });
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onChangeFirstname(e){
        this.setState({
            first_name: e.target.value
        })
    }

    onChangeLastname(e){
        this.setState({
            last_name: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        };

        axios.post('http://localhost/crud/update.php?id='+
        this.props.match.params.id, obj)
        .then(res => console.log(res.data),
        this.setState({redirect: true})
        );
        
    }


    render(){

        const{ redirect} = this.state;

        if(redirect){
            return<Redirect to = '/view'/>
        }

        return(
            <div style={{margin:10}}>
                <h3>Add new user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" className="form-control"
                        value={this.state.first_name}
                        onChange = {this.onChangeFirstname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" className="form-control"
                        value={this.state.last_name}
                        onChange = {this.onChangeLastname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control"
                        value={this.state.email}
                        onChange = {this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Update User"/>
                    </div>
                </form>
            </div>
        )
    }
}