import React from 'react'
import arrowup from "./images/arrowup.svg"

const CreateAcountBtn = () => {
    return (
        <>
            <section>
                <div className='button-wrapper' >
                    <a href='' className='create'><span>create account</span>
                        <img src={arrowup} className="img-fluid hover-up" alt=""></img>
                    </a>
                </div>
            </section>
        </>
    )
}

export default CreateAcountBtn
