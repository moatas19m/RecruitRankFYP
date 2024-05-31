// chart.js

import Chart from 'chart.js/auto'; // Import Chart.js

// Function to render the chart
export const renderChart = (chartRef, data, options) => {
    if (chartRef && chartRef.current) {
        // Render the new chart instance
        new Chart(chartRef.current, {
            type: 'pie',
            data: data,
            options: options
        });
    }
};

// Function to render the bar chart
export const renderBarChart = (chartRef, data, options) => {
    if (chartRef && chartRef.current) {
        // Render the new bar chart instance
        new Chart(chartRef.current, {
            type: 'bar',
            data: data,
            options: options
        });
    }
};
// export default renderChart;
