const students = [
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      mobile: "1234567890",
      email: "john.doe@example.com",
      location: "New York",
      documents: [
        { name: "Document 1", url: require("../assets/scholar.jpeg").default },
       
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      gender: "Female",
      mobile: "0987654321",
      email: "jane.smith@example.com",
      location: "California",
      documents: [
        "doc1.jpg",
        "doc2.jpg"
      ]
    },
  ];
  
  export default students;