# Use a lightweight Java image to run the app
FROM docker.io/library/openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled JAR file into the container
COPY target/helpdesk-api-0.0.1-SNAPSHOT.jar backend.jar

# Document the port your app uses
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "backend.jar"]
