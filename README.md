# BaseApp.UI

An Angular frontend for the BaseApp application. This application includes a button that, when clicked, retrieves data from a backend API and displays it in the UI.

## Prerequisites

- Angular 12+
- Node.js and npm

## Setup and Running

1. **Clone the repository**  
   Clone this repository to your local machine.

2. **Install the dependencies**  
   Navigate to the `BaseApp.UI` directory in your terminal and run `npm install` to install the necessary packages for the Angular application.

3. **Run the application**  
   Still in the `BaseApp.UI` directory, run `ng serve` to start the Angular app. The application will be running at `http://localhost:4200/`.

## Application Details

The application includes a button that, when clicked, makes a `GET` request to the `/test/getfromdb` endpoint of the .NET Core backend. The backend retrieves data from a `Test` table in a MySQL database, and the Angular app displays this data in the UI.

## Troubleshooting

- If you encounter a "CORS policy" error when attempting to fetch data from the backend, ensure that CORS is properly configured on the backend server.
- If you get a "Cannot GET /test/getfromdb" error, ensure that the backend server is running and that the endpoint is correctly defined.

## Security Considerations

This project is intended for educational and demonstration purposes. In a production application, you should take steps to secure your application:

- Use HTTPS for your API endpoints.
- Implement proper error handling and logging.
- Consider implementing authentication and authorization for sensitive operations.
