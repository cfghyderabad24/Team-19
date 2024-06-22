import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const organizations = [
  {
    id: 1,
    name: "Sustainable Environment and Ecological Development Society (SEEDS)",
    url: "https://www.seedsindia.org",
    description: "Disaster preparedness, disaster response and rehabilitating homes and community infrastructure"
  },
  {
    id: 2,
    name: "Goonj",
    url: "https://goonj.org",
    description: "Disaster relief, humanitarian aid and community development work"
  },
  {
    id: 3,
    name: "Pratham",
    url: "https://www.pratham.org",
    description: "Quality education for underprivileged children in India"
  },
  {
    id: 4,
    name: "HelpAge",
    url: "https://www.helpageindia.org",
    description: "Work for the cause and care of under-aged elderly people and improve their standard of living"
  },
  {
    id: 5,
    name: "Child Rights and You",
    url: "https://www.cry.org",
    description: "CRY addresses children’s critical needs of healthcare, nutrition, education and protection from child labour and child marriage"
  },
  {
    id: 6,
    name: "Sightsavers",
    url: "https://www.sightsaversindia.in",
    description: "Treat and prevent avoidable blindness and promote equality for people with visual impairments and other disabilities"
  },
  {
    id: 7,
    name: "Nanhi Kali",
    url: "https://www.nanhikali.org",
    description: "Education for underprivileged girls in India"
  },
  {
    id: 8,
    name: "Give India Foundation",
    url: "https://www.giveindia.org",
    description: "Online donation platform"
  },
  {
    id: 9,
    name: "Care India",
    url: "http://www.careindia.org",
    description: "Empower women and girls from poor and marginalised communities"
  },
  {
    id: 10,
    name: "Sammaan Foundation",
    url: "http://www.sammaan.org",
    description: "Health, Livelihood, Agriculture, Skill Development"
  }
];

const StudentDetails = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {organizations.map(org => (
          <div key={org.id} className="col-md-6 mb-4">
            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body">
                <h5 className="card-title">{org.name}</h5>
                <a href={org.url} target="_blank" rel="noopener noreferrer" className="card-link">
                  {org.url}
                </a>
                <p className="card-text mt-2">{org.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
