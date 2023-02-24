const restaurantBtn = document.querySelector("#randomRestaurant")

const restaurantArr = ['Tea Rose Diner', 'Ice Haus', 'Pho Saigon', `Soy's`, 'Sabor Colombiano']

console.log(restaurantArr)

restaurantBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * restaurantArr.length);
    alert(`You should go to ${restaurantArr[random]}.`)
})