import Products from "./Components/Products";

const products=[

 {

  pID:1,

  pName:'Fresh Milk',

  desc:'Dolore ex dolore reprehenderit duis id est labore irure consequat duis id est labore irure consequat.',

  price:14,

  isAvailable:true,

  image:"images/freshmilk.jpeg"

 },

 {

  pID: 2,

  pName: 'Cottage Cheese',

  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',

  isAvailable: false,

  image: "images/cottage-cheese.png",

  price: 10

},

{

  pID: 3,

  pName: 'Brocoli',

  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',

  isAvailable: true,

  image: "images/brocoli.png",

  price: 15

},

{

  pID: 4,

  pName: 'Oranges',

  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',

  isAvailable: true,

  image: "images/oranges.png",

  price: 20

},

{

  pID: 5,

  pName: 'Olive oil',

  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',

  isAvailable: false,

  image: "images/olive-oil.png",

  price: 14

}

]

function App(){

 return (

  <div className="row">

   <div className="col-lg-8 mx-auto">

   <ul class="list-group shadow">

    <Products

     id={products[0].pID}

     name={products[0].pName}

     description={products[0].desc}

     price={products[0].price}

     image={products[0].image}

     isAvailable={products[0].isAvailable}

    ></Products>

    <Products

    id={products[1].pID}

    name={products[1].pName}

    description={products[1].desc}

    price={products[1].price}

    image={products[1].image}

    isAvailable={products[1].isAvailable}

    ></Products>

    <Products

    id={products[2].pID}

    name={products[2].pName}

    description={products[2].desc}

    price={products[2].price}

    image={products[2].image}

    isAvailable={products[2].isAvailable}

    ></Products>

    <Products

    id={products[3].pID}

    name={products[3].pName}

    description={products[3].desc}

    price={products[3].price}

    image={products[3].image}

    isAvailable={products[3].isAvailable}

    ></Products>

    <Products

    id={products[4].pID}

    name={products[4].pName}

    description={products[4].desc}

    price={products[4].price}

    image={products[4].image}

    isAvailable={products[4].isAvailable}

    ></Products>

    </ul>

   </div>

  </div>

 )

}

export default App;

