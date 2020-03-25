import React, { useState, useEffect } from 'react'
import InputColor from 'react-input-color';
import { withRouter } from 'react-router-dom'
import { SINGLE_CAMPAIGN } from '../../apollo/Quries/singleCampaign'
import { useQuery } from '@apollo/react-hooks';
import { campaignBanner_baseurl, campaignLogo_baseurl } from '../../../config'
import { standardDate } from '../../functions'
import Loader from '../../commonComponents/Loader/loader'

const CompaignDetails = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const [initial] = useState('#5e72e4');
    const [color, setColor] = useState({});
    const { loading, data } = useQuery(SINGLE_CAMPAIGN(id));

    let startDate = data && data.getcampaignbyId && data.getcampaignbyId.StartDate;
    startDate = standardDate(startDate).standardDate;

    let endDate = data && data.getcampaignbyId && data.getcampaignbyId.EndDate;
    endDate = standardDate(endDate).standardDate;

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Campaign Details</h6>
                        <button onClick={() => history.push("/campaign")} className="cursor-pointer cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form>
                        <div className="Table-of-administrator">
                            <div className="container-fluid background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="container  Form-section-startup Form-sections-startups-responsive">
                                    {/* choose file inputs start here */}
                                    {/* Display Social Share Image */}
                                    <div className="has-padding-top-20">
                                        <label className="overlay-responsive-social-img mrg-left-50 fnt-poppins">Banner Image</label>
                                        <div class="field mrg-top-20 mrg-left-50">
                                            <div className="file is-small has-name ">
                                                {data && data.getcampaignbyId &&
                                                    <div className="store-front-image"
                                                        style={{
                                                            backgroundImage: `url(${data.getcampaignbyId.Banner ? campaignBanner_baseurl + data.getcampaignbyId.Banner : "no-image"})`,
                                                            height: "100px",
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            marginLeft: "6%"
                                                        }}>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* Overlays Image choose button start here */}
                                    {data && data.getcampaignbyId && data.getcampaignbyId.Logo && data.getcampaignbyId.Logo ?
                                        <div className="mrg-top-20">
                                            <label className="overlay-responsive-social-img mrg-left-50 fnt-poppins" >Logo</label>
                                        </div>
                                        : ""}
                                    {/* First choose file button */}
                                    <div className="field mrg-top-20  mrg-left-50">
                                        <div className="file is-small has-name ">
                                            {data && data.getcampaignbyId && data.getcampaignbyId.Logo && data.getcampaignbyId.Logo.map(single =>
                                                <div className="store-front-image"
                                                    style={{
                                                        backgroundImage: `url(${single.Logo ? campaignBanner_baseurl + single.Logo : "no-image"})`,
                                                        height: "100px",
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        marginLeft: "6%"
                                                    }}>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* hashtag back color */}
                                    {/* <label className="fnt-poppins mrg-left-50">Hash Tag Back Color</label> */}
                                    <div className="is-flex">
                                        <div className="mrg-left-50 mrghas-margin-top-30">
                                            {data && data.getcampaignbyId && data.getcampaignbyId.Secondary_color ?
                                                <div>
                                                    <div className="react-input-color mrg-top-20"
                                                        style={{
                                                            width: 80,
                                                            height: 50,
                                                            marginBottom: 20,
                                                            backgroundColor: data && data.getcampaignbyId && data.getcampaignbyId.Secondary_color
                                                        }}>
                                                        {/* {color.hex} */}
                                                    </div>
                                                    <label>Secondary Color</label>
                                                </div>
                                                : ""}
                                        </div>
                                        <div className="mrg-left-50 mrghas-margin-top-30">
                                            {data && data.getcampaignbyId && data.getcampaignbyId.Tertiary_color ?
                                                <div>
                                                    <div className="react-input-color mrg-top-20"
                                                        style={{
                                                            width: 80,
                                                            height: 50,
                                                            marginBottom: 20,
                                                            backgroundColor: data && data.getcampaignbyId && data.getcampaignbyId.Tertiary_color
                                                        }}>
                                                        {/* {color.hex} */}
                                                    </div>
                                                    <label>Tertiary Color</label>
                                                </div>
                                                : ""}
                                        </div>
                                        <div className="mrg-left-50 mrghas-margin-top-30">
                                            {data && data.getcampaignbyId && data.getcampaignbyId.Primary_color ?
                                                <div>
                                                    <div className="react-input-color mrg-top-20"
                                                        style={{
                                                            width: 80,
                                                            height: 50,
                                                            marginBottom: 20,
                                                            backgroundColor: data && data.getcampaignbyId && data.getcampaignbyId.Primary_color
                                                        }}>
                                                        {/* {color.hex} */}
                                                    </div>
                                                    <label>Primary Color</label>
                                                </div>
                                                : ""}
                                        </div>
                                    </div>
                                    <div className="Form-main-div-of-sectons flex-row flex-column-responsive">
                                        <div className="Form-section1-main-div-of-inputs  ">
                                            {/* Campaign Name */}
                                            <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                                <div className="form-group">
                                                    <div>
                                                        <label className="mrg-top-20 fnt-poppins">Campaign Name*</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins" type="name"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.Name : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Short Discriptions */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label >Short Description</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.ShortDescription : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Category */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                        <label className="">
                                                            {data && data.getcampaignbyId && data.getcampaignbyId.CampaignType === "Fundraiser" ? "Monetary Goal" : ""}
                                                            {data && data.getcampaignbyId && data.getcampaignbyId.CampaignType === "Petition" ? "Petition Goal" : ""}
                                                            {data && data.getcampaignbyId && data.getcampaignbyId.CampaignType === "Pledge" ? "No of Pledges Aiming For" : ""}
                                                            {data && data.getcampaignbyId && data.getcampaignbyId.CampaignType === "Support" ? "Support" : ""}
                                                        </label>
                                                   
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins" type="Hash-Tag"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.goal_support : "-"}
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                            {/* facebook url */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label>Facebook URL(optional)</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.facebook_url : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Hash Tag */}
                                            <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div className="form-group">
                                                        <div>
                                                            <label >End Date</label>
                                                        </div>
                                                        <div>
                                                            <input className="mrg-top-10 fnt-poppins"
                                                                disabled
                                                                value={endDate ? endDate : "-"}
                                                            ></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Start date */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label >Start Date</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins"
                                                            disabled
                                                            value={startDate ? startDate : "-"}
                                                        ></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Form section2 dv start here */}
                                        <div className="Form-section2-main-div-of-inputs mrg-top-10">
                                            {/* slug */}
                                            <div className="Form-Inputs-Fields mrg-top-20 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label >Campaign Type</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins" type="slug"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.CampaignType : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Description */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label>Description</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins" type="keyword"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.Description : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* KeyWord */}

                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label >Category</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins" type="keyword"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.CategoryId : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Transparency */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label>Website Url</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.website_url : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Hash Tag Font */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                                <div className="form-group">
                                                    <div>
                                                        <label >Twitter Url</label>
                                                    </div>
                                                    <div>
                                                        <input className="mrg-top-10 fnt-poppins"
                                                            disabled
                                                            value={data && data.getcampaignbyId ? data.getcampaignbyId.twitter_url : "-"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End date */}
                                            <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">                                                
                                            </div>
                                        </div>
                                    </div>
                                    {/* Form section2 div end here */}
                                    {/* file chosen button end here */}
                                    {/* Cancel and Save button */}
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins">Save</button>
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

export default withRouter(CompaignDetails);