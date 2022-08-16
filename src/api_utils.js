
export const BASE_URL = 'https://qoolqatar.com/api/v1';


export function getSubCategory() {
  return fetch('https://qoolqatar.com/api/v1/admin/getall/subcategory').then((response1) => response1.json())
}
