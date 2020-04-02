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
    const [adminStatus, setAdminStatus] = useState("")
    const [search, setSearch] = useState([]);

    const searchHandler = (value) => {
        let resultData = users ? users.filter(sin => sin.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1) : []
        setSearch(resultData)
    }

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        allPages({
            variables: {
                page: value.selected + 1,
                limit: 10,
                Status: adminStatus
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
            setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
            setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
            setSearch(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
        })
    }

    useEffect(() => {
        allPages({
            variables: {
                page: 1,
                limit: 10,
                Status: adminStatus
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
            setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
            setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
            setSearch(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
        })
    }, [])

    const deleteAdminData = (id) => {
        deleteAdmin({
            variables: {
                Id: parseInt(id),
            }
        }).then(res => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/administrator")
        })
    }

    const typeHandler = (value) => {
        switch (value) {
            case "": {
                setAdminStatus(value)
                allPages({
                    variables: {
                        page: page,
                        limit: 10,
                        Status: ""
                    }
                }
                ).then(response => {
                    setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
                    setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
                    setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
                    setSearch(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
                })
                return;
            }
            case "Enable": {
                setAdminStatus(value)
                allPages({
                    variables: {
                        page: page,
                        limit: 10,
                        Status: "Enable"
                    }
                }
                ).then(response => {
                    setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
                    setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
                    setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
                    setSearch(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
                })
                return;
            }
            case "Delete": {
                setAdminStatus(value)
                allPages({
                    variables: {
                        page: page,
                        limit: 10,
                        Status: "Delete"
                    }
                }
                ).then(response => {
                    setUsers(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
                    setTotalPage(response && response.data.adminspagination ? response.data.adminspagination.totalPages : [1]);
                    setTotalCustomers(response && response.data.adminspagination && response.data.adminspagination.totaladmins);
                    setSearch(response && response.data && response.data.adminspagination ? response.data.adminspagination.admins : []);
                })
                return;
            }
        }
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
                            <select className="select-option-of-adminstrator fnt-poppins"
                                onChange={event => typeHandler(event.target.value)}
                            >
                                <option>Select Admin Status</option>
                                <option value="">All</option>
                                <option value="Enable">Active</option>
                                <option value="Delete">In-Active</option>
                            </select>
                            <input className="input-for-search fnt-poppins" placeholder="Search Name"
                                onChange={event => {
                                    searchHandler(event.target.value)
                                }}
                                type="text"
                            />
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
                                    {search && search.length !== 0 && search.map((single, index) =>
                                        <tr key={index} className="table-row-data-of-body fnt-poppins">
                                            <td>{single.Name ? single.Name : "-"}</td>
                                            <td>{single.Email ? single.Email : "-"}</td>
                                            <td>{single.Status ? single.Status : "-"}</td>
                                            {single && single.RoleId ?
                                                <div>
                                                    <td>{single && single.RoleId == 1 ? "Super Admin" : ""}</td>
                                                    <td>{single && single.RoleId == 2 ? "Moderator" : ""}</td>
                                                    <td>{single && single.RoleId == 3 ? "Creater" : ""}</td>
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