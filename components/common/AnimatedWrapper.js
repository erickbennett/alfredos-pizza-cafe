import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Router from 'next/router';

function AnimatedWrapper({ children, path, action, loading = false }) {
  const [checked, setChecked] = useState(false);

  const { click } = useSpring({
    from: { click: 0 },
    click: checked ? 1 : 0,
    config: { duration: 400 }
  });

  const clickAnimation = {
    transform: click
      .interpolate({
        range: [0, 0.25, 0.5, 0.75, 1],
        output: [1, 0.9, 0.85, 0.9, 1]
      })
      .interpolate(click => `scale(${click})`)
  };

  const startEvent = () => {
    if (loading) return;
    setChecked(!checked);
    action && action();
  };

  const endEvent = () => {
    if (loading || !path) return;

    setTimeout(() => {
      Router.push(path);
    }, 500);
  };

  return (
    <animated.div
      data-testid={`animated-wrapper${path || ''}`}
      style={clickAnimation}
      onClick={() => {
        startEvent();
        endEvent();
      }}
      onTouchStart={startEvent}
      onTouchEnd={endEvent}
    >
      {children}
    </animated.div>
  );
}

export default AnimatedWrapper;
