import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import AttendancePerformanceChart from './AttendancePerformanceChart'; // Import your chart components
import EducationalStreamPieChart from './EducationalStreamPieChart';
import ScholarshipStatusBarChart from './ScholarshipStatusBarChart';
import { studentData, streamData, scholarshipData } from './data'; // Import your data
import '../App.css';

const Students = () => {
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>Student Tracking Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Attendance and Performance Line Charts */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Student Attendance and Performance</Typography>
            <AttendancePerformanceChart data={studentData} /> {/* Pass studentData */}
          </Paper>
        </Grid>
        {/* Educational Stream Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Distribution of Educational Streams</Typography>
            <EducationalStreamPieChart data={streamData} /> {/* Pass streamData */}
          </Paper>
        </Grid>
        {/* Scholarship Status Bar Chart */}
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Scholarship Status Over the Past 5 Years</Typography>
            <ScholarshipStatusBarChart data={scholarshipData} /> {/* Pass scholarshipData */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Students;
