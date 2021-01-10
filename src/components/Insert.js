import React, {Component} from 'react';
import axios from 'axios';

export default class Insert extends Component{

    constructor(props){
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
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

        // console.log(obj);
        axios.post('http://localhost/crud/insert.php', obj)
        .then(res => console.log(res.data));

        this.setState({
            first_name: '',
            last_name: '',
            email: ''
        })
        
    }

    

    render(){
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
                        <input type="submit" className="btn btn-primary" value="Register User"/>
                    </div>
                </form>
            </div>
        )
    }
}