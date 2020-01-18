import React, {useState} from 'react'
import CKEditor from "react-ckeditor-component";

export default () => {
    const [content, setContent] = useState("");
    console.log("content", content);
    return (

        <div className="container-fluid Table-for-administrator-main-div">

            {/* header */}

            <div className="header-of-viewAdministrator">
                <h6 className="heading6-of-header fnt-poppins">Administrator</h6>
                <button className="header-btn-of-table fnt-poppins">Create</button>
            </div>

            {/* Table of Administrator  */}

            <div className="Table-of-administrator">

                <div className="background-of-table">
                    <div className="blanck-dev"></div>

                    {/* Table Section */}
                    <div className="container-fluid  Table-section-starts">
                        <form>
                            {/* Campaign Name */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label className="Campaign-lable">Campaign Name*</label>
                                    </div>
                                    <div>
                                        <input type="name" className="form-control" placeholder="Enter Name"></input>
                                    </div>
                                </div>
                            </div>
                            {/* slug */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Slug*</label>
                                    </div>

                                    <div>
                                        <input type="slug" className="form-control" placeholder="Enter Slug"></input>
                                    </div>
                                </div>
                            </div>
                            {/* Category */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Category*</label>
                                    </div>
                                    <div>
                                        <select className="form-control">
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
                            {/* Short Discriptions */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Short Description</label>
                                    </div>

                                    <div>
                                        <input className="form-control" placeholder="Enter Short Description"></input>
                                    </div>
                                </div>
                            </div>
                            {/* facebook url */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Facebook URL(optional)</label>
                                    </div>

                                    <div>
                                        <input type="url" className="form-control"
                                               placeholder="Enter facebook url"></input>
                                    </div>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="Table-text-area-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Description</label>
                                    </div>

                                    <div>
                                        <CKEditor
                                            content={content ? content : ""}
                                            events={{
                                                "change":(event)=> setContent(event.editor.getData())
                                            }}
                                            className="form-control" placeholder="Enter Description" rows="5"/>
                                    </div>
                                </div>
                            </div>
                            {/* Hash Tag */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Hash-tag</label>
                                    </div>

                                    <div>
                                        <input type="Hash-Tag" className="form-control"
                                               placeholder="Enter Hash Tag"></input>
                                    </div>
                                </div>
                            </div>
                            {/* KeyWord */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Keyword</label>
                                    </div>

                                    <div>
                                        <input type="keyword" className="form-control"
                                               placeholder="Enter Keyword"></input>
                                    </div>
                                </div>
                            </div>
                            {/* Transparency */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Transparency*Minimum 0 - No transparancyMaximum 90 - 90% transparent
                                            overlay*</label>
                                    </div>

                                    <div>
                                        <input type="number" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            {/* Hash Tag Font */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Hash-Tag Font:</label>
                                    </div>

                                    <div>
                                        <select className="form-control">
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
                            {/* Start date */}

                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >Start Date</label>
                                    </div>

                                    <div>
                                        <input type="date" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            {/* End date */}
                            <div className="Table-Inputs-Fields">
                                <div className="form-group">
                                    <div>
                                        <label >End Date</label>
                                    </div>

                                    <div>
                                        <input type="date" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>


    );
}