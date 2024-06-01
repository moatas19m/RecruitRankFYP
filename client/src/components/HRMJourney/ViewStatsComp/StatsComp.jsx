import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from 'react-chartjs-2';
import './StatsComp.css';

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
                setJob(response.data.job);

                const jobWeights = response.data.job.weights;
                const keyMap = {
                    cosine_similarity_weight: 'Skills Weight',
                    cgpa_weight: 'CGPA Weight',
                    degree_match_weight: "Degree Weight",
                    discipline_match_weight: "Discipline Weight"
                };
                const weightLabels = Object.keys(jobWeights).map(key => keyMap[key] || key);
                const weightValues = Object.values(jobWeights);

                const pieChartData = {
                    labels: weightLabels,
                    datasets: [{
                        data: weightValues,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0'
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
                const scores = applicantsResponse.data.application.map(applicant => applicant.score);
                const user = applicantsResponse.data.application.map(applicant => ({
                    userName: applicant.user.name,
                    score: applicant.score
                }));
                setApplicationScores(scores);
                setAppUser(user);
            } catch (error) {
                console.error("Error fetching applicants data:", error);
            }
        };

        fetchApplicants();
    }, [jobId]);

    const scoreFrequency = {};
    applicationScores.forEach(score => {
        scoreFrequency[score] = (scoreFrequency[score] || 0) + 1;
    });

    const scores = Object.keys(scoreFrequency).map(parseFloat);
    const frequencies = Object.values(scoreFrequency);

    const histogramData = {
        labels: scores,
        datasets: [{
            label: 'Frequency',
            data: frequencies,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }],
    };

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
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const userData = usernames.map(applicant => ({
        name: applicant.userName,
        score: parseFloat(applicant.score.replace('%', ''))
    }));

    const barChartData = {
        labels: userData.map(user => user.name),
        datasets: [{
            label: 'Application Scores',
            data: userData.map(user => user.score),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const barChartOptions = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Application Scores by User'
            }
        },
        scales: {
            x: {
                type: 'linear',
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            y: {
                type: 'category'
            }
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <h2 className="stats-headingPie">Job Weights</h2>
                    <div className="pie-chart-container">
                        {weightsData && (
                            <Pie data={weightsData} options={{
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
                            }} />
                        )}
                    </div>
                </div>
                <div className="dashboard-card">
                    <h2 className="stats-heading">Application Scores</h2>
                    <div className="stats-chart-container">
                        <Bar data={histogramData} options={histogramOptions} />
                    </div>
                </div>
                <div className="dashboard-card">
                    <h2 className="stats-heading">Application Scores by User</h2>
                    <div className="stats-chart-container">
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsComp;