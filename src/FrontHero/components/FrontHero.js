const { RichText } = wp.editor;
const FrontHero = (props) => {

    const {
        attributes: {
            image,
            title
        },
        setAttributes,
        editor
    } = props;

    return (
        <div className="frontHero">
            <img src={image} />
            <h1> 
                {editor ? 
                    <RichText 
                        value={title}
                        onChange={(title) => setAttributes({title})}
                    />
                :
                    <RichText.Content value={title} />    
                }
                
            </h1>
        </div>
    )
}

export default FrontHero;