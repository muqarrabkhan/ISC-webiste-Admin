import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { SINGLE_CATEGORY } from '../../apollo/Quries/singleCategoryQurie'
import Loader from '../../commonComponents/Loader/loader'
import { standardDate } from '../../functions'
import { getParams } from '../../functions'

const CategoryDetails = (props) => {
    let { history, match , location } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    let path = getParams(location.search);
    const { loading, data } = useQuery(SINGLE_CATEGORY(id));
    let date = data && data.length !== 0 && data.SingleCategory ? data.SingleCategory.CreatedDate : "";
    date = standardDate(date).standardDate;

    return (
        <>
            {!loading ?

                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    < div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Category Information</h6>
                        <button onClick={() => history.goBack("/category?page=" + path)} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Category Name*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator fnt-poppins cursor-pointer-not-allowed" disabled
                                                value={data && data.length !== 0 && data.SingleCategory && data.SingleCategory.Name} />
                                        </div>
                                    </div>
                                    {/* Description**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Description*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <textarea className="textarea-of-admistrator fnt-poppins cursor-pointer-not-allowed" disabled
                                                value={data && data.length !== 0 && data.SingleCategory && data.SingleCategory.description} />
                                        </div>
                                    </div>
                                    {/*Creation Info*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Creation Info*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <textarea className="textarea-of-admistrator fnt-poppins cursor-pointer-not-allowed" disabled
                                                value={date} />
                                        </div>
                                    </div>
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins"
                                            onClick={() => history.goBack("/category?page=" + path)}
                                        >Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins"
                                            onClick={() => history.push("/edit-category/" + id)}
                                        >Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
                : <Loader />}
        </>
    );
}
export default withRouter(CategoryDetails);