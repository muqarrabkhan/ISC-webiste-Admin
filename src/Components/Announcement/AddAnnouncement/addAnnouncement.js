import React from 'react'
import { withRouter} from 'react-router-dom'

const AddAnnouncement= (props) => {
    let{history}=props;
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Announcement</h6>
               <button onClick={()=>history.push("/announcement")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                            <div className="mrg-left-60 fnt-poppins">
                                <div>
                                    <label>Announcement Title*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator"/>
                                </div>
                            </div>
                            {/* Announcement Detail*/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Announcement Detail*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <textarea className="textarea-of-admistrator" />
                                </div>
                            </div>
                            {/* Announcement Link**/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Announcement Link*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator"/>
                                </div>
                            </div>
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
export default withRouter(AddAnnouncement);