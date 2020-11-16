const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

const InfoBox = (props) => {

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
        <div className="infoBox">
           <div className="infoBox__text_column">
                { editor ? (
                    <InnerBlocks
                        className="lattimore-textCols__right_list"
                        renderAppender={() => null}
                        allowedBlocks={["glorify-blocks/text-info-box"]}
                        template={[["glorify-blocks/text-info-box"]]}
                    />
                    ) : (
                    <InnerBlocks.Content className="lattimore-textCols__right_list"/>
                )}
           </div>
           <div className="infoBox__image_column">
                <img src="http://127.0.0.1/glorify/wp-content/uploads/2020/11/Group-1113.png" />
           </div>
        </div>
    )
}

export default InfoBox;