const { RichText } = wp.editor;

const Content = (props) => {

    const {
        attributes: {
            title_01,
            description_01,
            image_01,
            title_02,
            description_02,
            image_02,
        },
        setAttributes,
        editor
    } = props;

    return (
        <div className="content">
            <div className="glorify-container">
                <div className="content__row">
                    <div className="content__image">
                        <img src={image_01} />
                    </div>
                    <div className="content__description">
                        <h2>
                        {   editor ? 
                                <RichText 
                                    value={title_01}
                                    onChange={(title_01) => setAttributes({title_01})}
                                />
                            :
                                <RichText.Content value={title_01} />    
                        } 
                        </h2>
                        <p>
                        {   editor ? 
                                <RichText 
                                    value={description_01}
                                    onChange={(description_01) => setAttributes({description_01})}
                                />
                            :
                                <RichText.Content value={description_01} />    
                        } 
                        </p>
                    </div>
                </div>
                <div className="content__row flex-reverse">
                    <div className="content__image">
                        <img src={image_02}/>
                    </div>
                    <div className="content__description">
                        <h2>
                        {   editor ? 
                                <RichText 
                                    value={title_02}
                                    onChange={(title_02) => setAttributes({title_02})}
                                />
                            :
                                <RichText.Content value={title_02} />    
                        }  
                        </h2>
                        <p>
                        {   editor ? 
                                <RichText 
                                    value={description_02}
                                    onChange={(description_02) => setAttributes({description_02})}
                                />
                            :
                                <RichText.Content value={description_02} />    
                        } 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;