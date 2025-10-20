import React from 'react';
import SocialLogIn from './SocialLogIn';
import FindUs from './FindUs';
import Qzone from './Qzone';
import CustomAdds from './CustomAdds';

const RightAside = () => {
    return (
        <div>
            <SocialLogIn></SocialLogIn>
            <div className='my-10'>
                <FindUs></FindUs>
            </div>
            <div className='my-10'>
                <Qzone></Qzone>
            </div>
            <div className='my-10'>
                <CustomAdds></CustomAdds>
            </div>
        </div>
    );
};

export default RightAside;