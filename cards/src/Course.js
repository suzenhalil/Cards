import React from 'react'

// export const Course = () => {
//   return (
//     <div>Course</div>
//   )
// }
function Course({image,title,description}) {
    // console.log(props);
    // const {title,description} = props;
    return ( 
    <div>
<img src={image} alt='' />
<div>{title}</div> 
<div>{description}</div> 
    

    </div>
    
    );
}

export default Course ;
