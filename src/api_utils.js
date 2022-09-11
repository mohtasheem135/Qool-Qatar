
export const BASE_URL = 'https://qoolqatar.com/api/v1';


export function getSubCategory() {
 return fetch('https://qoolqatar.com/api/v1/admin/getall/subcategory').then((response1) => response1.json())
}


export function getSingleSubCategory(id) {
  return fetch(`https://qoolqatar.com/api/v1/admin/get/single/subcategory/${id}`).then((response1) => response1.json());
  
}
