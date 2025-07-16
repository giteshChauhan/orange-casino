<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# ORANGE-CASINO

<em>Unleash Winning Moments, Elevate Every Spin</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/giteshChauhan/orange-casino?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/giteshChauhan/orange-casino?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/giteshChauhan/orange-casino?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/giteshChauhan/orange-casino?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/Socket.io-010101.svg?style=flat&logo=socketdotio&logoColor=white" alt="Socket.io">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
<br>
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=flat&logo=Vitest&logoColor=white" alt="Vitest">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Tradeoffs](#tradeoffs)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [License](#license)

---

## Overview

orange-casino is a full-stack developer toolkit for creating engaging, real-time casino applications with React and Node.js. It combines a modular architecture, real-time WebSocket communication, and comprehensive testing setups to streamline development and ensure reliability.

**Why orange-casino?**

This project empowers developers to build scalable, interactive gaming platforms with ease. The core features include:

- 🎯 **🧩 Modular Design:** Clear separation of frontend and backend components for maintainability.
- 🌐 **🔗 Real-Time WebSocket Support:** Live updates for gameplay, balances, and notifications.
- 🎨 **🖌️ Tailwind CSS & PostCSS:** Streamlined styling workflows with responsive design.
- 🔒 **🛡️ Secure Authentication & Role Management:** Role-based access control for admin and users.
- ⚙️ **🧪 Robust Testing & Configurations:** Ensures code quality with integrated testing and environment setups.

---

## Tradeoffs
### Slot Machine: 
<pre>
[
  { symbol: '⭐', weight: 2, payoutMultiplier: 10 },
  { symbol: '🍒', weight: 5, payoutMultiplier: 5 },
  { symbol: '🔔', weight: 3, payoutMultiplier: 4 },
  { symbol: '🍋', weight: 4, payoutMultiplier: 3 },
  { symbol: '💎', weight: 1, payoutMultiplier: 15 },
]
</pre>
---

## Features

|      | Component       | Details                                                                                     |
| :--- | :-------------- | :------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**  | <ul><li>Client-Server Model with separate frontend (React) and backend (Express)</li><li>REST API endpoints for communication</li><li>Real-time features via Socket.io</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>TypeScript used extensively for type safety</li><li>Consistent code style with ESLint & Prettier</li><li>Modular folder structure separating frontend and backend</li></ul> |
| 📄 | **Documentation** | <ul><li>Basic README with project overview</li><li>.env.example for environment variables</li><li>Comments and JSDoc in codebase</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Tailwind CSS for styling</li><li>React Router for navigation</li><li>Socket.io for real-time communication</li><li>MongoDB via Mongoose for data persistence</li><li>JWT for authentication</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Frontend components organized by feature</li><li>Backend routes and controllers separated</li><li>Shared types/interfaces in common folder</li></ul> |
| 🧪 | **Testing**       | <ul><li>Unit tests with Jest and React Testing Library</li><li>API tests with Supertest</li><li>Test scripts configured in package.json</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Vite used as build tool for fast development server</li><li>Code splitting and lazy loading in React</li><li>Optimized Tailwind CSS build</li></ul> |
| 🛡️ | **Security**      | <ul><li>JWT tokens for user authentication</li><li>CORS middleware enabled</li><li>Password hashing with bcrypt</li><li>Environment variables for sensitive data</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Core: React, Express, TypeScript, Mongoose</li><li>Dev: Jest, Vitest, ESLint, Prettier, Tailwind CSS</li><li>Real-time: Socket.io</li></ul> |

---

## Project Structure

```sh
└── orange-casino/
    ├── README.md
    ├── backend
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── README.md
    │   ├── jest.config.ts
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   └── tsconfig.json
    └── frontend
        ├── .env.example
        ├── .gitignore
        ├── README.md
        ├── dist
        ├── index.html
        ├── package.json
        ├── postcss.config.js
        ├── public
        ├── src
        ├── tailwind.config.js
        ├── tsconfig.json
        ├── tsconfig.node.json
        ├── vite.config.ts
        ├── vitest.config.ts
        └── vitest.setup.ts
```

---

### Project Index

