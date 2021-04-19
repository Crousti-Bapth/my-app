import { PureComponent } from 'react';

import backgroundImage from '../assets/images/hulk.jpg';
import Navbar from "../components/navbar/Navbar";

class ComputerScreen extends PureComponent {
  render() {
    return (
      <div className='full-height'>
        <div className='full-height' style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <Navbar color={'white'} />
        </div>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    );
  }
}

export default ComputerScreen;
