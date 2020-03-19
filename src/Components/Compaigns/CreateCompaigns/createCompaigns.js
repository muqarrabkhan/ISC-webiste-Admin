import React, { useState } from 'react'
import InputColor from 'react-input-color';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { campaignBanner_baseurl, campaignLogo_baseurl, apiPath } from '../../../config'
import { CREATE_CAMPAIGN } from '../../apollo/Mutations/createCampaign'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { CAMPAIGN_CATEGORIES } from '../../apollo/Quries/campaignCategories';

const CreateCompaign = (props) => {
    let { history } = props;
    const { loading, data } = useQuery(CAMPAIGN_CATEGORIES, { context: { clientName: "second" } });

    // states for colors
    const [initial] = useState('#5e72e4');
    const [Secondary] = useState('#EC2027');
    const [Tertiary] = useState('#000000');
    const [color, setColor] = useState("");
    const [secondaryColor, setSecondaryColor] = useState("");
    const [tertiary, setTertiaryColor] = useState("");

    const [addMoreImage, setAddMoreImage] = useState("");
    const [bannerimage, setBannerImage] = useState("");
    const [overLayimage, setOverlayImage] = useState("");

    const [createCampaign] = useMutation(CREATE_CAMPAIGN);

    const addImage = () => {
        let duplicateImage = [...addMoreImage]
        duplicateImage.push({ image: "" })
        setAddMoreImage(duplicateImage)
    }


    const uploadProductImage = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(
            data => {
                let final = {
                    imageFile: data,
                    imageTitle: file.name.split('.').slice(0, -1).join('.').replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '-').toLowerCase()
                };
                axios.post(apiPath + "/uploadProductMedia", final).then(res => {
                    setBannerImage(res.data.imageUrl);
                });
            });
    };

    const uploadOverlayImage = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(
            data => {
                let final = {
                    imageFile: data,
                    imageTitle: file.name.split('.').slice(0, -1).join('.').replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '-').toLowerCase()
                };
                axios.post(apiPath + "/uploadProductMedia", final).then(res => {
                    setOverlayImage(res.data.imageUrl)
                });
            });
    };



    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };


    const [name, setName] = useState("")
    const [campaignType, setCampaignType] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [goalSupport, setgoal_support] = useState("")
    const [facebook, setfacebook_url] = useState("")
    const [twitter, settwitter_url] = useState("")
    const [website, setwebsite_url] = useState("")
    const [primary_color, setPrimary_color] = useState("")
    const [secondary_Color, setSecondary_Color] = useState("")
    const [tertiary_Color, setTertiary_Color] = useState("")
    const [overlay, setOverlay] = useState("")
    const [banner, setBanner] = useState("")
    // Createduser
    // StorefrontId


    const onSubmit = (event) => {
        event.preventDefault();
        createCampaign({
            variables: {
                // Name,
                // CampaignType,
                // ShortDescription,
                // CategoryId,
                // Description,
                // StartDate:$StartDate,
                // EndDate:$EndDate,
                // goal_support,
                // facebook_url,
                // twitter_url,
                // website_url,
                // Primary_color,
                // Secondary_color,
                // Tertiary_color,
                // Overlay,
                // Banner,
                // Createduser,
                // StorefrontId
            }
        }).then(res => {
            history.push("/product")
        })
    }


    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Campaign</h6>
                <button onClick={() => history.push("/campaign")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
            </div>
            {/* Table of Administrator  */}
            <form >
                <div className="Table-of-administrator">
                    <div className="container-fluid background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="container  Form-section-startup Form-sections-startups-responsive">
                            {/* choose file inputs start here */}
                            {/* Display Social Share Image */}
                            <div className="has-padding-top-20">
                                <label className="overlay-responsive-social-img mrg-left-50 fnt-poppins">Dispaly/Social Share Image</label>
                                <div className="field mrg-top-20">
                                    <div className="Form-section2-uploading-image">
                                        <div className="has-padding-top-20">
                                            {bannerimage ?
                                                <div className="store-front-image"
                                                    style={{
                                                        backgroundImage: `url(${bannerimage ? campaignBanner_baseurl + bannerimage : "no-image"})`,
                                                        height: "100px",
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        marginLeft: "6%"
                                                    }}>
                                                </div>
                                                :
                                                <img className="dashboard_icon"
                                                    src={require('../../../assets/Images/admin.png')}
                                                    style={{
                                                        height: "100px",
                                                        width: "95px",
                                                        backgroundRepeat: "no-repeat",
                                                        marginLeft: "7%"
                                                    }}
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div className="file is-small has-name has-margin-left-60 has-padding-left-20">
                                        <label className="file-label">
                                            <input className="file-input fnt-poppins"
                                                type="file" name="resume"
                                                accept="image/*"
                                                onChange={event => uploadProductImage(event)} />
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <i className="fas fa-upload"></i>
                                                </span>
                                                <span className="file-label">
                                                    Choose file
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Overlays Image choose button start here */}
                            <div className="mrg-top-20">
                                <label className="overlay-responsive-social-img mrg-left-50 fnt-poppins" >Overlays Image</label>
                            </div>
                            {/* Second choose file button */}
                            {addMoreImage && addMoreImage.map((single, index) =>
                                <div key={index}>
                                    <div className="Form-section2-uploading-image">
                                        <div className="has-padding-top-20">
                                            {overLayimage ?
                                                <div className="store-front-image"
                                                    style={{
                                                        backgroundImage: `url(${overLayimage ? campaignLogo_baseurl + overLayimage : "no-image"})`,
                                                        height: "100px",
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        marginLeft: "6%"
                                                    }}>
                                                </div>
                                                :
                                                <img className="dashboard_icon"
                                                    src={require('../../../assets/Images/admin.png')}
                                                    style={{
                                                        height: "100px",
                                                        width: "95px",
                                                        backgroundRepeat: "no-repeat",
                                                        marginLeft: "7%"
                                                    }}
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div className="file is-small has-name has-margin-left-60 has-padding-left-20">
                                        <label className="file-label">
                                            <input className="file-input fnt-poppins"
                                                type="file" name="resume"
                                                accept="image/*"
                                                onChange={event => uploadOverlayImage(event)} />
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <i className="fas fa-upload"></i>
                                                </span>
                                                <span className="file-label">
                                                    Choose file
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            )}
                            <div className="has-margin-top-10">
                                <span className="Save-btn-of-form has-padding-5  mrg-left-50 has-margin-top-10 fnt-poppins"
                                    onClick={() => addImage()}
                                >Add Image</span>
                            </div>
                            {/* hashtag back color */}
                            <div className="is-flex">
                                <div className="mrg-left-50 mrg-top-30">
                                    <label className="fnt-poppins ">Primary Color</label>
                                    <div className="react-input-color has-margin-top-20"
                                        style={{
                                            width: 80,
                                            height: 50,
                                            marginBottom: 20,
                                            backgroundColor: color.hex
                                        }}>
                                        {color.hex}
                                    </div>
                                    <InputColor initialHexColor={initial} onChange={setColor} />
                                </div>
                                <div className="mrg-left-50 mrg-top-30">
                                    <label className="fnt-poppins ">Secondary Color</label>
                                    <div className="react-input-color has-margin-top-20"
                                        style={{
                                            width: 80,
                                            height: 50,
                                            marginBottom: 20,
                                            backgroundColor: secondaryColor.hex
                                        }}>
                                        {secondaryColor.hex}
                                    </div>
                                    <InputColor initialHexColor={Secondary} onChange={setSecondaryColor} />
                                </div>
                                <div className="mrg-left-50 mrg-top-30">
                                    <label className="fnt-poppins ">Tertiary Color</label>
                                    <div className="react-input-color has-margin-top-20"
                                        style={{
                                            width: 80,
                                            height: 50,
                                            marginBottom: 20,
                                            backgroundColor: tertiary.hex

                                        }}>
                                        {tertiary.hex}
                                    </div>

                                    <InputColor initialHexColor={Tertiary} onChange={setTertiaryColor} />
                                </div>
                            </div>
                            <div className="Form-main-div-of-sectons flex-row flex-column-responsive">
                                <div className="Form-section1-main-div-of-inputs ">
                                    {/* Campaign Name */}
                                    <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="mrg-top-20 fnt-poppins">*Campaign Main Headline (100 characters)</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins " type="name" placeholder="Enter Name"
                                                    value={name}
                                                    onChange={event => setName(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Short Discriptions */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Secondary Headline (300 characters)</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" placeholder="Enter Short Description"
                                                    value={shortDescription}
                                                    onChange={event => setShortDescription(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Category */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Select Currency</label>
                                            </div>
                                            <div>
                                                <select className="mrg-top-10 fnt-poppins" type="slug" placeholder="Enter Slug">
                                                    <option>Choose Currency</option>
                                                    <option>UND</option>
                                                    <option>INR</option>
                                                    <option>Euro</option>
                                                </select>
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
                                                <input className="mrg-top-10 fnt-poppins" type="url" placeholder="Enter facebook url"
                                                    value={facebook}
                                                    onChange={event => setfacebook_url(event.target.value)}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hash Tag */}
                                    {/* <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Hash-tag</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="Hash-Tag" placeholder="Enter Hash Tag"></input>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* Start date */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Start Date</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="date"
                                                    value={startDate}
                                                    onChange={event => setName(event.target.value)}

                                                />
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
                                                <label >Category*</label>
                                            </div>
                                            <div>
                                                <select className="has-margin-top-10 fnt-poppins">
                                                    <option>Select Category</option>
                                                    {data && data.campaignCategories && data.campaignCategories.map((single, index) =>
                                                        <option value={single.Id}>{single.Name}</option>
                                                    )}
                                                </select>
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
                                                <input className="mrg-top-10 fnt-poppins" type="keyword" placeholder="Enter Keyword"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* KeyWord */}

                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Keyword</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="keyword" placeholder="Enter Keyword"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Transparency */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Twitter Url</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="number" ></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hash Tag Font */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Website Url</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* End date */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >End Date</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="date"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Form section2 div end here */}
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
    );
}
export default withRouter(CreateCompaign)