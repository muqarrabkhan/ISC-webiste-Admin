import React, { useEffect, useState } from 'react'
import Image1 from '../../assets/Images/larki.jpg'
import { withRouter } from 'react-router-dom'
import Style from './style'
import ReactPaginate from "react-paginate";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADMIN_DASHBOARD } from '../apollo/Quries/dashboardQurie'
import { DASHBOARD_MUTATION } from '../apollo/Mutations/dashboardMutation'
import Loader from '../commonComponents/Loader/loader'

const Dashboard = () => {

  // const {loading, error, data} = useQuery(ADMIN_DASHBOARD, { context: { clientName: "second" } });
  const { loading, data } = useQuery(ADMIN_DASHBOARD);
  const [allCompagins] = useMutation(DASHBOARD_MUTATION);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    allCompagins({
      variables: {
        limit: 10,
        page: 1,
        CampaignType: ""
      }
    })
      .then(res => {
        setCards(res && res.data && res.data.lastWeekCampaignPagination.campaigns ? res.data.lastWeekCampaignPagination.campaigns : []);
      })
  }, []);

  const typeHandler = (value) => {
    switch (value) {
      case "":
        allCompagins({
          variables: {
            limit: 10,
            page: 1,
            CampaignType: ""
          }
        })
          .then(res => {
            setCards(res && res.data && res.data.lastWeekCampaignPagination.campaigns ? res.data.lastWeekCampaignPagination.campaigns : []);
          })
        return;

      case "Support":
        allCompagins({
          variables: {
            limit: 10,
            page: 1,
            CampaignType: "Support"
          }
        })
          .then(res => {
            setCards(res && res.data && res.data.lastWeekCampaignPagination.campaigns ? res.data.lastWeekCampaignPagination.campaigns : []);
          })
        return;

      case "Pledege":
        allCompagins({
          variables: {
            limit: 10,
            page: 1,
            CampaignType: "Pledege"
          }
        })
          .then(res => {
            setCards(res && res.data && res.data.lastWeekCampaignPagination.campaigns ? res.data.lastWeekCampaignPagination.campaigns : []);
          })
        return;

      case "Petition":
        allCompagins({
          variables: {
            limit: 10,
            page: 1,
            CampaignType: "Petition"
          }
        })
          .then(res => {
              setCards(res && res.data && res.data.lastWeekCampaignPagination.campaigns ? res.data.lastWeekCampaignPagination.campaigns : []);
          })
        return;
    }
  }

  if (loading) return <Loader />;
  return (
    <div className="container-fluid Table-for-administrator-main-div">
      {/* header */}
      <div className="header-of-viewAdministrator">
        <h6 className="heading6-of-header fnt-poppins">Dashboard</h6>
      </div>
      {/* Table of Administrator  */}
      <div className="container">
        <form>
          <div className="Table-of-administrator">
            <div className="background-of-table">
              <div className="blanck-dev"></div>
              {/* Table Section */}
              <div className="Form-section-startup">
                <div className="has-margin-bottom-20 extra-div">
                </div>
                {/* { Dashboard  Campaign cards start here      */}
                {/* <first card */}
                <div className=" dashboard-main-cards-div flex-row ">
                  <div className="dash-board-cards mrg-left-20 $White-color">
                    <div className="dashboard-card-headr ">
                      <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600 ">Total Support</h1>
                    </div>
                    <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                    <div className="card-inner-main-div d-flex flex-row">
                      <div className="card-left-text  ">
                        <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data ">Today</h1>
                        <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalSupportToday}</p>
                      </div>
                      <div className="dashboard-cards-min-line mrg-top-10 "></div>
                      <div className="card-right-text">
                        <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Last Week</h1>
                        <p className=" mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalSupportLastWeek}</p>
                      </div>
                    </div>
                  </div>
                  {/* second card */}
                  <div className="dash-board-cards dashboard-responsive-card-marglft mrg-left-50 $White-color">
                    <div className="dashboard-card-headr">
                      <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">Total New Campaigns</h1>
                    </div>
                    <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                    <div className="card-inner-main div d-flex flex-row">
                      <div className="card-left-text  ">
                        <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Today</h1>
                        <p className=" mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewCampaignToday}</p>
                      </div>
                      <div className="dashboard-cards-min-line mrg-top-10 "></div>
                      <div className="card-right-text">
                        <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Last Week</h1>
                        <p className=" mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewCampaignLastWeek}</p>
                      </div>
                    </div>
                  </div>
                  {/* Third card */}
                  <div className="dash-board-cards dashboard-responsive-card-marglft mrg-left-50 $White-color">
                    <div className="dashboard-card-headr">
                      <h1 className=" has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Users</h1>
                    </div>
                    <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                    <div className="card-inner-main div d-flex flex-row">
                      <div className="card-left-text  ">
                        <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Today</h1>
                        <p className="mrg-left-70 mrg-top-20 0 fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewUsersToday}</p>
                      </div>
                      <div className="dashboard-cards-min-line mrg-top-10 "></div>
                      <div className="card-right-text">
                        <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Last Week</h1>
                        <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewUsersLastWeek}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card second section2 start here */}
                {/* first card section2*/}
                <div className=" dashboard-main-cards-div flex-row mrg-top-50">
                  <div className="dash-board-cards mrg-left-20 $White-color">
                    <div className="dashboard-card-headr ">
                      <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Support Campaigns</h1>
                    </div>
                    <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                    <div className="card-inner-main div d-flex flex-row">
                      <div className="card-left-text  ">
                        <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Today</h1>
                        <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewSupportCampaignToday}</p>
                      </div>
                      <div className="dashboard-cards-min-line mrg-top-10 "></div>
                      <div className="card-right-text">
                        <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Last Week</h1>
                        <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewSupportCampaignLastWeek}</p>
                      </div>
                    </div>
                  </div>
                  {/* second card  section2*/}
                  <div className="dash-board-cards dashboard-responsive-card-marglft mrg-left-50 $White-color">
                    <div className="dashboard-card-headr">
                      <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Petition Campaigns</h1>
                    </div>
                    <div className="dashboard-inner-responsive-contents"></div>
                    <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                    <div className="card-inner-main div d-flex flex-row">
                      <div className="card-left-text  ">
                        <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Today</h1>
                        <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewpetitionsCampaignToday}</p>
                      </div>
                      <div className="dashboard-cards-min-line mrg-top-10 "></div>
                      <div className="card-right-text">
                        <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Last Week</h1>
                        <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling number-data-responsive">{data.adminDashboard.TotalNewpetitionsCampaignLastWeek}</p>
                      </div>
                    </div>
                  </div>
                  {/* Third cardz section2*/}
                  <div className="dash-board-cards dashboard-responsive-card-marglft mrg-left-50 $White-color">
                    <div className="dashboard-card-headr">
                      <h1 className=" has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Pledge Campaigns</h1>
                    </div>
                    <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                    <div className="card-inner-main div d-flex flex-row">
                      <div className="card-left-text  ">
                        <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Today</h1>
                        <p className="mrg-left-70 mrg-top-20 card-number-styling fnt-poppins number-data-responsive">{data.adminDashboard.TotalNewpledgesCampaignToday}</p>
                      </div>
                      <div className="dashboard-cards-min-line mrg-top-10 "></div>
                      <div className="card-right-text">
                        <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400 dashboard-reesposive-data">Last Week</h1>
                        <p className=" mrg-left-70 mrg-top-20 card-number-styling fnt-poppins number-data-responsive">{data.adminDashboard.TotalNewpledgesCampaignLastWeek}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* dashboard Campaign card end here */}
                {/* dashboard lastweek Campaign card start here */}
                <div className="container last-week-main-dev ">
                  <div className="Table-Header mrg-top-50">
                    <h1 className=" fnt-poppins white-color fnt-size-20">Last Week Campaigns</h1>
                    <div className="is-flex">
                      <div className="has-padding-right-20 has-padding-top-5 fnt-poppins">View</div>
                      <select className="select-option-of-adminstrator dashboard-responsive-select-opt-wdth fnt-poppins"
                        onChange={event => typeHandler(event.target.value)}>
                        <option value="">All</option>
                        <option value="Support">Support</option>
                        <option value="Petition">Petitions</option>
                        <option value="Pledege">Pledges</option>
                      </select>
                    </div>
                  </div>
                  {/* 1st Card of Last Week Views and of Compaigns */}
                  {cards && cards.length != 0 ? cards.map((single, index) =>
                    <div className="is-flex has-margin-left-30">
                      <div className="is-flex Last-week-cards-main-dev">
                        <div className="Last-week-card-section mrg-top-50">
                          <img src={Image1} alt="" />
                          <div className="mrg-top-10  text-center" >
                            <h4 className="fnt-size-15 fnt-poppins">Update Profile Picture</h4>
                            <p className="mrg-top-5 fnt-size-13  fnt-poppins">{single.Name}</p>
                            <button className="Save-btn-of-form mrg-top-20 fnt-poppins">{single.CampaignType}</button>
                          </div>
                        </div>
                      </div>
                    </div>) : <Loader />}

                </div>
                <div className="has-margin-top-40">
                  <ReactPaginate previousLabel={<span className="fa fa-chevron-right "> &#60; </span>}
                    nextLabel={<span className="fa fa-chevron-right "> > </span>}
                    breakLabel={". . ."}
                    breakClassName={"break-me"}
                    pageCount={5}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={5}
                    containerClassName={"digit-icons main"}
                    subContainerClassName={"container column"}
                    activeClassName={"p-one"} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Style />
    </div>
  );
}
export default withRouter(Dashboard);