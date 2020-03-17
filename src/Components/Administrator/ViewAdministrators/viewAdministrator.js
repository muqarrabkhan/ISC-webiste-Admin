import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks'
import { ADMIN } from '../../apollo/Mutations/adminMutation'
import Loader from '../../commonComponents/Loader/loader'
import ReactPaginate from "react-paginate";
import { DELETE_ADMIN } from '../../apollo/Mutations/deleteAdmin'

const ViewAdministrator = (props) => {
    let { history } = props;

    const [users, setUsers] = useState([]);
    const [allPages] = useMutation(ADMIN);
    const [totalPages, setTotalPage] = useState(1);
    const [totalCustomers, setTotalCustomers] = useState([]);
    const [page, setPage] = useState(1);
    const [deleteAdmin] = useMutation(DELETE_ADMIN);

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        allPages({
            variables: {
                page: value.selected + 1,
                limit: 10
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
            setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
            setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
        })
    }

    useEffect(() => {
        allPages({
            variables: {
                page: 1,
                limit: 10
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
            setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
            setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
        })
    }, [])

    const deleteAdminData = (id) => {
        deleteAdmin({
            variables: {
                Id: parseInt(id),
            }
        }).then(res => {
            if (window.confirm("Are you sure you want to delete Data"));
            // window.location.replace("/admin")
        })
    }



    return (
        <>
            {users && users.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Administrator</h6>
                        <button onClick={() => history.push("/add-administrator")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Admins Record</h6>
                            <select className="select-option-of-adminstrator fnt-poppins">
                                <option>Select Admin Status</option>
                                <option>Active</option>
                                <option>In-Active</option>
                            </select>
                            <input className="input-for-search fnt-poppins" placeholder="Search" />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>User Type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {users && users.length !== 0 && users.map((single, index) =>
                                        <tr key={index} className="table-row-data-of-body fnt-poppins">
                                            <td>{single.Name ? single.Name : "-"}</td>
                                            <td>{single.Email ? single.Email : "-"}</td>
                                            <td>{single.Status ? single.Status : "-"}</td>
                                            {single && single.RoleId ?
                                                <div>
                                                    <td>{single && single.RoleId ==1 ? "Super Admin" : ""}</td>
                                                    <td>{single && single.RoleId ==2?"Moderator": ""}</td>
                                                    <td>{single && single.RoleId ==3 ? "Creater" : ""}</td>
                                                </div>
                                                : ""}
                                            <td>
                                                <div style={{ display: "flex" }}>
                                                    <img onClick={() => history.push("/edit-administrator/" + single.Id)} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                    <img className="has-cursor-pointer delete-image-table" alt="delete-button" onClick={() => deleteAdminData(single.Id)} src={Deletelogo} />
                                                    <span onClick={() => history.push("/admin-information/" + single.Id)} className="cursor-pointer view-btn-of-table hgt-setng">View Details</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    <tr className="table-footer">
                                        <td colspan={4}>Total</td>
                                        <td>{totalCustomers}</td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="has-margin-top-40">
                                <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                                    nextLabel={<span className="fa fa-chevron-right "> > </span>}
                                    breakLabel={". . ."}
                                    breakClassName={"break-me"}
                                    pageCount={totalPages}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={pageHandler}
                                    containerClassName={"digit-icons main"}
                                    subContainerClassName={"container column"}
                                    activeClassName={"p-one"} />
                            </div>
                        </div>
                    </div>
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(ViewAdministrator);