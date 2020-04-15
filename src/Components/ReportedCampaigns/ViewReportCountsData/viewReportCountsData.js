import React, { useEffect, useState } from 'react'
import Style from './style'
import { withRouter } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/react-hooks'
import Loader from '../../commonComponents/Loader/loader'
import { SINGLE_REPORT } from '../../apollo/Quries/singleReports'

const ViewCompaign = (props) => {
    let { history, match } = props;
    let id = match.params && match.params.id ? match.params.id : "";
    const { loading, data } = useQuery(SINGLE_REPORT(id))
    const [reports, setReports] = useState("")

    useEffect(() => {
        setReports(data && data.getReportsByCampaignId)
    }, [data])

    return (
        <>
            {!loading ?
                <div className="container-fluid Table-for-administrator-main-div">
                    {/* header */}
                    <div className="header-of-viewAdministrator">
                        <h6 className="heading6-of-header fnt-poppins">All Reports</h6>
                        <button onClick={() => history.push("/all-reported-campaigns")} className="cursor-pointer header-btn-of-table fnt-poppins">Back</button>
                    </div>
                    
                    {/* Table of Administrator  */}
                    <div className="Table-of-administrator">
                        <div className="background-of-table">
                        </div>
                        <div className="Table-Header">
                            <h6 className="fnt-poppins">All Reports Record</h6>
                        </div>
                        {/* Table-Title */}
                        <div className="Table-title">
                            <table className="main-table-heading">
                                <thead className="heading-of-table background-color-head">
                                    <tr className="table-row-of-head fnt-poppins">
                                        <th>Content</th>
                                        <th>Catagory</th>
                                    </tr>
                                </thead>
                                <tbody className="table-of-data">
                                    {reports && reports.length !== 0 ? reports.map((single, index) =>
                                        <tr key={index} className="table-row-data-of-body fnt-poppins">
                                            <td>{single.content ? single.content : "-"}</td>
                                            <td>{single.category ? single.catagory : "-"}</td>
                                        </tr>
                                    ) :
                                        <tr className="has-padding-top-10 has-padding-bottom-10 ">
                                            <td colSpan={2} className="fnt-size-25 fnt-weight-600 fnt-poppins" style={{ textAlign: "center" }}>No Record Found</td>
                                        </tr>
                                    }
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

export default withRouter(ViewCompaign);