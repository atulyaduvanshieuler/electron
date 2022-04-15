import React from 'react';
import './checking-serial-can.component.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TestInProgressBG from '../../assets/images/TestInProgress.gif';

const TestInProgressComponent = (props: any): React.ReactElement  => {
    const showTestProgress = props.showTestProgress;
    if(showTestProgress === false){
        return (
            <>
            </>
        )
    }else if(showTestProgress === true){
        return (
        <div className='popup-box'>
            <div className='popup-image'>
                <img src={TestInProgressBG} alt="We are testing component now. It will not take more than 2 minutes. Please Wait....." />
            </div>
            <div className='popup-text'>
                We are testing component now.
            </div>
        </div>
        )
    }else{
        return <></>
    }

}

export default TestInProgressComponent;