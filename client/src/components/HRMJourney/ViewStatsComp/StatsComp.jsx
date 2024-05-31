import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from 'react-chartjs-2';
import {renderChart, renderBarChart} from './chart'; // Import the renderChart function
import './StatsComp.css'; // Import CSS file for styling

function StatsComp(props) {
    const { jobId } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);
    const [weightsData, setWeightsData] = useState(null);
    const [applicationScores, setApplicationScores] = useState([]);
    const [usernames, setAppUser] = useState([]);

    useEffect(() => {
        const fetchJob = async () => {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            try {
                const response = await axios.get(`/api/job/getSingleJob/${jobId}`, { headers });
                console.log("Fetched job data:", response.data.job);
                setJob(response.data.job);
                console.log("Job title:", response.data.job.title);

                // Extracting weights data from the job object
                const jobWeights = response.data.job.weights;
                const keyMap = {
                    cosine_similarity_weight: 'Skills Weight',
                    cgpa_weight: 'CGPA Weight',
                    degree_match_weight: "Degree Weight",
                    discipline_match_weight: "Discipline Weight"
                    // Add more mappings as needed
                };
                const weightLabels = Object.keys(jobWeights).map(key => keyMap[key] || key);
                const weightValues = Object.values(jobWeights);

                // Setting up data for the pie chart
                const pieChartData = {
                    labels: weightLabels,
                    datasets: [{
                        data: weightValues,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0' // Add more colors if needed
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0' // Add more colors if needed
                        ]
                    }]
                };

                setWeightsData(pieChartData);
            } catch (error) {
                console.error("Error fetching job data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);

    useEffect(() => {
        const fetchApplicants = async () => {
            const headers = { Authorization: `${localStorage.getItem("token")}` };
            try {
                const applicantsResponse = await axios.get(`/api/application/getApplications/${jobId}`, { headers });
                console.log("Fetched applicants data:", applicantsResponse.data);
                console.log("Fetched Applicant", applicantsResponse.data.application);


                // Extracting scores from the fetched applications
                const scores = applicantsResponse.data.application.map(applicant => applicant.score);
                const user = applicantsResponse.data.application.map(applicant => ({
                    userName: applicant.user.name,
                    score: applicant.score
                }));
                console.log("name", user);
                console.log("scores", scores)
                setApplicationScores(scores);
                setAppUser(user);
                console.log("Usman",usernames)


            } catch (error) {
                console.error("Error fetching applicants data:", error); // Log any errors
            }
        };

        fetchApplicants();
    }, [jobId]);

    useEffect(() => {
        if (weightsData) {
            // Destroy the previous chart instance if it exists
            renderChart(weightsData, {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = weightsData.labels[context.dataIndex];
                                const value = weightsData.datasets[0].data[context.dataIndex];
                                return `${label}: ${value}`;
                            }
                        }
                    }
                }
            });
        }
    }, [weightsData]);

    // Calculate the frequency/count of each score
    const scoreFrequency = {};
    applicationScores.forEach(score => {
        scoreFrequency[score] = (scoreFrequency[score] || 0) + 1;
    });

    // Extract score values and frequencies for plotting
    const scores = Object.keys(scoreFrequency).map(parseFloat);
    const frequencies = Object.values(scoreFrequency);

    // Data for the histogram
    const histogramData = {
        labels: scores,
        datasets: [{
            label: 'Frequency',
            data: frequencies,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1,
        }],
    };

    // Options for the histogram
    const histogramOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Application Scores',
                    color: 'black',
                    font: {
                        weight: 'bold',
                        size: 16,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Frequency',
                    color: 'black',
                    font: {
                        weight: 'bold',
                        size: 16,
                    },
                },
                beginAtZero: true, // Start y-axis at 0
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
    };

    console.log("Usma 2n",usernames)

    const userData = usernames.map(applicant => ({
        name: applicant.userName,
        // score: applicant.score
        score: parseFloat(applicant.score.replace('%', ''))
    }));
    console.log("data",userData)

    const barChartData = {
        labels: userData.map(user => user.name), // User names on the x-axis
        datasets: [{
            label: 'Application Scores',
            data: userData.map(user => user.score), // Scores on the y-axis
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color for bars
            borderColor: 'rgba(75, 192, 192, 1)', // Border color for bars
            borderWidth: 1
        }]
    };

    
    // const barChartData = {
    //     labels: usernames.map(applicant => applicant.userName), // Correctly access userName for labels
    //     datasets: [{
    //         label: 'Application Scores',
    //         data: usernames.map(applicant => applicant.score), // Correctly access score for data
    //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //         borderColor: 'rgba(75, 192, 192, 1)',
    //         borderWidth: 1
    //     }]
    // };

    

    // Options for the bar chart
    // const barChartOptions = {
    //     indexAxis: 'y', // Display user names on the y-axis
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             display: false // Hide legend
    //         },
    //         title: {
    //             display: true,
    //             text: 'Application Scores by User'
    //         }
    //     }
    // };
    
    const barChartOptions = {
        indexAxis: 'y', // Display user names on the y-axis
        responsive: true,
        plugins: {
            legend: {
                display: false // Hide legend
            },
            title: {
                display: true,
                text: 'Application Scores by User'
            }
        },
        // scales: {
        //     x: {
        //         type: 'category', // Specify the type of the x-axis as 'category'
        //     }
        // }
        scales: {
            x: {
                type: 'linear', // Specify the type of the x-axis as 'linear'
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%'; // Append '%' to tick values
                    }
                }
            },
            y: {
                type: 'category' // Ensure the y-axis is treated as a category axis
            }
        }
    };



    return (
        <div className="stats-container">
            <h2 className="stats-heading">Pie Chart for Job Weights</h2>
            <div className="stats-chart-container">
                <div style={{ height: '500px', width: '100%' }}>
                    {weightsData && (
                        <Pie
                            data={weightsData}
                            options={{
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: 'bottom',
                                    },
                                    tooltip: {
                                        callbacks: {
                                            label: (context) => {
                                                const label = weightsData.labels[context.dataIndex];
                                                const value = weightsData.datasets[0].data[context.dataIndex];
                                                return `${label}: ${value}`;
                                            }
                                        }
                                    }
                                }
                            }}
                        />
                    )}
                </div>
            </div>
            <h2 className="stats-heading">Histogram for Application Scores</h2>
            <div className="stats-chart-container">
                <div style={{ height: '500px', width: '100%' }}>
                    <Bar data={histogramData} options={histogramOptions} />
                </div>
            </div>
            <h2 className="stats-heading">Bar Chart for Application Scores by User</h2>
            <div className="stats-chart-container">
                <div style={{ height: '500px', width: '100%' }}>
                    <Bar data={barChartData} options={barChartOptions} />
                </div>
            </div>
        </div>
    );
    
}

export default StatsComp;
