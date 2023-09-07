import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test20 = () => {
  const [profileData, setProfileData] = useState([]);
  const API = 'http://127.0.0.1:8001/api/users/profile';

  useEffect(() => {
    getProfile(API);
  }, []);

  const getProfile = async (url) => {
    try {
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjYzMTI1MTQ3M2JlYThlNjY3ODMzOSIsImlhdCI6MTY4OTc0ODg3NCwiZXhwIjoxNjkyMzQwODc0fQ.6lz2beO1Gb8FsiuoljtP_yeMZah5etl6s-z-N3Fjdew'; // Replace this with your actual bearer token
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      setProfileData(response.data);
      console.log('Profile data fetched successfully!', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching profile data:', error.message);
    }
  };

  return <div>Test20</div>;
};

export default Test20;
