import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import Loader from '../../commonComponents/Loader/loader'
import { USER_INTEREST } from '../../apollo/Quries/userInterestType'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { DELETE_USER_INTEREST } from '../../apollo/Mutations/deleteUserInterest'

const ViewAdson = (props) => {
    let { history } = props;
    const { loading, data } = useQuery(USER_INTEREST)
    const [deleteUserInterest] = useMutation(DELETE_USER_INTEREST);

    const deleteAdsons = (id) => {
        deleteUserInterest({
            variables: {
                id: parseInt(id),
            }
        }).then(res => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/view-user-interest")
        })
    }

    return (
        <>{!loading ?
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">User Interest Type</h6>
                    <button onClick={() => history.push("/add-user-interest")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All User Interest Type Record</h6>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                {data && data.length !== 0 && data.getAllIntersts.map((single, index) =>
                                    <tr key={index} className="table-row-data-of-body fnt-poppins">
                                        <td>{single.name ? single.name : "-"}</td>
                                        <td>{single.Slug ? single.Slug : "-"}</td>
                                        <td>
                                            <div className="appling-flex-btns">
                                                <img onClick={() => history.push("/edit-user-interest/" + single.id)} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                <img className="cursor-pointer delete-image-table" alt="delete-button" src={Deletelogo}
                                                    onClick={() => deleteAdsons(single.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Style />
            </div>
            : <Loader />}
        </>
    );
}
export default withRouter(ViewAdson)