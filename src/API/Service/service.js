import { Alert } from 'react-native';
import { LocalStorage } from '../../Utils/LocalStorage';
import { SecretKeyToken } from '../BaseUrl';
import axios from '../axios';

// post
const secreteKeyToken = async () => {
  let body = {
    SecretKey: SecretKeyToken
  }
  console.log("secreteKeyToken===>", body);
  try {
    const response = await axios.post('/authorize/token', body); 
    console.log('secreteKeyToken--->', response.data);
    LocalStorage.set('token', response.data);
    return response;
  } catch (error) {
    console.log('Error secreteKeyToken===>', error);
  }
};
const authenticateOtp = async (body) => {
    console.log("authenticateOtp===>", body);
    try {
      const response = await axios.post('/authenticate/otp', body); 
      console.log('authenticateOtp--->', response.data);
      return response;
    } catch (error) {
      console.log('Error authenticateOtp===>', error);
    }
  };

  const validateOtp = async (body) => {
    console.log("validateOtp===>", body);
    try {
      const response = await axios.post('/authenticate/validate-otp', body); 
      console.log('validateOtp--->', response.data);
      if(response?.data?.success === false){
        Alert.alert("Error",response?.data?.message);
      }
      return response;
    } catch (error) {
      console.log('Error validateOtp===>', error);
    }
  };

  const createLead = async (body) => {
    console.log("creaetLead===>", body);
    try {
      const response = await axios.post('/leads/0/save', body); 
      console.log('creaetLead--->', response.data);
      if(response?.data?.success === false){
        Alert.alert("Error",response?.data?.message);
      }
      return response;
    } catch (error) {
      console.log('Error creaetLead===>', error);
    }
  };

  const updateLead = async (body) => {
    console.log("updateLead===>", body);
    try {
      const response = await axios.post('/leads/1/save', body); 
      console.log('updateLead--->', response.data);
      if(response?.data?.success === false){
        Alert.alert("Error",response?.data?.message);
      }
      return response;
    } catch (error) {
      console.log('Error updateLead===>', error);
    }
  };

//   get
const leadStatus = async () => {
    try {
      const response = await axios.get('/leads/status-dropdown'); 
      console.log('leadStatus--->', response.data);
      return response;
    } catch (error) {
      console.log('Error leadStatus===>', error);
    }
  };
  const leadList = async () => {
    try {
      const response = await axios.get('/leads/list'); 
      console.log('leadList--->', response.data);
      return response;
    } catch (error) {
      console.log('Error leadList===>', error);
    }
  };

const uberStatus = async (id) => {
  console.log("parameter uberStatus--->", id);
  try {
    const response = await axios.get(`/leads/${id}/uber-status-dropdown`); 
    console.log('uberStatus--->', response.data);
    return response;
  } catch (error) {
    console.log('Error uberStatus===>', error);
  }
};

const leadChannel = async () => {
  try {
    const response = await axios.get(`/leads/channel-dropdown`); 
    console.log('leadChannel--->', response.data);
    return response;
  } catch (error) {
    console.log('Error leadChannel===>', error);
  }
};

const scheme = async () => {
  try {
    const response = await axios.get(`/scheme/dropdown`); 
    console.log('scheme--->', response.data);
    return response;
  } catch (error) {
    console.log('Error scheme===>', error);
  }
};

const leadSource = async () => {
  try {
    const response = await axios.get(`/leads/source-dropdown`); 
    console.log('leadSource--->', response.data);
    return response;
  } catch (error) {
    console.log('Error leadSource===>', error);
  }
};

const historyLead = async (leadId) => {
  try {
    const response = await axios.get(`/leads/${leadId}/log`); 
    console.log('historyLead--->', response.data);
    return response;
  } catch (error) {
    console.log('Error historyLead===>', error);
  }
};
const leadPersonalDetails = async (leadId) => {
  try {
    const response = await axios.get(`/leads/${leadId}/info`); 
    console.log('leadPersonalDetails--->', response.data);
    return response;
  } catch (error) {
    console.log('Error leadPersonalDetails===>', error);
  }
};
//   put
const UpdateProfile = async (body, userId) => {
    console.log("userId==>", userId);
    console.log("body==>", body);
    try {
      const response = await axios.put(`/Seller/Account/update-user-profile/${userId}`, body); 
      console.log('response Profile update=>>:', response.data);
      return response;
    } catch (error) {
      console.log('Error in update Profile: ', error);
    }
  };
// delete 
  const deleteProduct = async (id, body) => {
    console.log("bodydeleteProduct", body)
  
    try {
      const response = await axios.delete(`/Seller/Product/${id}`, body); 
      console.log('response deleteProduct:', response.data);
      return response;
    } catch (error) {
      console.log('Error in delete Product:', error);
    }
  };
  
  export const APIService = {
    authenticateOtp,
    validateOtp,
    secreteKeyToken,
    deleteProduct,
    leadStatus,
    uberStatus,
    leadChannel,
    scheme,
    createLead,
    leadSource,
    UpdateProfile,
    leadList,
    historyLead,
    leadPersonalDetails,
    updateLead
  }