import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useParams } from 'react-router-dom';
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

function PersonalPage() {

  const { memberName } = useParams();
  console.log(memberName);

  return (
    <div className="container mx-auto p-4 flex flex-col space-y-4">
      <p className="text-5xl font-bold text-primary mb-4 ml-4">Hi, Hart</p>
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
      </div>
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-primary">Latest Info</h3>
        <div className="carousel carousel-center p-4 space-x-4 bg-gray-100 rounded-xl shadow-inner flex flex-grow">
          <div className="carousel-item">
            <a href="https://www.straitstimes.com/singapore/fixed-deposit-scam-boasting-high-interest-rates-claims-12-victims-losses-amounting-650000" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl  rounded-xl px-2 h-[600px]">
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
          <div className="carousel-item">
            <a href="https://www.youtube.com/watch?v=FQmE2yDPK6g&ab_channel=CNA" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl rounded-xl px-2 h-[600px]">
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
          <div className="carousel-item">
            <a href="https://example.com/link3" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl  rounded-xl px-2 h-[600px]">
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
          <div className="carousel-item">
            <a href="https://example.com/link4" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl  rounded-xl px-2 h-[600px]">
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
          <div className="carousel-item">
            <a href="https://example.com/link4" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl rounded-xl px-2 h-[600px]">
                <figure><img src="https://onecms-res.cloudinary.com/image/upload/s--E2EPbIEv--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2024/05/01/computer_user.jpg?itok=gEvfy0to" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                  More than S$370,000 recovered after banks, Singapore and Hong Kong police foil scam
                    <div className="badge badge-primary">NEW</div>
                  </h2>
                  <p>The 70-year-old victim divulged his bank credentials to a scammer after being told his computer had been hacked and his bank accounts were used for illegal activities. </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">CNA</div>  
                    <div className="badge badge-outline">Newspaper</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://www.businesstimes.com.sg/singapore/new-wave-phishing-smses-scam-103-victims-s161000-december" target="_blank" rel="noopener noreferrer">
              <div className="card w-80 bg-base-100 shadow-xl  rounded-xl px-2 h-[600px]">
                <figure><img src="https://d2kxlefydm4hr1.cloudfront.net/image/businesstimes/1f7910bee2e6faa863cde99541536ad9a3354ed4f39a41172a00e4ee08126c8c?w=854&f=webp" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                  New wave of phishing SMSes scam 103 victims of S$161,000 in December
                    <div className="badge badge-primary">NEW</div>
                  </h2>
                  <p>Scammers impersonated banks, attempting to get online banking usernames, passwords or one-time passwords (OTPs). </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">The Business Times</div>  
                    <div className="badge badge-outline">Newspaper</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Fourth Container - Courses */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-primary">Courses</h3>
        <div className="flex space-x-4">
          <a href="https://eservices.isca.org.sg/CourseDetailClone?courseMasterId=a0g2t000000spcAAAQ&_ga=2.118586057.1137146298.1686012835-1182683973.1678158178 " className="w-1/3">
            <div className="card bg-base-100 shadow-xl min-h-[500px]"> 
              <figure><img src="https://eservices.isca.org.sg/servlet/servlet.FileDownload?file=00P2t00000R6USkEAN" alt="Course 1" /></figure>
              <div className="card-body">
                <h2 className="card-title">THINKING LIKE A FRAUDSTER TO PREVENT FRAUD</h2>
                <p>by Institute of Singapore Chartered Accountants</p>
                <div className="card-actions justify-end">
                  <div className="btn btn-primary">View Course</div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.ntuclearninghub.com/en-gb/-/course/fraud-misconduct-investigation-course" className="w-1/3">
            <div className="card bg-base-100 shadow-xl min-h-[500px]"> 
              <figure><img src="https://www.ntuclearninghub.com/documents/39367/39458/fraud-misconduct-investigation-course.jpg/eed49a70-e993-2847-65a7-2c9729aabbc9?t=1623209491050" alt="Course 2" /></figure>
              <div className="card-body">
                <h2 className="card-title">FRAUD & MISCONDUCT INVESTIGATION COURSE</h2>
                <p>by NTUC Learning Hub</p>
                <div className="card-actions justify-end">
                  <div className="btn btn-primary">View Course</div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.aidf.nus.edu.sg/education/professional-certificates-in-digital-financial-technology/fraud-detection-and-prevention/" className="w-1/3">
            <div className="card bg-base-100 shadow-xl min-h-[500px]"> 
              <figure><img src="https://finance.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2023-11/eudfp-cards-640x450.jpg?itok=0sU2wkI1" alt="Course 3" /></figure>
              <div className="card-body">
                <h2 className="card-title">HARNESS THE POTENTIAL OF FRAUD DETECTION AND PREVENTION</h2>
                <p>by NUS Asian Institute of Digital Finance</p>
                <div className="card-actions justify-end">
                  <div className="btn btn-primary">View Course</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="bottom-4 w-full">
          <a href="https://form.gov.sg/63982e109841390011a59121" className="text-center font-semibold block w-full p-2 bg-red-500 text-white rounded-xl hover:bg-red-700 transition-colors duration-200">
            Report a Fraud
          </a>
        </div>
    </div>
  );
}

export default PersonalPage;
