export function getHomeData() {
    // return fetch('https://qoolqatar.com/qool_qatar/api/homedata')
    return fetch('https://qoolqatar.com/qool_qatar/api/homedata').then((response) => response.json())
    // return fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f688b40cbae84bbb9364589714dc2da6').then((response) => response.json())
    // return fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f688b40cbae84bbb9364589714dc2da6')
}