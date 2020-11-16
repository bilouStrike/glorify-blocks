const { Fragment } = wp.element;
const { MediaUpload } = wp.blockEditor;
const { __ } = wp.i18n;
const { PanelBody } = wp.components;
const { InspectorControls } = wp.editor;

const Inspector = (props) => {

    const {
        attributes: {
            image_01,
            image_02
        },
        setAttributes
    } = props;

    return (
        <InspectorControls>
            <PanelBody title="Image 01" initialOpen={true}>
                <img src={image_01}/><br/>
                <MediaUpload
                    onSelect={(imgObject) => setAttributes({image_01: imgObject.sizes.full.url}) }
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
            <PanelBody title="Image 02" initialOpen={true}>
                <img src={image_02}/><br/>
                <MediaUpload
                    onSelect={(imgObject) => setAttributes({image_02: imgObject.sizes.full.url}) }
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