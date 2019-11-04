import React, {useState, useEffect} from 'react';
import axios from 'axios'

function CreateTimeTracker(props) {
  const [timeTracker, setTimeTracker] = useState({})
  const [userId, setUserId] = useState()

  const handleLoggedInClick = () => {
    axios
      .get(
        'http://localhost:8000/logged_in',
        {withCredentials: true}
      )
      .then((response) => {
        console.log(response)
        const {id} = response.data.user
        setUserId(id)
      })

  }

  const handleLogoutClick = () => {
    axios
      .delete(
        'http://localhost:8000/logout',
        {withCredentials: true}
      )
      .then((response) => {
        console.log(response)
      })

  }


  const handleCreateClick = () => {
    setTimeTracker({
      time: 123.321,
      desc: '123qwe'
    })
    console.log(userId)
    axios
      .post(
        `http://localhost:8000/users/${userId}/time_trackers/`,
        timeTracker,
        {withCredentials: true}
      ).then((response) => {
      console.log(response)
    })
  }


  const handleSeeClick = () => {
    axios
      .get(
        `http://localhost:8000/users/${userId}/time_trackers/`,
        {withCredentials: true}
      ).then((response) => {
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
      <div>
        <button onClick={handleCreateClick}>create</button>
        <button onClick={handleSeeClick}>see</button>
      </div>
    </React.Fragment>
  );
}

export default CreateTimeTracker;
