export class ModelOffer {
  constructor() {
    this.isFavorites = 
  }

  static parseOffer(data) {
    return new ModelOffer(data);
  }

  static parseOffers(data) {
    return data.map((offer) => ModelOffer.parseOffer(offer));
  }
}

// МОИ
adults: 4
bedrooms: 3
city: {location: {…}, name: "Hamburg"}
description: "Very recommended: comfortable location, incredibly friendly staff, very tasty breakfasts, cleanliness, comfort. A decent hotel! You're great, so keep it! Thanks for the hospitality, be sure to return to you."
goods: (4) ["Heating", "Coffee machine", "Baby seat", "Kitchen"]
host: {avatarUrl: "img/avatar-angelina.jpg", id: 3, name: "Angelina"}
id: "22770131352181"
images: "img/apartment-01.jpg"
isFavorite: false
isPremium: true
location: {latitude: 52.3814938496678, longitude: 4.662877537499948}
previewImage: "img/room-small.jpg"
price: 50
rating: 90
tariff: "light"
title: "Beautiful & luxurious apartment at great location"
type: "apartments"

// СЕРВЕР
bedrooms: 2
city: {name: "Paris", location: {…}}
description: "Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance."
goods: (9) ["Baby seat", "Towels", "Dishwasher", "Coffee machine", "Air conditioning", "Washer", "Fridge", "Breakfast", "Laptop friendly workspace"]
host: {id: 25, name: "Angelina", is_pro: true, avatar_url: "img/avatar-angelina.jpg"}
id: 1
images: (14) ["https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg", "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg", "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg"]
is_favorite: false
is_premium: false
location: {latitude: 48.84461, longitude: 2.374499, zoom: 16}
max_adults: 7
preview_image: "https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg"
price: 340
rating: 3.5
title: "Canal View Prinsengracht"
type: "apartment"