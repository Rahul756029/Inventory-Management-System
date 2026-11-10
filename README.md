\# 📦 InventoryPro – Inventory Management System



\### A Full-Stack Web-Based Inventory Management Application



InventoryPro is a full-stack Inventory Management System developed to simplify and streamline inventory operations. It provides a centralized platform to manage products, categories, suppliers, stock, orders, users, and reports through an organized dashboard.



The application is developed using \*\*React.js, Java Spring Boot, and MySQL\*\*, following a frontend-backend architecture with REST API integration.



\---



\## 🚀 Project Overview



InventoryPro is designed to help businesses manage their inventory efficiently, reduce manual work, and maintain organized inventory records.



The application provides a user-friendly interface for managing inventory activities and a backend system for handling business logic, API requests, and database operations.



\## ✨ Key Features



\### 📊 Dashboard

\- Overview of inventory information.

\- Inventory statistics and summary cards.

\- Sales and stock visualization.



\### 📦 Product Management

\- Add new products.

\- View product details.

\- Update existing products.

\- Manage product information.



\### 🗂️ Category Management

\- Create product categories.

\- View available categories.

\- Edit category information.



\### 🚚 Supplier Management

\- Add and manage suppliers.

\- Maintain supplier information.

\- Update supplier details.



\### 📋 Stock Management

\- Manage available stock.

\- Add stock records.

\- Update stock information.

\- Monitor inventory levels.



\### 🛒 Order Management

\- Manage orders.

\- Add and update order information.

\- View order records.



\### 📈 Reports

\- View inventory-related reports.

\- Monitor stock and sales information.



\### 👤 User Management

\- User-related management functionality.

\- Login and authentication interface.

\- Profile and settings management.



\---



\## 🛠️ Technologies Used



| Category | Technologies |

|---|---|

| Frontend | React.js, JavaScript, HTML5, CSS3 |

| UI Framework | Bootstrap |

| Build Tool | Vite |

| API Integration | Axios, REST APIs |

| Backend | Java, Spring Boot |

| ORM | Spring Data JPA, Hibernate |

| Build Management | Maven |

| Database | MySQL |

| Development Tools | VS Code, IntelliJ IDEA |

| API Testing | Postman |

| Version Control | Git and GitHub |



\---



\## 📁 Project Structure



```text

Inventory-Management-System/

│

├── frontend/

│   ├── public/

│   ├── src/

│   │   ├── assets/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── routes/

│   │   ├── services/

│   │   └── styles/

│   │

│   ├── package.json

│   ├── package-lock.json

│   └── vite.config.js

│

├── backend/

│   ├── src/

│   │   ├── main/

│   │   │   ├── java/

│   │   │   │   └── com/inventory/backend/

│   │   │   │       ├── controller/

│   │   │   │       ├── entity/

│   │   │   │       ├── repository/

│   │   │   │       ├── service/

│   │   │   │       └── Security/

│   │   │   │

│   │   │   └── resources/

│   │   └── test/

│   │

│   ├── pom.xml

│   ├── mvnw

│   └── mvnw.cmd

│

├── .gitignore

└── README.md

```



\---



\# ⚙️ Installation and Setup Guide



Follow these instructions to download and run InventoryPro on your local computer.



\## 1. Prerequisites



Install the following software before starting:



\- Java JDK (compatible with the backend configuration).

\- Node.js and npm.

\- MySQL Server.

\- MySQL Workbench (recommended).

\- Git.

\- VS Code or IntelliJ IDEA.



\## 2. Clone the Repository



Open CMD or Terminal and execute:



```bash

git clone https://github.com/Rahul756029/Inventory-Management-System.git

```



Navigate to the project directory:



```bash

cd Inventory-Management-System

```



\---



\## 🗄️ MySQL Database Configuration



InventoryPro uses MySQL to store application data.



\### Step 1: Install MySQL



Download MySQL from:



https://dev.mysql.com/downloads/



Install MySQL Server and optionally MySQL Workbench.



\### Step 2: Create the Database



Open MySQL Workbench, connect to your MySQL server, and execute:



```sql

CREATE DATABASE ims\_db;

```



\### Step 3: Configure Your MySQL Username and Password



Open the backend configuration file:



```text

backend/src/main/resources/application.properties

```



Configure the database connection:



```properties

spring.datasource.url=jdbc:mysql://localhost:3306/ims\_db

spring.datasource.username=${DB\_USERNAME:root}

spring.datasource.password=${DB\_PASSWORD}



spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true

```



Use the database settings required by your local environment. If the project already has other JPA or MySQL settings, preserve the necessary settings.



\### Step 4: Set Your Own MySQL Password



