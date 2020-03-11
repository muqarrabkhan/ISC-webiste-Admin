import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { SETTING } from '../../apollo/Mutations/settingMutation'
import Loader from '../../commonComponents/Loader/loader'
import ReactPaginate from "react-paginate";

const ViewSetting = (props) => {
    let { history } = props;
    const [users, setUsers] = useState([]);
    const [allPages] = useMutation(SETTING);
    const [totalPages, setTotalPage] = useState(1);
    const [totalCustomers, setTotalCustomers] = useState([]);
    const [page, setPage] = useState(1);

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        allPages({
            variables: {
                page: value.selected + 1,
                limit: 5
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.setting ? response.data.setting.settings : []);
            setTotalPage(response && response.data.setting ? response.data.setting.totalPages : [1]);
            setTotalCustomers(response && response.data.setting && response.data.setting.totalsettings);
        })
    }

    useEffect(() => {
        allPages({
            variables: {
                page: 1,
                limit: 10
            }
        }
        ).then(response => {
            setUsers(response && response.data && response.data.setting ? response.data.setting.settings : []);
            setTotalPage(response && response.data.setting ? response.data.setting.totalPages : [1]);
            setTotalCustomers(response && response.data.setting && response.data.setting.totalsettings);
        })
    }, [])

    return (
        <>
            {users && users.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Setting</h6>
                        <button onClick={() => history.push("/add-setting")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Setting Records</h6>
                            <select className="select-option-of-adminstrator fnt-poppins">
                                <option>Select Setting Type</option>
                                <option>General</option>
                                <option>Payment</option>
                                <option>Email</option>
                                <option>Apps</option>
                            </select>
                            <input className="input-for-search fnt-poppins" placeholder="Name" />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <div>
                                <table className="setting-table-main">
                                    <thead className="setting-header-title fnt-poppins">
                                        <tr>
                                            <th className="white-color">Name</th>
                                            <th className="white-color">Key</th>
                                            <th className="white-color">Type</th>
                                            <th className="white-color">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.length !== 0 && users.map((single, index) =>
                                            <tr key={index} className="fnt-poppins background-white">
                                                <td>{single.fieldName ? single.fieldName : "-"}</td>
                                                <td>{single.Keytext ? single.Keytext : "-"}</td>
                                                <td>{single.setting_type ? single.setting_type : "-"}</td>
                                                <td>
                                                    <img onClick={() => history.push("/edit-setting")} className="cursor-pointer edit-image-table setting-edit-btn" alt="edit-button" src={Editlogo} />
                                                    <img className="delete-image-table setting-edit-btn" alt="edit-button" src={Deletelogo} />
                                                </td>
                                            </tr>
                                        )}
                                        <tr className="totalData-row">
                                            <td colSpan={3}>Total</td>
                                            <td>{totalCustomers}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mrg-top-10">
                            <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                                nextLabel={<span className="fa fa-chevron-right "> > </span>}
                                breakLabel={". . ."}
                                breakClassName={"break-me"}
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={pageHandler}
                                containerClassName={"digit-icons main"}
                                subContainerClassName={"container column"}
                                activeClassName={"p-one"} />
                        </div>
                    </div>
                    <Style />
                </div>
                : <Loader />}
        </>
    );
}
export default withRouter(ViewSetting);