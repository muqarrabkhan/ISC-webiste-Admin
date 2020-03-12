import React, { useState } from 'react'
import CKEditor from "react-ckeditor-component";
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { CREATE_WEB_PAGE } from '../../apollo/Mutations/createWebPageMutation'
import publicIp from 'public-ip'
const AddPage = (props) => {
    let { history } = props;

    const [content, setContent] = useState("");
    const [metaKeywords, setMetaKeyWord] = useState("");
    const [pageTitle, setPageTitle] = useState("");
    const [pageHeading, setPageHeading] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [btnText, setBtnText] = useState("Save");
    const [pageContent, setPageContent] = useState("");
    const [ipAddress, setIpAddress] = useState();
    const [data] = useMutation(CREATE_WEB_PAGE);
    const publicIp = require('public-ip');
    (async () => {
        setIpAddress(await publicIp.v4());
    })();
    const addPage = (event) => {
        event.preventDefault();

        // if (!metaKeywords) {
        //     setBtnText("UPLOADING");
        //     return 0;
        // }
        // if (!metaDescription) {
        //     setBtnText("UPLOADING");
        //     return 0;
        // }
        // if (!pageTitle) {
        //     setBtnText("UPLOADING");
        //     return 0;
        // }
        // if (!pageHeading) {
        //     setBtnText("UPLOADING");
        //     return 0;

        // } if (!pageContent) {
        //     setBtnText("UPLOADING");
        //     return 0;
        // }
        // else {
        console.log(
            data({
                variables: {
                    MetaKeywords: metaKeywords,
                    pageTitle: pageTitle,
                    pageHeading: pageHeading,
                    MetaDescription: metaDescription,
                    pageContent: pageContent,
                    createdBy: 1,
                    createdIp: parseInt(ipAddress),
                }
            })
        )
        data({
            variables: {
                MetaKeywords: metaKeywords,
                pageTitle: pageTitle,
                pageHeading: pageHeading,
                MetaDescription: metaDescription,
                pageContent: pageContent,
                createdBy: 1,
                createdIp: parseInt(ipAddress),
            }
        }).then(res => {
            console.log(res)
            history.push("/pages")
        })
    }
    // }



    return (

        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Page</h6>
                <button onClick={() => history.push("/pages")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form onSubmit={(event) => addPage(event)}>
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
                                    <input className="inputs-of-admistrator" required value={pageTitle}
                                        onChange={event => setPageTitle(event.target.value)} />
                                </div>
                            </div>
                            {/* Meta Description**/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Meta Description*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <textarea className="textarea-of-admistrator" required value={metaDescription}
                                        onChange={event => setMetaDescription(event.target.value)} />
                                </div>
                            </div>
                            {/*Meta Keywords**/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Meta Keywords*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" required value={metaKeywords}
                                        onChange={event => setMetaKeyWord(event.target.value)} />
                                </div>
                            </div>
                            {/*Page Heading***/}
                            <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                <div>
                                    <label>Page Heading*</label>
                                </div>
                                <div className="mrg-top-10">
                                    <input className="inputs-of-admistrator" required value={pageHeading}
                                        onChange={event => setPageHeading(event.target.value)} />
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
                                        className="form-control" placeholder="Enter Description" rows="5" required value={pageContent}
                                        onChange={event => setPageContent(event.target.value)} />
                                </div>
                            </div>
                            {/*buttons*/}
                            <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">{btnText}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(AddPage);