const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const firstNames = ['John', 'Jane', 'Alice', 'Bob'];
  const lastNames = ['Smith', 'Doe', 'Johnson', 'Williams'];
  
  const getRandomName = () => {
    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    return `${firstName} ${lastName}`;
  };
  
  export const studentData = Array.from({ length: 20 }, (_, index) => ({
    name: getRandomName(),
    attendance: getRandomInt(75, 100),
    performance: getRandomInt(50, 100)
  }));
  
  export const streamData = [
    { name: 'Science', value: 400 },
    { name: 'Commerce', value: 300 },
    { name: 'Arts', value: 300 }
  ];
  
  export const scholarshipData = [
    { year: '2020', count: 20 },
    { year: '2021', count: 25 },
    { year: '2022', count: 30 },
    { year: '2023', count: 35 },
    { year: '2024', count: 40 }
  ];
  