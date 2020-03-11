import React, { useEffect, useState } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { PAGES } from '../../apollo/Mutations/pagesMutation'
import Loader from '../../commonComponents/Loader/loader'
import ReactPaginate from "react-paginate";

const ViewPages = (props) => {
    let { history } = props;

    const [users, setUsers] = useState([]);
    const [allPages] = useMutation(PAGES);
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
            setUsers(response && response.data && response.data.getwebpages ? response.data.getwebpages.webpages : []);
            setTotalPage(response && response.data.getwebpages ? response.data.getwebpages.totalPages : [1]);
            setTotalCustomers(response && response.data.getwebpages && response.data.getwebpages.totalwebpages);
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
            setUsers(response && response.data && response.data.getwebpages ? response.data.getwebpages.webpages : []);
            setTotalPage(response && response.data.getwebpages ? response.data.getwebpages.totalPages : [1]);
            setTotalCustomers(response && response.data.getwebpages && response.data.getwebpages.totalwebpages);
        })
    }, [])

    return (

        <>
            {users && users.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Pages</h6>
                        <button onClick={() => history.push("/add-pages")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Pages Record</h6>
                            <input className="input-for-search fnt-poppins" placeholder="Slug" />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Page Title</th>
                                        <th>Slug</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {users && users.length !== 0 && users.map((single, index) =>
                                        <tr className="table-row-data-of-body fnt-poppins">
                                            <td>{single.pageTitle ? single.pageTitle : "-"}</td>
                                            <td>{single.slug ? single.slug : "-"}</td>
                                            <td>
                                                <div className="is-flex">
                                                    <img onClick={() => history.push("/edit-pages")} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                    <img className="cursor-pointer delete-image-table" alt="delete-button" src={Deletelogo} />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="has-padding-left-15" colSpan={2}>Total</td>
                                        <td className="has-padding-left-20">{totalCustomers}</td>
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
export default withRouter(ViewPages);