function Backlog (props) {
    const contentProps = [...props.contentProps]
    console.log(props.contentProps)
    return(
        <>
            <div className="card text-white mx-3 mb-4 col border border-dark rounded">
                <div className="card-header bg-secondary my-2 border border-dark rounded">Backlog</div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Backlog 1</p>
                    <button type="button" className="btn bg-secondary">Take</button>
                </div>
                <div className='card-body border border-dark rounded mb-2'>
                    <p className="card-text" style={{ color: 'black' }} >Data Backlog 2</p>
                    <button type="button" className="btn bg-secondary">Take</button>
                </div>
                {
                    contentProps.map((data,index) => {
                        return (
                            <div className='card-body border border-dark rounded mb-2' key={index}>
                                <p className="card-text" style={{ color: 'black' }} >{data}</p>
                                <button type="button" className="btn bg-secondary">Take</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Backlog