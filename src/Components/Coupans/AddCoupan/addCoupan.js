import React from 'react'
import {withRouter} from 'react-router-dom'

const addCoupan=(props) => {
    let {history}=props;
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Coupan</h6>
                <button onClick={()=>history.push("/coupans")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                            {/* Page Link**/}
                            <div className="has-margin-left-60 fnt-poppins">
                                <div>
                                    <label>Page Link*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/* Coupon Code**/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Coupon Code*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Discount Percentage**/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Discount Percentage*</label>
                                </div>
                                <div className="has-margin-top-10">
                                   <input className="inputs-of-admistrator" type="number"/>
                                </div>
                            </div>
                            {/*User Email***/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>User Email*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/* Select Coupon Status**/}
                            <div className="has-margin-left-60 fnt-poppins has-margin-top-20">
                                <div>
                                    <label>Select Coupon Status*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <select className="inputs-of-admistrator fnt-poppins">
                                        <option>Enable</option>
                                        <option>Disable</option>
                                    </select>
                                </div>
                            </div>
                            {/*Page Url Link With Coupon*/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Page Url Link With Coupon*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" placeholder="asd" />
                                </div>
                                <button className="Save-btn-of-form has-margin-top-10 fnt-poppins">Link Copy</button>
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
export default withRouter (addCoupan)