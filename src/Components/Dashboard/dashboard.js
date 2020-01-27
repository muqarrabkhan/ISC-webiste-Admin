import React from 'react'
import Image1 from '../../assets/Images/larki.jpg'
import {withRouter} from 'react-router-dom'
const Dashboard= () => {
 
  return (

    <div className="container-fluid Table-for-administrator-main-div">
      {/* header */}
      <div className="header-of-viewAdministrator">
        <h6 className="heading6-of-header fnt-poppins">Dashboard</h6>
      </div>

      {/* Table of Administrator  */}
      <div className="container-fluid">
        <form>
          <div className="Table-of-administrator">
            <div className="background-of-table">
              <div className="blanck-dev"></div>
              {/* Table Section */}
              <div className="Form-section-startup">
                <div className="has-margin-bottom-20 extra-div">
                </div>
                {/* Dashboard  Campaign cards start here      */}
                {/* <first card */}
                <div className="container">
                  <div className=" dashboard-main-cards-div flex-row ">
                    <div className="dash-board-cards mrg-left-20 $White-color">
                      <div className="dashboard-card-headr ">
                        <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600 ">Total Support</h1>
                      </div>
                      <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                      <div className="card-inner-main div d-flex flex-row">
                        <div className="card-left-text  ">
                          <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Today</h1>
                          <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling">105</p>
                        </div>
                        <div className="dashboard-cards-min-line mrg-top-10 "></div>
                        <div className="card-right-text">
                          <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Last Week</h1>
                          <p className=" mrg-left-70 mrg-top-20  fnt-poppins card-number-styling">1105</p>
                        </div>
                      </div>
                    </div>
                    {/* second card */}
                    <div className="dash-board-cards mrg-left-50 $White-color">
                      <div className="dashboard-card-headr">
                        <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">Total New Campaigns</h1>
                      </div>
                      <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                      <div className="card-inner-main div d-flex flex-row">
                        <div className="card-left-text  ">
                          <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Today</h1>
                          <p className=" mrg-left-70 mrg-top-20  fnt-poppins card-number-styling">105</p>
                        </div>
                        <div className="dashboard-cards-min-line mrg-top-10 "></div>
                        <div className="card-right-text">
                          <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Last Week</h1>
                          <p className=" mrg-left-70 mrg-top-20  fnt-poppins card-number-styling ">1105</p>
                        </div>
                      </div>
                    </div>
                    {/* Third card */}
                    <div className="dash-board-cards mrg-left-50 $White-color">
                      <div className="dashboard-card-headr">
                        <h1 className=" has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Users</h1>
                      </div>
                      <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                      <div className="card-inner-main div d-flex flex-row">
                        <div className="card-left-text  ">
                          <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Today</h1>
                          <p className="mrg-left-70 mrg-top-20 0 fnt-poppins card-number-styling">105</p>
                        </div>
                        <div className="dashboard-cards-min-line mrg-top-10 "></div>
                        <div className="card-right-text">
                          <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Last Week</h1>
                          <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling">1105</p>
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
                          <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Today</h1>
                          <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling">105</p>
                        </div>
                        <div className="dashboard-cards-min-line mrg-top-10 "></div>
                        <div className="card-right-text">
                          <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Last Week</h1>
                          <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling">1105</p>
                        </div>
                      </div>
                    </div>
                    {/* second card  section2*/}
                    <div className="dash-board-cards mrg-left-50 $White-color">
                      <div className="dashboard-card-headr">
                        <h1 className="has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Petition Campaigns</h1>
                      </div>
                      <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                      <div className="card-inner-main div d-flex flex-row">
                        <div className="card-left-text  ">
                          <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Today</h1>
                          <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling ">105</p>
                        </div>
                        <div className="dashboard-cards-min-line mrg-top-10 "></div>
                        <div className="card-right-text">
                          <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Last Week</h1>
                          <p className="mrg-left-70 mrg-top-20  fnt-poppins card-number-styling ">1105</p>
                        </div>
                      </div>
                    </div>
                    {/* Third card  section2*/}
                    <div className="dash-board-cards mrg-left-50 $White-color">
                      <div className="dashboard-card-headr">
                        <h1 className=" has-padding-top-20 fnt-poppins fnt-size-20 text-center fnt-weight-600">New Pledge Campaigns</h1>
                      </div>
                      <div className="dashboard-card-hr-line mrg-left-20 mrg-top-10"></div>
                      <div className="card-inner-main div d-flex flex-row">
                        <div className="card-left-text  ">
                          <h1 className="mrg-left-60 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Today</h1>
                          <p className="mrg-left-70 mrg-top-20 card-number-styling fnt-poppins ">105</p>
                        </div>
                        <div className="dashboard-cards-min-line mrg-top-10 "></div>
                        <div className="card-right-text">
                          <h1 className="mrg-left-45 mrg-top-30 fnt-size-20 fnt-poppins fnt-weight-400">Last Week</h1>
                          <p className=" mrg-left-70 mrg-top-20 card-number-styling fnt-poppins  ">1105</p>
                        </div>
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
                      <select className="select-option-of-adminstrator fnt-poppins">
                        <option>Campaigns</option>
                        <option>Petitions</option>
                        <option>Pledges</option>
                        <option>Users</option>
                      </select>
                    </div>
                  </div>
                {/* 1st Card of Last Week Views and of Compaigns */}
                  <div className="is-flex Last-week-cards-main-dev">
                    <div className="Last-week-card-section mrg-top-50">
                      <img src={Image1} alt="" />
                      <div className="mrg-top-10  text-center" >
                        <h4 className="fnt-size-15 fnt-poppins">Update Profile Picture</h4>
                        <p className="mrg-top-5 fnt-size-13  fnt-poppins">Category:Human-Rights</p>
                        <button className="Save-btn-of-form mrg-top-20 fnt-poppins">Support</button>
                      </div>
                    </div>
                 {/* 2nd Card of Last Week Views and of Compaigns */}
                    <div className="Last-week-card-section mrg-top-50">
                      <img src={Image1} alt="" />
                      <div className="mrg-top-10  text-center" >
                        <h4 className="fnt-size-15 fnt-poppins">Update Profile Picture</h4>
                        <p className="mrg-top-5 fnt-size-13  fnt-poppins">Category:Human-Rights</p>
                        <button className="Save-btn-of-form mrg-top-20 fnt-poppins">Support</button>
                      </div>
                    </div>
                 {/* 3rd Card of Last Week Views and of Compaigns */}                    
                    <div className="Last-week-card-section mrg-top-50">
                      <img src={Image1} alt="" />
                      <div className="mrg-top-10  text-center" >
                        <h4 className="fnt-size-15 fnt-poppins">Update Profile Picture</h4>
                        <p className="mrg-top-5 fnt-size-13  fnt-poppins">Category:Human-Rights</p>
                        <button className="Save-btn-of-form mrg-top-20 fnt-poppins">Support</button>
                      </div>
                    </div>
                 {/* 4th Card of Last Week Views and of Compaigns */}                    
                    <div className="Last-week-card-section mrg-top-50">
                      <img src={Image1} alt="" />
                      <div className="mrg-top-10 text-center" >
                        <h4 className="fnt-size-15 fnt-poppins">Update Profile Picture</h4>
                        <p className="mrg-top-5 fnt-size-13  fnt-poppins">Category:Human-Rights</p>
                        <button className="Save-btn-of-form  mrg-top-20  fnt-poppins">Support</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default withRouter(Dashboard);