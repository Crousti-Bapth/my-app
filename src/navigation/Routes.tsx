import { Route } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';
import ComputerScreen from "../screens/ComputerScreen";

import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import ResumeScreen from "../screens/ResumeScreen";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles: { opacity: number, scale: number }) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
    height: '100%',
    width: '100%'
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val: number) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export const Routes = () => (
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
    >
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/resume" component={ResumeScreen} />
    <Route exact  path="works/">
      <Works/>
    </Route>
    <Route exact path="/computer" component={ComputerScreen} />
    <Route exact path="/contact" component={ContactScreen} />
  </AnimatedSwitch>
);

function Works() {
  return <h2>Works</h2>;
}
