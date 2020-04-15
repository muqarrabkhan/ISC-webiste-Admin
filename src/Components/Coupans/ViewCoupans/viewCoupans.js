import React, { useEffect, useState } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { ALL_COUPONS } from '../../apollo/Mutations/couponMutation'
import ReactPaginate from "react-paginate";
import Loader from '../../commonComponents/Loader/loader'
import {DELETE_COUPON} from '../../apollo/Mutations/deleteCoupon'

const ViewCoupan = (props) => {
    let { history } = props;
    const [coupons] = useMutation(ALL_COUPONS);
    const [data, setData] = useState("")
    const [totalPages, setTotalPage] = useState(1);
    const [totalCoupons, setTotalCoupons] = useState([]);
    const [page, setPage] = useState(1);
    const [deleteSingleCoupan]=useMutation(DELETE_COUPON)

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        coupons({
            variables: {
                page: value.selected + 1,
                limit: 10,
            }
        }
        ).then(response => {
            setData(response && response.data && response.data.getAllCoupons ? response.data.getAllCoupons.coupons : []);
            setTotalPage(response && response.data.getAllCoupons ? response.data.getAllCoupons.totalPages : [1]);
            setTotalCoupons(response && response.data.getAllCoupons && response.data.getAllCoupons.totalCoupons);
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
            setData(response && response.data && response.data.getAllCoupons ? response.data.getAllCoupons.coupons : []);
            setTotalPage(response && response.data.getAllCoupons ? response.data.getAllCoupons.totalPages : [1]);
            setTotalCoupons(response && response.data.getAllCoupons && response.data.getAllCoupons.totalCoupons);
        })
    }, [])

    const deleteCoupon = (Id) => {
        deleteSingleCoupan({
            variables: {
                Id: parseInt(Id),
            }
        }).then(response => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/coupans")
        })
    }

    return (
        <>
            {data && data.length !== 0 ?
                < div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Coupons</h6>
                        <button onClick={() => history.push("/add-coupans")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Coupons Records</h6>
                            {/* <div>
                            <select className="select-option-of-adminstrator fnt-poppins">
                                <option>Select Coupons Status</option>
                                <option>Enable</option>
                                <option>Disable</option>
                            </select>
                        </div> */}
                            {/* <div>
                            <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Coupan Code" />
                            <input className="input-for-search fnt-poppins input-for-search-user" placeholder="Discount Code" />
                        </div> */}
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Coupon Code</th>
                                        <th>Coupon Discount Percentage</th>
                                        <th>Page Link</th>
                                        <th>Coupon Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                {data && data.length !== 0 ? data.map((single, index) =>
                                    <tbody className="table-of-data">
                                        <tr className="table-row-data-of-body fnt-poppins">
                                            <td>{single.Coupon_code ? single.Coupon_code : "-"}</td>
                                            <td>{single.Discount_percentage ? single.Discount_percentage +" "+"%": "-"}</td>
                                            <td>{single.Page_link ? single.Page_link : "-"}</td>
                                            <td>{single.Status_coupon ? single.Status_coupon : "-"}</td>
                                            <td>
                                                <img onClick={() => history.push("/edit-coupans/" + single.Id)} className=" cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                <img className="cursor-pointer delete-image-table" alt="delete-button" onClick={() => deleteCoupon(single.Id)} src={Deletelogo} />
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                                    :
                                    <tfoot>
                                        <tr>
                                            <td colSpan={5} className="fnt-size-25 fnt-weight-600 fnt-poppins" style={{ textAlign: "center" }}>No Record Found</td>
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