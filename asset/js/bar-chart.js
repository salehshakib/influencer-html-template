var ctx = document.getElementById("depositWithdrawChart").getContext("2d");
// Create the bar chart
var myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // X-axis labels for each month
    datasets: [
      {
        label: "Monthly Deposit",
        data: [65, 59, 80, 81, 56, 70, 75, 68, 85, 90, 55, 77],
        backgroundColor: document.documentElement.style.getPropertyValue(
          "--var-secondary-color"
        ),
        borderColor: document.documentElement.style.getPropertyValue(
          "--var-primary-color"
        ),
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Deposit Amount", // Y-axis label for clarity
        },
      },
      x: {
        title: {
          display: true,
          text: "Month", // X-axis label
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});

var ct2 = document.getElementById("transactionChart").getContext("2d");

// Create the bar chart
var transactionChart = new Chart(ct2, {
  type: "line", // Line chart
  data: {
    labels: [
      "10-October-2024",
      "11-October-2024",
      "12-October-2024",
      "13-October-2024",
      "14-October-2024",
      "15-October-2024",
      "16-October-2024",
      "17-October-2024",
      "18-October-2024",
      "19-October-2024",
      "20-October-2024",
      "21-October-2024",
      "22-October-2024",
      "23-October-2024",
    ],
    datasets: [
      {
        label: "Plus Transactions",
        data: [0, 500, 1000, 1200, 4500, 0, 0, 0, 100, 400, 0, 0, 0, 0],
        borderColor: "#02E296", // Green line
        backgroundColor: "#8DCCB1", // Light green fill
        fill: true, // Fill the area under the line
        tension: 0.3, // Smooth the line
      },
      {
        label: "Minus Transactions",
        data: [0, -300, -200, -100, -50, 0, 0, 0, -80, -60, 0, -20, -30, 0],
        borderColor: "rgba(255, 0, 0, 1)", // Red line
        backgroundColor: "rgba(255, 0, 0, 0.2)", // Light red fill
        fill: true, // Fill the area under the line
        tension: 0.3, // Smooth the line
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at 0
      },
      x: {
        ticks: {
          maxRotation: 45, // Angle x-axis labels
          minRotation: 45,
        },
      },
    },
  },
});
