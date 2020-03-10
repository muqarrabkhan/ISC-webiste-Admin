import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import ReactPaginate from "react-paginate";
import { camapignImage, campaignLogo_baseurl } from '../../../config'
import { useMutation } from '@apollo/react-hooks';
import { VIEW_MUTATION } from '../../apollo/Mutations/viewActivitiesMutation'
import Loader from '../../commonComponents/Loader/loader'
import {standardDate} from '../../functions/index'

const ViewActivities = () => {
    const [page, setPage] = useState(1);
    const [userActivity, setUserActivity] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [data] = useMutation(VIEW_MUTATION);
    const [totalCustomers , setTotalCustomers] = useState("");
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
                setTotalPage(res && res.data.userActivity.totalPages ? res.data.userActivity.totalPages : [1])
                setTotalCustomers(res && res.data.userActivity && res.data.userActivity.totaluserActivity);
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
            setTotalPage(res && res.data.userActivity.totalPages ? res.data.userActivity.totalPages : [1])
            setTotalCustomers(res && res.data.userActivity && res.data.userActivity.totaluserActivity);
            console.log(res && res.data.userActivity && res.data.userActivity.totaluserActivity);
            
        })
    }, []);
    return (
        <>
            {userActivity && userActivity.length !== 0 ?
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
                                            <td className="has-margin-top-15" style={{
                                                backgroundImage: `url(${single.Image ? camapignImage + single.Image : ""})`,
                                                backgroundSize: 'contain',
                                                height: '143px',
                                                backgroundRepeat: 'no-repeat'
                                            }}></td>
                                            {/* <td><img src={single.Image ? camapignImage + single.Image : (single.campaignLogo_baseurl ? campaignLogo_baseurl + single.Image : "")} alt="" /></td> */}
                                            <td>{single.UserId}</td>
                                            <td>{single.CampaignId}</td>
                                            <td>{standardDate(single.CreatedDate).standardDate}</td>
                                            <td>{standardDate(single.CreatedDate).time}</td>
                                            <td>sub view</td>
                                        </tr>
                                    ) : ""}
                                    <tr className="table-footer">
                                        <td colSpan={5}>Total</td>
                                        <td>{totalCustomers}</td> 
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
                : <Loader />}
        </>
    );
}
export default withRouter(ViewActivities);
