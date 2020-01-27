import React, { useState } from 'react'
import CKEditor from "react-ckeditor-component";
import {withRouter} from 'react-router-dom'

const EditPage= (props) => {
    let{history}=props;
    const [content, setContent] = useState("");
    console.log("content", content);

    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Edit Page</h6>
               <button onClick={()=>history.push("/pages")}className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                            {/* Meta Title**/}
                            <div className="mrg-left-60 fnt-poppins">
                                <div>
                                    <label>Meta Title*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/* Meta Description**/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Meta Description*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <textarea className="textarea-of-admistrator" />
                                </div>
                            </div>
                            {/*Meta Keywords**/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Meta Keywords*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Slug***/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Slug*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Page Heading***/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Page Heading*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Page Content**/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins ck-Editor">
                                <div>
                                    <label>Page Content</label>
                                </div>
                                <div className="mrg-top-10">
                                    <CKEditor
                                        content={content ? content : ""}
                                        events={{
                                            "change": (event) => setContent(event.editor.getData())
                                        }}
                                        className="form-control" placeholder="Enter Description" rows="5" />
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
export default withRouter(EditPage);