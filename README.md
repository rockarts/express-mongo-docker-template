## Fable Live Coding Challenge

## ✅ Setting up environment

1. Install dependencies within `my-app` and `api`
   - Run `npm install` inside each folder
2. Back at the root of the project, type `./start.sh` to run the application setup


## Overview

We will provide you with a GitHub repo that can be opened in Codespaces. This repo sets up an **Express, MongoDB/Mongoose, and React** environment with some starting code. You will be given a User Story with requirements to build new functionality onto this code while sharing your screen. During the exercise, you will work with a member of our team to understand and implement the provided feature.

You are welcome to:
- Ask questions as you go to clarify feature requirements or existing code
- Use any resources at your disposal - Google, ChatGPT, etc. just as you would in a real-world scenario.
- Modify the existing code as necessary

**Note:** This is not a pass/fail exercise based on amount completed/accuracy. You are not required to complete the entire User Story. We will do our best to help things move along within the provided time to help with any time-based stress, but please don’t worry if you don’t finish everything. 

## Assessment
The purpose of this exercise is to understand your approach to various stages of the development life cycle. We are not simply looking to ensure that you built out the requirements exactly as specified; rather, we want to gauge your overall technical proficiency and problem-solving ability.

## Environment setup
- Please ensure you are signed into Github
- [Follow this link](https://github.com/ptrin/express-mongo-docker-template/) to fork the project
- Create a new codespace based on your repository

### Install dependencies within my-app and api

- Run npm install inside each folder
- Back at the root of the project, type ./start.sh to run the application setup

You will be able to see each port in the Preview window for both the front end and back end projects

## User Story
Theme: Enhance Community Metrics Page for tester engagement insights

**As a** community manager, **I want to** view engagement metrics for our testers,
**so that** I can better understand usage patterns and ensure they are gaining value from the platform.

### Acceptance Criteria
Tester list on Community metrics page:

- Includes new column for total number of hours worked
- Can be sorted by most and least number of hours worked

Community metrics page includes a “Statistics” section containing the following information:
- **Request distribution:** Percentage of hours worked by the top 10% of testers in the last 90 days
- **Percentage of Active Testers:** Testers logged in within the last 90 days
- **Percentage of Engaged Testers:** Testers who worked more than 3 hours in the last 60 days

Dev notes:

Please use the SortModal javascript class that exists in app.js for reuse
