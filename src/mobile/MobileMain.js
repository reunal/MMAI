import React from 'react';
import '../mobileStyle/MobileMain.css'

const MobileMain = () => {

    const mobileReload = () => {
        window
            .location
            .replace('/');
    }

    return (
        <section>
            <div className='mobileMainContainer'>
                <div className='mobileMainContents'>
                    <div className='mobileHeader'>
                        <div className='mobileTitle' onClick={mobileReload}><img className='mobile_main' src='./img/mmai_logo.png' alt='MMAI MAIN LOGO' /></div>
                        <div className='mobileTab'>
                            <div className="mTab">
                                <a href='https://blog.mmaipure.com'>Blog</a>
                            </div>
                            <div className="mTab">
                                <a href='https://twitter.com/metamonkey_ai'>Twitter</a>
                            </div>
                            <div className="mTab">
                                <a href='https://t.me/MMAI_Official'>Telegram</a>
                            </div>
                            <div className="mTab">
                                <a href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'>YouTube</a>
                            </div>
                            <div className='mTab'>
                                <a href='https://mmaipure.com/marketplace' target="_blank" rel="noopener noreferrer" aria-label="Go MMAI MARKETPLACE">MMAI MARKETPLACE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileMain;