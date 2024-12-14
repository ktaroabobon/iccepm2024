# ICCEPM2024 Website Project

This is the repository for the website of the **2024 International Conference on Civil Engineering and Project Management (ICCEPM2024)**.

- **[Home Page](https://iccepm2024.com/)**

## Docs

- [English](README.md)
- [日本語](README.ja.md)

## Table of Contents

- [ICCEPM2024 Website Project](#iccepm2024-website-project)
  - [Docs](#docs)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Setup](#setup)
  - [Running the Application](#running-the-application)
  - [Developer Guide](#developer-guide)
    - [Available Make Commands](#available-make-commands)
  - [License](#license)
  - [Contact](#contact)

## Introduction

The ICCEPM2024 website serves as the central hub for information regarding the ICCEPM2024. It provides details about the conference schedule, speakers, registration, and more. This repository contains the source code and resources needed to develop and maintain the website.

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- **Git**: Version control system. [Download Git](https://git-scm.com/downloads)
- **Make**: Build automation tool. [Install Make](https://www.gnu.org/software/make/)
- **Docker** (optional): For containerized environments. [Get Docker](https://www.docker.com/get-started)

### Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/ktaroabobon/iccepm2024.git
cd iccepm2024
```

### Setup

Set up the project environment by running:

```bash
make up
```

This command will install all necessary dependencies and set up the development environment.

## Running the Application

After setting up, you can run the website locally. Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the ICCEPM2024 website running locally on your machine.

## Developer Guide

### Available Make Commands

To streamline development tasks, several Make commands are available. You can view all available commands by running:

```bash
make help
```

Common commands include:

- `make up` : Start the application.
- `make stop` : Stop the application.
- `make ci` : Run all CI checks in local.
- etc...

For a full list of commands and their descriptions, refer to the [Makefile](Makefile).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact:

- **Project Owner**: [ktaroabobon](https://github.com/ktaroabobon)
- **Conference Website**: [https://iccepm2024.com/](https://iccepm2024.com/)

```

```
