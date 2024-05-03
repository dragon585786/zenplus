import axios from 'axios';
import { baseURL } from './BaseUrl';
import { APIService } from './Service';
import { LocalStorage } from '../Utils/LocalStorage';
import { Alert } from 'react-native';
// import { LocalStorageGet } from '../../localStorage';
const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    // Add the "Content-Type" header with the value "application/json" to the request.
    const token = await LocalStorage.get('token');
    // console.log("token==>", token);
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${token}`
    // config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTZWNyZXRLZXkiOiJtMzg0OGUwYTQzMjk2Yzc5ZDVlMjEyZGJkOTBjZGM0YjNiMmNkZGVkYjhiNTc0M2RmODdlZjBjYjViOGIyMTY3YTU2N2FhNmU2ZjE4NmJkZDkzMWUzMzgwMWYxNGQ3N2FmZTAzMjczMWIyOTdiODgwYTg4OTFkYjVjZGUyMTc0MCIsIkFwaU5hbWUiOiJaZW5wbHVzTW9iaWxlQXBpTmFtZSIsIlVJRCI6IjA3OTc3MGFlNWRmOTRjOTU4MzZjNTcyOTRjMmZiMmFkIiwibmJmIjoxNzE0MTA2NTU1LCJleHAiOjE3MTQxMDgzNTUsImlhdCI6MTcxNDEwNjU1NX0.lCCbJwG34Cqhc8Ik-cF0rIoym9XVCKKR6W5ckEJn1X0`
    // console.log({ config });
    return config;
  },
  (error) => {
    // console.log("errorr-instance==>", error);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // console.log( "response-interceptors==>",response?.data );
    //   if (response?.data?.message === "Session is expired.") {
    //     Alert.alert("Error","Session is expired, Try Again");
    //  APIService.secreteKeyToken()
    //   }
    return response;
  },
  (error) => {
    // console.log( "error-response-status==>",error?.response?.status );
    console.log("error-response==>", error?.response);
    // console.log( "error==>",error );
    if (error?.response?.status === 401) {
      Alert.alert("Error", "Unauthorized, Try Again");
      APIService.secreteKeyToken()
    }

    return Promise.reject(error);
  }
)

export default instance;
