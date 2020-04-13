import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { SINGLE_INTEREST } from '../../apollo/Quries/SingleUserInterest'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { UPDATE_USER_INTEREST } from '../../apollo/Mutations/updateUserInterest'
import Loader from '../../commonComponents/Loader/loader'

const EditUserIntrest = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_INTEREST(id))

    const [editData] = useMutation(UPDATE_USER_INTEREST);
    const [renderData, setRenderData] = useState("");
    const [buttonText, setButtonText] = useState("Update")

    useEffect(() => {
        setRenderData(data && data.singleInterestById ? { ...data.singleInterestById } : "");
    }, [data, data && data.singleInterestById])

    const onSubmit = (event) => {
        event.preventDefault();
        setButtonText("Updating...")
        editData({
            variables: {
                id: parseInt(id),
                name: renderData.name
            }
        }).then(res => {
            setButtonText("Updated")
        }).catch(error => {
            setButtonText("Update")
        })
    }

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Update Adson</h6>
                        <button onClick={() => history.push("/view-user-interest")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form
                        onSubmit={event => onSubmit(event)}
                    >
                        <div className="Table-of-administrator">
                            <div className="container-fluid background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="container  Form-section-startup Form-sections-startups-responsive">
                                    <div className="Form-main-div-of-sectons flex-row flex-column-responsive">
                                        <div className="Form-section1-main-div-of-inputs  ">
                                            {/* Status**/}
                                            <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                                <div className="form-group">
                                                    <div>
                                                        <label className="mrg-top-20 fnt-poppins">Name</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins"
                                                            value={renderData && renderData.name}
                                                            onChange={event => {
                                                                let duplicateData = { ...renderData }
                                                                duplicateData.name = event.target.value
                                                                setRenderData(duplicateData)
                                                            }
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
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
export default withRouter(EditUserIntrest);