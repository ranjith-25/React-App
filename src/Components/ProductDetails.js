import Button from './Button';

import React,{useState} from 'react';

function ProductDetails(props){

 // let productCount=0;

 function displayFormattedProductCount(){

  return productCount>0?productCount:'Zero'

 }

 //let isAvailable='Available'

 let badgeClass='badge-margin-left-240 badge '

 badgeClass+=props.isAvailable?'badge bg-success':'badge bg-danger '

 let [productCount,updateCount]=useState(0)

 function incrementProductCount(){

  // productCount++;

  console.log(productCount)

  updateCount(++productCount)

 }

 function decrementProductCount(){

  // productCount--;

  console.log(productCount)

  updateCount(--productCount)

 }

 return (<div class="d-flex align-items-center justify-content-start mt-1">

      <h6 class="font-weight-bold my-2" style={{marginRight:30}}>${props.price}</h6>

      <Button eventHandler={incrementProductCount}>+</Button>

      <span style={{padding: '0px 20px','font-size':15}}>{displayFormattedProductCount()}</span>

      <Button eventHandler={decrementProductCount}>-</Button>

      <span style={{marginLeft:'300px'}} className={badgeClass}>{props.isAvailable?'Available':'UnAvailable'}</span>

     </div>

)}

export default ProductDetails;

