import React, { useContext } from "react";
import "../styles/dashboard.css";
import AuthContext from "../context/auth/authContext";
import dashboard from "../assets/dashboard_icon.png";
import schedule from "../assets/schedule_icon.png";
import setting from "../assets/setting_icon.png";
import transaction from "../assets/transaction_icon.png";
import user from "../assets/user_icon.png";
import dp from "../assets/dp.png";
import bell from "../assets/bell.png";
import search from "../assets/search.png";
import save from "../assets/save.png";
import thumb from "../assets/thumb.png";
// import search from "../assets/search.png";
import total_transactions from '../assets/total_transactions_icon.png'
import total_user from "../assets/total_user.png";
import Chart from "./chart";
import PieChart from "./piechart";
import { auth } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { MdExitToApp } from 'react-icons/md';


function Dashboard() {

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }



  return (
    <>
      <nav>
        <div className="navleft">
          <b>Board.</b>
         
        </div>
        <div className="navright">
            <div>
              Dashboard
            </div>
            <div>
              Transaction
            </div>
            <div>
              Schedules
            </div>
            <div>
              Settings
            </div>
            <div className="Logout" type="button" onClick={handleLogout}>
              Logout
            </div>
        </div>
      </nav>

      <div className="grid">
        <div className="block">
          {/* BLOCK 1 START */}
          <div className="board">
            <b>Board.</b>
          </div>

          <div className="content">
            <div>
              <img className="icn" src={dashboard} /> Dashboard
            </div>
            <div>
              <img className="icn" src={transaction} />
              Transaction
            </div>
            <div>
              <img className="icn" src={schedule} />
              Schedules
            </div>
            <div>
    
              <img className="icn" src={setting} />
              Settings
            </div>

            <div className="Logout" type="button" onClick={handleLogout}>
            <MdExitToApp style={{marginRight: '15px'}} />
              Logout
            </div>
          </div>

          {/* <div className="bottom">
            <div className="help">Help</div>
            <div className="contact">Contact Us</div>
          </div> */}
        </div>

        {/* BLOCK 1 END */}

        {/* BLOCK 2 START */}
        <div className="block">
          <div className="block2">
            <div className="block2-left">Dashboard</div>
            <div className="block2-right">
              <p>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                />
              </p>
              <p>
                <img className="bell-icon" src={bell} alt="Bell Icon" />
              </p>
              <p>
                <img className="profile-logo" src={dp} alt="Profile Logo" />
              </p>
            </div>
          </div>
        </div>
        {/* BLOCK 2 END */}

        {/* BLOCK 3 START */}
        <div className="block">
          <div className="block3">
            <img src={save} alt="save" />
            <br></br>
            <p>Total Revenues</p>
            <div>
              <b>$2,129,430</b>
            </div>
          </div>
        </div>
        {/* BLOCK 3 END */}

        <div className="block">
          <div className="block3">
            <img src={total_transactions} alt="totalTransactions" />
            <br></br>
            <p>Total Transactions</p>
            <div>
              <b>1,520</b>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block3">
            <img src={thumb} alt="save" />
            <br></br>
            <p>Total Likes</p>
            <div>
              <b>9,721</b>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block3">
            <img src={total_user} alt="save" />
            <br></br>
            <p>Total Users</p>
            <div>
              <b>892</b>
            </div>
          </div>
        </div>
        <div className="block">
          <Chart />
        </div>
        <div className="block">
          <PieChart />  
        </div>
        <div className="block">
          <div className="schedule">
            <div className="sHead">Today's schedule</div>
            <div className="seeAll">See All</div>
          </div>

          <div className="meeting">
            <div className="meeting_with">
            Meeting with suppliers from Kuta Bali
            </div>
            <div className="meeting_time">
            14.00-15.00
            </div>
            <div className="meeting_address">
            at Sunset Road, Kuta, Bali 
            </div>
          </div>


          <div className="meeting">
            <div className="meeting_with">
            Meeting with suppliers from Kuta Bali
            </div>
            <div className="meeting_time">
            14.00-15.00
            </div>
            <div className="meeting_address">
            at Sunset Road, Kuta, Bali 
            </div>
          </div>
         

        </div>
      </div>
    </>
  );
}

export default Dashboard;
