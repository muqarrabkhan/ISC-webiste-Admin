import React from 'react'
import { withRouter} from 'react-router-dom'

const AddSetting= (props) => {
    let {history}=props;
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add General Setting</h6>
                <button onClick={()=>history.push("/setting")}className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                            <div className="mrg-left-60 fnt-poppins">
                                <div>
                                    <label>Name*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Key*/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Key*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Value*/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Value*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Setting type*/}
                            <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                <div>
                                    <label>Setting type*</label>
                                </div>
                                <div className="mrg-top-10">
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
                            <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(AddSetting);