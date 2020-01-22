import React, { useState } from 'react'

export default () => {

    return (
        <div className="container-fluid Table-for-administrator-main-div">

            {/* header */}

            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Update General Setting</h6>
                <button className="header-btn-of-table fnt-poppins">Back</button>
            </div>

            {/* Table of Administrator  */}
            <form>
                <div className="Table-of-administrator">

                    <div className="background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="Form-section-startup">
                            <div className="has-margin-bottom-20 extra-div">
                            </div>
                            {/*Name**/}
                            <div className="has-margin-left-60 fnt-poppins">
                                <div>
                                    <label>Name*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Key*/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Key*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Value*/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Value*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Setting type*/}
                            <div className="has-margin-left-60 fnt-poppins has-margin-top-20">
                                <div>
                                    <label>Setting type*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <select className="inputs-of-admistrator fnt-poppins">
                                            <option>General</option>
                                        	<option>Payment</option>
                                        	<option>Social</option>
                                        	<option>Email</option>
                                        	<option>Apps</option>
                                    </select>
                                </div>
                            </div>
                            {/* buttons */}
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