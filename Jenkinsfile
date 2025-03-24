pipeline {
    agent any
    stages {
        stage('Code Checkout') {
            steps {
                echo 'Checking out code from GitHub repository...'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                echo 'Performing SonarQube analysis...'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image....'
            }
        }
        stage('Push Docker Image') {
            steps {
                echo 'Pushing Docker image to Docker Hub...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application to the server...'
            }
        }
    }
    post {
        always {
            mail to: 'goyalradhika005@gmail.com', 
                 subject: "Pipeline Status: ${currentBuild.currentResult}", 
                 body: "The Jenkins pipeline has completed with status: ${currentBuild.currentResult}"
        }
    }
}
