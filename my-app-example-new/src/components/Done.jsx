import { useState } from "react"

function Done (props) {
    return(
        <>
            {/* {JSON.stringify(content)} */}
            <div className="card text-white mx-3 mb-4 col border border-dark rounded">
                <div className="card-header bg-success my-2 border border-dark rounded">Done</div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Done 1</p>
                    <button type="button" className="btn bg-success">Take</button>
                </div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Done 2</p>
                    <button type="button" className="btn bg-success">Take</button>
                </div>
            </div>
        </>
    )
}

export default Done