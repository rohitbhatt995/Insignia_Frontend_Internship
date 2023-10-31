// Mock API call to fetch employee statistics
fetch('api/employee-statistics')
    .then(response => response.json())
    .then(data => {
        document.getElementById('active-employees').textContent = data.activeEmployees;
        document.getElementById('inactive-employees').textContent = data.inactiveEmployees;
        document.getElementById('pending-applications').textContent = data.pendingApplications;
    });