import React from 'react';
import './checking-serial-can.component.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TestingSerCAN from '../../assets/images/TestingSerialCAN.gif';

const VerifyingSerialComponent = (props: any): React.ReactElement  => {
    const showSer = props.showSer;
    if(showSer === false){
        return (
            <>
            </>
        )
    }else if(showSer === true){
        return (
        <div className='popup-box'>
            <div className='popup-image'>
                <img src={TestingSerCAN} alt="Checking Serial Connection. Please Wait....." />
            </div>
            <div className='popup-text'>
                Please Wait... While i am checking your Serial and CAN connections.
            </div>
        </div>
        )
    }else{
        return <></>
    }

}

export default VerifyingSerialComponent;