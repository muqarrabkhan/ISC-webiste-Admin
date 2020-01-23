import React from 'react'
import Image from '../../../assets/Images/admin.png'

export default () => {
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Update Product</h6>
                <button className="header-btn-of-table fnt-poppins">Back</button>
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
                                    {/* Product Name***/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Product Name*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="name" placeholder="Enter Name"></input>
                                            </div>

                                        </div>
                                    </div>
                                    {/*Product Sale Price($)**/}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Product Sale Price($)*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10" type="number" placeholder="Enter Short Description"></input>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/*Product Short Description**/}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Product Short Description*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10" type="slug" placeholder="Enter Slug"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Product Url* */}

                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Product Url*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10" type="keyword" placeholder="Enter Keyword"></input>
                                            </div>
                                        </div>
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
