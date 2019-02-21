import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Profile from './Profile';


class ProfileSelection extends Component {
    render() {
        return (

            <div>
                <Header as="h1"> Choisissez le profil qui vous correspond </Header>
                <Profile />
            </div>

        );
    }
}
export default ProfileSelection;
