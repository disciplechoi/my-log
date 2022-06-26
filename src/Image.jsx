function Image(props){
    const [url, setUrl] = ("");

    return(
        <>
            <img src={props.src} alt={props.src}/>
        </>
    )

}

export default Image;