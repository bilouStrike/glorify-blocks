const { InnerBlocks } = wp.blockEditor;

const InfoBox = (props) => {

    const {
        attributes: {
            image
        },
        setAttributes,
        editor
    } = props;

    return (
        <div className="infoBox">
           <div className="infoBox__text_column">
                { editor ? (
                    <InnerBlocks
                        renderAppender={() => null}
                        allowedBlocks={["glorify-blocks/text-info-box"]}
                        template={[["glorify-blocks/text-info-box"]]}
                    />
                    ) : (
                    <InnerBlocks.Content />
                )}
           </div>
           <div className="infoBox__image_column">
                <img src={image}/>
           </div>
        </div>
    )
}

export default InfoBox;