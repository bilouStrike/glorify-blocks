const { RichText } = wp.editor;
const TextInfoBox = (props) => {

    const {
        attributes: {
            title,
            sub_title,
            description
        },
        setAttributes,
        editor
    } = props;

    return (
        <div className="textInfoBox">
           <h2 className="textInfoBox__title">
                {editor ? 
                    <RichText 
                        value={title}
                        onChange={(title) => setAttributes({title})}
                    />
                :
                    <RichText.Content value={title} />    
                } 
           </h2>
           <h3 className="textInfoBox__sub_title">
                {editor ? 
                    <RichText 
                        value={sub_title}
                        onChange={(sub_title) => setAttributes({sub_title})}
                    />
                :
                    <RichText.Content value={sub_title} />    
                } 
           </h3>
           <p className="textInfoBox__description">
                {editor ? 
                    <RichText 
                        value={description}
                        onChange={(description) => setAttributes({description})}
                    />
                :
                    <RichText.Content value={description} />    
                } 
           </p>
        </div>
    )
}

export default TextInfoBox;