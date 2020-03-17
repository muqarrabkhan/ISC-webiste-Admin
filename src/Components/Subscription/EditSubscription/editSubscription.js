import React, { useState, useEffect } from 'react'
import '../../../assets/Style/Common.scss'
import { withRouter } from 'react-router-dom'
import { SINGLE_MEMBERSHIP } from '../../apollo/Quries/singleMemberShip'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { UPDATE_MEMBERSHIP } from '../../apollo/Mutations/updateMemberShip'
import Loader from '../../commonComponents/Loader/loader'

const EditSubscription = (props) => {

    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : ""
    const { loading, data } = useQuery(SINGLE_MEMBERSHIP(id))
    const [editData] = useMutation(UPDATE_MEMBERSHIP);
    const [renderData, setRenderData] = useState("");

    useEffect(() => {
        setRenderData(data && data.getsinglemembership ? { ...data.getsinglemembership } : "")
    }, [data, data && data.getsinglemembership])

    const updateUser = (event) => {
        event.preventDefault();
        editData({
            variables: {
                id: parseInt(renderData.id),
                Name: renderData.Name,
                StorefrontLimit: parseInt(renderData.StorefrontLimit),
                CampaignLimit: parseInt(renderData.CampaignLimit),
                ChargePercentage: parseFloat(renderData.ChargePercentage),
                SubscriptionCharges: parseFloat(renderData.SubscriptionCharges)
            }
        }).then(res => {
            window.location.replace("/subscription");
        })
    }

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Edit Subscription</h6>
                        <button onClick={() => history.push("/subscription")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={event => updateUser(event)}>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    {/*Subscription Name**/}
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Subscription Name*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData.Name}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.Name = event.target.value
                                                    setRenderData(duplicateData)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Subscription Amount**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label> Storefront Limit*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData.StorefrontLimit}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.StorefrontLimit = event.target.value
                                                    setRenderData(duplicateData)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/*Discount Percentage*/}
                                    <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                        <div>
                                            <label>Campaign Limit</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData.CampaignLimit}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.CampaignLimit = event.target.value
                                                    setRenderData(duplicateData)
                                                }}
                                            />

                                        </div>
                                    </div>
                                    {/* Discount Name*/}
                                    <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                        <div>
                                            <label>Charge Percentage</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                value={renderData.ChargePercentage}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.ChargePercentage = event.target.value
                                                    setRenderData(duplicateData)
                                                }}
                                            />

                                        </div>
                                    </div>
                                    {/* Discount Start Date*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label> Subscription Charges</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator fnt-poppins"
                                                value={renderData.SubscriptionCharges}
                                                onChange={event => {
                                                    let duplicateData = { ...renderData }
                                                    duplicateData.SubscriptionCharges = event.target.value
                                                    setRenderData(duplicateData)
                                                }} />
                                        </div>
                                    </div>
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">Save</button>
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
export default withRouter(EditSubscription);
