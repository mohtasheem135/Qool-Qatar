
export const BASE_URL = 'https://qoolqatar.com/api/v1';

const requestOptions = {
 
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("@auth_token")}` },
  // body: JSON.stringify({
  //   name: initialState.name,
  //   phoneNumber: initialState.mobile,
  //   gender: "m",
  //   email: initialState.email,
  //   profilePic: "https://asdasd.sgp1.cdn.digitaloceanspaces.com/assets/ced2a84a-6617-495e-9145-69b9887a2965Screenshot%202022-06-18%20at%2012.00.09%20AM.png",
  //   uid: "00000100000"
  // })
};


export function getSubCategory() {
 return fetch(`${BASE_URL}/admin/getall/subcategory`, requestOptions).then((response1) => response1.json())
}


export function getSingleSubCategory(id) {
  return fetch(`${BASE_URL}/admin/get/single/subcategory/${id}`, requestOptions).then((response1) => response1.json());
  
}


export function getSlotsPackage(id) {
  return fetch(`${BASE_URL}/admin/get/slots/package/${id}`, requestOptions).then((response1) => response1.json());
  
}


export function addSlotsToPackage(id, data) {
  return fetch(`${BASE_URL}/admin/add/slots/package/${id}`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("@auth_token")}` },
    body: JSON.stringify({
     data
    })
  });
}
