import React, { useState } from 'react'
import InputColor from 'react-input-color';
import { withRouter } from 'react-router-dom'
const CreateCompaign = (props) => {
    let { history } = props;
    const [initial] = useState('#5e72e4');
    const [color, setColor] = useState("");
    const [addMoreImage, setAddMoreImage] = useState("");

    const addImage = () => {
        let duplicateImage = {...addMoreImage}
        duplicateImage.push({image:""})
        setAddMoreImage(duplicateImage)
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
                                <div className="field mrg-top-20 mrg-left-50">
                                    <div className="file is-small has-name ">
                                        <label className="file-label ">
                                            <input className="file-input  " type="file" name="resume" />
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <i className="fas fa-upload"></i>
                                                </span>
                                                <span className="file-label fnt-poppins">
                                                    Choose file...
                                                </span>
                                            </span>
                                            <span className="file-name fnt-poppins">
                                                No file choosen...
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Overlays Image choose button start here */}
                            <div className="mrg-top-20">
                                <label className="overlay-responsive-social-img mrg-left-50 fnt-poppins" >Overlays (max 5 images)</label>
                            </div>
                            {/* First choose file button */}
                            <div className="field mrg-top-20 mrg-left-50">
                                <div className="file is-small has-name ">
                                    <label className="file-label ">
                                        <input className="file-input  " type="file" name="resume" />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <span className="file-label fnt-poppins">
                                                Choose file...
                                            </span>
                                        </span>
                                        <span className="file-name fnt-poppins">
                                            No file choosen...
                                        </span>
                                    </label>
                                </div>
                            </div>
                            {/* Second choose file button */}
                            {addMoreImage && addMoreImage.map((single, index) =>
                                <div key={index}>
                                    <div className="field mrg-top-20 mrg-left-50">
                                        <div className="file is-small has-name ">
                                            <label className="file-label ">
                                                <input className="file-input  " type="file" name="resume"
                                                    value={single.image}
                                                    onChange={event => {
                                                        let duplicateVariation = {...addMoreImage}
                                                        duplicateVariation[index].image = event.target.value
                                                        setAddMoreImage(duplicateVariation)
                                                    }}
                                                />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label fnt-poppins">
                                                        Choose file...
                                            </span>
                                                </span>
                                                <span className="file-name fnt-poppins">
                                                    No file choosen...
                                         </span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* Thirt choose file button  */}
                                    {/* <div className="field mrg-top-20 mrg-left-50">
                                        <div className="file is-small has-name ">
                                            <label className="file-label ">
                                                <input className="file-input  " type="file" name="resume" />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label fnt-poppins">
                                                        Choose file...
                                            </span>
                                                </span>
                                                <span className="file-name fnt-poppins">
                                                    No file choosen...
                                        </span>
                                            </label>
                                        </div>
                                    </div> */}
                                    {/* Fourth choose file button */}
                                    {/* <div className="field mrg-top-20 mrg-left-50">
                                        <div className="file is-small has-name ">
                                            <label className="file-label ">
                                                <input className="file-input  " type="file" name="resume" />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label fnt-poppins">
                                                        Choose file...
                                           </span>
                                                </span>
                                                <span className="file-name fnt-poppins">
                                                    No file choosen...
                                        </span>
                                            </label>
                                        </div>
                                    </div> */}
                                    {/* Fifth choose file button */}
                                    {/* <div className="field mrg-top-20 mrg-left-50">
                                        <div className="file is-small has-name ">
                                            <label className="file-label ">
                                                <input className="file-input  " type="file" name="resume" />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label fnt-poppins">
                                                        Choose file...
                                        </span>
                                                </span>
                                                <span className="file-name fnt-poppins">
                                                    No file choosen...
                                     </span>
                                            </label>
                                        </div>
                                    </div> */}
                                </div>
                            )}
                            <span className="Save-btn-of-form mrg-left-50 fnt-poppins"
                                onClick={() => addImage()}
                            >Add Image</span>
                            {/* hashtag back color */}
                            <div className="mrg-left-50 mrg-top-30">
                                <label className="fnt-poppins ">Hash Tag Back Color</label>
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

                            <div className="Form-main-div-of-sectons flex-row flex-column-responsive">
                                <div className="Form-section1-main-div-of-inputs ">
                                    {/* Campaign Name */}
                                    <div className="Form-Inputs-Fields mrg-top-30 mrg-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="mrg-top-20 fnt-poppins">Campaign Name*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins " type="name" placeholder="Enter Name"></input>
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
                                                <input className="mrg-top-10 fnt-poppins" placeholder="Enter Short Description"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Category */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Category*</label>
                                            </div>
                                            <div>
                                                <select className="has-margin-top-10 fnt-poppins">
                                                    <option>Sports</option>
                                                    <option>Entertainment</option>
                                                    <option>Cause</option>
                                                    <option>Others</option>
                                                    <option>Event</option>
                                                    <option>Peace Campaign</option>
                                                    <option>International Days</option>
                                                    <option>Awareness</option>
                                                    <option>Support</option>
                                                    <option>Charity</option>
                                                    <option>Human Rights</option>
                                                    <option>Animal Rights</option>
                                                    <option>National Days</option>
                                                    <option>Culture</option>
                                                    <option>Political</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* facebook url */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label  >Facebook URL(optional)</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="url" placeholder="Enter facebook url" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hash Tag */}
                                    <div className="Form-Inputs-Fields mrg-top-10 mrg-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Hash-tag</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="Hash-Tag" placeholder="Enter Hash Tag"></input>
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
                                                <input className="mrg-top-10 fnt-poppins" type="date" ></input>
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
                                                <label >Slug*</label>
                                            </div>
                                            <div>
                                                <input className="mrg-top-10 fnt-poppins" type="slug" placeholder="Enter Slug"></input>
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
                                                <label>transparent overlay*</label>
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
                                                <label >Hash-Tag Font:</label>
                                            </div>
                                            <div>
                                                <select className="mrg-top-10 fnt-poppins">
                                                    <option>16</option>
                                                    <option>18</option>
                                                    <option>20</option>
                                                    <option>22</option>
                                                    <option>24</option>
                                                    <option>26</option>
                                                    <option>28</option>
                                                    <option>30</option>
                                                </select>
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