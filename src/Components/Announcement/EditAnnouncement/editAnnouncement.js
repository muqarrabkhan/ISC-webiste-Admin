import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { SINGLE_ANNOUNCEMENT } from '../../apollo/Quries/singleAnnouncement'
import Loader from '../../commonComponents/Loader/loader'
import { UPDATE_ANNOUNCEMENT } from '../../apollo/Mutations/updateAnnouncement'

const EditAnnouncement = (props) => {

    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_ANNOUNCEMENT(id));

    const [editAnnouncement] = useMutation(UPDATE_ANNOUNCEMENT);
    const [renderData, setRenderData] = useState("");

    let currentDate = new Date();
    currentDate = currentDate.toISOString();

    const editData = (event) => {
        event.preventDefault();
        editAnnouncement({
            variables: {
                id: parseInt(id),
                title: renderData.title,
                detail: renderData.detail,
                link: renderData.link,
                date_updated: currentDate
            }
        }).then(res => {
            window.location.replace("/announcement");
        })
    }

    useEffect(() => {
        setRenderData(data && data.singleannouncements);
    }, [data])


    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Edit Announcement</h6>
                        <button onClick={() => history.push("/announcement")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={event => editData(event)}>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    {/* Announcement Title**/}
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Announcement Title*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.title}
                                                onChange={event => {
                                                    let duplicateRenderData = { ...renderData }
                                                    duplicateRenderData.title = event.target.value;
                                                    setRenderData({ ...duplicateRenderData })
                                                }} />
                                        </div>
                                    </div>
                                    {/* Announcement Detail*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Announcement Detail*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <textarea className="textarea-of-admistrator"
                                                value={renderData && renderData.detail}
                                                onChange={event => {
                                                    let duplicateRenderData = { ...renderData }
                                                    duplicateRenderData.detail = event.target.value;
                                                    setRenderData({ ...duplicateRenderData })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Announcement Link**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Announcement Link*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData && renderData.link}
                                                onChange={event => {
                                                    let duplicateRenderData = { ...renderData }
                                                    duplicateRenderData.link = event.target.value;
                                                    setRenderData({ ...duplicateRenderData })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* buttons */}
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">Update</button>
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
export default withRouter(EditAnnouncement);