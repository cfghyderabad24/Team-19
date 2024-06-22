import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendancePerformanceChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
      <Line type="monotone" dataKey="performance" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default AttendancePerformanceChart;
