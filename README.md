# CVCompass: LLM-Powered Resume Review for Hiring Teams & Job Seekers

![CV-Compass demo](https://github.com/user-attachments/assets/bf82f8a2-cd75-42a8-b87a-cf064dcc7563)

#### This project aims to address the limitations of traditional ATS (Applicant Tracking System) scanners while providing a more intelligent, user-centric solution for job seekers and hiring teams.

### Checkout the demo : [YouTube](https://youtu.be/D5ZdgJj3WhA?si=igRR-B_5ue_4jcpn)

### How CVCompass will help?

It compares the candidate's resume with the specific job requirements and background fit needs and provides a more accurate analysis of the candidate's strengths and relevancy with the job requirement.


## Some Quick Features (Beta Launch):

**Different options for LLM:** Our application relies on different large language models (currently: Llama3, DeepSeek r1) to review and score the candidate's strengths.

**No Login Flow:** Breaking the extra barrier between the user and the application. Get started instantly; no sign-up hassle.

**Local Processing:** As there's no user-centric database, most of your data is stored and managed from your cached memory.

**Interactive Charts:** Dynamic, interactive charts to visualize the candidate's strengths, weaknesses, and key insights to make quick decisions.

**Personalized Feedback:** Job description-specific feedback and recommendations to improve the candidate's performance.


## Design System of the product:

![image](https://github.com/user-attachments/assets/593868f9-01fa-486e-a4de-454c0fc2f5a8)

### Backend Server Files : [Click here](https://github.com/SayantanmPaul/cv-compass-server)


## Run your local development enviornment

Run the following command to build and start the application using Docker Compose:

```bash
docker-compose up --build
```

This will:
- Build the Docker image using the Dockerfile
- Install dependencies
- Start the application inside a container

#### Access the Application
Once the container is up and running, the application will be accessible at: 

```bash
http://localhost:3000
```

#### Stopping the Application

To stop the running containers, use:

```bash
docker-compose down
```

## Support the Project

If you find this project helpful, please consider giving it a star on GitHub! ✨


