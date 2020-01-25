import React from 'react'
import {withRouter} from 'react-router-dom'

const addProductcompaign=(props) => {
    let {history}=props;
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Product in Compaign</h6>
                <button onClick={()=>history.push("/view-all-campaign")} className=" cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                                    {/* Product Name***/}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Campaign URL*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="text" placeholder="Enter Name"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* buttons */}
                            <div className="btns-of-add has-margin-left-60 has-margin-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form has-margin-left-20 fnt-poppins">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(addProductcompaign)