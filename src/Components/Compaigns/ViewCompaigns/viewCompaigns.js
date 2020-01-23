import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'

export default () => {
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Campaigns</h6>
                    <button className="header-btn-of-table fnt-poppins">Create</button>
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
                            <select className="select-option-of-adminstrator fnt-poppins has-margin-left-15">
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
                            <select className="select-option-of-adminstrator fnt-poppins has-margin-left-15">
                                <option>Select Compaign Type</option>
                                <option>Support</option>
                                <option>Petition</option>
                                <option>Pledge</option>
                            </select>
                            <select className="select-option-of-adminstrator fnt-poppins has-margin-left-15">
                                <option>Select Compaign Package</option>
                                <option>Free Compaign</option>
                                <option>Premium Compaign</option>
                            </select>
                            <select className="select-option-of-adminstrator fnt-poppins has-margin-left-15">
                                <option>Sort By Support</option>
                                <option>Highest Support</option>
                                <option>Lowest Support</option>
                            </select>
                            <select className="select-option-of-adminstrator fnt-poppins has-margin-left-15">
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

                    <div className="container-fluid Table-title">
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
                                <tr className="table-row-data-of-body fnt-poppins">
                                    <td>Excellence in Learning & Development Form</td>
                                    <td>03-18-2019</td>
                                    <td>09-03-2019</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>
                                        <div className="switch-btn-of-tables">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="switch-btn-of-tables">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="switch-btn-of-tables">
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="btns-of-viewcompaign">
                                        <div className="is-flex">
                                            <img className="edit-image-table customization-of-image-btn" alt="edit-button" src={Editlogo} />
                                            <img className="edit-image-table customization-of-image-btn" alt="delete-button" src={Deletelogo} />
                                            <span className="view-btn-of-table ">Verify</span>
                                        </div>
                                        <div className="has-margin-top-10">
                                        <span className="view-btn-of-table has-width-40">View Details</span>
                                        </div>
                                        <div className="has-margin-top-10">
                                            <button className="view-btn-of-table fnt-poppins">Premium Compaign</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                    </div>


                </div>

                <Style />
            </div>
        </>
    );
}