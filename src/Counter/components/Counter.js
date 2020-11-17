const { RichText } = wp.editor;

const Counter = (props) => {

    const {
        attributes: {
           
        },
        setAttributes,
        editor
    } = props;

    return (
        <div className="counter">
            <div className="glorify-container">
                <h2 className="counter__title"> What we’ve done so far </h2>
                <div className="counter__data">
                    <h3 className="counter__data_title"> 2 Years ago we started with </h3>
                    <div className="counter__data_grids">
                        <div className="counter__data_set counter__data_set--sm-device counter__data_set--purple">
                            <span className="counter__data_number"> 7 </span>
                            <span className="counter__data_text"> Team members </span>
                        </div>
                        <div className="counter__data_set">
                            <span className="counter__data_number"> 0 </span>
                            <span className="counter__data_text"> Users </span>
                        </div>
                        <div className="counter__data_set">
                            <span className="counter__data_number"> 0 </span>
                            <span className="counter__data_text"> Leads </span>
                        </div>
                        <div className="counter__data_set">
                            <span className="counter__data_number"> 0 </span>
                            <span className="counter__data_text"> Followers </span>
                        </div>
                        <div className="counter__data_set">
                            <span className="counter__data_number"> 0 </span>
                            <span className="counter__data_text"> Designs Made </span>
                        </div>
                    </div>
                </div>
                <div className="counter__data">
                    <h3 className="counter__data_title"> And now we have </h3>
                    <div className="counter__data_grids">
                        <div className="counter__data_set counter__data_set--sm-device  counter__data_set--purple ">
                            <span className="counter__data_number"> 28 </span>
                            <span className="counter__data_text"> Team members </span>
                        </div>
                        <div className="counter__data_set counter__data_set--pink">
                            <span className="counter__data_number"> 25K </span>
                            <span className="counter__data_text"> Users </span>
                        </div>
                        <div className="counter__data_set counter__data_set--yellow">
                            <span className="counter__data_number"> 50K </span>
                            <span className="counter__data_text"> Leads </span>
                        </div>
                        <div className="counter__data_set counter__data_set--cyan">
                            <span className="counter__data_number"> 8K </span>
                            <span className="counter__data_text"> Followers </span>
                        </div>
                        <div className="counter__data_set counter__data_set--green">
                            <span className="counter__data_number counter__data_number--beak-size"> 258K </span>
                            <span className="counter__data_text"> Designs Made </span>
                        </div>

                    </div>
                </div>
                <div class="counter__footer">
                    <p>
                        Yes, that’s pretty cool. <br/>
                        We are certainly over the moon with how well our <br/>
                        product has been received! 
                    </p>
                    <img src="data:image/png;base64,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" />
                </div>
            </div>
        </div>
    )
}

export default Counter;