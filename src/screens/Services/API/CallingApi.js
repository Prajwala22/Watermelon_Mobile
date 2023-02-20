import api from '../apiservice';


/*
/Watermelon Suppliers API Start here 
*/

//Forgot Password API
const ForgotPassword = async(api_url:any,data:any) => {
  const response = await api.post(api_url,data)
   
  return response.data;

}
//signup
const createSupplier = async(api_url:any,data:any) => {
  const response = await api.post(api_url,data)
  return response.data;
}
// const createSupplier = async (access_token: any,api_url:any,data:any) => {
//   const response = await api.get(api_url,data, {
//     headers: {
//       'Authorization': `Bearer ${access_token}`
//     }
//   });
//   // console.log("GetAllRestaurant RESULTS::", response.data);
//   return response.data;
// };
//Add Catelogue
const createProduct = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
//Login Api
const Login = async (api_url:any, data:any) => {
const response = await api.post(api_url, data)
 
  return response.data;
};
//getCategory
const getAllCategory = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
//getAllSubCategory

const getAllSubCategory = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
//getCatelogue
const getCatelogue = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
//gethashtag
const gethashtag = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
//getSKUS
const getSKUS = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
//getUOM
const getUOM = async(token:any,api_url:any,data:any) => {
  const response = await api.post(api_url,data ,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
    
  return response.data;
}
const ChangePassword = async(token:any,api_url:any,data:any) => {
  console.log(data,api_url,"tok678en")
  const response = await api.post(api_url,data ,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  return response.data;

}
//getCountry
const getCountry = async(token:any,api_url:any,data:any) => {
  console.log(data,api_url,"tok678en")
  const response = await api.post(api_url,data ,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  return response.data;

}
const RefreshTokenGenerator = async (emailId: string, password: string) => {

  const response = await api.post(`UserRegistration/RefreshToken/refreshToken`, JSON.stringify({
    "userName": emailId,
    "password": password
  }));
  return response.data;
};


export default {ForgotPassword,ChangePassword,Login,getSKUS,getUOM,getCountry,createSupplier,gethashtag,createProduct,getAllSubCategory,getAllCategory,getCatelogue}