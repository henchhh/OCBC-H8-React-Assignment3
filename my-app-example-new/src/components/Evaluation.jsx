import { useState } from "react"

function Evaluation (props) {
    return(
        <>
            {/* {JSON.stringify(content)} */}
            <div className="card text-white mx-3 mb-4 col border border-dark rounded">
                <div className="card-header bg-info my-2 border border-dark rounded">Evaluation</div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Evaluation 1</p>
                    <button type="button" className="btn bg-info">Take</button>
                </div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Evaluation 2</p>
                    <button type="button" className="btn bg-info">Take</button>
                </div>
            </div>
        </>
    )
}

export default Evaluation