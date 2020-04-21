import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { SINGLE_SETTING } from '../../apollo/Quries/singleSetting'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { UPDATE_SETTING } from '../../apollo/Mutations/updateSetting'
import Loader from '../../commonComponents/Loader/loader'
import { getParams } from '../../functions'

const EditSetting = (props) => {
    let { history, match, location } = props;
    let ID = match.params && match.params.id ? match.params.id : "";
    let path = getParams(location.search);
    const { loading, data } = useQuery(SINGLE_SETTING(ID));
    const [editData] = useMutation(UPDATE_SETTING);
    const [renderData, setRenderData] = useState("");
    const [buttonText, setButtonText] = useState("Update")

    const updateUser = (event) => {
        event.preventDefault();
        setButtonText("Updating...")
        editData({
            variables: {
                ID: parseInt(ID),
                fieldName: renderData.fieldName,
                Keytext: renderData.Keytext,
                value: renderData.value,
                setting_type: renderData.setting_type
            }
        }).then(res => {
            setButtonText("Updated")
        }).catch(error => {
            setButtonText("Update")
        })
    }

    useEffect(() => {
        setRenderData(data && data.singlesettings);
    }, [data])

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Update General Setting</h6>
                        <button onClick={() => history.goBack("/setting?page=" + path)} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={event => updateUser(event)}>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    {/*Name**/}
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Name*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.fieldName}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.fieldName = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Key*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Key*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.Keytext}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.Keytext = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Value*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Value*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.value}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.value = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Setting type*/}
                                    <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                        <div>
                                            <label>Setting type*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <select className="inputs-of-admistrator fnt-poppins"
                                                value={renderData && renderData.setting_type}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.setting_type = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            >
                                                <option>Select Setting</option>
                                                <option value="General">General</option>
                                                <option value="Payment">Payment</option>
                                                <option value="Social">Social</option>
                                                <option value="Email">Email</option>
                                                <option value="Apps">Apps</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* buttons */}
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <span className="cancel-btn-of-form fnt-poppins"
                                            onClick={() => history.goBack("/setting?page=" + path)}
                                        >Cancel</span>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">{buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                : <Loader />
            }
        </>
    );
}
export default withRouter(EditSetting);