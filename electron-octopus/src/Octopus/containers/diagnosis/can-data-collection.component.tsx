import React, { useState } from 'react';
import { Button } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import { getRequest } from '../../api-service';
import { CSVLink } from 'react-csv';

const ShowCsvDownloadComponent = (props: any) => {
  const { show, csvData } = props;
  if (show == false) {
    return <></>;
  } else {
    console.log(csvData);
    return (
      <CSVLink
        data={csvData}
      >
        Download me
      </CSVLink>
    );
  }
};

const CanDataCollectionComponent = (props: any) => {
  const { show } = props;
  const [csvData, updateCsvData] = useState('');
  const [showCsv, updateShowCsv] = useState(false);
  const [disableButton, updateDisableButtons] = useState(false);

  const startDataLogging = () => {
    if(disableButton === false){
      updateDisableButtons(true);
      updateShowCsv(false);
      alert('Logging Started. Data will be logged for 30 seconds.')
      getRequest('api/v1/log/can-bus', {})
      .then((res: any) => {
        updateDisableButtons(false);
        alert(res.data);
      });
    }
  };

  const getLoggedData = () => {
    if(disableButton === false){
      updateDisableButtons(true);
      getRequest('api/v1/write_can_data_to_csv', {})
      .then((res: any) => {
        updateDisableButtons(false);
        updateCsvData(res.data);
        updateShowCsv(true);
      });
    }
  };

  if (show == false) {
    return <></>;
  } else {
    return (
      <div>
        <Grid key={1} container direction={'row'} spacing={3}>
          <Grid item md={3}>
            <Button
              className="button"
              variant="contained"
              onClick={startDataLogging}
            >
              Start
            </Button>
          </Grid>
          <Grid item md={5}>
            <Button
              className="button"
              variant="contained"
              onClick={getLoggedData}
            >
              Get Data
            </Button>
          </Grid>
        </Grid>
        <ShowCsvDownloadComponent show={showCsv} csvData={csvData} />
      </div>
    );
  }
};

export default CanDataCollectionComponent;
