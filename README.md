# Web Stream Practice

I think let's create a separate directory for each of our UIs. Thoughts?
### Docker
run `docker pull teeraydvt/employees:latest` to download my api image
cd To the directory with "docker-compose.yml"
run `docker compose up`

Server should now be listening on localhost:8080
### Endpoints

##### Note: An OpenAPI Specification document will be added soon

For now here are a list of endpoints exposed on localhost:8080

/employees  
Method: GET  

/employee/{employeeId}  
Method: GET  

/employee/add  
Method: POST  
Request Body: JSON object  
Example:   
{
    "employeeId" : "5",
    "name" : "greg",
    "annualGrossSalary" : 16000
}

/employee/{employeeId}/delete  
Method: DELETE  

/employee/update  
Method: PUT  
Request Body: JSON object  
Example:  
{
    "employeeId" : "5",
    "name" : "greg",
    "annualGrossSalary" : 11000
}