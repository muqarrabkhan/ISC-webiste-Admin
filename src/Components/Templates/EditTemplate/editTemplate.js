import React, { useState, useEffect } from 'react'
import CKEditor from "react-ckeditor-component";
import Image from '../../../assets/Images/admin.png'
import { withRouter } from 'react-router-dom'
import { SINGLE_TEMPLATE } from '../../apollo/Quries/singleTemplate'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { UPDATE_TEMPLATE } from '../../apollo/Mutations/updateTemplate'
import Loader from '../../commonComponents/Loader/loader'

const EditTemplate = (props) => {
    let { history, match } = props;

    const [content, setContent] = useState("");
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_TEMPLATE(id));
    const [editData] = useMutation(UPDATE_TEMPLATE);
    const [renderData, setRenderData] = useState("");

    const updateUser = (event) => {
        event.preventDefault();
        editData({
            variables: {
                Id: parseInt(id),
                Title: renderData.Title,
                Subject: renderData.Subject,
                Email: renderData.Email,
                FromText: renderData.FromText,
                Content: content,
                Status: renderData.Status,
                Type: renderData.Type,
                Category: renderData.Category
            }
        }).then(res => {
            window.location.replace("/tamplates");
        })
    }

    useEffect(() => {
        setRenderData(data && data.singletemplate ? { ...data.singletemplate } : {});
        setContent(data && data.singletemplate && data.singletemplate.Content ? data.singletemplate.Content : "")
    }, [data, data && data.singletemplate])

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Edit Templates</h6>
                        <button onClick={() => history.push("/tamplates")} className=" cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={(event) => updateUser(event)}>
                        <div className="Table-of-administrator">
                            <div className="container-fluid background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="container  Form-section-startup Form-sections-startups-responsive">
                                    <div className="Form-main-div-of-sectons flex-row flex-column-responsive">
                                        <div className="Form-section1-main-div-of-inputs  ">
                                            {/* Title**/}
                                            <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                                <div className="form-group">
                                                    <div>
                                                        <label className="mrg-top-20 fnt-poppins">Title*</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins" type="name" placeholder="Enter Name"
                                                            value={renderData && renderData.Title}
                                                            onChange={event => {
                                                                let dupilcateName = { ...renderData }
                                                                dupilcateName.Title = event.target.value
                                                                setRenderData({ ...dupilcateName })
                                                            }}
                                                        />
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
                                                        <input className="mrg-top-10" typr="email" placeholder="Enter Short Description"
                                                            value={renderData && renderData.Email}
                                                            onChange={event => {
                                                                let dupilcateName = { ...renderData }
                                                                dupilcateName.Email = event.target.value
                                                                setRenderData({ ...dupilcateName })
                                                            }}
                                                        />
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
                                                        <input className="mrg-top-10" type="slug" placeholder="Enter Slug"
                                                            value={renderData && renderData.Subject}
                                                            onChange={event => {
                                                                let dupilcateName = { ...renderData }
                                                                dupilcateName.Subject = event.target.value
                                                                setRenderData({ ...dupilcateName })
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Password* */}
                                            <div className="is-flex Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label>From Name*</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10" type="keyword"
                                                            value={renderData && renderData.FromText}
                                                            onChange={event => {
                                                                let dupilcateName = { ...renderData }
                                                                dupilcateName.FromText = event.target.value
                                                                setRenderData({ ...dupilcateName })
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* From Name* */}

                                    {/* radioButtons */}
                                    <div className="form-group has-margin-left-50">
                                        <div className="is-flex Form-Inputs-Fields mrg-top-10 fnt-poppins">
                                            <div className="form-group">
                                                <div>
                                                    <label>Select Category</label>
                                                </div>
                                                <div>
                                                    <select className="mrg-top-10 fnt-poppins" type="keyword"
                                                        value={renderData && renderData.Category}
                                                        onChange={event => {
                                                            let dupilcateName = { ...renderData }
                                                            dupilcateName.Category = event.target.value
                                                            setRenderData({ ...dupilcateName })
                                                        }}
                                                    >
                                                        <option>Select Category</option>
                                                        <option value="signUp">SignUp Confirmation</option>
                                                        <option value="welcome">Welcome</option >
                                                        <option value="CreateCampaign">Create Campaign</option >
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="radios mrg-top-20 mrg-left-50">
                                        <div className="radio">
                                            <label>Select Type</label>
                                            <input className="mrg-top-40" type="radio" id="radio1" name="radio"
                                                checked={renderData && renderData.Type == "Website"}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }

                                                    dupilcateName.Type = "Website"
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                            <label className="label-of-radio" for="radio1">
                                                <div className="checker"></div>
                                                Websiter
                                </label>
                                        </div>
                                    </div>
                                    <div className="radios mrg-left-50">
                                        <div className="radio">
                                            <input type="radio" id="radio2" name="radio"
                                                checked={renderData && renderData.Type == "NewsLetter"}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.Type = "NewsLetter"
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
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
                                            <input className="mrg-top-40" type="radio" id="radio3" name="radio-of-groups"
                                                checked={renderData && renderData.Status == "Enable"}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.Status = "Enable"
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                            <label className="label-of-radio" for="radio3">
                                                <div className="checker"></div>
                                                Enable
                                            </label>
                                        </div>
                                    </div>
                                    <div className="radios-of-group mrg-left-50">
                                        <div className="radio-of-group">
                                            <input type="radio" id="radio4" name="radio-of-groups"
                                                checked={renderData && renderData.Status == "Delete"}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.Status = "Delete"
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
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
                                                <input disabled className="redonly-input mrg-top-10  fnt-poppins"
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
                                                        "change": (event) => {
                                                            setContent(event.editor.getData())
                                                        }
                                                    }}
                                                    className="form-control" placeholder="Enter Description" rows="5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">Save</button>
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
export default withRouter(EditTemplate);