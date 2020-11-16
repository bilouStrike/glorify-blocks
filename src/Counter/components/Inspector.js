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
            <PanelBody title="Icon" initialOpen={true}>
                
            </PanelBody>
        </InspectorControls>
    )
}
export default Inspector;