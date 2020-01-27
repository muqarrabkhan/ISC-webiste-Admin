import React, { useState } from 'react'
import CKEditor from "react-ckeditor-component";
import Image from '../../../assets/Images/admin.png'
import {withRouter} from 'react-router-dom'

const EditTemplate=(props) => {
    let {history}=props;
    
    const [content, setContent] = useState("");
    console.log("content", content);
    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Edit Templates</h6>
                <button onClick={()=> history.push("/tamplates")} className=" cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form>
                <div className="Table-of-administrator">
                    <div className="container-fluid background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="container  Form-section-startup">
                            <div className="Form-section2-uploading-image">
                                <img className="mrg-left-55 mrg-top-30" alt="" src={Image} />
                            </div>
                            <div className="Form-section2-uploading-btn">
                                <button className="Save-btn-of-form mrg-left-55 mrg-top-20 fnt-poppins">Upload Image</button>
                            </div>
                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* Title**/}
                                    <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="mrg-top-20 fnt-poppins">Title*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="name" placeholder="Enter Name"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Email**/}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Email*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10" placeholder="Enter Short Description"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs mrg-top-10">
                                    {/*Subject* */}
                                    <div className="Form-Inputs-Fields mrg-top-20 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Subject*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10" type="slug" placeholder="Enter Slug"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Password* */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Password*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10" type="keyword" placeholder="Enter Keyword"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* From Name* */}
                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                <div className="form-group">
                                    <div>
                                        <label>From Name*</label>
                                    </div>
                                    <div>
                                        <input className="mrg-top-10" type="keyword" />
                                    </div>
                                </div>
                            </div>
                            {/* radioButtons */}
                            <div className="radios mrg-top-20 mrg-left-50">
                                <div className="radio">
                                    <label>Select Type</label>
                                    <input className="mrg-top-40" type="radio" id="radio1" name="radio" checked />
                                    <label className="label-of-radio" for="radio1">
                                        <div className="checker"></div>
                                        Websiter
                                </label>
                                </div>
                            </div>
                            <div className="radios mrg-left-50">
                                <div className="radio">
                                    <input type="radio" id="radio2" name="radio" />
                                    <label className="label-of-radio" for="radio2">
                                        <div className="checker"></div>
                                        <div>NewsLetter</div>
                                    </label>
                                </div>
                            </div>
                            {/* radioButtons second for Status*/}
                            <div className="radios-of-group mrg-top-20 mrg-left-50">
                                <div className="radio-of-group">
                                    <label>Select Status</label>
                                    <input className="mrg-top-40" type="radio" id="radio3" name="radio-of-groups" checked />
                                    <label className="label-of-radio" for="radio3">
                                        <div className="checker"></div>
                                        Enable
                                </label>
                                </div>
                            </div>
                            <div className="radios-of-group mrg-left-50">
                                <div className="radio-of-group">
                                    <input type="radio" id="radio4" name="radio-of-groups" />
                                    <label className="label-of-radio" for="radio4">
                                        <div className="checker"></div>
                                        <div>Disable</div>
                                    </label>
                                </div>
                            </div>
                            {/*Templates Variable* */}
                            <div className=" mrg-top-20 mrg-left-50 fnt-poppins">
                                <div className="form-group">
                                    <div>
                                        <label >Templates Variable </label>
                                    </div>
                                    <div>
                                        <input className="redonly-input mrg-top-10  fnt-poppins"
                                            value="[campaign_name] [campaign_link] [creator_name] [creator_email] [supporters] [unsub_newsletter_link] [campaign_premium_link]"
                                            type="keyword" placeholder="Enter Keyword" readonly />
                                    </div>
                                </div>
                            </div>
                            {/* Mail Content**/}
                            <div className=" ck-editor-of-compaign mrg-left-50 mrg-top-20">
                                <div className="form-group">
                                    <div>
                                        <label>Mail Content*</label>
                                    </div>
                                    <div className="ck-editor-of-compaign-border mrg-top-10">
                                        <CKEditor
                                            content={content ? content : ""}
                                            events={{
                                                "change": (event) => setContent(event.editor.getData())
                                            }}
                                            className="form-control" placeholder="Enter Description" rows="5" />
                                    </div>
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
export default withRouter(EditTemplate);