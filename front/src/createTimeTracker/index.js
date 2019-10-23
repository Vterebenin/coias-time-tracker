import React, { useState, useEffect } from 'react';
import axios from 'axios'

function CreateTimeTracker(props) {
  const [timeTracker, setTimeTracker] = useState({})
  useEffect(() => {
    if (Object.keys(timeTracker).length !== 0) {

      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      axios
        .create({
          baseURL: 'http://localhost:8000',
        })
        .post('/time_trackers/', timeTracker)
        .then(() => {
          console.log('test')
        })

    }
  }, [timeTracker]);

  return (
    <React.Fragment>
      <div className={'privet'}>
        privet mir
      </div>
    </React.Fragment>
  );
}

export default CreateTimeTracker;
