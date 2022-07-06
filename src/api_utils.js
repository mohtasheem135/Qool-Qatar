export function getHomeData() {
    // return fetch('https://qoolqatar.com/qool_qatar/api/homedata')
    return fetch('https://qoolqatar.com/qool_qatar/api/homedata').then((response) => response.json())
}