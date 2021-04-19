import { PureComponent } from 'react';
import ParticlesBg from 'particles-bg'

import Navbar from "../components/navbar/Navbar";

class HomeScreen extends PureComponent {
  render() {
    return (
      <div className='full-height'>
        <Navbar color={'white'} />
        <ParticlesBg type='lines' bg={true}/>
      </div>
    );
  }
}

export default HomeScreen;
