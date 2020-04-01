import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { CATEGORIES } from '../../apollo/Mutations/categoriesMutation'
import { DELETE_CATEGORY } from '../../apollo/Mutations/deleteCategory'
import ReactPaginate from "react-paginate";
import Loader from '../../commonComponents/Loader/loader'

const ViewCategories = (props) => {
    let { history } = props;

    const [categories] = useMutation(CATEGORIES);
    const [deleteCategory] = useMutation(DELETE_CATEGORY);
    const [data, setData] = useState([]);
    const [totalCategories, setTotalCategories] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [show, setShow] = useState("");
    const [search, setSearch] = useState([]);

    const searchHandler = (value) => {
        let resultData = data ? data.filter(sin => sin.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1) : []
        setSearch(resultData)
    }

    const handlePageClick = (value) => {
        setPage(value.selected + 1);
        categories({
            variables: {
                limit: 10,
                page: value.selected + 1
            }
        })
            .then(res => {
                setData(res && res.data.getCategories && res.data.getCategories.Categories ? res.data.getCategories.Categories : []);
                setTotalPages(res && res.data.getCategories.totalPages ? res.data.getCategories.totalPages : [1])
                setTotalCategories(res && res.data.getCategories && res.data.getCategories.totalCategories);
                setSearch(res && res.data.getCategories && res.data.getCategories.Categories ? res.data.getCategories.Categories : []);
            })
    }

    useEffect(() => {
        categories({
            variables: {
                limit: 10,
                page: 1
            }
        }).then(res => {
            setData(res && res.data.getCategories && res.data.getCategories.Categories ? res.data.getCategories.Categories : []);
            setTotalPages(res && res.data.getCategories.totalPages ? res.data.getCategories.totalPages : [1])
            setTotalCategories(res && res.data.getCategories && res.data.getCategories.totalCategories);
            setSearch(res && res.data.getCategories && res.data.getCategories.Categories ? res.data.getCategories.Categories : []);
        })
    }, []);

    const deleteCategories = (id) => {
        deleteCategory({
            variables: {
                id: parseInt(id),
            }
        }).then(response => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/category")
        })

    }

    return (
        <>
            {data && data.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">Category</h6>
                        <button onClick={() => history.push("/add-category")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Category Records</h6>
                            <input className="input-for-search fnt-poppins" placeholder="Search"
                                onChange={event => {
                                    searchHandler(event.target.value)
                                }}
                            />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <div>
                                <table className="viewAnnouncement-Table">
                                    <thead className="viewAnnouncement-Table-header fnt-poppins">
                                        <tr >
                                            <th className="white-color">Name</th>
                                            <th className="white-color">Status</th>
                                            <th className="white-color">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {search && search.length !== 0 && search.map((single, index) =>
                                            <tr key={index} className="fnt-poppins background-white">
                                                <td>{single.Name ? single.Name : "-"}</td>
                                                <td>{single && single.Status ? single.Status : "-"}</td>
                                                <td>
                                                    <div className="appling-flex-btns">
                                                        <img onClick={() => history.push("/edit-category/" + single.Id)} className="cursor-pointer edit-image-table" alt="edit-button" src={Editlogo} />
                                                        <img className="delete-image-table" alt="delete-button" onClick={() => deleteCategories(single.Id)} src={Deletelogo} />
                                                        <span onClick={() => history.push("/category-details/" + single.Id)} className="cursor-pointer view-btn-of-table ">View Details</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mrg-top-0">
                            <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                                nextLabel={<span className="fa fa-chevron-right "> > </span>}
                                breakLabel={". . ."}
                                breakClassName={"break-me"}
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
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
export default withRouter(ViewCategories);