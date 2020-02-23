/**
 * @Configurations
 */

export const INNER_CARD_ELEMENT_FRICTION_VALUES = [18, 23, 28, 33, 35, 39];
export const gentle = { mass: 1, tension: 150, friction: 18 };

/**
 * @Animations
 */
export const bigToSmall = {
  from: { transform: 'scale(1.3)' },
  transform: 'scale(1)',
  config: gentle
};

export const smallToBig = {
  from: { transform: 'scale(0.7)' },
  transform: 'scale(1)',
  config: gentle
};

export const fadeToBig = {
  from: { opacity: 0.1, transform: 'scale(0.6)' },
  to: { opacity: 1, transform: 'scale(1)' },
  config: { duration: 550 }
};

export const fadeInRight = {
  from: { opacity: 0.1, transform: 'translate(-150px, 0)' },
  to: { opacity: 1, transform: 'translate(0, 0)' },
  config: { mass: 1, tension: 150, friction: 28 }
};

// INNER CARD Animations
export const INNER_CARD_ELEMENT_UP = 'translate(0px, 0px)';
export const INNER_CARD_ELEMENT_DOWN = 'translate(0px, 1500px)';

export const INNER_CARD_ELEMENT_TRANSITION_UP = {
  opacity: 1,
  transform: INNER_CARD_ELEMENT_UP
};

export const INNER_CARD_ELEMENT_TRANSITION_DOWN = {
  opacity: 0.1,
  transform: INNER_CARD_ELEMENT_DOWN
};

export const INNER_CARD_ELEMENT_ANIMATION = {
  from: { ...INNER_CARD_ELEMENT_TRANSITION_DOWN },
  ...INNER_CARD_ELEMENT_TRANSITION_UP,
  config: {
    mass: 1,
    tension: 150,
    friction: INNER_CARD_ELEMENT_FRICTION_VALUES[4]
  }
};