Every developer should configure their own MySQL credentials.



\*\*For Windows PowerShell:\*\*



```powershell

$env:DB\_USERNAME="root"

$env:DB\_PASSWORD="your\_mysql\_password"

```



Replace `your\_mysql\_password` with your actual MySQL root password.



These commands apply to the current PowerShell session. Set them again in a new terminal session.



\*\*For Windows CMD:\*\*



```cmd

set DB\_USERNAME=root

set DB\_PASSWORD=your\_mysql\_password

```



\### Important: How to Change Your MySQL Root Password



If you want to change your existing MySQL root password:



1\. Open MySQL Workbench.

2\. Connect to your MySQL Server.

3\. Navigate to Server → Users and Privileges.

4\. Select the `root` account.

5\. Enter your new password in the Login tab.

6\. Click Apply.

7\. Update your local `DB\_PASSWORD` environment variable with the new password.



Alternatively, execute the following SQL statement while connected as an authorized administrator:



```sql

ALTER USER 'root'@'localhost'

IDENTIFIED BY 'YourNewPassword';

```



Replace `YourNewPassword` with your own strong password.



\*\*Security Note:\*\* Never upload your actual MySQL password to GitHub. Use environment variables for private credentials. For production applications, use a separate database user with limited permissions instead of the root account.



\---



\## 3. Run the Backend (Spring Boot)



Open a new terminal and navigate to the backend folder:



```bash

cd backend

```



Run the Spring Boot application using Maven:



```bash

mvn spring-boot:run

```



Alternatively, on Windows, you can use the Maven wrapper:



```cmd

mvnw.cmd spring-boot:run

```



If the application starts successfully, the backend will run at:



```text

http://localhost:8080

```



\---



\## 4. Run the Frontend (React + Vite)



Open another terminal and navigate to the frontend folder:



```bash

cd frontend

```



Install the required dependencies:



```bash

npm install

```



Start the frontend development server:



```bash

npm run dev

```



The frontend will normally run at:



```text

http://localhost:5173

```



Open this address in your browser to access InventoryPro.



\---



\## 🔗 Project Links



\*\*GitHub Repository:\*\*



https://github.com/Rahul756029/Inventory-Management-System



\*\*Developer GitHub Profile:\*\*



https://github.com/Rahul756029



\---



\## 🔒 Security Guidelines



\- Never commit your MySQL root password.

\- Never expose API keys, access tokens, or private credentials.

\- Use environment variables for sensitive configuration.

\- Keep private environment files out of Git.

\- Use a dedicated database user for production environments.

\- Do not share sensitive configuration files publicly.



\---



\## 🎯 Project Objectives



\- Develop a practical full-stack web application.

\- Implement frontend and backend integration.

\- Understand REST API development and consumption.

\- Work with relational databases using MySQL.

\- Practice CRUD operations.

\- Improve real-world software development skills.



\---



\## 👨‍💻 About Me



\### Rahul Majhi

\*\*Aspiring Full-Stack Web Developer\*\*



Hello! I'm Rahul Majhi, an aspiring Full-Stack Web Developer passionate about creating modern, responsive, and user-friendly web applications.



I enjoy learning new technologies, solving programming challenges, and building practical projects that solve real-world problems.



I have experience working with frontend and backend technologies and continuously work on improving my development skills.



\### 💻 Technical Skills



\- \*\*Frontend:\*\* HTML, CSS, JavaScript, React.js, Bootstrap

\- \*\*Backend:\*\* Java, Spring Boot, Node.js

\- \*\*Database:\*\* MySQL

\- \*\*Tools:\*\* Git, GitHub, VS Code, IntelliJ IDEA, Postman

\- \*\*Concepts:\*\* REST APIs, CRUD Operations, Object-Oriented Programming



\### 🌐 Connect With Me



\- \*\*GitHub:\*\* \[Rahul756029](https://github.com/Rahul756029)

\- \*\*Email:\*\* \[rs.dev.9062@gmail.com](mailto:rs.dev.9062@gmail.com)



I'm always interested in learning, collaborating, and developing meaningful software projects.



\---



\## 🤝 Contributions



Suggestions, improvements, and contributions are welcome.



If you would like to contribute:



1\. Fork this repository.

2\. Create a new feature branch.

3\. Make your changes.

4\. Commit your changes.

5\. Submit a pull request.



\---



\## 📄 License



No formal open-source license has currently been specified for this project. Please contact the repository owner before redistributing or using the project beyond applicable legal permissions.



\---



⭐ \*\*If you find this project useful, consider giving the repository a star!\*\*



\*\*Developed with ❤️ by Rahul Majhi\*\*

