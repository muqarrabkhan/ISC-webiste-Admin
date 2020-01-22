import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'

export default () => {
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">

                {/* header */}

                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Category</h6>
                    <button className="header-btn-of-table fnt-poppins">Create</button>
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
                                <tr className="fnt-poppins background-white">
                                    <td>Alfreds Futterkiste</td>
                                    <td>Active</td>
                                    <td>
                                        <div className="appling-flex-btns">
                                            <img className="edit-image-table" src={Editlogo} />
                                            <img className="delete-image-table" src={Deletelogo} />
                                            <span className="view-btn-of-table ">View Details</span>
                                        </div>
                                    </td>
                                </tr>



                            </table>

                        </div>



                    </div>


                </div>

                <Style />
            </div>
        </>
    );
}