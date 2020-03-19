import React, { useState } from 'react'
import CKEditor from "react-ckeditor-component";
import Image from '../../../assets/Images/admin.png'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_TEMPLATE } from '../../apollo/Mutations/createTemplate'
import publicIp from 'public-ip'

const AddTemplate = (props) => {
    let { history } = props;
    const [addTemplate] = useMutation(CREATE_TEMPLATE);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fromText, setFromText] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");
    const [ipAddress, setIpAddress] = useState();
    const [category, setCategory] = useState("");

    const publicIp = require('public-ip');
    (async () => {
        setIpAddress(await publicIp.v4());
    })();

    let currentDate = new Date();
    currentDate = currentDate.toISOString();

    const onSubmit = (event) => {
        event.preventDefault();
        addTemplate({
            variables: {
                Title: title,
                Subject: subject,
                Email: email,
                Password: password,
                FromText: fromText,
                Content: content,
                Status: status,
                Type: type,
                CreatedIp: parseInt(ipAddress),
                CreatedBy: 1,
                CreatedDate: currentDate,
                Category: category
            }
        }).then(res => {
            history.push("/tamplates")
        })
    }

    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Templates</h6>
                <button onClick={() => history.push("/tamplates")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form onSubmit={event => onSubmit(event)}>
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
                                                <input className="mrg-top-10 fnt-poppins" type="name" placeholder="Enter Name" value={title} required
                                                    onChange={event => setTitle(event.target.value)}
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
                                                <input className="mrg-top-10" placeholder="Enter Short Description" value={email}
                                                    onChange={event => setEmail(event.target.value)}
                                                    required
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
                                                <input className="mrg-top-10" type="slug" placeholder="Enter Slug" value={subject}
                                                    onChange={event => setSubject(event.target.value)}
                                                    required
                                                />
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
                                                <input className="mrg-top-10" type="password" placeholder="Enter Keyword" value={password}
                                                    onChange={event => setPassword(event.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* From Name* */}
                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins is-flex">
                                <div className="form-group">
                                    <div>
                                        <label>From Name*</label>
                                    </div>
                                    <div>
                                        <input className="mrg-top-10" type="keyword" value={fromText}
                                            onChange={event => setFromText(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group has-margin-left-50">
                                    <div>
                                        <label>Select Category</label>
                                    </div>
                                    <div>
                                        <select className="mrg-top-10 fnt-poppins" type="keyword"
                                            onChange={event => setCategory(event.target.value)}
                                            required
                                        >
                                            <option>Select Category</option>
                                            <option value="signUp">SignUp Confirmation</option>
                                            <option value="welcome">Welcome</option >
                                            <option value="CreateCampaign">Create Campaign</option>
                                            <option value="forgetPassword">Forget Password</option>
                                            <option value="countCampaign">Campaign Count</option>
                                            
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* radioButtons */}
                            <div className="radios mrg-top-20 mrg-left-50">
                                <div className="radio">
                                    <label>Select Type</label>
                                    <input className="mrg-top-40" type="radio" id="radio1" name="radio"
                                        value="Website"
                                        onChange={event => setType(event.target.value)}
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
                                        value="NewsLetter"
                                        onChange={event => setType(event.target.value)}
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
                                        value="Enable"
                                        onChange={event => setStatus(event.target.value)}
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
                                        value="Delete"
                                        onChange={event => setStatus(event.target.value)}
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
                                                "change": (event) => setContent(event.editor.getData())
                                            }}
                                            className="form-control" placeholder="Enter Description" rows="5" />
                                    </div>
                                </div>
                            </div>
                            <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit" >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default withRouter(AddTemplate);