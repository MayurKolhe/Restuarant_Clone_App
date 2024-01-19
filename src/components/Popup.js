import { useState } from 'react';
import Card from './Card'
const Popup = () => {
    const [showcard, setshowcard] = useState(false);
    const HandleClick = () => {
        setshowcard(true);
    }
  return (
    <div>
          <button onClick={HandleClick}> Click on Me</button>
          {showcard && <Card/>}
    </div>
  );
};

export default Popup;
