import React, { useState, useEffect } from 'react'
import '../../../assets/Style/Common.scss'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_USER } from '../../apollo/Mutations/updateUser'
import { useQuery } from '@apollo/react-hooks'
import { standardDate } from '../../functions'
import { SINGLE_USER } from '../../apollo/Quries/singleUser'
import Loader from '../../commonComponents/Loader/loader'
import uuid from 'uuid'
import cookie from 'react-cookies'

const EditUser = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const [renderData, setRenderData] = useState("");
    let token = cookie.load("token")
    const { loading, data } = useQuery(SINGLE_USER(token));
    const [editData] = useMutation(UPDATE_USER);
    const [hideShow, setHideShow] = useState(false);
    const [hidePassword, setHidePassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("")
    const [btnText, setBtnText] = useState("Update");
    let uid = uuid();

    // method for show and hide password
    const hideShowPassword = () => {
        if (hidePassword == false) {
            setHidePassword(true);
        }
        else {
            setHidePassword(false)
        }
    }

    useEffect(() => {
        let duplicateData = data && data.getuserbyId ? { ...data.getuserbyId } : {}
        setRenderData(duplicateData);
    }, [data, data && data.getuserbyId])


    const updateUser = (event) => {
        event.preventDefault();
        if (hideShow == true && hidePassword == false) {
            setBtnText("Updating...")
            editData({
                variables: {
                    Id: parseInt(id),
                    Name: renderData.Name && renderData.Name,
                    Status: renderData && renderData.Status,
                    Password: password ? password : uid.toString()
                }
            }).then(res => {
                setBtnText("Updated");
            }).catch(error => {
                setBtnText("Update")
            })
        }
        else if (hideShow == true && hidePassword == true) {
            if (!password && !confirmPassword) {
                window.alert("Enter Password");
            }
            else if (password !== confirmPassword) {
                window.alert("Password not matching");
            }
            else {
                setBtnText("Updating...")
                editData({
                    variables: {
                        Id: parseInt(id),
                        Name: renderData.Name,
                        Status: renderData && renderData.Status ? renderData.Status : "",
                        Password: password
                    }
                }).then(res => {
                    setBtnText("Updated");
                }).catch(error => {
                    setBtnText("Update")
                })
            }
        }
        else if (hideShow == false && hidePassword == false) {
            setBtnText("Updating...")
            editData({
                variables: {
                    Id: parseInt(id),
                    Name: renderData.Name,
                    Status: renderData && renderData.Status ? renderData.Status : "",
                    Password: password ? password : ""
                }
            }).then(res => {
                setBtnText("Updated");
            }).catch(error => {
                setBtnText("Update")
            })
        }
    }

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Edit User</h6>
                        <button onClick={() => history.push("/users")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
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
                                    {/* Name*/}
                                    <div className="mrg-left-60 fnt-poppins">
                                        <div>
                                            <label>Name</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="inputs-of-admistrator"
                                                required
                                                value={renderData && renderData.Name}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.Name = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* Email*/}
                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                        <div>
                                            <label>Status</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <select className="inputs-of-admistrator fnt-poppins"
                                                value={renderData && renderData.Status}
                                                onChange={event => {
                                                    let dupilcateName = { ...renderData }
                                                    dupilcateName.Status = event.target.value
                                                    setRenderData({ ...dupilcateName })
                                                }}
                                            >
                                                <option>Select Status</option>
                                                <option value="Enable">Enable</option>
                                                <option value="Delete">Delete</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* checkbox */}
                                    <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                        <div>
                                            <label>Update Password</label>
                                        </div>
                                        <div className="mrg-top-10">
                                            <input className="checkbox-for-edit-forms mrg-left-5" type="checkbox"
                                                onClick={() => {
                                                    if (hideShow == false) {
                                                        setHideShow(true)
                                                    }
                                                    else {
                                                        setHideShow(false)
                                                        setHidePassword(false);
                                                    }
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* Select Password*/}
                                    {hideShow &&
                                        <div>
                                            <div className="mrg-left-60 fnt-poppins mrg-top-20">
                                                <div>
                                                    <label>Select Password</label>
                                                </div>
                                                <div className="mrg-top-10">
                                                    <select className="inputs-of-admistrator fnt-poppins"
                                                        onChange={event => hideShowPassword(event.target.value)}
                                                    >
                                                        <option>Random Password</option>
                                                        <option>Custom Password</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Password*/}
                                            {hidePassword &&
                                                <div>
                                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                                        <div>
                                                            <label>Password</label>
                                                        </div>
                                                        <div className="mrg-top-10">
                                                            <input type="password" className="inputs-of-admistrator"
                                                                value={password}
                                                                required
                                                                onChange={event => {
                                                                    setPassword(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Confirm Password*/}
                                                    <div className="mrg-left-60 mrg-top-20 fnt-poppins">
                                                        <div>
                                                            <label>Confirm Password</label>
                                                        </div>
                                                        <div className="mrg-top-10">
                                                            <input type="password" className="inputs-of-admistrator"
                                                                required
                                                                value={confirmPassword}
                                                                onChange={event => setConfirmPassword(event.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>}
                                        </div>
                                    }
                                    <div className="btns-of-add mrg-left-60 mrg-top-30 fnt-poppins">
                                        <button className="cancel-btn-of-form fnt-poppins">Cancel</button>
                                        <button className="Save-btn-of-form mrg-left-20 fnt-poppins" type="submit">{btnText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <Style/> */}
                </div>
                : <Loader />
            }
        </>
    );
}
export default withRouter(EditUser);