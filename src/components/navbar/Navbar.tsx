import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  color: 'white' | 'black';
  backgroundColor?: string;
}

const Navbar = (props: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '2%', paddingBottom: '2%', backgroundColor: props.backgroundColor }}>
      <Link style={{ margin: 10, fontWeight: 'bold', textDecoration: 'none', color: props.color }} to="/">HOME</Link>
      <Link style={{ margin: 10, fontWeight: 'bold', textDecoration: 'none', color: props.color }} to="/computer">COMPUTER</Link>
      <Link style={{ margin: 10, fontWeight: 'bold', textDecoration: 'none', color: props.color }} to="/resume">RESUME</Link>
      <Link style={{ margin: 10, fontWeight: 'bold', textDecoration: 'none', color: props.color }} to="/works">WORKS</Link>
      <Link style={{ margin: 10, fontWeight: 'bold', textDecoration: 'none', color: props.color }} to="/contact">CONTACT</Link>
    </div>
  );
}

export default Navbar;
