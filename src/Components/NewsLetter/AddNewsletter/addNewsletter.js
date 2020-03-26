import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import cancelImg from '../../../assets/Images/cancel.png'
import { CREATE_NEWSLETTER } from '../../apollo/Mutations/createNewsletter'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { NEWSLETTERS_TEMPLATES } from '../../apollo/Mutations/getAllNewsletterTemplates'
import { USER_INTEREST } from '../../apollo/Quries/userInterestType'

const AddNewsletter = (props) => {
    let { history } = props;

    const [addNewsletter] = useMutation(CREATE_NEWSLETTER);
    const [getTemplates] = useMutation(NEWSLETTERS_TEMPLATES);
    const { data } = useQuery(USER_INTEREST);
    const [templates, setTemplates] = useState("");
    const [name, setName] = useState("");
    const [selectTemplate, setSelecTemplate] = useState("")
    const [dateTime, setDateTime] = useState("");
    const [status, setStatus] = useState("");
    const [group, setGroup] = useState("");
    const [hideShow, setHideShow] = useState(false);
    const [hideShowDate, setHideShowDate] = useState(false);
    const [interestData, setInterestData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);


    useEffect(() => {
        getTemplates().then(res => {
            setTemplates(res && res.data && res.data.getNewsLetterTemplates);
        })
    }, [])

    useEffect(() => {
        setInterestData(data && data.getAllIntersts)
    }, [data])

    const selectData = (event) => {
        if (event === "selectAll") {
            let duplicateData = [...interestData]
            setSelectedData([...duplicateData])
            setInterestData([])
        }
        else {
            let duplicateData = [...interestData]
            let obj = duplicateData.find(single => single.id == event)
            let duplicateSelected = [...selectedData]
            duplicateSelected.push(obj)
            duplicateData = duplicateData.filter(single => single.id != event)
            setInterestData([...duplicateData]);
            setSelectedData([...duplicateSelected])
        }
    }

    const remove = (event) => {
        let duplicateData = [...selectedData]
        let obj = duplicateData.find(single => single.id == event)
        let duplicateSelected = [...interestData]
        duplicateSelected.push(obj)
        duplicateData = duplicateData.filter(single => single.id != event)
        setSelectedData([...duplicateData])
        setInterestData([...duplicateSelected]);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        let currentDate = new Date();
        currentDate = currentDate.toISOString();
        let interestIds=[]
        if(selectedData){
            selectedData.forEach(single=>{
                interestIds.push(single.id)
            })
        }
        addNewsletter({
            variables: {
                name: name,
                support_mailsettings_id: parseInt(selectTemplate),
                datetime: dateTime,
                status: status,
                group: group,
                cron_status: "pending",
                date_created: currentDate,
                InterestedIds:[...interestIds]
            }
        }).then(res => {
            history.push("/newsletter")
        })
    }

    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add NewsLetter</h6>
                <button onClick={() => history.push("/newsletter")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form onSubmit={event => onSubmit(event)}>
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
                                                <select className="mrg-top-10 fnt-poppins"
                                                    onChange={event => setSelecTemplate(event.target.value)}
                                                >
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
                                            setHideShowDate(true)
                                            setStatus(event.target.value)
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
                                            setHideShowDate(false)
                                            setStatus(event.target.value)
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
                                            <input className="mrg-top-10 fnt-poppins" type="date"
                                                value={dateTime}
                                                onChange={event => setDateTime(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* radioButtons second for Select Group**/}
                            <div className="radios-of-group mrg-top-20 mrg-left-50">
                                <div className="radio-of-group">
                                    <label>Select Group*</label>
                                    <input className="mrg-top-40" type="radio" id="radio3" name="radio-of-groups"
                                        value="campaignusers"
                                        onChange={event => {
                                            setHideShow(true)
                                            setGroup(event.target.value)
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
                                        value="campaigncreators"
                                        onChange={event => {
                                            setHideShow(false)
                                            setGroup(event.target.value)
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
                                            <select className="mrg-top-10 fnt-poppins" type="name"
                                                onChange={event => selectData(event.target.value)}
                                            >
                                                <option>select User Interest</option>
                                                <option value="selectAll">Select All</option>
                                                {interestData && interestData.map(single =>
                                                    <option value={single.id}>{single.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div>
                                            {selectedData && selectedData.length !== 0 && selectedData.map(single =>
                                                <ul className=" is-flex back-color back-color">
                                                    <li className="has-padding-left-10" value={single.id}>{single.name}</li>
                                                    <li className="has-padding-right-10"><img src={cancelImg} onClick={() => remove(single.id)}
                                                        className="has-cursor-pointer has-margin-left-15 cancel-img" /></li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* buttons */}
                            <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Save</button>
                                {/* <button className="Save-btn-of0-form mrg-left-20 fnt-poppins">Export</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(AddNewsletter);
