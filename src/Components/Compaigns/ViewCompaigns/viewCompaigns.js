import React, { useEffect, useState } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { standardDate } from '../../functions/index'
import ReactPaginate from "react-paginate";
import { VIEW_CAMPAIGN } from '../../apollo/Mutations/campaignMutation'
import Loader from '../../commonComponents/Loader/loader'

const ViewCompaign = (props) => {
    let { history } = props;
    const [campaign, setCampaign] = useState([])
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [campaignType, setCampaignType] = useState("");
    // const [totalCampaigns,setTotalCampaigns]=useState([]);
    const [getCampaign] = useMutation(VIEW_CAMPAIGN);
    let getDate = campaign && campaign.CreatedDate;
    getDate = standardDate(getDate).standardDate;

    const handlePageClick = (value) => {
        setPage(value.selected + 1);
        getCampaign({
            variables: {
                page: value.selected + 1,
                limit: 10,
                CampaignType: campaignType
            }
        }
        ).then(res => {
            setCampaign(res && res.data.allCampaignFilters && res.data.allCampaignFilters.campaigns ? res.data.allCampaignFilters.campaigns : [])
            setTotalPages(res && res.data.allCampaignFilters && res.data.allCampaignFilters.totalPages ? res.data.allCampaignFilters.totalPages : [1])
            // setTotalCampaigns(res && res.data.allCampaignFilters && res.data.allCampaignFilters. totalCampaigns ? res.data.allCampaignFilters. totalCampaigns : [])
        })
    }
    useEffect(() => {
        getCampaign({
            variables: {
                page: 1,
                limit: 10,
                CampaignType: ""
            }
        }).then(res => {
            setCampaign(res && res.data.allCampaignFilters && res.data.allCampaignFilters.campaigns ? res.data.allCampaignFilters.campaigns : [])
            setTotalPages(res && res.data.allCampaignFilters && res.data.allCampaignFilters.totalPages ? res.data.allCampaignFilters.totalPages : [1])
            // setTotalCampaigns(res && res.data.allCampaignFilters && res.data.allCampaignFilters. totalCampaigns ? res.data.allCampaignFilters. totalCampaigns : [])

        })

    }, [])


    const typeHandler = (value) => {
        switch (value) {
            case "": {
                setCampaignType(value);
                getCampaign({
                    variables: {
                        page: page,
                        limit: 10,
                        CampaignType: ""
                    }
                }).then(res => {
                    setCampaign(res && res.data.allCampaignFilters && res.data.allCampaignFilters.campaigns ? res.data.allCampaignFilters.campaigns : [])
                    setTotalPages(res && res.data.allCampaignFilters && res.data.allCampaignFilters.totalPages ? res.data.allCampaignFilters.totalPages : [1])
                    // setTotalCampaigns(res && res.data.allCampaignFilters && res.data.allCampaignFilters. totalCampaigns ? res.data.allCampaignFilters. totalCampaigns : [])
                })
                return;
            }
            case "Support": {
                setCampaignType(value);
                getCampaign({
                    variables: {
                        page: page,
                        limit: 10,
                        CampaignType: "Support"
                    }
                }).then(res => {
                    setCampaign(res && res.data.allCampaignFilters && res.data.allCampaignFilters.campaigns ? res.data.allCampaignFilters.campaigns : [])
                    setTotalPages(res && res.data.allCampaignFilters && res.data.allCampaignFilters.totalPages ? res.data.allCampaignFilters.totalPages : [1])
                    // setTotalCampaigns(res && res.data.allCampaignFilters && res.data.allCampaignFilters. totalCampaigns ? res.data.allCampaignFilters. totalCampaigns : [])
                })
                return;
            }
            case "Petition": {
                setCampaignType(value);
                getCampaign({
                    variables: {
                        page: page,
                        limit: 10,
                        CampaignType: "Petition"
                    }
                }).then(res => {
                    setCampaign(res && res.data.allCampaignFilters && res.data.allCampaignFilters.campaigns ? res.data.allCampaignFilters.campaigns : [])
                    setTotalPages(res && res.data.allCampaignFilters && res.data.allCampaignFilters.totalPages ? res.data.allCampaignFilters.totalPages : [1])
                    // setTotalCampaigns(res && res.data.allCampaignFilters && res.data.allCampaignFilters. totalCampaigns ? res.data.allCampaignFilters. totalCampaigns : [])   
                })
                return;
            }
            case "Pledge": {
                setCampaignType(value);
                getCampaign({
                    variables: {
                        page: page,
                        limit: 10,
                        CampaignType: "Pledge"
                    }
                }).then(res => {
                    setCampaign(res && res.data.allCampaignFilters && res.data.allCampaignFilters.campaigns ? res.data.allCampaignFilters.campaigns : [])
                    setTotalPages(res && res.data.allCampaignFilters && res.data.allCampaignFilters.totalPages ? res.data.allCampaignFilters.totalPages : [1])
                    // setTotalCampaigns(res && res.data.allCampaignFilters && res.data.allCampaignFilters. totalCampaigns ? res.data.allCampaignFilters. totalCampaigns : []           
                })
                return;
            }
        }
    }

    return (
        <>
            {campaign && campaign.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Campaigns</h6>
                        <button onClick={() => history.push("/create-camapaign")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Campaigns Record</h6>
                            <div className="input-styling-0f-compaigns">
                                <input placeholder="From Date" type="date" />
                                <input placeholder="To Date" type="date" />
                            </div>
                            <div>
                                <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Name" />
                            </div>
                        </div>
                        <div className="Table-Header">
                            <div className="is-flex flex-end">
                                <select className="select-option-of-adminstrator fnt-poppins">
                                    <option>Select User</option>
                                    <option>User</option>
                                    <option>Admin</option>
                                </select>
                                <select className="select-option-of-adminstrator fnt-poppins mrg-left-50">
                                    <option>Select Category</option>
                                    <option>Sport</option>
                                    <option>Cause</option>
                                    <option>Other</option>
                                    <option>Events</option>
                                    <option>Peace Compaign</option>
                                    <option>International Days</option>
                                    <option>Awairness</option>
                                    <option>Charity</option>
                                    <option>Human Rights</option>
                                    <option>Animal Rights</option>
                                    <option>National Days</option>
                                    <option>Culture</option>
                                    <option>Political</option>
                                </select>
                                <select className="select-option-of-adminstrator fnt-poppins mrg-left-15"
                                    onChange={event => typeHandler(event.target.value)}>
                                    <option value="">All</option>
                                    <option value="Support">Support</option>
                                    <option value="Petition">Petition</option>
                                    <option value="Pledge">Pledge</option>
                                </select>
                                <select className="select-option-of-adminstrator fnt-poppins mrg-left-15">
                                    <option>Select Compaign Package</option>
                                    <option>Free Compaign</option>
                                    <option>Premium Compaign</option>
                                </select>
                                <select className="select-option-of-adminstrator fnt-poppins mrg-left-15">
                                    <option>Sort By Support</option>
                                    <option>Highest Support</option>
                                    <option>Lowest Support</option>
                                </select>
                                <select className="select-option-of-adminstrator fnt-poppins mrg-left-15">
                                    <option>Select Coupan</option>
                                    <option>NONPROFIT</option>
                                    <option>SAJJAD10</option>
                                    <option>Promo50</option>
                                    <option>NAHID25</option>
                                    <option>NONPROFIT50</option>
                                    <option>AZEEM25</option>
                                    <option>MUREED25</option>
                                    <option>SAUD30</option>
                                    <option>hadi2018</option>
                                    <option>VEDANK</option>
                                    <option>BEAUTY</option>
                                    <option>LIBERIA</option>
                                    <option>SOCIAL</option>
                                    <option>PROMO_GIFT</option>
                                    <option>RECRUITERS</option>
                                    <option>Elizabeth</option>
                                    <option>REGINA_PREMIUM_COUPON_30</option>
                                    <option>DonateLifeMonth</option>
                                    <option>AWARENESS</option>
                                    <option>PROMO_NONPROFIT_CAC</option>
                                    <option>AUTISM_MOMS</option>
                                    <option>PANKAJ</option>
                                    <option>Kristen20</option>
                                    <option>PREMIUM_COUPON_ABDUL</option>
                                </select>
                            </div>
                        </div>
                        {/* Table-Title */}
                        <div className="Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Sr.No</th>
                                        <th>Compaign Name</th>
                                        <th>Compaign Type</th>
                                        <th>Created By</th>
                                        <th>Verified</th>
                                        <th>Category</th>
                                        <th>Date Created</th>
                                        <th>total Support</th>
                                        <th>Is Premium</th>
                                        <th>Show On Category</th>
                                        <th>Status</th>
                                        <th>Is Donation</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {campaign && campaign.length !== 0 ? campaign.map(single =>
                                        <tr className="table-row-data-of-body fnt-poppins">
                                            <td>{single.Id}</td>
                                            <td>{single.Name}</td>
                                            <td>{single.CampaignType}</td>
                                            <td>{single.CreatedBy}</td>
                                            <td>{single.Verified}</td>
                                            <td>{single.CategoryId}</td>
                                            <td>{single.CreatedDate}</td>
                                            <td>{single.supportCount}</td>
                                            <td>{single.is_campaign_aws}</td>
                                            <td>
                                                <div className="switch-btn-of-tables">

                                                    <label className="switch">
                                                        <input type="checkbox" checked={single && single.ShowOnList == 1 ? single.ShowOnList : ""} />
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="switch-btn-of-tables">
                                                    <label className="switch">
                                                        <input type="checkbox" checked={single && single.Status == 1 ? single.Status : ""} />
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="switch-btn-of-tables">
                                                    <label className="switch">
                                                        <input type="checkbox" checked={single && single.is_donation == 1 ? single.is_donation : ""} />
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="btns-of-viewcompaign">
                                                <div className="is-flex">
                                                    <img onClick={() => history.push("/edit-campaign/" + single.Id)} className="cursor-pointer edit-image-table customization-of-image-btn" alt="edit-button" src={Editlogo} />
                                                    <img className="cursor-pointer edit-image-table customization-of-image-btn" alt="delete-button" src={Deletelogo} />
                                                    <span className="cursor-pointer view-btn-of-table ">Verify</span>
                                                </div>
                                                <div className="mrg-top-10">
                                                    <span onClick={() => history.push("/Camapaign-details/" + single.Id)} className="cursor-pointer view-btn-of-table has-width-40">View Details</span>
                                                </div>
                                                <div className="mrg-top-10">
                                                    <button className="view-btn-of-table fnt-poppins">Premium Compaign</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : ""}
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
                                    onPageChange={handlePageClick}
                                    containerClassName={"digit-icons main"}
                                    subContainerClassName={"container column"}
                                    activeClassName={"p-one"} />
                            </div>
                        </div>
                    </div>
                    <Style />
                </div>
                : <Loader />}
        </>
    );
}

export default withRouter(ViewCompaign);