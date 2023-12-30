# ShareTrip Assignment

A RESTful API containing one endpoint `/search` for searching posts from an external API. Developed in **Node.js**.

## Table of Contents

- [Built With](#built-with)
- [Installation](#installation)
  - [Clone the repository](#clone-the-repository)
  - [Setup .env File](#setup-env-file)
  - [Install Depndencies](#install-depndencies)
  - [Run the App](#run-the-app)
- [Usage](#usage)
  - [Search Endpoint](#search-endpoint)

## Built With

Tools used to develop this project.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Installation

### Clone the repository

```bash
git clone https://github.com/afif-fahim/sharetrip-assignment.git
cd sharetrip-assignment
```

### Setup .env File

Create a `.env` file in the project root and add the following configurations:

```env
PORT=
MONGO_CONNECTION_STRING=
POST_API_URL=
```

### Install Depndencies

Ensure you have Node.js installed on your machine. Then install dependencies:
```bash
npm install
```

### Run the App

Run the app using:
```bash
npm start
```

## Usage

Access the app at [http://localhost:3000](http://localhost:3000). (or at your defined port)

### Search Endpoint

Search for posts from the external API by providing `keyword` query param in `/search` endpoint.

Example: http://localhost:3000/search?keyword=mango
