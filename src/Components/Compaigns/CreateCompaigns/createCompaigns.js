import React, { useState } from 'react'
import InputColor from 'react-input-color';
import {Link} from 'react-router-dom'

export default () => {
    const [initial] = useState('#5e72e4');
    const [color, setColor] = useState({});

    return (
        <div className="container-fluid Table-for-administrator-main-div">
            {/* header */}
            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Add Campaign</h6>
                <Link to={"/campaign"}><button className="header-btn-of-table fnt-poppins">Back</button></Link>
            </div>
            {/* Table of Administrator  */}
            <form >
                <div className="Table-of-administrator">
                    <div className="container-fluid background-of-table">
                        <div className="blanck-dev"></div>
                        {/* Table Section */}
                        <div className="container  Form-section-startup">
                            {/* choose file inputs start here */}
                            {/* Display Social Share Image */}
                            <div className="has-padding-top-20">
                                <label className="has-margin-left-50 fnt-poppins">Dispaly/Social Share Image</label>
                                <div className="field has-margin-top-20 has-margin-left-50">
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
                            <div className="has-margin-top-20">
                                <label className="has-margin-left-50 fnt-poppins" >Overlays (max 5 images)</label>
                            </div>
                            {/* First choose file button */}
                            <div className="field has-margin-top-20 has-margin-left-50">
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
                            <div className="field has-margin-top-20 has-margin-left-50">
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
                            {/* Thirt choose file button  */}
                            <div className="field has-margin-top-20 has-margin-left-50">
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
                            {/* Fourth choose file button */}
                            <div className="field has-margin-top-20 has-margin-left-50">
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
                            {/* Fifth choose file button */}
                            <div className="field has-margin-top-20 has-margin-left-50">
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
                            <button className="Save-btn-of-form has-margin-left-50 fnt-poppins">Delete</button>
                            {/* hashtag back color */}
                            <div className="has-margin-left-50 has-margin-top-30">
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

                            <div className="Form-main-div-of-sectons flex-row">
                                <div className="Form-section1-main-div-of-inputs ">
                                    {/* Campaign Name */}
                                    <div className="Form-Inputs-Fields has-margin-top-30 has-margin-left-50">
                                        <div className="form-group">
                                            <div>
                                                <label className="has-margin-top-20 fnt-poppins">Campaign Name*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins " type="name" placeholder="Enter Name"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Short Discriptions */}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Short Description</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" placeholder="Enter Short Description"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Category */}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
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
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label  >Facebook URL(optional)</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="url" placeholder="Enter facebook url" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hash Tag */}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Hash-tag</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="Hash-Tag" placeholder="Enter Hash Tag"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start date */}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Start Date</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="date" ></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Form section2 dv start here */}
                                <div className="Form-section2-main-div-of-inputs has-margin-top-10">
                                    {/* slug */}
                                    <div className="Form-Inputs-Fields has-margin-top-20 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Slug*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="slug" placeholder="Enter Slug"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Description */}

                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>Description</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="keyword" placeholder="Enter Keyword"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* KeyWord */}

                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Keyword</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="keyword" placeholder="Enter Keyword"></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Transparency */}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label>transparent overlay*</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="number" ></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hash Tag Font */}
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >Hash-Tag Font:</label>
                                            </div>
                                            <div>
                                                <select className="has-margin-top-10 fnt-poppins">
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
                                    <div className="Form-Inputs-Fields has-margin-top-10 has-margin-left-50 fnt-poppins">
                                        <div className="form-group">
                                            <div>
                                                <label >End Date</label>
                                            </div>
                                            <div>
                                                <input className="has-margin-top-10 fnt-poppins" type="date"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Form section2 div end here */}
                            {/* Cancel and Save button */}
                            <div className="btns-of-add has-margin-left-60 has-margin-top-30 fnt-poppins">
                                <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                <button className="Save-btn-of-form has-margin-left-20 fnt-poppins">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}