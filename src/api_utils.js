
export const BASE_URL = 'https://qoolqatar.com/api/v1';

const requestOptions = {
 
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("@auth_token")}` },
};


export function getSubCategory() {
 return fetch(`${BASE_URL}/admin/getall/subcategory`).then((response1) => response1.json())
}


export function getSingleSubCategory(id) {
  return fetch(`${BASE_URL}/admin/get/single/subcategory/${id}`).then((response1) => response1.json());
  
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
