import React, { useState, useEffect } from 'react'
import Image from '../../../assets/Images/admin.png'
import { withRouter } from 'react-router-dom'
import { apiPath } from '../../../config'
import axios, { CancelToken } from "axios";
import { CREATE_NEWSLETTER } from '../../apollo/Mutations/createNewsletter'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { NEWSLETTERS_TEMPLATES } from '../../apollo/Mutations/getAllNewsletterTemplates'
import { USER_INTEREST } from '../../apollo/Quries/userInterestType'

const AddNewsletter = (props) => {
    let { history } = props;

    const [addNewsletter] = useMutation(CREATE_NEWSLETTER)
    const [getTemplates] = useMutation(NEWSLETTERS_TEMPLATES)
    const [templates, setTemplates] = useState("");
    const [name, setName] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [status, setStatus] = useState("");
    const [group, setGroup] = useState("");
    const { loading, data } = useQuery(USER_INTEREST)
    const [hideShow, setHideShow] = useState(false)
    const [hideShowDate, setHideShowDate] = useState(false)

    useEffect(() => {
        getTemplates().then(res => {
            setTemplates(res && res.data && res.data.getNewsLetterTemplates)
        })

    }, [])



    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add NewsLetter</h6>
                <button onClick={() => history.push("/newsletter")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form>
                <div className="Table-of-administrator">
                    <div className="container-fluid background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="container  Form-section-startup  Form-sections-startups-responsive ">
                            <div className="Form-main-div-of-sectons flex-row flex-column-responsive">
                                <div className="Form-section1-main-div-of-inputs  ">
                                    {/* NewsLetter Name***/}
                                    <div className="Form-Inputs-Fields  mrg-top-30 mrg-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="mrg-top-20 fnt-poppins">NewsLetter Name*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="name"
                                                    value={name}
                                                    onChange={event => setName(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Form-section2-main-div-of-inputs mrg-top-10 ">
                                    {/*Select Tempelate* */}
                                    <div className="Form-Inputs-Fields mrg-top-20 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Select Tempelate*</label>
                                            </div>
                                            <div>
                                                <select className="mrg-top-10 fnt-poppins">
                                                    <option>Select Template</option>
                                                    {templates && templates.length !== 0 && templates.map(single =>
                                                        <option value={single.Id}>{single.Title}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* radioButtons */}
                            <div className="radios mrg-top-20 mrg-left-50">
                                <div className="radio">
                                    <label>Select</label>
                                    <input className="mrg-top-40" type="radio" id="radio1" name="radio"
                                        value="Schedule"
                                        onChange={event => {
                                            if (hideShow === false) {
                                                setHideShowDate(true)
                                            }
                                            else {
                                                setHideShowDate(false)
                                            }
                                        }}
                                    />
                                    <label className="label-of-radio" for="radio1">
                                        <div className="checker"></div>
                                        Schedule Newsletter
                                </label>
                                </div>
                            </div>
                            <div className="radios mrg-left-50">
                                <div className="radio">
                                    <input type="radio" id="radio2" name="radio"
                                        value="Draft"
                                        onChange={event => {
                                            if (hideShow === true) {
                                                setHideShowDate(false)
                                            }
                                        }}
                                    />
                                    <label className="label-of-radio" for="radio2">
                                        <div className="checker"></div>
                                        <div>Save As Draft</div>
                                    </label>
                                </div>
                            </div>
                            {/* Set Newsletter Date And Time (MM/DD/YYYY HH:mm:ss)**/}
                            {hideShowDate &&
                                <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 mrg-top-20 fnt-poppins">
                                    <div className="form-group fnt-poppins">
                                        <div>
                                            <label>Set Newsletter Date And Time (MM/DD/YYYY HH:mm:ss)</label>
                                        </div>
                                        <div>
                                            <input className="mrg-top-10 fnt-poppins" type="date" />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* radioButtons second for Select Group**/}
                            <div className="radios-of-group mrg-top-20 mrg-left-50">
                                <div className="radio-of-group">
                                    <label>Select Group*</label>
                                    <input className="mrg-top-40" type="radio" id="radio3" name="radio-of-groups"
                                        onChange={event => {
                                            if (hideShow === false) {
                                                setHideShow(true)
                                            }
                                            else {
                                                setHideShow(false)
                                            }
                                        }}
                                    />
                                    <label className="label-of-radio" for="radio3">
                                        <div className="checker"></div>
                                        Campaing Users
                                </label>
                                </div>
                            </div>
                            <div className="radios-of-group mrg-left-50">
                                <div className="radio-of-group">
                                    <input type="radio" id="radio4" name="radio-of-groups"
                                        onChange={event => {
                                            if (hideShow === true) {
                                                setHideShow(false)
                                            }
                                        }}
                                    />
                                    <label className="label-of-radio" for="radio4">
                                        <div className="checker"></div>
                                        <div>Campaing Creators</div>
                                    </label>
                                </div>
                            </div>
                            {/* Select Campaigns***/}
                            {hideShow &&
                                <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                    <div className="form-group">
                                        <div>
                                            <label className="mrg-top-20 fnt-poppins">Select User Interest</label>
                                        </div>
                                        <div>
                                            <select className="mrg-top-10 fnt-poppins" type="name">
                                                <option>select User Interest</option>
                                                {data && data.length !== 0 && data.getAllIntersts.map(single =>
                                                    <option value={single.id}>{single.name}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* Campaign URL**/}
                            {/* <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                <div className="form-group">
                                    <div>
                                        <label className="mrg-top-20 fnt-poppins">Campaign URL*</label>
                                    </div>
                                    <div>
                                        <input className="mrg-top-10 fnt-poppins" type="name" placeholder="Enter Name" />
                                    </div>
                                </div>
                            </div> */}
                            {/* buttons */}
                            <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Save</button>
                                {/* <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Export</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(AddNewsletter);
