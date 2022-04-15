import React, { useState } from 'react';
import { Button} from '@mui/material';
import { getRequest } from '../../api-service';
import { useHistory } from 'react-router-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import './run-tests.component.css';
import './start-testing.component.css';
import VerifyingSerialComponent from './checking-serial-can.component';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import octopusBG from '../../assets/images/Octopus.gif';

const startTestingComponent = ():React.ReactElement =>{

    const history = useHistory();

    const [cssClass, updateCSSClass] = useState('basic-body')

    const [serWaiting, updateserWaiting] = useState(false);

    const onSubmit = () =>{
        //this will update state, so that we know serial and CAN components are being checked now.
        updateserWaiting(true)

        //this will change css class and will basically blur the background
        updateCSSClass('blur-basic-body')
        getRequest('api/v1/test/connect-check-ser-can', {})
        .then((res: any) => {

            updateserWaiting(false)
            updateCSSClass('basic-body')
          
            if(res.data === 'Success'){
              history.push('/test/filldetails');
            }else{
              alert(res.data);
            }
          });
    
      }
    
    return (
      <StyledEngineProvider injectFirst>
        <div>
          <div className={cssClass}>

            <Button className="round-button" variant="contained" onClick={onSubmit}>
                Connect to Serial And CAN
            </Button>
          
            <div className='gif-frame'>
              <img src={octopusBG} alt="Octopus-Diagnosis" />
            </div>
          
          </div>
          {serWaiting && <VerifyingSerialComponent showSer={serWaiting}/>}
        </div>
      </StyledEngineProvider>
    );
}

export default startTestingComponent;