![Test](https://github.com/dipankarbd/mbcb-web/actions/workflows/test.yml/badge.svg)

# MBCB-Web

MBCB-Web is a web application built with React

## Installation

To get started with MBCB-Web, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## Deployment

MBCB-Web can be deployed using either a build script or Docker. Follow the instructions below to deploy the app:

### Deploy with build script

1. Run `npm run build` to build the app for production.
2. Copy the contents of the `build` folder to a remote server directory.

### Deploy with Docker

1. Build the Docker image by running `docker build . -t mbcb-web`.
2. Verify that the image was created by running `docker images | grep mbcb-web`.
3. Run the container in detached mode by running `docker run -p 3000:3000 -d mbcb-web`.

 