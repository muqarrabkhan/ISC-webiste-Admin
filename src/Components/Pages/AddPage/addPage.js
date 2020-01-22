import React, { useState } from 'react'
import CKEditor from "react-ckeditor-component";

export default () => {
    const [content, setContent] = useState("");
    console.log("content", content);

    return (

        <div className="container-fluid Table-for-administrator-main-div">

            {/* header */}

            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Page</h6>
                <button className="header-btn-of-table fnt-poppins">Back</button>
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
                            <div className="has-margin-left-60 fnt-poppins">
                                <div>
                                    <label>Meta Title*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/* Meta Description**/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Meta Description*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <textarea className="textarea-of-admistrator" />
                                </div>
                            </div>
                            {/*Meta Keywords**/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Meta Keywords*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Slug***/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Slug*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Page Heading***/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins">
                                <div>
                                    <label>Page Heading*</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <input className="inputs-of-admistrator" />
                                </div>
                            </div>
                            {/*Page Content**/}
                            <div className="has-margin-left-60 has-margin-top-20 fnt-poppins ck-Editor">
                                <div>
                                    <label>Page Content</label>
                                </div>
                                <div className="has-margin-top-10">
                                    <CKEditor
                                        content={content ? content : ""}
                                        events={{
                                            "change": (event) => setContent(event.editor.getData())
                                        }}
                                        className="form-control" placeholder="Enter Description" rows="5" />
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