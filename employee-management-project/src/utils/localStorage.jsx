

const employees = [
  {
    "id": 1,
    "firstName": "Rahul",
    "email": "e@e.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete Project Documentation",
        "taskDescription": "Prepare and update the documentation for the current project.",
        "taskDate": "2026-10-12",
        "taskCategory": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Page Bug",
        "taskDescription": "Identify and fix the validation issue on the login page.",
        "taskDate": "2026-09-13",
        "taskCategory": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly development team meeting.",
        "taskDate": "2026-09-10",
        "taskCategory": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit Weekly Report",
        "taskDescription": "Submit the weekly progress report to the team lead.",
        "taskDate": "2026-09-08",
        "taskCategory": "Reporting"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update User Dashboard",
        "taskDescription": "Add the latest user statistics and improve the dashboard layout.",
        "taskDate": "2026-09-14",
        "taskCategory": "UI Development"
      }
    ]
  },

  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create a responsive landing page for the new product.",
        "taskDate": "2026-09-12",
        "taskCategory": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Logo Concepts",
        "taskDescription": "Prepare three different logo concepts for the marketing team.",
        "taskDate": "2026-09-09",
        "taskCategory": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Website Images",
        "taskDescription": "Compress and optimize website images to improve loading speed.",
        "taskDate": "2026-09-13",
        "taskCategory": "Optimization"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare Client Presentation",
        "taskDescription": "Create a presentation explaining the proposed product design.",
        "taskDate": "2026-09-07",
        "taskCategory": "Presentation"
      }
    ]
  },

  {
    "id": 3,
    "firstName": "Aman",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Create and verify a complete backup of the production database.",
        "taskDate": "2026-09-12",
        "taskCategory": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize SQL Queries",
        "taskDescription": "Review slow database queries and improve their performance.",
        "taskDate": "2026-09-14",
        "taskCategory": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Database Schema",
        "taskDescription": "Add the required fields to the employee database table.",
        "taskDate": "2026-09-10",
        "taskCategory": "Database"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Check the database for common security and access-control issues.",
        "taskDate": "2026-09-15",
        "taskCategory": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Restore Test Database",
        "taskDescription": "Restore the test database from the previous backup and verify its integrity.",
        "taskDate": "2026-09-06",
        "taskCategory": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Remove Duplicate Records",
        "taskDescription": "Find and remove duplicate employee records from the database.",
        "taskDate": "2026-09-08",
        "taskCategory": "Data Management"
      }
    ]
  },

  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Registration Flow",
        "taskDescription": "Test the complete user registration process and report any bugs.",
        "taskDate": "2026-09-12",
        "taskCategory": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Create unit tests for the authentication module.",
        "taskDate": "2026-09-13",
        "taskCategory": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Verification",
        "taskDescription": "Verify that previously reported bugs have been fixed.",
        "taskDate": "2026-09-10",
        "taskCategory": "Quality Assurance"
      }
    ]
  },

  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Marketing Report",
        "taskDescription": "Prepare a report showing the performance of the latest marketing campaign.",
        "taskDate": "2026-09-12",
        "taskCategory": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Analyze Customer Feedback",
        "taskDescription": "Review customer feedback and identify the most common issues.",
        "taskDate": "2026-09-13",
        "taskCategory": "Analysis"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Customer List",
        "taskDescription": "Update the customer database with the latest contact information.",
        "taskDate": "2026-09-09",
        "taskCategory": "Data Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Prepare and publish the scheduled social media campaign.",
        "taskDate": "2026-09-07",
        "taskCategory": "Marketing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Monthly Newsletter",
        "taskDescription": "Create the September newsletter and prepare it for distribution.",
        "taskDate": "2026-09-15",
        "taskCategory": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Competitor Research",
        "taskDescription": "Research competitors and summarize their latest product offerings.",
        "taskDate": "2026-09-08",
        "taskCategory": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Plan Promotional Campaign",
        "taskDescription": "Create a promotional campaign plan for the upcoming product launch.",
        "taskDate": "2026-09-16",
        "taskCategory": "Marketing"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


 export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
 }
 export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees'))

const admin= JSON.parse(localStorage.getItem('admin'))
return{employees,admin}
 }