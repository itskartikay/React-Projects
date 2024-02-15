import React from 'react';

const Box = (props) => {
  return (
    <>
        <div className='project-card'>

            <img src={props.image} />

            <h2>Project Title</h2>
            <h3 href="">Project Link</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sint reiciendis blanditiis sunt.
                Alias similique accusantium, quae explicabo libero quam?
                Enim rem ducimus consequuntur officia?
            </p>
        </div>

    </>
  )
}

export default Box
