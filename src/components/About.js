import React from "react";

function About({ about, image }){
    return (
        <div>
            <aside>
                <img 
                    src={image ? image : 'https://via.placeholder.com/215'}
                    alt='blog logo'
                />
                <p>{about}</p>
            </aside>
        </div>
    )


}

export default About;