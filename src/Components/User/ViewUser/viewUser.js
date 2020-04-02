import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { ALL_USERS } from '../../apollo/Mutations/usersMutation'
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER } from '../../apollo/Mutations/deleteUser'
import ReactPaginate from "react-paginate";
import Loader from '../../commonComponents/Loader/loader'


const ViewUser = (props) => {
    let { history } = props;
    const [users, setUsers] = useState([]);
    const [allUsers] = useMutation(ALL_USERS);
    const [deleteuser] = useMutation(DELETE_USER);
    const [totalPages, setTotalPage] = useState(1);
    const [totalCustomers, setTotalCustomers] = useState([]);
    const [page, setPage] = useState(1);
    const [userStatus, setUserStatus] = useState("");
    const [search, setSearch] = useState([]);

    const searchHandler = (value) => {
        let resultData = users ? users.filter(sin => sin.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1) : []
        setSearch(resultData)
    }

    const searchEmailHandler = (value) => {
        let resultData = users ? users.filter(sin => sin.Email.toLowerCase().indexOf(value.toLowerCase()) !== -1) : []
        setSearch(resultData)
    }

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        allUsers({
            variables: {
                page: value.selected + 1,
                limit: 10,
                Status: ""
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.users ? response.data.users.users : []);
            setTotalPage(response && response.data.users ? response.data.users.totalPages : [1]);
            setTotalCustomers(response && response.data.users && response.data.users.totalusers);
            setSearch(response && response.data && response.data.users ? response.data.users.users : []);
        })
    }

    useEffect(() => {
        allUsers({
            variables: {
                page: 1,
                limit: 10,
                Status: ""
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.users ? response.data.users.users : []);
            setTotalPage(response && response.data.users ? response.data.users.totalPages : [1]);
            setTotalCustomers(response && response.data.users && response.data.users.totalusers);
            setSearch(response && response.data && response.data.users ? response.data.users.users : []);
        })
    }, [])

    const deleteUsers = (Id) => {
        deleteuser({
            variables: {
                Id: parseInt(Id),
            }
        }).then(response => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/users")
        })
    }

    const typeHandler = (value) => {
        switch (value) {
            case "": {
                setUserStatus(value)
                allUsers({
                    variables: {
                        page: 1,
                        limit: 10,
                        Status: ""
                    }
                }
                ).then(response => {
                    setUsers(response && response.data && response.data.users ? response.data.users.users : []);
                    setTotalPage(response && response.data.users ? response.data.users.totalPages : [1]);
                    setTotalCustomers(response && response.data.users && response.data.users.totalusers);
                    setSearch(response && response.data && response.data.users ? response.data.users.users : []);
                })
                return;
            }
            case "Enable": {
                setUserStatus(value)
                allUsers({
                    variables: {
                        page: 1,
                        limit: 10,
                        Status: "Enable"
                    }
                }
                ).then(response => {
                    setUsers(response && response.data && response.data.users ? response.data.users.users : []);
                    setTotalPage(response && response.data.users ? response.data.users.totalPages : [1]);
                    setTotalCustomers(response && response.data.users && response.data.users.totalusers);
                    setSearch(response && response.data && response.data.users ? response.data.users.users : []);
                })
                return;
            }
            case "Delete": {
                setUserStatus(value)
                allUsers({
                    variables: {
                        page: 1,
                        limit: 10,
                        Status: "Delete"
                    }
                }
                ).then(response => {
                    setUsers(response && response.data && response.data.users ? response.data.users.users : []);
                    setTotalPage(response && response.data.users ? response.data.users.totalPages : [1]);
                    setTotalCustomers(response && response.data.users && response.data.users.totalusers);
                    setSearch(response && response.data && response.data.users ? response.data.users.users : []);
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
                        <h6 className="heading6-of-header fnt-poppins">Users</h6>
                        <button onClick={() => history.push("/add-user")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All User Records</h6>
                            <div className="table-data-row">
                                <select className="select-option-of-adminstrator fnt-poppins select-input-responsive"
                                    onChange={event => typeHandler(event.target.value)}
                                >
                                    <option>Select User Status</option>
                                    <option value="">All</option>
                                    <option value="Enable">Active</option>
                                    <option value="Delete">In-Active</option>
                                </select>
                                <select className="select-option-of-adminstrator fnt-poppins select-option-of-affilated-user">
                                    <option>Select Affiliated Status</option>
                                    <option>Normal</option>
                                    <option>Affiliated User</option>
                                </select>
                            </div>
                            <div className="table-data-row" >
                                <input className="input-for-search fnt-poppins input-for-search-user-1" placeholder="Name"
                                    onChange={event => {
                                        searchHandler(event.target.value)
                                    }}
                                />
                                <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Email"
                                    onChange={event => {
                                        searchEmailHandler(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Status Affiliated</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {search && search.length !== 0 && search.map((single, index) =>
                                        <tr key={index} className="table-row-data-of-body fnt-poppins">
                                            <td>{single.Name ? single.Name : "-"}</td>
                                            <td>{single.Email ? single.Email : "-"}</td>
                                            <td>{single.Status ? single.Status : "-"}</td>
                                            <td className="pad-0">{single.is_affiliated ?
                                                <>
                                                    <td>{single.is_affiliated == "0" ? "Normal User" : ""}</td>
                                                    <td>{single.is_affiliated == "1" ? "Affiliated User" : ""}</td>
                                                </>
                                                : "-"}
                                            </td>
                                            <td>
                                                <div className="is-flex">
                                                    <img onClick={() => history.push("/edit-user/" + single.Id)} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                    <img className="cursor-pointer delete-image-table" alt="delete-button" onClick={() => deleteUsers(single.Id)} src={Deletelogo} />
                                                    <span onClick={() => history.push("/user-information-activities/" + single.Id)} className="cursor-pointer view-btn-of-table">View Details</span>
                                                    <span className="view-btn-of-table">Affiliate User</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    <tr className="table-footer">
                                        <td colSpan={4}>Total</td>
                                        <td>{totalCustomers}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mrg-top-10">
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
                    <Style />
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(ViewUser);