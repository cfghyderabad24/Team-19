import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const volunteers = [
  {
    id: 1,
    name: "Sree Vaishnavi",
    department: "Engineering",
    phone: "+91-9876543210",
    alumni: true,
    description: "Passionate about developing innovative educational technologies."
  },
  {
    id: 2,
    name: "Haripriya",
    department: "Lawyer",
    phone: "+91-8765432109",
    alumni: false,
    description: "Dedicated to providing legal aid for educational rights."
  },
  {
    id: 3,
    name: "Rohit Kumar",
    department: "Doctor",
    phone: "+91-7654321098",
    alumni: true,
    description: "Committed to improving health education in communities."
  },
  {
    id: 4,
    name: "Ananya Patel",
    department: "Engineering",
    phone: "+91-6543210987",
    alumni: false,
    description: "Expert in creating sustainable educational resources."
  },
  {
    id: 5,
    name: "Priya Singh",
    department: "Lawyer",
    phone: "+91-5432109876",
    alumni: true,
    description: "Focused on advocating for equal education opportunities."
  },
  {
    id: 6,
    name: "Vikram Reddy",
    department: "Doctor",
    phone: "+91-4321098765",
    alumni: false,
    description: "Specialist in promoting health education among youth."
  },
  {
    id: 7,
    name: "Kavya Iyer",
    department: "Engineering",
    phone: "+91-3210987654",
    alumni: true,
    description: "Innovator in educational infrastructure technologies."
  },
  {
    id: 8,
    name: "Aarav Kapoor",
    department: "Lawyer",
    phone: "+91-2109876543",
    alumni: false,
    description: "Advocate for educational policy reforms."
  },
  {
    id: 9,
    name: "Meera Nair",
    department: "Doctor",
    phone: "+91-1098765432",
    alumni: true,
    description: "Leader in pediatric health education."
  },
  {
    id: 10,
    name: "Aditya Verma",
    department: "Engineering",
    phone: "+91-1987654321",
    alumni: false,
    description: "Developer of eco-friendly educational materials."
  }
];

const VolunteerDetails = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {volunteers.map(vol => (
          <div key={vol.id} className="col-md-6 mb-4">
            <div className="card h-100" style={{ backgroundColor: '#e9ecef' }}>
              <div className="card-body">
                <h5 className="card-title">{vol.name}</h5>
                <p className="card-text"><strong>Department:</strong> {vol.department}</p>
                <p className="card-text"><strong>Phone:</strong> {vol.phone}</p>
                <p className="card-text"><strong>Alumni:</strong> {vol.alumni ? "Yes" : "No"}</p>
                <p className="card-text">{vol.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerDetails;
