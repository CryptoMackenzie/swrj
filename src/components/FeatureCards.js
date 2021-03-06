import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import img1 from "../assets/CARDs/1.png";
import img2 from "../assets/CARDs/2.png";
import img3 from "../assets/CARDs/3.png";
import img4 from "../assets/CARDs/4.png";
import img5 from "../assets/CARDs/5.png";
import img6 from "../assets/CARDs/6.png"
import img7 from "../assets/CARDs/7.png"
import img8 from "../assets/CARDs/8.png"
import img9 from "../assets/CARDs/9.png";


const cards = [
  img9,
  img8,
  img7,
  img6,
  img5,
  img4,
  img3,
  img2,
  img1,
]

// These two are just helpers, they curate spring data, values that are later being tod intoValue css
const toValue = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it tos rotation and scale intoValue a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function FeatureCards({conW}) {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...toValue(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card toValue fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If buttoValuen/finger's up and trigger velocity is reached, we flag the card ready toValue fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back toValue zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => toValue(i)), 600)
  })
  // Now we're just mapping the animated values toValue our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div  className =""key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture toValue it (and inject its index so we know which is which) */}
      <animated.div className="deck-cards"{...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
};

export default FeatureCards;

