import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { SINGLE_COUPON } from '../../apollo/Quries/singleCoupan'
import { couponUrl } from '../../../config'
import { EDIT_COUPON } from '../../apollo/Mutations/updateCoupon'
import Loader from '../../commonComponents/Loader/loader'

const EditCoupan = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_COUPON(id))
    const [renderData, setRenderData] = useState("")
    const [updateCoupan] = useMutation(EDIT_COUPON)
    const [btnText, setBtnText] = useState("Update")

    useEffect(() => {
        setRenderData(data && data.singleCouponById ? { ...data.singleCouponById } : {})
    }, [data])

    const update = (event) => {
        event.preventDefault();
        setBtnText("Updating...")
        updateCoupan({
            variables: {
                Id: parseInt(id),
                Coupon_code: renderData.Coupon_code,
                Status_coupon: renderData.Status_coupon,
                Discount_percentage: parseInt(renderData.Discount_percentage)
            }
        }).then(res => {
            setBtnText("Updated")
        }).catch(error => {
            setBtnText("Update")
        })
    }

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Update Coupon</h6>
                        <button onClick={() => history.push("/coupans")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={event => update(event)}>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    {/* Coupon Code**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Coupon Code*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                required
                                                value={renderData.Coupon_code}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.Coupon_code = event.target.value
                                                    setRenderData({ ...duplicateData });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Discount Percentage**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Discount Percentage*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator" type="number"
                                                required
                                                value={renderData.Discount_percentage}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.Discount_percentage = event.target.value
                                                    setRenderData({ ...duplicateData });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Select Coupon Status**/}
                                    <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                        <div>
                                            <label>Select Coupon Status*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <select className="inputs-of-admistrator fnt-poppins"
                                                required
                                                value={renderData.Status_coupon}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.Status_coupon = event.target.value
                                                    setRenderData({ ...duplicateData });
                                                }}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="Enable">Enable</option>
                                                <option value="Disable">Disable</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/*Page Url Link With Coupon*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Page Url Link With Coupon*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator" value={couponUrl + renderData.Coupon_code} disabled />
                                        </div>
                                        {/* <button className="Save-btn-of-form Save-btns-of-forms-responsive mrg-top-10 fnt-poppins">Link Copy</button> */}
                                    </div>
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">{btnText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                : <Loader />
            }
        </>
    );
}
export default withRouter(EditCoupan)