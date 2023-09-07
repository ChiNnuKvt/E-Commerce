import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs";

const Rating = ({value,text}) => {
  const filledStars = Math.floor(value); // Number of filled stars
  const hasHalfStar = value % 1 !== 0; // Check if there's a half-filled star
  const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Number of remaining empty stars

  const filledStarElements = Array.from({ length: filledStars }, (_, index) => (
    <BsStarFill style={{color: "#fdcc0d",}}/>
    // <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#fdcc0d",}} />
  ));

  let halfStarElement = null;
  if (hasHalfStar) {
    halfStarElement = <BsStarHalf style={{color: "#fdcc0d",}}/>
  }

  const remainingStarElements = Array.from({ length: remainingStars }, (_, index) => (
    <BsStar style={{color: "#fdcc0d",}}/>
  ));

  return (
    <div className="rating  d-flex">
      <div className="starsRating start">
      {filledStarElements}
      {halfStarElement}
      {remainingStarElements}
      </div>
      <small style={{marginTop:'0.25rem!important'}} className="my-2 ms-2">{text}</small>
    </div>
  );
};

export default Rating;





// import React from 'react'


// const Rating = ({value,text}) => {
//   return (
        

//     <div className="rating">
//         <i className={
//             value>=1 
//             ? "fas fa-star"
//             :value>=0.5 
//             ? "fas fa-start-half-alt"
//             :"far fa-star"
//         }
//        ></i>

//         <i className={
//             value>=2 
//             ? "fas fa-star"
//             :value>=1.5 
//             ? "fas fa-start-half-alt"
//             :"far fa-star"
//         }
//        ></i>

// <i className={
//             value>=3 
//             ? "fas fa-star"
//             :value>=2.5 
//             ? "fas fa-start-half-alt"
//             :"far fa-star"
//         }
//        ></i>

// <i className={
//             value>=4 
//             ? "fas fa-star"
//             :value>=3.5 
//             ? "fas fa-start-half-alt"
//             :"far fa-star"
//         }
//        ></i>

// <i className={
//             value>=5 
//             ? "fas fa-star"
//             :value>=4.5 
//             ? "fas fa-start-half-alt"
//             :"far fa-star"
//         }
//        ></i>
          
//        <span>{text}</span>
//        <i className="fa-regular fa-star-half-stroke"></i>
//     </div>
//   );
// };

// export default Rating