# 🧪 Testing Tasks (1-2 Hours)

<div align="center">
  <h1>Real Estate Rental Platform</h1>
  <p><em>Quick assessment tasks for evaluating team candidates</em></p>
</div>

---

## 🔗 Blockchain Developer

### Task 1: Simple Smart Contract
**Objective:** Create a basic rental deposit smart contract.

#### Requirements:
- Create a Solidity contract that:
  - Accepts ETH deposits from tenants
  - Allows the owner to release the deposit back to tenant
  - Includes a simple function to check deposit balance
- Maximum 50 lines of code

#### Deliverable:
- Solidity file (.sol) with comments explaining the code

---

### Task 2: Web3 Connection
**Objective:** Write a simple script to connect to MetaMask.

#### Requirements:
- Create a JavaScript function that:
  - Detects if MetaMask is installed
  - Connects to the user's MetaMask wallet
  - Displays the connected account address
  - Shows the ETH balance

#### Deliverable:
- JavaScript file with the implementation

---

### Task 3: Blockchain Selection
**Objective:** Compare two blockchains for our platform.

#### Requirements:
- Write a brief comparison of Ethereum vs. Polygon for rental payments
- Focus on:
  - Transaction costs
  - Speed
  - Ease of implementation

#### Deliverable:
- Short document (max 1 page) with recommendation

---

## 🖥️ Backend Developer

### Task 1: Simple Property API
**Objective:** Create a basic Express endpoint for property listings.

#### Requirements:
- Implement a single GET endpoint that:
  - Returns a list of sample property listings
  - Allows filtering by property type
  - Includes basic error handling

#### Deliverable:
- JavaScript file with the Express route implementation

---

### Task 2: MongoDB Schema
**Objective:** Design a simple property listing schema.

#### Requirements:
- Create a Mongoose schema for a property listing with:
  - Basic property details (title, description, price)
  - Location information
  - Property type (enum)
  - Owner reference

#### Deliverable:
- JavaScript file with the schema definition

---

### Task 3: Payment Webhook
**Objective:** Create a simple webhook to receive payment notifications.

#### Requirements:
- Implement a POST endpoint that:
  - Accepts payment confirmation data
  - Validates the required fields
  - Logs the payment details
  - Returns appropriate success/error responses

#### Deliverable:
- JavaScript file with the webhook implementation

---

## 🎨 Frontend Developer

### Task 1: Property Card Component
**Objective:** Create a simple property listing card in React.

#### Requirements:
- Build a React component that displays:
  - Property image
  - Title and price
  - Key details (bedrooms, bathrooms)
  - "View Details" button
- Make it responsive for mobile and desktop

#### Deliverable:
- React component file with CSS/styled-components

---

### Task 2: Connect Wallet Button
**Objective:** Create a simple "Connect Wallet" button component.

#### Requirements:
- Build a React component that:
  - Shows "Connect Wallet" when disconnected
  - Shows abbreviated wallet address when connected
  - Handles the connection state
  - Has appropriate styling

#### Deliverable:
- React component file with styling

---

### Task 3: Property Filter
**Objective:** Create a simple filter component for properties.

#### Requirements:
- Build a React component with:
  - Price range filter (min/max)
  - Property type dropdown
  - Reset filters button
  - Clean, intuitive UI

#### Deliverable:
- React component file with styling

---

## 🎭 UI/UX Designer

### Task 1: Property Card Design
**Objective:** Design a property listing card.

#### Requirements:
- Create a simple, clean design for a property card showing:
  - Property image
  - Title, location, price
  - Key features (bedrooms, bathrooms, area)
  - "View" and "Save" actions
- Design for mobile and desktop versions

#### Deliverable:
- Figma or Adobe XD file with the card design

---

### Task 2: Crypto Payment Button
**Objective:** Design a cryptocurrency payment button and confirmation.

#### Requirements:
- Design:
  - "Pay with Crypto" button in different states
  - Simple confirmation modal
  - Consider both new and experienced crypto users

#### Deliverable:
- Figma or Adobe XD file with the designs

---

### Task 3: Color Palette
**Objective:** Create a simple color palette for the platform.

