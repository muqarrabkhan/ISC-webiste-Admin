import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import {withRouter} from 'react-router-dom'

const ViewCategories= (props) => {
    let{history}=props;
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Category</h6>
                   <button onClick={()=>history.push("/add-category")}className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Category Records</h6>
                        <input className="input-for-search fnt-poppins" placeholder="Search" />
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <div>
                            <table className="viewAnnouncement-Table">
                                <thead className="viewAnnouncement-Table-header fnt-poppins">
                                    <tr >
                                        <th className="white-color">Name</th>
                                        <th className="white-color">Status</th>
                                        <th className="white-color">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="fnt-poppins background-white">
                                        <td>Alfreds Futterkiste</td>
                                        <td>Active</td>
                                        <td>
                                            <div className="appling-flex-btns">
                                                <img onClick={()=>history.push("/edit-category")} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                <img className="delete-image-table" alt="delete-button" src={Deletelogo} />
                                                <span onClick={()=>history.push("/category-details")} className="cursor-pointer view-btn-of-table ">View Details</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Style />
            </div>
        </>
    );
}
export default withRouter(ViewCategories);