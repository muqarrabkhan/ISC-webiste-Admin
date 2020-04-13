import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { TEMPLATE } from '../../apollo/Mutations/templateMutation'
import {DELETE_TEMPALTE } from '../../apollo/Mutations/deleteTemplate'
import Loader from '../../commonComponents/Loader/loader'
import ReactPaginate from "react-paginate";
import {standardDate} from '../../functions'

const ViewTemplate = (props) => {
    let { history } = props;

    const [users, setUsers] = useState([]);
    const [allPages] = useMutation(TEMPLATE);
    const [deleteTemplate] = useMutation(DELETE_TEMPALTE);
    const [totalPages, setTotalPage] = useState(1);
    const [totalCustomers, setTotalCustomers] = useState([]);
    const [page, setPage] = useState(1);

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        allPages({
            variables: {
                page: value.selected + 1,
                limit: 10
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.Templates ? response.data.Templates.Template : []);
            setTotalPage(response && response.data.Templates ? response.data.Templates.totalPages : [1]);
            setTotalCustomers(response && response.data.Templates && response.data.Templates.totalTemplate);
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
            setUsers(response && response.data && response.data.Templates ? response.data.Templates.Template : []);
            setTotalPage(response && response.data.Templates ? response.data.Templates.totalPages : [1]);
            setTotalCustomers(response && response.data.Templates && response.data.Templates.totalTemplate);
        })
    }, [])
    const deleteTemplates = (Id) => {
        deleteTemplate({
            variables: {
                Id: parseInt(Id),
            }
        }).then(res => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/tamplates")
        })
    }

    return (
        <>
            {users && users.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Tempelates</h6>
                        <button onClick={() => history.push("/add-tamplates")} className="has-cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Tempelates Record</h6>
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Title</th>
                                        <th>Subject</th>
                                        <th>Email</th>
                                        <th>From Text</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Date Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {users && users.length !== 0 && users.map((single, index) =>
                                        <tr key={index} className="table-row-data-of-body fnt-poppins" style={{ borderBottom: "1px solid silver" }}>
                                            <td>{single.Title ? single.Title : "-"}</td>
                                            <td>{single.Subject ? single.Subject : "-"}</td>
                                            <td>{single.Email ? single.Email : "-"}</td>
                                            <td>{single.FromText ? single.FromText : "-"}</td>
                                            <td>{single.Status ? single.Status : "-"}</td>
                                            <td>{single.Type ? single.Type : "-"}</td>
                                            <td>{single.CreatedDate ? standardDate(single.CreatedDate).standardDate : "-"}</td>
                                            <td>
                                                <div style={{ display: "flex" }}>
                                                    <img onClick={() => history.push("/edit-tamplates/"+single.Id)} className="has-cursor-pointer edit-image-table" alt="" src={Editlogo} />
                                                    <img className=" has-cursor-pointer delete-image-table" alt="" onClick={()=>deleteTemplates(single.Id)} src={Deletelogo} />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    <tr className="table-footer">
                                        <td colspan={7}>Total</td>
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
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(ViewTemplate);