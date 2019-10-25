import React, { useState, useEffect } from 'react';
import axios from 'axios'

function CreateTimeTracker(props) {
  const [timeTracker, setTimeTracker] = useState({})

  const handleCreateClick = () => {
    setTimeTracker({
      time: 123.321,
      desc: 'some desc'
    })
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios
      .get(
        'http://localhost:8000/logged_in',
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
      })

  }

  useEffect(() => {

  });

  return (
    <React.Fragment>
      <div className={'privet'}>
        privet mir
        <a href="http://localhost:8000/users/auth/gitlab" >
          войти через гитлаб
        </a>
      </div>
      <div>
        <button onClick={handleCreateClick}>
          гет user
        </button>
      </div>
    </React.Fragment>
  );
}

export default CreateTimeTracker;
