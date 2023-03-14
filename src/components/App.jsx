import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { data } from '../data/data.js';

import { UserList } from '../components/UserList/UserList';
import { Button } from './Button/Button.jsx';
import { Form } from './Form/Form'
import { Modal } from '../components/Modal/Modal'


console.log(data);

export class App extends Component {
  state = {
    users: data,
    isFormShown: false,
    currentAvatar:null,
  };

  delUser = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  };

  addUser = user => {
    const newUser = {
      ...user,
      hasJob: false,
      id: nanoid(7),
    }

    this.setState(prevState => ({ users: [newUser, ...prevState.users] })
    )
}
      
  openForm = ()=>{
    this.setState({isFormShown:true})
  }
  
  closeForm = ()=> {
  this.setState({isFormShown:false})
}

  openModal = (image) => {
    this.setState({currentAvatar: image })
  }

  closeModal = () => {
    this.setState({currentAvatar:null})
  }

  changeJobStatus = id => {
    this.setState(prevState => ({
     users: prevState.users.map(user =>
        user.id === id ? { ...user, hasJob: !user.hasJob } : user
      ),
  }));
};
  
  render() {
    return (
      <div>
        <UserList users={this.state.users} delUser={this.delUser} openModal={this.openModal} changeJobStatus={this.changeJobStatus} />
        {this.state.isFormShown ? (<Form addUser={this.addUser} closeForm={this.closeForm} />) : (
          <Button text="Add user" clickHandler={this.openForm} />)
        }
        {this.state.currentAvatar && (<Modal image={this.state.currentAvatar} closeModal={this.closeModal} />)}
      </div>
    );
  }
}
