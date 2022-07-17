export function getHomeData() {
    return fetch('http://159.65.152.119/api/v1/admin/getall/category').then((response) => response.json())
}