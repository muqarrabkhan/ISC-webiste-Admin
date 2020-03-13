import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { SINGLE_CATEGORY } from '../../apollo/Quries/announcementQurie'
import { DELETE_ANNOUNCEMENT } from '../../apollo/Mutations/deleteAnnouncement'
import Loader from '../../Loading/loader'
const ViewAnnouncement = (props) => {

    let { history } = props;
    const { loading, data } = useQuery(SINGLE_CATEGORY);
    const [deleteannouncement] = useMutation(DELETE_ANNOUNCEMENT);
    const deleteAnnouncements = (id) => {
        deleteannouncement({
            variables: {
                id: parseInt(id),
            }
        }).then(response => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/announcement")
        })
    }
    return (

        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Announcement</h6>
                        <button onClick={() => history.push("/add-announcement")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Announcement Records</h6>
                            <input className="input-for-search fnt-poppins" placeholder="Search" />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <div>
                                <table className="viewAnnouncement-Table">
                                    <thead className="viewAnnouncement-Table-header fnt-poppins">
                                        <tr >
                                            <th className="white-color">Title</th>
                                            <th className="white-color">Flag</th>
                                            <th className="white-color">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.length !== 0 && data.getannouncements.map((single, index) =>
                                            <tr key={index} className="fnt-poppins background-white">
                                                <td>{single.title}</td>
                                                <td>
                                                    <div className="switch-btn-of-tables">
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                {/* buttons    */}
                                                <td>
                                                    <div className="appling-flex-btns">
                                                        <img onClick={() => history.push("/edit-announcement")} className="has-cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                        <img className="delete-image-table has-cursor-pointer" alt="delete-button" onClick={() => deleteAnnouncements(single.id)} src={Deletelogo} />
                                                        <span onClick={() => history.push("/announcement-details/" + single.id)} className="cursor-pointer view-btn-of-table">View Details</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Style />
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(ViewAnnouncement);