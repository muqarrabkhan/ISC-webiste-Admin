import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { EDIT_CATEGORY } from '../../apollo/Mutations/updateCategory'
import { SINGLE_CATEGORY } from '../../apollo/Quries/singleCategoryQurie'
import Loader from '../../commonComponents/Loader/loader'

const EidtCategory = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_CATEGORY(id))
    const [editCategory] = useMutation(EDIT_CATEGORY);
    const [renderData, setRenderData] = useState();
    const [buttonText,setButtonText]=useState("Update");

    const editData = (event) => {
        event.preventDefault();
        setButtonText("Updating...")
        editCategory({
            variables: {
                Id: parseInt(id),
                Name: renderData.Name,
                description: renderData.description
            }
        }).then(res => {
            setButtonText("Updated")
        })
    }

    useEffect(() => {
        setRenderData(data && data.SingleCategory);
    }, [data])

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Edit Category</h6>
                        <button onClick={() => history.push("/category")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    {/* Table of Administrator  */}
                    <form onSubmit={event => editData(event)}>
                        <div className="Table-of-administrator">
                            <div className="background-of-table">
                                <div className="blanck-dev"></div>
                                {/* Table Section */}
                                <div className="Form-section-startup">
                                    <div className="has-margin-bottom-20 extra-div">
                                    </div>
                                    {/* Category Name***/}
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Category Name*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator fnt-poppins"
                                                value={renderData && renderData.Name}
                                                onChange={event => {
                                                    let duplicateRenderData = { ...renderData }
                                                    duplicateRenderData.Name = event.target.value;
                                                    setRenderData({ ...duplicateRenderData })
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* Description**/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Description*</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <textarea className="textarea-of-admistrator fnt-poppins"
                                                value={renderData && renderData.description}
                                                onChange={event => {
                                                    let duplicateDiscription = { ...renderData }
                                                    duplicateDiscription.description = event.target.value;
                                                    setRenderData({ ...duplicateDiscription })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* buttons */}
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">{buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(EidtCategory);