import React, { useEffect, useState } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { ALL_REPORTED_CAMPAIGNS } from '../../apollo/Mutations/reportedMutation'
import ReactPaginate from "react-paginate";
import Loader from '../../commonComponents/Loader/loader'
import { DELETE_COUPON } from '../../apollo/Mutations/deleteCoupon'

const ViewCoupan = (props) => {
    let { history } = props;
    const [coupons] = useMutation(ALL_REPORTED_CAMPAIGNS);
    const [data, setData] = useState("")
    const [totalPages, setTotalPage] = useState(1);
    const [totalCoupons, setTotalCoupons] = useState([]);
    const [page, setPage] = useState(1);

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        coupons({
            variables: {
                page: value.selected + 1,
                limit: 10,
            }
        }
        ).then(response => {
            setData(response && response.data && response.data.allReportedCampaign ? response.data.allReportedCampaign.campaigns : []);
            setTotalPage(response && response.data.allReportedCampaign ? response.data.allReportedCampaign.totalPages : [1]);
            setTotalCoupons(response && response.data.allReportedCampaign && response.data.allReportedCampaign.totalCampaigns);
        })
    }

    useEffect(() => {
        coupons({
            variables: {
                page: 1,
                limit: 10,
            }
        }
        ).then(response => {
            setData(response && response.data && response.data.allReportedCampaign ? response.data.allReportedCampaign.campaigns : []);
            setTotalPage(response && response.data.allReportedCampaign ? response.data.allReportedCampaign.totalPages : [1]);
            setTotalCoupons(response && response.data.allReportedCampaign && response.data.allReportedCampaign.totalCampaigns);
        })
    }, [data])


    return (
        <>
            {data && data.length !== 0 ?
                < div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Reported Campaigns</h6>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Reported Campaigns Records</h6>
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Discription</th>
                                        <th>Report Count</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {data && data.length !== 0 ? data.map((single, index) =>
                                    <tbody className="table-of-data">
                                        <tr className="table-row-data-of-body fnt-poppins">
                                            <td>{single.Id ? single.Id : "-"}</td>
                                            <td>{single.Name ? single.Name : "-"}</td>
                                            <td>{single.Description ? single.Description : "-"}</td>
                                            <td>{single.reportCount ? single.reportCount : "-"}</td>
                                            <td>
                                                <span onClick={() => history.push("/count-reports/" + single.Id)} className="cursor-pointer view-btn-of-table has-width-40">View Reports</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                                    :
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4} className="fnt-size-25 fnt-weight-600 fnt-poppins" style={{ textAlign: "center" }}>No Record Found</td>
                                        </tr>
                                    </tfoot>
                                }

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
                : <Loader />
            }
        </>
    );
}
export default withRouter(ViewCoupan)