import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { MEMBERSHIP } from '../../apollo/Quries/membershipQurie'
import Loader from '../../commonComponents/Loader/loader'

const ViewSubscription = (props) => {
    let { history } = props;
    const { loading, data } = useQuery(MEMBERSHIP);

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Subscription</h6>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Subscription Records</h6>
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Name</th>
                                        <th>Storefront Limit</th>
                                        <th>Campaign Limit</th>
                                        <th>Charge Percentage</th>
                                        <th>Subscription Charges</th>
                                        <th>Total Subscripton</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {data && data.length !== 0 && data.membershipdetails.map((single, index) =>
                                        <tr key={index} className="table-row-data-of-body fnt-poppins">
                                            <td>{single && single.Name ? single.Name : " - "}</td>
                                            <td>{single && single.StorefrontLimit ? single.StorefrontLimit : "-"}</td>
                                            <td>{single && single.CampaignLimit ? single.CampaignLimit : "-"}</td>
                                            <td>{single && single.ChargePercentage ? single.ChargePercentage : "-"}</td>
                                            <td>{single && single.SubscriptionCharges ? single.SubscriptionCharges : "-"}</td>
                                            <td>{single && single.totalSubscripton ? single.totalSubscripton : "-"}</td>
                                            <td>
                                                <div className="is-flex">
                                                    <img onClick={() => history.push("/edit-subscription/"+single.id)} className="cursor-pointer edit-image-table view-subscription-btn-edit" alt="edit-button" src={Editlogo} />
                                                    {/* <span onClick={() => history.push("/subscription-detail-record")} className="cursor-pointer view-btn-of-table view-subscription-btn">View Details</span> */}
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
export default withRouter(ViewSubscription);