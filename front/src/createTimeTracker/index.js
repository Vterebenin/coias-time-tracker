import React, {useState, useEffect} from 'react';
import axios from 'axios'

function CreateTimeTracker(props) {
  const [timeTracker, setTimeTracker] = useState({})

  const handleLoggedInClick = () => {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios
      .get(
        'http://localhost:8000/logged_in',
        {withCredentials: true}
      )
      .then((response) => {
        console.log(response)
      })

  }

  const handleLogoutClick = () => {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios
      .delete(
        'http://localhost:8000/logout',
        {withCredentials: true}
      )
      .then((response) => {
        console.log(response)
      })

  }

  useEffect(() => {

  });

  return (
    <React.Fragment>
      <div>
        <button>
          <a href="http://localhost:8000/users/auth/gitlab">login</a>
        </button>
        <button onClick={handleLoggedInClick}>if logged in</button>
        <button onClick={handleLogoutClick}>logout</button>
      </div>
    </React.Fragment>
  );
}

export default CreateTimeTracker;
