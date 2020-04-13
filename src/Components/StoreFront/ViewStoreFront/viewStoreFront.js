import React, { useState, useEffect } from 'react'
import Editlogo from '../../../assets/Images/edit.svg'
import Deletelogo from '../../../assets/Images/delete.svg'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { GET_ALL_STOREFRONT } from '../../apollo/Mutations/storefrontMutation'
import { DELETE_STOREFRONT } from '../../apollo/Mutations/deleteStoreFront'
import Loader from '../../commonComponents/Loader/loader'
import ReactPaginate from "react-paginate";
import { standardDate } from '../../functions/index'
import cookie from 'react-cookies'

const ViewStoreFront = (props) => {
    let { history } = props;
    const [storeFront] = useMutation(GET_ALL_STOREFRONT);
    const [deleteStoreFront] = useMutation(DELETE_STOREFRONT);
    const [data, setData] = useState("");
    const [totalPages, setTotalPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState([]);
    const searchHandler = (name) => {
        let resultData = data ? data.filter(sin => sin.Name.toLowerCase().indexOf(name.toLowerCase()) !== -1) : []
        setSearch(resultData)
    }

    const pageHandler = (value) => {
        setPage(value.selected + 1);
        storeFront({
            variables: {
                page: value.selected + 1,
                limit: 10
            }
        }
        ).then(response => {
            setSearch(response && response.data.allStorefrontsPagination && response.data.allStorefrontsPagination.storefronts)
            setData(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.storefronts : []);
            setTotalPage(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.totalPages : [1]);
            setTotalProducts(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.totalstorefronts : []);

        })
    }

    useEffect(() => {
        storeFront({
            variables: {
                page: 1,
                limit: 10
            }
        }
        ).then(response => {
            setSearch(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.storefronts : [])
            setData(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.storefronts : []);
            setTotalPage(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.totalPages : [1]);
            setTotalProducts(response && response.data.allStorefrontsPagination ? response.data.allStorefrontsPagination.totalstorefronts : []);
        })
    }, [])

    let token = cookie.load("token")
    const deleteSingleStoreFront = (id) => {
        deleteStoreFront({
            variables: {
                Id: parseInt(id),
                token: token
            }
        }).then(response => {
            if (window.confirm("Are you sure you want to delete Data"));
            window.location.replace("/storefront")
        })
    }

    return (
        <>
            {data && data.length !== 0 ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">StoreFront</h6>
                        <button onClick={() => history.push("/add-storefront")} className="cursor-pointer header-btn-of-table fnt-poppins">Create</button>
                    </div>
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All StoreFront Records</h6>
                            <input className="input-for-search fnt-poppins input-for-search-user-1" placeholder="Name"
                                onChange={event => searchHandler(event.target.value)}
                            />
                        </div>
                        {/* Table-Title */}
                        <div className="container-fluid Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Name</th>
                                        <th>Created</th>
                                        <th>Created Assign</th>
                                        <th>Product Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {search && search.length !== 0 && search.map((single, index) =>
                                        <tr key={index} className="border-bottom table-row-data-of-body fnt-poppins">
                                            <td>{single.Name}</td>
                                            <td>{standardDate(single.CreatedDate).standardDate}</td>
                                            <td className="has-margin-top-15">{single.totalQuantity}</td>
                                            <td style={{ padding: "0px" }}>
                                                {single && single.length !== 0 && single.products.map(sin =>
                                                    <td style={{ padding: "0px" }}>
                                                        <td>{sin.product && sin.product.Name ? sin.product.Name : "-"}</td>
                                                    </td>
                                                )}
                                            </td>
                                            <td>
                                                <div className="applying-flex-products-btn">
                                                    <img onClick={() => history.push("/edit-storefront/" + single.Id)} className=" cursor-pointer edit-image-table view-subscription-btn-edit" alt="edit-button" src={Editlogo} />
                                                    <img className="cursor-pointer delete-image-table" alt="delete-button" src={Deletelogo}
                                                        onClick={() => deleteSingleStoreFront(single.Id)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                    )}
                                    <tr>
                                    </tr>
                                    <tr className="table-footer">
                                        <td colSpan={4}>Total</td>
                                        <td>{totalProducts}</td>
                                    </tr>
                                </tbody>
                            </table>
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
                :
                <Loader />}
        </>
    );
}
export default withRouter(ViewStoreFront)