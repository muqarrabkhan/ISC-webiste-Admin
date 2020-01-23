import React, { useState } from 'react'
import InputColor from 'react-input-color';
export default () => {
    const [initial] = useState('#5e72e4');
    const [color, setColor] = useState({});
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Adson</h6>
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
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* Status**/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Status*</label>
                                            </div>
                                            <div>
                                                <select className="has-margin-top-10 fnt-poppins">
                                                    <option>Enable</option>
                                                    <option>Disable</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/*Place On**/}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Place On*</label>
                                            </div>
                                            <div>
                                                <select className="has-margin-top-10 fnt-poppins">
                                                    <option>Top Bar, Horizontal </option>
                                                    <option>Side Bar, Vertical </option>
                                                    <option>Bottom Bar Horizontal </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* radioButtons */}
                            <div className="radios has-margin-top-20 has-margin-left-50">
                                <div className="radio">
                                    <label>Select Type</label>
                                    <input className="has-margin-top-40" type="radio" id="radio1" name="radio" checked />
                                    <label className="label-of-radio" for="radio1">
                                        <div className="checker"></div>
                                        Global
                                </label>
                                </div>
                            </div>
                            <div className="radios has-margin-left-50">
                                <div className="radio">
                                    <input type="radio" id="radio2" name="radio" />
                                    <label className="label-of-radio" for="radio2">
                                        <div className="checker"></div>
                                        <div>Specific Campaign</div>
                                    </label>
                                </div>
                            </div>
                            {/* hashtag back color */}
                            <div className="has-margin-left-50 has-margin-top-30">
                                <label className="fnt-poppins ">Hash Tag Back Color</label>
                                <div className="react-input-color has-margin-top-20"
                                    style={{
                                        width: 80,
                                        height: 50,
                                        marginBottom: 20,
                                        backgroundColor: color.hex
                                    }}>
                                    {color.hex}
                                </div>
                                <InputColor initialHexColor={initial} onChange={setColor} />
                            </div>
                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* Compaign**/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Compaign*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/*Compaign Url*/}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Compaign Url*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Ad link */}
                            <div className="has-margin-top-30 has-margin-left-50">
                                <label>Ad Link*</label>
                            </div>
                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* Ad Text***/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Ad Text</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/*Ad Button Text*/}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Ad Button Text</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* Ad Image Url*/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Ad Image Url</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/*Start Date*/}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Start Date*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Date*/}
                            <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                <div className="form-group">
                                    <div>
                                        <label>End Date</label>
                                    </div>
                                    <div>
                                        <input className="has-margin-top-10 fnt-poppins"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="btns-of-add has-margin-left-60 has-margin-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form has-margin-left-20 fnt-poppins">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
