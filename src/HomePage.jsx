import React from 'react';
  
const HomePage = () => {
 

    
      localStorage.removeItem('token');
    }
    <div>
      <h10>HomePage</h10>
    </div>
  

  
export default HomePage;


// import React from 'react';
// import { useNavigate } from "react-router-dom";



// function HomePage() {
//   const Navigate = useNavigate();
//   function handleClick() {
//     Navigate("/login");
//     localStorage.removeItem('token');
//   }

  
//   const product = [{
//     name: "Blue T-Shirt",
//   },
  
//   ]
  

//   return (

    

//     <div className=" product">
//       {product.map(p => {
//         return <div className="product-detail">
//           <h4>{p.name}</h4>
//         </div>
//       })}

//       <div className="product-detail">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit
//       </div>
//       <div className="product-price">
//         $19.99
//       </div>
//       <div className='edit'>
//         <button type="button" onClick={handleClick}>
//           Edit
//         </button>
//       </div>
//       <div className='delete'>
//         <button type="button" onClick={handleClick}>
//           Delete
//         </button>
//       </div>

//     </div>
      
//   );
  
// }

// export default HomePage;