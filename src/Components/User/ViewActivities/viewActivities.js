import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import { camapignImage, campaignLogo_baseurl } from '../../../Config'
import { useMutation } from '@apollo/react-hooks';
import { USERACTIVITY_MUTATION } from '../../apollo/Mutations/userActivityMutation'
const ViewActivities = () => {
    const [page, setPage] = useState(1);
    const [userActivity, setUserActivity] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [data] = useMutation(USERACTIVITY_MUTATION);
    const handlePageClick = (value) => {
        setPage(value.selected + 1);
        data({
            variables: {
                limit: 10,
                page: value.selected + 1
            }
        })
            .then(res => {
                setUserActivity(res && res.data.userActivity && res.data.userActivity.userActivity ? res.data.userActivity.userActivity : []);
                setTotalPage(res && res.data.userActivity && res.data.userActivity.userActivity.totalPages ? res.data.userActivity.userActivity.totalPages : [1])
            })
    }
    useEffect(() => {
        data({
            variables: {
                limit: 10,
                page: 1
            }
        }).then(res => {

            setUserActivity(res && res.data.userActivity && res.data.userActivity.userActivity ? res.data.userActivity.userActivity : []);
            setTotalPage(res && res.data.userActivity && res.data.userActivity.userActivity.totalPages ? res.data.userActivity.userActivity.totalPages : [1])
        })
    }, []);
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">View Activities</h6>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">View Activities</h6>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Campaign Image</th>
                                    <th>Campaign Name</th>
                                    <th>User Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>IP Address</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                {userActivity && userActivity.length != 0 ? userActivity.map(single =>
                                    <tr className="table-row-data-of-body fnt-poppins">
                                        <td><img src={single.Image ? camapignImage + single.Image : (single.campaignLogo_baseurl ? campaignLogo_baseurl + single.campaignLogo_baseurl : "")} alt=""/></td>
                                        <td>{single.UserId}</td>
                                        <td>{single.CampaignId}</td>
                                        <td>{single.CreatedDate}</td>
                                        <td>sub view</td>
                                        <td>sub view</td>
                                    </tr>
                                ) : ""}
                                <tr className="table-footer">
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Number</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mrg-top-0">
                        <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                            nextLabel={<span className="fa fa-chevron-right "> > </span>}
                            breakLabel={". . ."}
                            breakClassName={"break-me"}
                            pageCount={totalPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"digit-icons main"}
                            subContainerClassName={"container column"}
                            activeClassName={"p-one"} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default withRouter(ViewActivities);