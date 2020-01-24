import React from 'react'
import Image from '../../../assets/Images/admin.png'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add NewsLetter</h6>
                <Link to={"/newsletter"}><button className="header-btn-of-table fnt-poppins">Back</button></Link>
            </div>
            {/* Table of Administrator  */}
            <form>
                <div className="Table-of-administrator">
                    <div className="container-fluid background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="container  Form-section-startup">
                            <div className="Form-section2-uploading-image">
                                <img className="has-margin-left-55 has-margin-top-30" alt="upload-img" src={Image} />
                            </div>
                            <div className="Form-section2-uploading-btn">
                                <button className="Save-btn-of-form has-margin-left-55 has-margin-top-20 fnt-poppins">Upload Image</button>
                            </div>
                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* NewsLetter Name***/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">NewsLetter Name*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="name" placeholder="Enter Name"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/*Select Tempelate* */}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Select Tempelate*</label>
                                            </div>
                                            <div>
                                                <select className="has-margin-top-10 fnt-poppins">
                                                    <option>Thankyou Email</option>
                                                    <option>Header</option>
                                                    <option>Footer</option>
                                                    <option>$20 Discount Code for Premium Campaigns  (New Year Promotion)</option>
                                                    <option>$50 Coupon for Premium Campaigns on New Year Eve. (50% off)</option>
                                                    <option>Thanks for using iSupportCause - Feedback</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* radioButtons */}
                            <div className="radios has-margin-top-20 has-margin-left-50">
                                <div className="radio">
                                    <label>Select</label>
                                    <input className="has-margin-top-40" type="radio" id="radio1" name="radio" checked />
                                    <label className="label-of-radio" for="radio1">
                                        <div className="checker"></div>
                                        Schedule Newsletter
                                </label>
                                </div>
                            </div>
                            <div className="radios has-margin-left-50">
                                <div className="radio">
                                    <input type="radio" id="radio2" name="radio" />
                                    <label className="label-of-radio" for="radio2">
                                        <div className="checker"></div>
                                        <div>Save As Draft</div>
                                    </label>
                                </div>
                            </div>
                            {/* Set Newsletter Date And Time (MM/DD/YYYY HH:mm:ss)**/}
                            <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 has-margin-top-20 fnt-poppins">
                                <div className="form-group fnt-poppins">
                                    <div>
                                        <label>Set Newsletter Date And Time (MM/DD/YYYY HH:mm:ss)</label>
                                    </div>
                                    <div>
                                        <input className="has-margin-top-10 fnt-poppins" type="date" placeholder="Enter Short Description"></input>
                                    </div>
                                </div>
                            </div>
                            {/* radioButtons second for Select Group**/}
                            <div className="radios-of-group has-margin-top-20 has-margin-left-50">
                                <div className="radio-of-group">
                                    <label>Select Group*</label>
                                    <input className="has-margin-top-40" type="radio" id="radio3" name="radio-of-groups" checked />
                                    <label className="label-of-radio" for="radio3">
                                        <div className="checker"></div>
                                        Campaing Users
                                </label>
                                </div>
                            </div>
                            <div className="radios-of-group has-margin-left-50">
                                <div className="radio-of-group">
                                    <input type="radio" id="radio4" name="radio-of-groups" />
                                    <label className="label-of-radio" for="radio4">
                                        <div className="checker"></div>
                                        <div>Campaing Creators</div>
                                    </label>
                                </div>
                            </div>
                            {/* Select Campaigns***/}
                            <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                <div className="form-group">
                                    <div>
                                        <label className="has-margin-top-20 fnt-poppins">Select Campaigns*</label>
                                    </div>
                                    <div>
                                        <input className="has-margin-top-10 fnt-poppins" type="name" placeholder="Enter Name"></input>
                                    </div>
                                </div>
                            </div>
                            {/* Campaign URL**/}
                            <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                <div className="form-group">
                                    <div>
                                        <label className="has-margin-top-20 fnt-poppins">Campaign URL*</label>
                                    </div>
                                    <div>
                                        <input className="has-margin-top-10 fnt-poppins" type="name" placeholder="Enter Name"></input>
                                    </div>
                                </div>
                            </div>
                            {/* buttons */}
                            <div className="btns-of-add has-margin-left-60 has-margin-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form has-margin-left-20 fnt-poppins">Save</button>
                                <button className="Save-btn-of-form has-margin-left-20 fnt-poppins">Export</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

