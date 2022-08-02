

export function getHomeData() {
    // return fetch('https://qoolqatar.com/api/v1/admin/getall/category').then((response) => response.json())
    return fetch('https://qoolqatar.com/api/v1/customer/home?lat=23.260494&lng=85.333736').then((response) => response.json())
}


export function getPackages() {
    // return fetch('://159.65.152.119/api/v1/admihttpn/getall/packages').then((response2) => response2.json())
    return fetch('https://qoolqatar.com/api/v1/admin/getall/subcategory').then((response2) => response2.json())
}
