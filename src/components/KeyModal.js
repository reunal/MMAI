import React, {useEffect} from 'react';
import '../style/KeyModal.css';


// 모달의 재사용 필요 시 구조를 바꾸자. (모달 안 내용을 children으로)

const KeyModal = ({setModalState}) => {

    const closeModal = () => {
        setModalState(false);
    }     

    return (
        // 모달 외부
        <div className='modal' onClick={closeModal}>
            <div className='cdkey_container' onClick={(e) => e.stopPropagation()}>
                <img className='cdkey_alert' src='./images/imgModal/cdkey_alert.webp' alt="mmai games demo"/>
                <div className='cdkey_number'>
                    <span>1234-5678-9123-4567</span>
                </div>
            </div>
            {/* // 모달 내부
            <div className='modal_body' onClick={(e) => e.stopPropagation()}>

                흰 바탕 부분
                <div className='modal_front'>
                    <img onClick={closeModal} className='modal_close_btn' src='./images/imgModal/close_btn.webp' alt='modal close'/>
                    <div className='modal_content'>
                        <img className='madal_mmai_logo' src='./images/imgModal/modal_top_logo.webp' alt='MMAI'/>
                        <div className='modal_header'>Connect Your Wallet</div>
                        <div className='connect_form'>
                            <div className='metamask'>
                                <img className='connect_form_img' src='./images/imgModal/Metamask.webp' alt='Connect Wallet on metamask' />
                                <div className='connect_form_name'>MetaMask</div>
                            </div>
                            <div className='coinbase'>
                                <img className='connect_form_img'  src='./images/imgModal/coinbase.webp' alt='Connect Wallet on coinbase' />
                                <div className='connect_form_name'>Coinbase</div>
                            </div>
                            <div className='walletconnect'>
                                <img className='connect_form_img'  src='./images/imgModal/walletconnect.webp' alt='Connect Wallet on walletconnect' />
                                <div className='connect_form_name'>WalletConnect</div>
                            </div>
                        </div>
                        <div className='modal_footer'>Connect your wallet <br /> For check if you have MMAI Pureworld Key to the city</div>
                    </div>
                </div>

                <div className='modal_logo_footer'><img className='modal_logo_footer_img' src='./images/imgModal/mmai_logo.webp' alt='By MMAI'/></div>
            </div> */}
        </div>
    );
};

export default KeyModal;