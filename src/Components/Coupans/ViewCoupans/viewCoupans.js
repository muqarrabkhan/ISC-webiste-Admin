import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Style from './style'
import {withRouter} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {COUPANS} from '../../apollo/Quries/coupanQurie'
import Loader from '../../commonComponents/Loader/loader'

const ViewCoupan=(props) => {
    let {history}=props;
    const {loading , data}=useQuery(COUPANS);
    
    return (
        <>
            <div className="container-fluid Table-for-administrator-main-div">
                {/* header */}
                <div className="header-of-viewAdministrator">
                    <h6 className="heading6-of-header fnt-poppins">Coupans</h6>
                   <button onClick={()=> history.push("/add-coupans")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                </div>
                {/* Table of Administrator  */}
                <div className="Table-of-administrator">
                    <div className="background-of-table">
                    </div>
                    <div className="Table-Header">
                        <h6 className="fnt-poppins">All Coupans Records</h6>
                        <div>
                            <select className="select-option-of-adminstrator fnt-poppins">
                                <option>Select Coupan Status</option>
                                <option>Enable</option>
                                <option>Disable</option>
                            </select>
                        </div>
                        <div>
                            <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Coupan Code" />
                            <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Discount Code" />
                        </div>
                    </div>
                    {/* Table-Title */}
                    <div className="container-fluid Table-title">
                        <table className="main-table-heading">
                            <thead className="heading-of-table background-color-head">
                                <tr className="table-row-of-head fnt-poppins">
                                    <th>Coupon Code</th>
                                    <th>Coupon Discount Percentage</th>
                                    <th>User Name</th>
                                    <th>Coupon Status</th>
                                    <th>Total Montly Subscriptions</th>
                                    <th>Total Annully Subscriptions</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-of-data">
                                {data && data.length!==0 && data.getCoupons.map((single,index)=>
                                <tr key={index} className="table-row-data-of-body fnt-poppins">
                                    <td>{single.Coupon_code ? single.Coupon_code : "-"}</td>
                                    <td>{single.Discount_percentage ? single.Discount_percentage :"-"}</td>
                                    <td>{single.Status_coupon ? single.Status_coupon : "-"}</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>sub view</td>
                                    <td>
                                   <img onClick={()=>history.push("/edit-coupans")}  className=" cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Style />
            </div>
        </>
    );
}
export default withRouter(ViewCoupan)