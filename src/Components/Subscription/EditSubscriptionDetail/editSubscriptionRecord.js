import React from 'react'
import { withRouter} from 'react-router-dom'


const EditSubscriptionRecord= (props) => {
    let{history}=props;
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Edit Subscription Detail</h6>
                <button onClick={()=>history.push("/subscription")}className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                            {/*Subscription Detail**/}
                            <div className="mrg-left-60 fnt-poppins">
                                <div>
                                    <label>Subscription Detail*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(EditSubscriptionRecord);