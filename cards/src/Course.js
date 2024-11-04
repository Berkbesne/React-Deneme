import React from 'react'


function Course({image,title,description}) {
    return (
      <div>
        <div>
        <img src={image} alt=""/>
        </div>
        <div>
           { title}
         </div> 
        <div>
           {description} 
        </div>
      </div>);
}

export default Course;