<details open>
	<summary><b><code>ORANGE-CASINO/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the projects architecture and core components, illustrating how various modules interact to deliver the applications primary functionalities<br>- Serves as a guide for understanding the overall structure, enabling developers to navigate, extend, and maintain the system effectively within the broader codebase.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- frontend Submodule -->
	<details>
		<summary><b>frontend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ frontend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/vite.config.ts'>vite.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures the development environment for the frontend application by setting up the Vite build tool with React support and specifying the local server port<br>- Ensures a streamlined development experience with optimized build processes and a consistent local server setup, integrating seamlessly into the overall architecture of the project’s frontend stack.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/vitest.config.ts'>vitest.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures the testing environment for the frontend project using Vitest, integrating React support and setting up testing parameters such as environment, globals, setup files, and coverage reporting<br>- Ensures consistent and efficient testing workflows within the overall architecture, facilitating reliable component validation and quality assurance during development.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/postcss.config.js'>postcss.config.js</a></b></td>
					<td style='padding: 8px;'>- Configure PostCSS to integrate Tailwind CSS and autoprefixer, enabling streamlined styling workflows within the frontend architecture<br>- This setup ensures consistent, cross-browser compatible styles across the application by processing CSS with essential plugins, thereby supporting a cohesive and maintainable design system throughout the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/vitest.setup.ts'>vitest.setup.ts</a></b></td>
					<td style='padding: 8px;'>- Sets up custom testing matchers for the frontend testing environment, enhancing the expressiveness and readability of test assertions<br>- Integrates additional testing utilities to ensure consistent and reliable test results across the project, supporting robust frontend development within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td style='padding: 8px;'>- Defines the Tailwind CSS configuration to specify which files are scanned for class names, enabling optimized styling and consistent design across the frontend<br>- It ensures that styles are correctly applied and purged during build, supporting a streamlined, maintainable, and scalable user interface within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/tsconfig.node.json'>tsconfig.node.json</a></b></td>
					<td style='padding: 8px;'>- Defines TypeScript compilation settings tailored for the development environment, ensuring proper module resolution and JSON support within the frontend build process<br>- Facilitates seamless integration of configuration files during development and testing, contributing to a consistent and efficient build setup across the projects frontend architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/.env.example'>.env.example</a></b></td>
					<td style='padding: 8px;'>- Defines environment variables for frontend configuration, specifically setting the API endpoint URL<br>- Facilitates seamless switching between development and production environments by providing a template for configuring the API base URL, ensuring consistent communication with the backend service within the overall application architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the projects frontend configuration and dependencies for the Slot Machine App UI, establishing the core environment for building, testing, and running the user interface<br>- It ensures consistent setup of React components, styling with Tailwind CSS, and integration of essential libraries like Axios and Socket.io, enabling seamless development and deployment of the interactive slot machine experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Defines TypeScript compiler options to ensure consistent, modern, and type-safe development within the frontend React project<br>- It optimizes the build process, enforces strict coding standards, and supports advanced JavaScript features, facilitating seamless integration and maintainability across the entire codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Sets up the main entry point for the frontend application, establishing the initial HTML structure and linking the primary React-based script<br>- It facilitates rendering the user interface within the root element, serving as the foundation for the client-side experience in the Orange Casino platform<br>- This file ensures the application loads correctly and is ready for user interaction.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the frontend applications purpose within the overall architecture, emphasizing its role in delivering the user interface and facilitating interaction with backend services<br>- It highlights how the frontend integrates with other components to ensure a seamless user experience, supporting the projects goal of creating an intuitive and responsive web platform.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ frontend.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/app.tsx'>app.tsx</a></b></td>
							<td style='padding: 8px;'>- Defines the main application routing and context providers, orchestrating user authentication, real-time socket connections, and user notifications<br>- Ensures secure access to the home page based on authentication status and integrates essential global functionalities, forming the core structure that enables seamless navigation and state management across the frontend.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/main.tsx'>main.tsx</a></b></td>
							<td style='padding: 8px;'>- Initialize and render the main React application within the browser environment, setting up client-side routing and global styling<br>- It serves as the entry point that bootstraps the user interface, integrating core components and ensuring the app is properly mounted to the DOM for seamless user interaction within the overall frontend architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/env.d.ts'>env.d.ts</a></b></td>
							<td style='padding: 8px;'>- Defines environment variable types for the frontend project, specifically specifying the API URL configuration<br>- Facilitates type safety and consistency across the codebase by ensuring correct usage of environment variables during development and build processes<br>- Supports seamless integration of environment-specific settings, contributing to a more maintainable and reliable architecture.</td>
						</tr>
					</table>
					<!-- components Submodule -->
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/components/SlotMachine.tsx'>SlotMachine.tsx</a></b></td>
									<td style='padding: 8px;'>- Implements an interactive slot machine component that enables users to place wagers, spin reels, and view real-time results<br>- Integrates socket-based event handling for live updates and manages local animation for spinning effects, providing an engaging user experience within the applications gaming interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/components/Balance.tsx'>Balance.tsx</a></b></td>
									<td style='padding: 8px;'>- Displays real-time user balance updates within the applications interface by fetching initial data and listening for live socket events<br>- Integrates backend API calls with WebSocket communication to ensure the balance reflects current state, supporting a dynamic and responsive user experience in the overall architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/components/TournamentCreator.tsx'>TournamentCreator.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the creation of new tournaments within the application by providing a user interface for inputting tournament details and submitting them to the backend<br>- Integrates seamlessly into the admin dashboard, enabling administrators to efficiently manage tournament scheduling and ensure data consistency across the platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/components/Leaderboard.tsx'>Leaderboard.tsx</a></b></td>
									<td style='padding: 8px;'>- Displays a dynamic leaderboard showcasing top users based on net wins over a selectable time frame<br>- Integrates real-time updates via socket events to ensure current standings, and provides user controls for adjusting the reporting period and refreshing data<br>- Serves as a key component for tracking and visualizing competitive performance within the applications architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/components/TournamentSignup.tsx'>TournamentSignup.tsx</a></b></td>
									<td style='padding: 8px;'>- Displays a list of available tournaments fetched from the backend, allowing users to view details and join specific events<br>- Integrates with the API to retrieve tournament data and handle user participation, contributing to the overall user engagement and event management within the applications frontend architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/components/SlotMachineEffect.tsx'>SlotMachineEffect.tsx</a></b></td>
									<td style='padding: 8px;'>- Implements a visual slot machine reel animation that simulates spinning symbols, enhancing user engagement through dynamic effects<br>- It contributes to the overall interactive experience within the frontend interface, providing a lively and playful element that complements other UI components in the application’s architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- contexts Submodule -->
					<details>
						<summary><b>contexts</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.contexts</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/contexts/SocketContext.tsx'>SocketContext.tsx</a></b></td>
									<td style='padding: 8px;'>- Establishes a WebSocket connection to facilitate real-time communication within the application<br>- It manages socket lifecycle tied to user authentication, enabling components to interact with the server seamlessly<br>- This context centralizes socket management, supporting features like live updates, notifications, and collaborative interactions across the frontend architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/contexts/AuthContext.tsx'>AuthContext.tsx</a></b></td>
									<td style='padding: 8px;'>- Provides authentication state management within the frontend architecture by handling user login, logout, and token persistence<br>- Integrates seamlessly with API requests to ensure authorized communication and maintains user session consistency across the application<br>- Serves as a central context for authentication, enabling secure access control and user session handling throughout the React-based codebase.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- services Submodule -->
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.services</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/services/api.ts'>api.ts</a></b></td>
									<td style='padding: 8px;'>- Establishes a centralized API client for seamless communication with the backend services across the frontend application<br>- Facilitates consistent request configuration, including base URL and credentials handling, ensuring secure and reliable data exchange within the overall architecture<br>- Supports scalable integration of additional API endpoints, promoting maintainability and streamlined data flow throughout the project.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- pages Submodule -->
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.pages</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/pages/Register.tsx'>Register.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by providing a responsive form integrated with backend API calls, validation, and user feedback<br>- Enhances the onboarding experience within the applications architecture, connecting the frontend registration flow to authentication services while incorporating visual effects to improve user engagement<br>- Supports seamless account creation and navigation, contributing to the overall user authentication process.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/pages/Home.tsx'>Home.tsx</a></b></td>
									<td style='padding: 8px;'>- Render the main user interface for the Orange Casino platform, integrating core features such as the slot machine, leaderboard, and tournament management<br>- Facilitates role-based access, displaying admin controls for tournament creation and signup options for players<br>- Serves as the central hub connecting authentication, gameplay, and tournament functionalities within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/pages/Login.tsx'>Login.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user authentication by providing a login interface integrated with the applications authentication context<br>- Combines visual effects with form handling to enable users to securely sign in, while guiding new users to registration<br>- Serves as a critical entry point within the frontend architecture, connecting user credentials to backend authentication workflows and enhancing user experience through engaging visuals.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- utils Submodule -->
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend.src.utils</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/utils/toaster.ts'>toaster.ts</a></b></td>
									<td style='padding: 8px;'>- Provides a streamlined mechanism for displaying consistent, visually engaging toast notifications across the frontend interface<br>- Enhances user experience by delivering timely, non-intrusive alerts with customizable messages, leveraging react-toastifys features for positioning, animation, and theme consistency within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/frontend/src/utils/jwtDecode.ts'>jwtDecode.ts</a></b></td>
									<td style='padding: 8px;'>- Provides a utility to decode JSON Web Tokens (JWTs) within the frontend application, extracting user identification and role information<br>- Facilitates authentication and authorization processes by enabling the application to interpret token payloads, supporting role-based access control and user-specific functionality across the overall architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- backend Submodule -->
	<details>
		<summary><b>backend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ backend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/.env.example'>.env.example</a></b></td>
					<td style='padding: 8px;'>- Defines environment variables essential for configuring the backend applications connection to external services, including MongoDB, Redis, and JWT authentication<br>- Facilitates secure and flexible setup by providing placeholders for sensitive credentials, ensuring seamless integration within the overall architecture and enabling reliable data storage, caching, and authentication processes.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the backend server for the Orange Casino App, orchestrating core functionalities such as user authentication, real-time gameplay interactions, and data management<br>- Serves as the central hub that integrates various services and APIs, enabling secure, scalable, and responsive operation of the slot game platform where players can place real money bets.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/jest.config.ts'>jest.config.ts</a></b></td>
					<td style='padding: 8px;'>- Defines the testing configuration for the backend, ensuring consistent and reliable execution of unit tests within the Node.js environment<br>- It streamlines test discovery and execution for TypeScript files, facilitating robust validation of backend functionalities and maintaining code quality across the project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Defines TypeScript compilation settings to ensure consistent, modern JavaScript output aligned with project standards<br>- Facilitates smooth development and deployment by configuring strict type checking, module resolution, and output directory, supporting the overall architectures goal of maintaining a reliable, scalable backend codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides an overview of the backend systems architecture, detailing how various components interact to support core functionalities<br>- It clarifies the role of the backend within the overall project, emphasizing its responsibility for data processing, API management, and integration with other modules to ensure seamless operation and scalability across the platform.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ backend.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/app.ts'>app.ts</a></b></td>
							<td style='padding: 8px;'>- Defines the core Express application setup, orchestrating middleware, API route integration, and static file serving to facilitate backend API endpoints and frontend delivery within the overall architecture<br>- It establishes the servers foundational structure, enabling client interactions, data processing, and routing for features such as authentication, gameplay, user balances, leaderboards, tournaments, and transactions.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/server.ts'>server.ts</a></b></td>
							<td style='padding: 8px;'>- Establishes the core server setup by connecting to the database, initializing the HTTP server, and integrating WebSocket functionality<br>- Facilitates the applications network communication, ensuring the backend is ready to handle incoming requests and real-time interactions, thereby serving as the foundational entry point for the entire backend architecture.</td>
						</tr>
					</table>
					<!-- config Submodule -->
					<details>
						<summary><b>config</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.config</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/config/slot.config.ts'>slot.config.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the configuration for slot machine symbols, including their appearance probabilities and payout multipliers<br>- This setup influences the games core mechanics by determining symbol distribution and payout outcomes, ensuring balanced gameplay and fair reward distribution within the overall slot machine architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- routes Submodule -->
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.routes</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/routes/tournament.routes.ts'>tournament.routes.ts</a></b></td>
									<td style='padding: 8px;'>- Defines API endpoints for managing tournaments, enabling users to view available tournaments, join specific events, and allowing administrators to create or reset tournaments<br>- Integrates authentication and authorization to ensure secure access, supporting the overall architecture by facilitating tournament lifecycle operations and user interactions within the backend service.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/routes/leaderboard.routes.ts'>leaderboard.routes.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the API endpoint for retrieving the leaderboard data, integrating the route with the corresponding controller logic<br>- It facilitates access to aggregated ranking information within the application, supporting features that display user standings or competitive metrics<br>- This routing setup is essential for connecting client requests to the backend logic responsible for generating and serving leaderboard insights.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/routes/auth.routes.ts'>auth.routes.ts</a></b></td>
									<td style='padding: 8px;'>- Defines authentication routes for user registration and login, facilitating secure access management within the backend architecture<br>- Integrates with authentication controllers to handle user credential processing, serving as a key interface for user authentication workflows in the overall system<br>- Ensures organized routing for authentication-related endpoints, supporting the applications security and user management functionalities.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/routes/transaction.routes.ts'>transaction.routes.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the transaction-related API endpoint, enabling authenticated users to retrieve transaction data<br>- Integrates route handling with authentication middleware and links to the transaction controller for processing requests, thereby supporting secure access to transaction information within the backend architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/routes/balance.routes.ts'>balance.routes.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the API endpoint for retrieving user balance information, integrating authentication middleware to ensure secure access<br>- Serves as a key component within the backend routing architecture, facilitating client requests to access financial data while maintaining security protocols<br>- Supports the overall system by enabling authenticated users to view their balance details efficiently.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/routes/spin.routes.ts'>spin.routes.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the API endpoint for initiating a spin action within the application, integrating authentication middleware to ensure secure access<br>- Serves as a key routing component that connects client requests to the spin controller logic, facilitating the core functionality of triggering spins in the backend architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- middlewares Submodule -->
					<details>
						<summary><b>middlewares</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.middlewares</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/middlewares/admin.middleware.ts'>admin.middleware.ts</a></b></td>
									<td style='padding: 8px;'>- Enforces administrative access control within the backend middleware layer, ensuring that only users with the admin role can proceed with specific operations<br>- This component integrates with the authentication flow to validate user privileges, maintaining security and role-based authorization across the applications administrative functionalities.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/middlewares/auth.middleware.ts'>auth.middleware.ts</a></b></td>
									<td style='padding: 8px;'>- Implements authentication middleware to verify JSON Web Tokens, ensuring secure access control within the backend<br>- It validates tokens from request headers, retrieves associated user data, and attaches user identifiers to requests, facilitating protected route access and maintaining user session integrity across the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- __tests__ Submodule -->
					<details>
						<summary><b>__tests__</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.__tests__</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/__tests__/auth.controller.test.ts'>auth.controller.test.ts</a></b></td>
									<td style='padding: 8px;'>- Facilitates automated testing of authentication functionalities within the backend architecture by verifying user registration and login processes<br>- Ensures the integrity of the auth controller endpoints, including user creation and token issuance, thereby supporting the overall security and reliability of the authentication system in the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/__tests__/balance.controller.test.ts'>balance.controller.test.ts</a></b></td>
									<td style='padding: 8px;'>- Verifies the functionality of the balance retrieval endpoint within the backend API, ensuring it correctly returns the users initial balance<br>- Integrates user authentication and database setup to simulate real-world usage, supporting the overall architectures focus on secure, reliable financial data management and validation.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/__tests__/transaction.controller.test.ts'>transaction.controller.test.ts</a></b></td>
									<td style='padding: 8px;'>- Facilitates testing of the transaction retrieval API endpoint, ensuring accurate pagination and authorization handling within the backend<br>- It verifies that transaction data is correctly fetched and paginated, supporting the overall architectures focus on reliable data access and user-specific transaction management<br>- This test maintains the integrity of transaction-related functionalities in the system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/__tests__/spin.service.test.ts'>spin.service.test.ts</a></b></td>
									<td style='padding: 8px;'>- Defines and tests core spin functionalities within the slot machine system, ensuring accurate reel outcomes and payout calculations<br>- Validates that spinning produces expected symbol combinations and correctly updates user balances, thereby supporting the integrity of the games core mechanics and overall architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- models Submodule -->
					<details>
						<summary><b>models</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.models</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/models/user.model.ts'>user.model.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the user data model within the applications database, encapsulating user attributes such as username, password, balance, free spins, and role<br>- Facilitates secure password handling through hashing and comparison methods, supporting user authentication and role-based access control integral to the overall system architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/models/transaction.model.ts'>transaction.model.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the schema and model for transaction records within the backend, enabling storage and retrieval of user financial activities such as wagers and payouts<br>- Facilitates tracking and management of transaction data, supporting core functionalities related to user betting history and financial calculations in the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/models/tournament.model.ts'>tournament.model.ts</a></b></td>
									<td style='padding: 8px;'>- Defines the data structure for tournaments within the application, encapsulating essential details such as name, schedule, and participant references<br>- Serves as the core model for managing tournament information, enabling consistent data handling and relationships with user entities across the backend architecture<br>- This model facilitates tournament creation, retrieval, and updates within the system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- controllers Submodule -->
					<details>
						<summary><b>controllers</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.controllers</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/controllers/transaction.controller.ts'>transaction.controller.ts</a></b></td>
									<td style='padding: 8px;'>- Provides an API endpoint to retrieve paginated transaction records associated with authenticated users, supporting efficient data access within the backend architecture<br>- Facilitates user-specific transaction management by fetching and returning sorted transaction data along with total count, enabling seamless integration with frontend interfaces for financial or activity tracking features.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/controllers/tournament.controller.ts'>tournament.controller.ts</a></b></td>
									<td style='padding: 8px;'>- Defines API endpoints for managing tournaments within the backend architecture, enabling administrators to list, create, and reset tournaments, while allowing users to join specific tournaments<br>- Facilitates core tournament lifecycle operations, integrating authorization and validation to ensure proper access control and data integrity across the applications tournament management system.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/controllers/auth.controller.ts'>auth.controller.ts</a></b></td>
									<td style='padding: 8px;'>- Defines authentication endpoints for user registration and login, enabling secure user onboarding and session management within the backend architecture<br>- Facilitates user credential validation, account creation, and JWT token issuance, supporting authentication workflows integral to the applications security and user access control.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/controllers/spin.controller.ts'>spin.controller.ts</a></b></td>
									<td style='padding: 8px;'>- Facilitates the execution of a spin action within the game, handling user requests to initiate a spin, processing the wager, and broadcasting real-time updates via WebSocket<br>- Integrates with the spin service to perform game logic and ensures clients receive immediate feedback, supporting seamless user interaction and synchronization across the applications architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/controllers/leaderboard.controller.ts'>leaderboard.controller.ts</a></b></td>
									<td style='padding: 8px;'>- Provides an API endpoint to retrieve leaderboard data based on a specified time frame, defaulting to 7 days<br>- Integrates with the leaderboard service to fetch relevant metrics and returns the data as a JSON response<br>- This controller facilitates user engagement by delivering real-time rankings, supporting the overall architectures focus on dynamic, data-driven insights.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/controllers/balance.controller.ts'>balance.controller.ts</a></b></td>
									<td style='padding: 8px;'>- Provides an API endpoint to retrieve the current users account balance, ensuring secure access through authentication middleware<br>- Integrates with the user data model to fetch and return the balance, supporting the overall financial management functionality within the backend architecture<br>- Facilitates real-time balance visibility for authenticated users, contributing to a seamless user experience.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- services Submodule -->
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.services</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/services/tournament.service.ts'>tournament.service.ts</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing tournaments within the application, including listing, creating, joining, recording scores, and resetting tournaments<br>- Facilitates seamless tournament lifecycle handling and participant management, ensuring accurate tracking of ongoing events and participant engagement, integral to the platforms competitive features and overall architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/services/leaderboard.service.ts'>leaderboard.service.ts</a></b></td>
									<td style='padding: 8px;'>- Provides a leaderboard of top users based on their net winnings over a specified period, leveraging caching for efficiency<br>- It aggregates recent transactions, ranks users by payout, and retrieves user details to present a clear competitive overview, supporting real-time updates and optimized performance within the applications architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/services/spin.service.ts'>spin.service.ts</a></b></td>
									<td style='padding: 8px;'>- Implements core slot machine gameplay logic, managing reel spins, wager processing, payout calculations, and user balance updates<br>- Facilitates real-time user interactions via socket events, handles free spin allocation, and records transaction history<br>- Integrates with user and tournament services to track individual and overall performance, supporting the broader architecture of an engaging, interactive gaming platform.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- utils Submodule -->
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ backend.src.utils</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/utils/socket.ts'>socket.ts</a></b></td>
									<td style='padding: 8px;'>- Establishes and manages real-time WebSocket communication within the backend architecture, enabling clients to connect, join personalized rooms, and receive live updates<br>- Facilitates seamless bidirectional data flow, supporting features like user-specific notifications and dynamic interactions, thereby enhancing the responsiveness and interactivity of the overall application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/utils/redis.ts'>redis.ts</a></b></td>
									<td style='padding: 8px;'>- Establishes a centralized Redis client connection for the backend, enabling efficient caching and real-time data operations across the application<br>- Integrates environment variables for secure configuration, supporting scalable and consistent data management within the overall architecture<br>- Facilitates seamless interaction with Redis, enhancing performance and responsiveness of backend services.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/giteshChauhan/orange-casino/blob/master/backend/src/utils/db.ts'>db.ts</a></b></td>
									<td style='padding: 8px;'>- Establishes a connection to the MongoDB database, enabling data persistence and retrieval across the backend architecture<br>- Facilitates seamless integration with the database layer, ensuring that the application can reliably store and access data as part of its core functionality<br>- Supports the overall systems data management capabilities within the broader project structure.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build orange-casino from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/giteshChauhan/orange-casino
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd orange-casino
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Orange-casino uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```
---

## License
MIT