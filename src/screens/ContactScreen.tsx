import { MdMail } from "react-icons/md";

import Navbar from '../components/navbar/Navbar';

const ContactScreen = () => {
  return (
    <div className='full-height' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(25, 25, 25)' }}>
      <Navbar color={'white'} backgroundColor='rgb(55, 55, 55)' />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',height: '100%', marginTop: '2rem'  }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline', width: '100%' }}>
          <MdMail fill='white' style={{ width: '5rem', height: '5rem' }} />
          <p style={{ color: 'rgb(200, 200, 200)' }}><strong>Grâce à ce formulaire vous pouvez me contacter alors n'hesitez pas, posez vos questions.</strong></p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline', width: '100%' }}>
          <h3 style={{ fontSize: 'bold', color: 'white', marginRight: '1rem' }}>Nom</h3>
          <input type='text' style={{ width: '50%', height: '3rem', borderRadius: '1rem', border: 'none',backgroundColor: 'rgb(55, 55, 55)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline', width: '100%' }}>
          <h3 style={{ fontSize: 'bold', color: 'white' }}>Email</h3>
          <input type='mail' style={{ width: '50%', height: '3rem', borderRadius: '1rem', border: 'none',backgroundColor: 'rgb(55, 55, 55)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline', width: '100%' }}>
          <h3 style={{ fontSize: 'bold', color: 'white' }}>Sujet</h3>
          <input type='text' style={{ width: '50%', height: '3rem', borderRadius: '1rem', border: 'none',backgroundColor: 'rgb(55, 55, 55)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline', width: '100%' }}>
          <h3 style={{ fontSize: 'bold', color: 'white' }}>Message</h3>
          <textarea style={{ width: '50%', minHeight: '5rem', borderRadius: '1rem', backgroundColor: 'rgb(55, 55, 55)' }} />
        </div>
        <button style={{ height: '3rem', borderRadius: '1rem', border: 'none', backgroundColor: 'black', width: '40%' }} ><p style={{ fontSize: 'bold', color: 'white' }}><strong>ENVOYER</strong></p></button>
      </div>
    </div>
  );
}

export default ContactScreen;
