import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { SINGLE_PAGE } from '../../apollo/Quries/singlePage'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { UPDATE_PAGE } from '../../apollo/Mutations/updatePage'
import Loader from '../../commonComponents/Loader/loader'
import JoditEditor from "jodit-react";
import { getParams } from '../../functions/index'

const EditPage = (props) => {
    let { history, match, location } = props;
    let path = getParams(location.search);
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_PAGE(id));
    const [editData] = useMutation(UPDATE_PAGE);
    const [renderData, setRenderData] = useState("");
    const [buttonText, setButtonText] = useState("Update");
    const [joditvalue,setJoditValue]=useState("");

    const updateUser = (event) => {
        event.preventDefault();
        setButtonText("Updating...")
        editData({
            variables: {
                id: parseInt(id),
                MetaKeywords: renderData.MetaKeywords,
                pageTitle: renderData.pageTitle,
                MetaDescription: renderData.MetaDescription,
                pageHeading: renderData.pageHeading,
                pageContent: renderData.pageContent
            }
        }).then(res => {
            setButtonText("Updated")
        }).catch(error => {
            setButtonText("Update")
        })
    }

    useEffect(() => {
        setRenderData(data && data.singlewebpages ? { ...data.singlewebpages } : {});
        setJoditValue(data && data.singlewebpages && data.singlewebpages.pageContent);
    }, [data])

    const onChangeEditor = (value) => {
        let dupilcateName = { ...renderData }
        dupilcateName.pageContent = value
        setRenderData({ ...dupilcateName })
    }

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Edit Page</h6>
                        <button onClick={() => history.goBack("/pages?page=" + path)} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={event => updateUser(event)}>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup ">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    {/* Meta Title**/}
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Meta Title*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.pageTitle}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.pageTitle = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Meta Description**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Meta Description*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <textarea className="textarea-of-admistrator"
                                                value={renderData && renderData.MetaDescription}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.MetaDescription = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Meta Keywords**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Meta Keywords*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.MetaKeywords}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.MetaKeywords = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Slug***/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Slug</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator" disabled
                                                value={renderData && renderData.slug}
                                            />
                                        </div>
                                    </div>
                                    {/*Page Heading***/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Page Heading*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.pageHeading}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.pageHeading = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Page Content**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins ck-Editor">
                                        <div>
                                            <label>Page Content</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <JoditEditor className="form-control" placeholder="Enter Description" rows="5"
                                                value={joditvalue ? joditvalue : ""}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onChange={onChangeEditor}
                                            />
                                        </div>
                                    </div>
                                    {/* buttons */}
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <span className="cancel-btn-of-form fnt-poppins"
                                            onClick={() => history.goBack("/pages?page=" + path)}
                                        >Cancel</span>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">{buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(EditPage);