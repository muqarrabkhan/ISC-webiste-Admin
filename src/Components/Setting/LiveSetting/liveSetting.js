import React from 'react'

export default () => {

    return (

        <div className="container-fluid Table-for-administrator-main-div">

            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Live Setting</h6>
                <button className="header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form>
                <div className="Table-of-administrator">
                    <div className="container-fluid background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="container  Form-section-startup">
                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                </div>
                            </div>
                            {/* radioButtons */}
                            <div className="radios has-margin-top-20 has-margin-left-50">
                                <div className="radio">
                                    <label>Live/Test</label>
                                    <input className="has-margin-top-40" type="radio" id="radio1" name="radio" checked />
                                    <label className="label-of-radio" for="radio1">
                                        <div className="checker"></div>
                                        Enable
                                </label>
                                </div>
                            </div>
                            <div className="radios has-margin-left-50">
                                <div className="radio">
                                    <input type="radio" id="radio2" name="radio" />
                                    <label className="label-of-radio" for="radio2">
                                        <div className="checker"></div>
                                        <div>Disable</div>
                                    </label>
                                </div>
                            </div>
                            {/* radioButtons second for Select Group**/}
                            <div className="radios-of-group has-margin-top-20 has-margin-left-50">
                                <div className="radio-of-group">
                                    <label>Trending</label>
                                    <input className="has-margin-top-40" type="radio" id="radio3" name="radio-of-groups" checked />
                                    <label className="label-of-radio" for="radio3">
                                        <div className="checker"></div>
                                         <div>Enable</div>
                                </label>
                                </div>
                            </div>
                            <div className="radios-of-group has-margin-left-50">
                                <div className="radio-of-group">
                                    <input type="radio" id="radio4" name="radio-of-groups" />
                                    <label className="label-of-radio" for="radio4">
                                        <div className="checker"></div>
                                        <div>Disable</div>
                                    </label>
                                </div>
                            </div>
                            <div className="btns-of-add has-margin-left-60 has-margin-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form has-margin-left-20 fnt-poppins">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

