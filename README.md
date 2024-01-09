A repository for IOD Capstone Project - Waka: RideSharing Application

Waka is a dynamic social application designed to connect users through a seamless ride-sharing platform.

Upon creating an account, users can assume the role of either a driver, offering and confirming booking requests, or a passenger, actively searching for available trips and initiating bookings.

To locally run the application, ensure the following applications are installed:

1. MySQL Workbench (assuming you have an account created and MySQL server is connected and running)
2. A web browser (preferably Google Chrome)
3. VScode (preferrably)

Follow these steps for a smooth setup:

1. Clone the code from this GitHub repository and store it locally.
2. Inside the backend folder, create the .env file and configure it with the following information:

    DB_NAME=wakadatabase
    DB_USER=root
    DB_PASSWORD="Your MySQL Password"
    DB_HOST=localhost
    DB_PORT=3307

    JWT_KEY="anything you prefer"

    PORT=8080

3. To install dependencies, run npm install in the VSC terminal of both the backend and frontend folders.
4. To set up the database, in MySQL Workbench, execute the query "CREATE DATABASE wakadatabase" and verify the schema has been created. 
6. To run the application - backend part, in the VSC terminal of backend folder, and run "npm run dev".
7. To run the application - frontend part, in the VSC terminal of frontend folder, and run "npm run dev".
8. To access the application - Open your web browser and browse the locally hosted application at http://localhost:5173/.

This comprehensive guide ensures a smooth setup, allowing users to experience the Waka RideSharing Application seamlessly on their local machines.
