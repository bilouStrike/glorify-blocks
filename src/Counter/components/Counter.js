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
                </div>
            </div>
        </div>
    )
}

export default Counter;