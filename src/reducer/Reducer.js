
const initialState = {
    items: [
        {
            id:0, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.booksbythefoot.com%2Fshop%2Fpc%2Fcatalog%2FROsq.jpg&f=1&nofb=1',
            title: 'Books I do not need anymore', 
            category: 'Books', 
            description: 'Among these books are: Harry Potter, Lord of the Rings and Animal Farm. I can give you a bag to take them home ;)',
            location: 'Mitte'
        },
        {
            id:1, 
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd111vui60acwyt.cloudfront.net%2Fproduct_photos%2F18532620%2Fimage_large.jpg&f=1&nofb=1',
            title: 'Vintage Jacket', 
            category: 'Clothes', 
            description: 'My days of wearing this gem are long gone. If anybody wants to rock this old timer, be my guest.',
            location: 'Prenzlauer Berg'
        }
    ],
    categories: [
        {name: 'Furniture'}, 
        {name: 'Clothes'}, 
        {name: 'Food'}, 
        {name: 'Books'}
    ],
    posted: false,
}

export function Reducer(state = initialState, action) {
    switch(action.type) {

        case 'ADD_ITEM':
            let newItem = action.payload;
            return {...state, items: [...state.items, newItem], posted: true}

        case 'MAKE_POSTED_FALSE':
            return {...state, posted: false}
        default:
            return state
    }
}

