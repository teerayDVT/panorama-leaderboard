# Web Stream Practice

Note: An OpenAPI Specification document will be added soon

### Endpoints

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

### Docker

cd To the directory with "docker-compose.yml"
run `docker compose up`

Server should now be listening on localhost:8080