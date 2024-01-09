A repository for IOD Capstone Project - Waka: RideSharing Application

Waka is a social application providing a platform for users to post or find opportunities for ride sharing.

Users can create an account and they can be either a driver - offering trips and confirming the booking request, or a passenger - searching for a trip and requesing a booking.

To run this application locally, you will need to have the below application installed first:
1. MySQL WorkBench
2. A web browser (preferably Google Chrome)
3. VScode (preferrably)

And you need to follow the necessary steps below:
1. Clone the code from this GitHub repository and store locally.
2. Create the .env file inside the backend folder and configure it with below information:

    DB_NAME=wakadatabase
    DB_USER=root
    DB_PASSWORD="Your MySQl Password"
    DB_HOST=localhost
    DB_PORT=3307

    JWT_KEY="anything you prefer"

    PORT=8080

3. 