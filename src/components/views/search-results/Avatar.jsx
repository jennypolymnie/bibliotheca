import React from 'react';
import { Label } from 'semantic-ui-react';

const Avatar = () => {
    const imageProps = {
      avatar: true,
      spaced: 'right',
      src: './image/avatar.jpg',
    }
  
    return <Label as='a' content='Elliot' image={imageProps} />
  }
  
  export default Avatar
