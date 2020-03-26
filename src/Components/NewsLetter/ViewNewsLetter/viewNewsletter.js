import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { NEWSLETTERS } from '../../apollo/Mutations/newsletterMutation'
import ReactPaginate from "react-paginate";
import Loader from '../../commonComponents/Loader/loader'
import { standardDate } from '../../functions/index'
import { DELETE_NEWSLETTER } from '../../apollo/Mutations/deleteNewsletter'

const ViewNewsletter = (props) => {

    let { history } = props;
    const [newsletter] = useMutation(NEWSLETTERS);
    const [data, setData] = useState([]);
    const [totalNewsletter, setTotalNewsletter] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [deleteNewsletter] = useMutation(DELETE_NEWSLETTER);

    const handlePageClick = (value) => {
        setPage(value.selected + 1);
        newsletter({
            variables: {
                limit: 10,
                page: value.selected + 1
            }
        })
            .then(res => {
                setData(res && res.data.newsletters && res.data.newsletters.newsletters ? res.data.newsletters.newsletters : [])
                setTotalPages(res && res.data.newsletters.totalPages ? res.data.newsletters.totalPages : [1])
                setTotalNewsletter(res && res.data.newsletters && res.data.newsletters.totalnewsletters);
            })
    }

    useEffect(() => {
        newsletter({
            variables: {
                limit: 10,
                page: page + 1
            }
        }).then(res => {
            setData(res && res.data.newsletters && res.data.newsletters.newsletters ? res.data.newsletters.newsletters : [])
            setTotalPages(res && res.data.newsletters.totalPages ? res.data.newsletters.totalPages : [1])
            setTotalNewsletter(res && res.data.newsletters && res.data.newsletters.totalnewsletters);
        })
    }, []);

    const deletePages = (id) => {
        deleteNewsletter({
            variables: {
                Id: parseInt(id),
            }
        }).then(response => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/newsletter")

        })
    }


    return (
        <>
            {data && data.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Newsletters</h6>
                        <button onClick={() => history.push("/add-newsletter")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Newsletters Record</h6>
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Name</th>
                                        <th>Template Name</th>
                                        <th>Status</th>
                                        <th>Scheduled Date And Time</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {data && data.length !== 0 && data.map((single, index) => {
                                        console.log(single.datetime);
                                        return (
                                            <tr key={index} className="table-row-data-of-body fnt-poppins">
                                                <td>{single.name ? single.name : "-"}</td>
                                                <td>{single.Template ? single.Template && single.Template.Title : "-"}</td>
                                                <td>{single.status ? single.status : "-"}</td>
                                                <td className="is-flex">
                                                    <span>{single.datetime ? standardDate(parseInt(single.datetime)).standardDate : "-"}</span>
                                                    <span className="has-margin-left-15">{single.datetime ? standardDate(parseInt(single.datetime)).time : "-"}</span>
                                                </td>
                                                <td>
                                                    {single && single.status == "Draft" ?
                                                        <div className="applying-flex">
                                                            <img onClick={() => history.push("/edit-newsletter/" + single.Id)} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                            <img className="delete-image-table has-cursor-pointer" alt="delete-button" src={Deletelogo}
                                                                onClick={() => deletePages(single.Id)}
                                                            />
                                                        </div>
                                                        : ""}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr className="table-footer">
                                        <td colSpan={4}>Total</td>
                                        <td>{totalNewsletter}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mrg-top-0">
                            <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                                nextLabel={<span className="fa fa-chevron-right "> > </span>}
                                breakLabel={". . ."}
                                breakClassName={"break-me"}
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
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
export default withRouter(ViewNewsletter);