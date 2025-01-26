# Automation-Task

This repository contains an automated test suite built with [Cypress](https://www.cypress.io/) to verify the checkout process on [automationexercise.com](https://automationexercise.com/).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Test Data](#test-data)
5. [File Overview](#file-overview)

## Prerequisites

- Node.js (14.x or higher)
- npm (Node package manager)
- A modern web browser (Chrome recommended)

## Installation

1. Clone the repository for this [link](https://github.com/sahil-kumar-yadav/Automation-Task)
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run start` to open the Cypress Test Runner
5. Run `npm run start-headless` to run the tests headlessly

## Usage

- Open the Cypress Test Runner by running `npm run start`
- Run the tests headlessly by running `npm run start-headless`

## Test Data

- Test data is stored in the `testData.json` file in the `productCheckout` directory

## File Overview

- `productCheckout.cy.js`: The main test file for the checkout process
- `testData.json`: Test data for the checkout process
- `addproductToCart.js`: Page object for the add product to cart page
- `CartPage.js`: Page object for the cart page
- `CheckoutPage.js`: Page object for the checkout page
- `LoginPage.js`: Page object for the login page
- `PaymentPage.js`: Page object for the payment page
