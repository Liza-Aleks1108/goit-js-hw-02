// 1 варіант
// function getShippingCost(country) {
//     let cost = 0;
//     let message = '';
//     switch (country) {
//         case "China":
//             cost = 100;
//             break;
//         case "Chile":
//             cost = 250;
//             break;
//         case "Australia":
//             cost = 170;
//             break;
//         case "Jamaica":
//             cost = 120;
//             break;
//         default:
//             message = `Sorry, there is no delivery to your country`;
//     }
//     return message ? message : `Shipping to ${country} will cost ${cost} credits`;
// }

// 2 варіант
function getShippingCost(country) {
    let cost = 0;
    switch (country) {
        case "China":
            cost = 100;
            break;
        case "Chile":
            cost = 250;
            break;
        case "Australia":
            cost = 170;
            break;
        case "Jamaica":
            cost = 120;
            break;
    }
    return cost ? `Shipping to ${country} will cost ${cost} credits` : "Sorry, there is no delivery to your country";
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
