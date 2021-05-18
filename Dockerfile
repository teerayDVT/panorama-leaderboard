FROM maven:3.6.3-amazoncorretto-15

# copy the packaged jar file into our docker image
COPY target/grad-practice-1.0-SNAPSHOT.jar /demo.jar

# set the startup command to execute the jar
CMD ["java", "-Dspring.data.mongodb.uri=mongodb://mongo:27017/db", "-jar", "/demo.jar"]