import { useState } from "react"

function Progress (props) {
    return(
        <>
            {/* {JSON.stringify(content)} */}
            <div className="card text-white mx-3 mb-4 col border border-dark rounded">
                <div className="card-header bg-warning my-2 border border-dark rounded">Progress</div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Progress 1</p>
                    <button type="button" className="btn bg-warning">Take</button>
                </div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Progress 2</p>
                    <button type="button" className="btn bg-warning">Take</button>
                </div>
            </div>
        </>
    )
}

export default Progress