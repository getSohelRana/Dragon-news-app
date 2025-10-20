import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classRoomImg from '../../assets/class.png'
import playgroundImg from '../../assets/playground.png'

const Qzone = () => {
    return (
      <div className='bg-base-300 p-5'>
        <h1 className="font-bold text-xl">Q-zone</h1> 
				<div className='flex flex-col gap-5 mt-5'>
					<img src={swimmingImg} alt="swimming" />
					<img src={classRoomImg} alt="classroom" />
					<img src={playgroundImg} alt="playground" />
				</div>
      </div>
    );
};

export default Qzone;