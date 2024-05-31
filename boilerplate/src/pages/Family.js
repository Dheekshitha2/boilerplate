import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const FamilyPage = () => {
  const familyMembers = [
    {
      name: "Hart Hagerty",
      relationship: "Father",
      avatar: "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png",
      vulnerabilityData: {
        labels: ["Phishing", "Vishing", "Smishing", "Physical", "Online"],
        datasets: [{
          label: '',
          data: [80, 70, 90, 60, 55],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: true
        }]
      },
      link: "#"
    },
    {
      name: "Brice Swyre",
      relationship: "Brother",
      avatar: "https://img.daisyui.com/tailwind-css-component-profile-3@56w.png",
      vulnerabilityData: {
        labels: ["Phishing", "Vishing", "Smishing", "Physical", "Online"],
        datasets: [{
          label: '',
          data: [65, 59, 70, 81, 56],
          backgroundColor: 'rgba(53, 162, 235, 0.2)',
          borderColor: 'rgba(53, 162, 235, 1)',
          borderWidth: 1,
          fill: true
        }]
      },
      link: "#"
    },
    {
      name: "Marjy Ferencz",
      relationship: "Mother",
      avatar: "https://img.daisyui.com/tailwind-css-component-profile-4@56w.png",
      vulnerabilityData: {
        labels: ["Phishing", "Vishing", "Smishing", "Physical", "Online"],
        datasets: [{
          label: '',
          data: [40, 45, 30, 70, 75],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true
        }]
      },
      link: "#"
    },
    {
      name: "Yancy Tear",
      relationship: "Sister",
      avatar: "https://img.daisyui.com/tailwind-css-component-profile-5@56w.png",
      vulnerabilityData: {
        labels: ["Phishing", "Vishing", "Smishing", "Physical", "Online"],
        datasets: [{
          label: '',
          data: [85, 80, 95, 65, 60],
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgba(255, 205, 86, 1)',
          borderWidth: 1,
          fill: true
        }]
      },
      link: "#"
    }
  ];

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      r: {
        angleLines: {
          display: false
        },
        ticks: {
          display: false
        },
        pointLabels: {
          display: true,
          font: {
            size: 14
          }
        }
      }
    },
    maintainAspectRatio: false,
    aspectRatio: 1 // Adjust this value as needed to change size
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {familyMembers.map((member, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={member.avatar} alt={member.name} className="mask mask-squircle" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{member.name}</h2>
            <p>{member.relationship}</p>
            <div className="w-full mt-10 mb-8">
              <Radar data={member.vulnerabilityData} options={options} />
            </div>
            <div className="card-actions">
              <button className="btn btn-gray-100 " onClick={() => window.open(member.link, "_blank")}>Access Personal Page</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FamilyPage;
