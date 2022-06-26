import React, {useState} from 'react'

const Card = ({as, classOnHover, children}) => {
  const [isHover, setIsHover] = useState(false);

  //On change de l'état de la card lorsque l'on passe la souris dessus
  const onMouseEnter = () => setIsHover(true);

  //On change de l'état de la card lorsque la souris se retire de la card
  const onMouseLeave = () => setIsHover(false);

 
  const className = `card ${as ? as : ''} ${isHover ? classOnHover : ""}`;

  return (
    <div
    className={className}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>{children}</div>
  )
}

export default Card