import React, { Component } from "react";

export class Form extends Component {
    state = {
        name:"",
        email:"",
        avatar:""
    }

    
    handleChange = ({ target:{name, value}}) => {
    this.setState({[name]:value})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const newUser = { ...this.state };
        this.props.addUser(newUser);
        this.props.closeForm();
    }

    render() {
        const {name, email, avatar} = this.state
        return <form onSubmit={this.handleSubmit}>
            <label>Name
                <input name="name" type="text" value={name} onChange={this.handleChange} />
            </label>
             <label>Email
                <input name="email" type="email" value={email} onChange={this.handleChange}/>
            </label>
             <label>Avatar
                <input name="avatar" type="url" value={avatar} onChange={this.handleChange}/>
            </label>
            <button type="submit">Save</button>
        </form>
    }
}