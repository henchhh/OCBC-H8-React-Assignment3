function Button (props) {
    
    return (
        <>
            { props.ButtonText===null ? (
                <></>
            ) : (
                <button type="button" className={ props.ButtonCss }>{ props.ButtonText }</button>
            )}
        </>
    )
}

export default Button