const { Fragment } = wp.element;
const { MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { PanelBody } = wp.components;
const { InspectorControls } = wp.editor;

const Inspector = (props) => {

    const {
        attributes: {
            image
        },
        setAttributes
    } = props;

    return (
        <InspectorControls>
            <PanelBody title="Image" initialOpen={true}>
                <img src={image}/><br/>
                <MediaUpload
                    onSelect={(imgObject) => setAttributes({image: imgObject.sizes.full.url}) }
                    type="image"
                    render={({ open }) => (
                        <Fragment>
                            <button
                                onClick={open}
                            >
                                {__("Choose The icon")}
                                <i className="fas fa-image" />
                            </button>
                        </Fragment>
                    )}
                />
            </PanelBody>
        </InspectorControls>
    )
}
export default Inspector;