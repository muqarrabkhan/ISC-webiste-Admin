import React from 'react'
import { withRouter} from 'react-router-dom'

const EditAnnouncement=(props) => {
    let{history}=props;

    return (

        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Edit Announcement</h6>
                <button onClick={()=>history.push("/announcement")}className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                            {/* Announcement Title**/}
                            <div className="has-margin-left-60 fnt-poppins">
                                <div>
                                    <label>Announcement Title*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator"/>
                                </div>
                            </div>
                            {/* Announcement Detail*/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Announcement Detail*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <textarea className="textarea-of-admistrator" />
                                </div>
                            </div>
                            {/* Announcement Link**/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Announcement Link*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator"/>
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
export default withRouter(EditAnnouncement);