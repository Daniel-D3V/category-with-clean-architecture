██████╗ ██╗      █████╗ ███████╗██╗   ██╗███████╗██████╗ ██╗   ██╗
██╔══██╗██║     ██╔══██╗██╔════╝██║   ██║██╔════╝██╔══██╗╚██╗ ██╔╝
██████╔╝██║     ███████║███████╗██║   ██║█████╗  ██████╔╝ ╚████╔╝ 
██╔══██╗██║     ██╔══██║╚════██║██║   ██║██╔══╝  ██╔══██╗  ╚██╔╝  
██████╔╝███████╗██║  ██║███████║╚██████╔╝███████╗██║  ██║   ██║   
╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   

This project was created as a study resource for applying the principles of Clean Architecture to software development.

## Description

Clean Architecture is a software development approach that aims to separate concerns and responsibilities of each component of the system in a clear and organized manner. The main idea is to create source code that is easily testable, with low coupling and high cohesion.

This project demonstrates the application of Clean Architecture concepts in a public application. The architecture of the project consists of the following main elements:

- **Entities**: Define the business entities, representing the fundamental concepts of the system.
- **Use Cases**: Implement the business rules and coordinate the interaction between different elements of the architecture.
- **Interfaces**: Define the communication contracts between different layers of the application.
- **Data Sources**: Implement the data access logic, whether it's through databases, external APIs, or any other persistence mechanism.
- **Frameworks and Drivers**: Layer responsible for integration with external frameworks and libraries, such as user interfaces, databases, etc.
