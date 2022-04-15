/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import TestAllComponent from './test-all.component';
import TestControllerComponent from './test-controller.component';
import TestBmsComponent from './test-bms.component';
import TestStarkComponent from './test-stark.component';
import { getRequest } from '../../api-service';
import CanDataCollectionComponent from './can-data-collection.component';
import './run-tests.component.css';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import TestInProgressComponent from './test-in-progress.component';

//Need to see here whether to use let or const; because i will be changing the state later on
// eslint-disable-next-line prefer-const
let responseState = {
                        bms: {
                          test_status: '',
                          test_errors: [],
                        },
                        controller: {
                          test_status: '',
                          test_errors: [],
                        },
                        stark: {
                          test_status: '',
                          test_errors: [],
                        },
                        testall: {
                          test_status: '',
                          test_errors: [],
                        },
                      }

export interface ResponseType {
  test_status?: string | boolean;
  test_errors?: string[];
}

const DiagnosisComponent = (): React.ReactElement => {

  const [response, updateResponse] = useState(responseState);

  const [cssClass, updateCSSClass] = useState('basic-body')

  const [canCollectionButtons, updateCanCollectionButtons] = useState(false);

  const [testInProgress, updateTestInProgress] = useState(false)

  const onTestAll = () => {
      updateCSSClass('blur-basic-body')
      updateTestInProgress(true);

      getRequest('api/v1/test/all', {})
      .then((res: any) => {

        updateCSSClass('basic-body');
        updateTestInProgress(false);
        
        updateResponse({
          ...response,
          testall: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });
      });
  };

  const onTestStark = () => {
      updateCSSClass('blur-basic-body')
      updateTestInProgress(true);

      getRequest('api/v1/test/stark', {})
      .then((res: any) => {

        updateCSSClass('basic-body');
        updateTestInProgress(false);
        
        updateResponse({
          ...response,
          stark: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });
      })
  };

  /**
   * It makes a GET request to the server and updates the response object with the response from the
   * server.
   */
  const onTestBms = () => {
      
      updateCSSClass('blur-basic-body')
      updateTestInProgress(true);

      getRequest('api/v1/test/bms', {})
      .then((res: any) => {
        
        updateCSSClass('basic-body');
        updateTestInProgress(false);
        
        updateResponse({
          ...response,
          bms: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });
      })
  };

  const onTestController = () => {
          
      updateCSSClass('blur-basic-body');
      updateTestInProgress(true);

      getRequest('api/v1/test/controller', {})
      .then((res: any) => {
        
        updateCSSClass('basic-body');
        updateTestInProgress(false);
        
        updateResponse({
          ...response,
          controller: {
            test_status: res.data.test_status,
            test_errors: res.data.test_errors,
          },
        });
      })
  };

  return (
      <StyledEngineProvider injectFirst>
        <div>
          <div className = {cssClass}>
            <Grid container direction={'row'} spacing={3}>
              <Grid item md={3}>
                <Grid key={1} container direction={'column'} spacing={3}>
                  <Grid item md={12}>
                    <Button 
                      className="round-button" 
                      variant="contained" 
                      onClick={onTestStark}
                    >
                      Test Stark
                    </Button>
                  </Grid>

                  <Grid item md={12}>
                    <TestStarkComponent {...response.stark} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid key={2} container direction={'column'} spacing={3}>
                  <Grid item md={12}>
                    <Button 
                      className="round-button" 
                      variant="contained" 
                      onClick={onTestBms}
                    >
                      Test BMS
                    </Button>
                  </Grid>

                  <Grid item md={12}>
                    <TestBmsComponent {...response.bms} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid key={3} container direction={'column'} spacing={3}>
                  <Grid item md={12}>
                    <Button
                      className="round-button"
                      variant="contained"
                      onClick={onTestController}
                    >
                      Test Controller
                    </Button>
                  </Grid>

                  <Grid item md={12}>
                    <TestControllerComponent {...response.controller} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid key={4} container direction={'column'} spacing={3}>
                  <Grid item md={12}>
                    <Button 
                      className="round-button" 
                      variant="contained" 
                      onClick={onTestAll}
                    >
                      Test All
                    </Button>
                  </Grid>

                  <Grid item md={12}>
                    <TestAllComponent {...response.testall} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={3}>
                <Grid key={5} container direction={'column'} spacing={3}>
                  <Grid item md={12}>
                    <Button
                      className="round-button"
                      variant="contained"
                      onClick={() => updateCanCollectionButtons(true)}
                    >
                      Can Data Collection
                    </Button>
                  </Grid>

                  <Grid item md={12}>
                    <CanDataCollectionComponent show={canCollectionButtons} />
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
            </div>
            {testInProgress && <TestInProgressComponent showTestProgress={testInProgress}/>}
          </div>

      </StyledEngineProvider>
  );
};

export default DiagnosisComponent;
