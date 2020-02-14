import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDogsByDogId = (dogId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json?orderBy="dogId"&equalTo="${dogId}"`)
    .then((result) => {
      const allDogsObj = result.data;
      const dogs = [];
      if (allDogsObj != null) {
        Object.keys(allDogsObj).forEach(() => {
          const newDog = allDogsObj[dogId];
          newDog.id = dogId;
          dogs.push(newDog);
        });
      }
      resolve(dogs);
    })
    .catch((err) => {
      reject(err);
    });
});

// const getSingleDog = (dogId) => axios.get(`${baseUrl}/pins/${dogId}.json`);

// const deleteDog = (dogId) => axios.delete(`${baseUrl}/pins/${dogId}.json`);

// const saveDog = (newDog) => axios.post(`${baseUrl}/pins.json`, newDog);

// const editDog = (dogId, dog) => axios.put(`${baseUrl}/pins/${dogId}.json`, dog);

export default { getDogsByDogId };