#### Requirements:
- Design a color scheme with:
  - Primary and secondary colors
  - Neutral shades
  - Success, warning, and error states
  - Ensure accessibility (WCAG AA compliance)

#### Deliverable:
- Color palette with hex codes and usage examples

---

## 🧪 QA Tester

### Task 1: Test Plan for Wallet Connection
**Objective:** Create a test plan for the wallet connection feature.

#### Requirements:
- Develop a simple test plan that covers:
  - Successful wallet connection scenarios
  - Error handling cases (wallet not installed, connection rejected)
  - Different browsers and devices
  - Include at least 5-8 test cases with steps and expected results

#### Deliverable:
- Test plan document with test cases

---

### Task 2: API Testing
**Objective:** Test and document the property listing API.

#### Requirements:
- Using Postman or similar tool:
  - Create test requests for the property listing endpoint
  - Test filtering functionality
  - Document any bugs or issues found
  - Suggest improvements for API response structure

#### Deliverable:
- Postman collection or document with test results

---

### Task 3: Payment Flow Testing
**Objective:** Identify potential issues in the crypto payment flow.

#### Requirements:
- Review the payment flow mockups/documentation and:
  - Identify at least 3 potential user experience issues
  - List edge cases that should be tested
  - Create a simple test matrix for different payment scenarios
  - Suggest error messages for common failure points

#### Deliverable:
- Document with findings and recommendations

---

## 🛠️ DevOps Engineer

### Task 1: CI/CD Pipeline Setup
**Objective:** Design a CI/CD pipeline for the platform.

#### Requirements:
- Create a basic GitHub Actions workflow that:
  - Runs on pull requests to the main branch
  - Performs code linting and unit tests
  - Builds the application
  - Includes security scanning for dependencies
  - Outlines deployment steps (without implementing them)

#### Deliverable:
- GitHub Actions workflow file (.yml) with comments explaining each step

---

### Task 2: Docker Configuration
**Objective:** Create a Docker setup for local development.

#### Requirements:
- Create a Dockerfile that:
  - Uses an appropriate Node.js base image
  - Installs necessary dependencies
  - Sets up the application for development
  - Includes proper caching strategies
  - Has appropriate security considerations
- Include a docker-compose.yml file that adds:
  - MongoDB service
  - Redis for caching
  - The application service

#### Deliverable:
- Dockerfile and docker-compose.yml files with documentation

---

### Task 3: Infrastructure Monitoring Plan
**Objective:** Design a monitoring strategy for the platform.

#### Requirements:
- Create a simple monitoring plan that includes:
  - Key metrics to track for web application performance
  - Blockchain-specific monitoring considerations
  - Alerting thresholds and strategies
  - Log aggregation approach
  - Recommended tools and services

#### Deliverable:
- Monitoring plan document (1-2 pages)

---

## 📊 Project Manager

### Task 1: Feature Breakdown
**Objective:** Break down the crypto payment feature into tasks.

#### Requirements:
- Create a simple task list for implementing crypto payments:
  - List 5-8 key tasks
  - Estimate hours for each task
  - Identify dependencies
  - Assign to roles (frontend, backend, blockchain)

#### Deliverable:
- Task breakdown document or spreadsheet

---

### Task 2: Risk Identification
**Objective:** Identify key risks for blockchain integration.

#### Requirements:
- List 3-5 potential risks for adding crypto payments:
  - Brief description of each risk
  - Simple high/medium/low rating for impact and likelihood
  - One mitigation strategy per risk

#### Deliverable:
- Simple risk table document

---

### Task 3: User Story Writing
**Objective:** Write user stories for the rental payment feature.

#### Requirements:
- Write 3-5 user stories in standard format:
  - "As a [user type], I want to [action] so that [benefit]"
  - Include acceptance criteria for each story
  - Focus on the tenant's payment experience

#### Deliverable:
- Document with user stories and acceptance criteria

---

<div align="center">
  <h3>🚀 Evaluation Notes</h3>
  <p>These tasks are designed to be completed in 1-2 hours each.<br>
  Candidates should focus on core functionality rather than perfect implementation.</p>
</div>

---

<div align="center">
  <p><strong>Real Estate Rental Platform</strong><br>
  Simplifying property rentals with Web3 technology</p>
</div>