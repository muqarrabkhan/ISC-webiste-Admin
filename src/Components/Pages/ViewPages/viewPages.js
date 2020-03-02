import React from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../apollo/Quries/pagesQurie'
import Loader from '../../commonComponents/Loader/loader'

const ViewPages = (props) => {
    let { history } = props;
    const { loading, data } = useQuery(PAGES);

    return (

        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Pages</h6>
                        <button onClick={() => history.push("/add-pages")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Pages Record</h6>
                            <input className="input-for-search fnt-poppins" placeholder="Slug" />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Page Title</th>
                                        <th>Slug</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {data && data.length !== 0 && data.getwebpages.map((single, index) =>
                                        <tr className="table-row-data-of-body fnt-poppins">
                                            <td>{single.pageTitle ? single.pageTitle : "-"}</td>
                                            <td>{single.slug ? single.slug : "-"}</td>
                                            <td>
                                                <div className="is-flex">
                                                    <img onClick={() => history.push("/edit-pages")} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                    <img className="cursor-pointer delete-image-table" alt="delete-button" src={Deletelogo} />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Style />
                </div>

                : <Loader />}
        </>

    );
}
export default withRouter(ViewPages);