import React, { useState } from 'react'
import Style from './style.js'
import CKEditor from "react-ckeditor-component";
import Image1 from '../../../src/assets/Images/images.jpg'
import { withRouter } from 'react-router-dom';

const Practicefile = (props) => {
    let { history } = props;
    const [content, setContent] = useState("");
    console.log("content", content);

    return (

        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Page Edit</h6>
                <button onClick={() => history.push("")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form>
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className=" main-div-of-form-sections flex-row">
                            <div className="container Form-section-startup mrg-left-20">
                                <div className="has-margin-bottom-20 extra-div">
                                </div>
                                {/* Page Title**/}
                                <div className="mrg-left-45 fnt-poppins">
                                    <div>
                                        <label>Page Title:</label>
                                    </div>
                                    <div className="mrg-top-10">
                                        <input className="inputs-of-admistrator" placeholder="Home Page" />
                                    </div>
                                </div>
                                {/* Slug**/}
                                <div className="mrg-left-45 mrg-top-20 fnt-poppins">
                                    <div>
                                        <label>Slug:</label>
                                    </div>
                                    <div className="mrg-top-10">
                                        <input className="inputs-of-admistrator" placeholder="home-page" />
                                    </div>
                                </div>
                                {/*Page type**/}
                                <div className="mrg-left-45 mrg-top-20 fnt-poppins">
                                    <div>
                                        <label>Page Type:</label>
                                    </div>
                                    <div className="mrg-top-10">
                                        <select className="inputs-of-admistrator">
                                            <option>Home Page</option>
                                            <option>Title</option>
                                        </select>
                                    </div>
                                </div>
                                {/*Status***/}
                                <div className="mrg-left-45 mrg-top-20 fnt-poppins">
                                    <div>
                                        <label>Status:</label>
                                    </div>
                                    <div className="mrg-top-10">
                                        <select className="inputs-of-admistrator">
                                            <option>Published</option>
                                            <option>Title</option>
                                        </select>
                                    </div>
                                </div>
                                {/*Published Date***/}
                                <div className="mrg-left-45 mrg-top-20 fnt-poppins">
                                    <div>
                                        <label>Published Date</label>
                                    </div>
                                    <div className="mrg-top-10">
                                        <input type="date" className="inputs-of-admistrator" />
                                    </div>
                                </div>
                                {/*Page description**/}
                                <div className="mrg-left-45 mrg-top-20 fnt-poppins ck-Editor">
                                    <div>
                                        <label>Page Description</label>
                                    </div>
                                    <div className="mrg-top-20">
                                        <CKEditor
                                            content={content ? content : ""}
                                            events={{
                                                "change": (event) => setContent(event.editor.getData())
                                            }}
                                            className="form-control" placeholder="Enter Description" rows="5" />
                                    </div>
                                </div>
                                {/*buttons*/}
                                <div className="btns-of-add mrg-left-45 mrg-top-30 fnt-poppins">
                                    <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                    <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Save</button>
                                </div>
                            </div>
                            {/* side section start here */}
                            <div className="container side-section-of-form mrg-left-20 has-margin-right-20">
                                <div className="mrg-top-50  fnt-poppins ">
                                    <h1 className=" mrg-left-40 fnt-weight-600">Header Background Image</h1>
                                </div>
                                <div className="mrg-left-40 mrg-top-20">
                                    <img className="Side-section-form-upload-image " src={Image1} />
                                </div>
                                <div className="Form-section2-uploading-btn">
                                    <button className="Save-btn-of-form  fnt-poppins mrg-left-40 has-padding-10 mrg-top-20 fnt-poppins">Select Background</button>
                                </div>
                                <div className="mrg-top-60 mrg-left-40">
                                    <label className="fnt-poppins fnt-weight-600">Select Specialities</label>
                                </div>
                                <div className="mrg-top-20 mrg-left-40 ">
                                    <select className="inputs-of-side-for-form fnt-poppins">
                                        <option>Physical Therapy</option>
                                        <option>Physical Medicine</option>
                                        <option>Knee Specialist</option>

                                    </select>
                                </div>

                            </div>
                            {/* side section end here */}
                        </div>




                    </div>
                </div>
            </form>
            <Style />
        </div>













    );
}
export default withRouter(Practicefile);