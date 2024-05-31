import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Landing() {
  return (

    <div className="container mx-auto p-4 flex flex-col space-y-4">
      <p className="text-5xl font-bold text-primary mb-4 ml-4">Hi, Jessica</p>
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        {/* Content Columns */}
        <div className="flex flex-grow">
          {/* First Column */}
          <div className="flex-1 mr-8">
            <p className="text-left font-bold text-2xl mb-12 align-top text-primary">Monthly Insights</p>

            <div className="flex justify-center mt-4">
              <p className="text-center">Fraud activities are at</p>
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-center font-bold text-warning text-6xl">78%</p>
            </div>
            <div className="flex justify-center text-warning mt-2 mb-8">
              <p className="text-center font-semibold">ALL TIME HIGH</p>
            </div>

            <div className="text-left flex justify-between">
              <span>Scammed victims:</span> <span className="font-bold text-secondary">1,234</span>
            </div>
            <div className="text-left flex justify-between">
              <span>Scammed amount:</span> <span className="font-bold text-secondary">$56,789</span>
            </div>
          </div>
          {/* Second Column - Enclosing Container for Inner Cards */}
          <div className="flex-2 flex w-3/4">
            <div className="bg-gray-100 p-4 shadow-inner rounded-xl flex-grow flex w-2/3">
              {/* Inner Card 1 */}
              <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/2">
                <BarChart />
              </div>
              {/* Inner Card 2 */}
              <div className="bg-white p-4 shadow rounded-xl ml-2 flex-1 w-1/2">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Button */}
        <div className="flex mt-4">
          <Link to="/dashboard" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View Dashboard
          </Link>
        </div>
      </div>
      {/* Second Container - Horizontal Scroll for Family Members */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-primary">My Family</h3>
        <div className="flex overflow-x-auto space-x-4">
          <div className="bg-gray-100 p-4 shadow-inner rounded-xl flex-grow flex w-2/3">

            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/tailwind-css-component-profile-2@56w.png')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 1</p>
              <div className="flex justify-center">
                <p className="badge badge-warning mt-2 mb-4">High Risk</p> 
              </div>
              <p className="text-center">Attempts: 3</p>
              <p className="text-center mb-4">Pass Rate: 70%</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/tailwind-css-component-profile-3@56w.png')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 2</p>
              <div className="flex justify-center">
                <p className="badge badge-success mt-2 mb-4">Low Risk</p>
              </div>
              <p className="text-center">Attempts: 1</p>
              <p className="text-center mb-4">Pass Rate: 90%</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/tailwind-css-component-profile-4@56w.png')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 3</p>
              <div className="flex justify-center">
                <p className="badge badge-neutral mt-2 mb-4">Medium Risk</p>
              </div>
              <p className="text-center">Attempts: 2</p>
              <p className="text-center mb-4">Pass Rate: 80%</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 4</p>
              <div className="flex justify-center">
                <p className="badge badge-warning mt-2 mb-4">High Risk</p>
              </div>
              <p className="text-center">Attempts: 5</p>
              <p className="text-center mb-4">Pass Rate: 50%</p>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <Link to="/family" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View Family
          </Link>
        </div>
      </div>

      {/* Third Container - Articles and YouTube Videos */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-primary">Latest Info</h3>
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item rounded-xl px-2">
            <a href="https://www.straitstimes.com/singapore/fixed-deposit-scam-boasting-high-interest-rates-claims-12-victims-losses-amounting-650000" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/04/12/yufdscamcoll1104a_3.jpg?VersionId=q4cJmG.etu0R4J4HkNTgHBtQ3_euVFSK&itok=HG3dW9Y3" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Fixed deposit scam boasting high interest rates claims 12 victims, losses amount to $650,000
                    <div className="badge badge-primary">NEW</div>
                  </h2>
                  <p>The scammers would impersonate bank agents by using staff passes.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Straits Times</div> 
                    <div className="badge badge-outline">Newspaper</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="carousel-item rounded-xl px-2">
            <a href="https://www.youtube.com/watch?v=FQmE2yDPK6g&ab_channel=CNA" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src="https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-4.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                  More Singapore SMEs falling prey to scams even as many of them turn to tech like AI for solutions
                    <div className="badge badge-primary">NEW</div>
                  </h2>
                  <p>A majority of small and medium enterprises (SMEs) have turned to artificial intelligence (AI) to improve their operations, but they may not be doing enough to ensure security.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">CNA</div> 
                    <div className="badge badge-outline">Youtube</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="carousel-item rounded-xl px-2">
            <a href="https://example.com/link3" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src="https://media.licdn.com/dms/image/C4E22AQHuFDiEBnz7Sw/feedshare-shrink_800/0/1645186722053?e=2147483647&v=beta&t=mwd9vQUSSFVQLw3m1__yopOcEkU1IFLqtV59wlHPNZ0" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                  Received a suspicious email about unusual account activities from an suspicious email domain?
                    <div className="badge badge-primary">NEW</div>
                  </h2>
                  <p>Remember these tips to help you #BeCyberSavvy</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">UOB</div>
                    <div className="badge badge-outline">Facebook</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="carousel-item rounded-xl px-2">
            <a href="https://example.com/link4" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src="https://t3.ftcdn.net/jpg/03/49/98/34/360_F_349983431_mYca1IaDe1xEPGhTz2OdFRnTiDy1qXvS.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                  Police Advisory On Phishing Smses Involving Impersonation of Banks
                    <div className="badge badge-primary">NEW</div>
                  </h2>
                  <p>These scammers would impersonate bank security department officers and provide forged bank statements displaying unauthorised transactions made in the victims' e-wallets.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">SPF</div>  
                    <div className="badge badge-outline">Article</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex mt-4">
          <Link to="/news" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View News
          </Link>
        </div>
      </div>
      
      {/* Fourth Container - Courses */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-primary">Courses</h3>
        <div className="flex space-x-4">
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Course 1" /></figure>
            <div className="card-body">
              <h2 className="card-title">Course 1</h2>
              <p>Description of Course 1.</p>
              <div className="card-actions justify-end">
                <Link to="/courses/1" className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Course 2" /></figure>
            <div className="card-body">
              <h2 className="card-title">FRAUD & MISCONDUCT INVESTIGATION COURSE</h2>
              <p>by NTUC Learning Hub</p>
              <div className="card-actions justify-end">
                <Link to="/courses/2" className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Course 3" /></figure>
            <div className="card-body">
              <h2 className="card-title">Course 3</h2>
              <p>Description of Course 3.</p>
              <div className="card-actions justify-end">
                <Link to="/courses/3" className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <Link to="/courses" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  
  );
}

export default Landing;
