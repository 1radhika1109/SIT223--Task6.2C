pipeline {
    agent any

    environment {
        NOTIFICATION_EMAIL = 'goyalradhika005@gmail.com'
    }

    triggers {
        // Polling GitHub repository every 2 minutes
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Stage 1: Building React Application using npm (Build Automation Tool)'
                echo 'Installing dependencies...'
                echo 'Building React app...'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Running Unit & Integration Tests using Jest'
                echo 'Executing tests...'
            }
            post {
                always {
                    mail(
                        subject: "Test Results: ${currentBuild.currentResult}",
                        body: "Unit & Integration tests completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}"
                    )
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Stage 3: Running ESLint for Code Analysis'
                echo 'Linting source code using ESLint...'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Stage 4: Running npm audit Security Scan'
                echo 'Scanning dependencies for vulnerabilities using npm audit...'
            }
            post {
                always {
                    mail(
                        subject: "Security Scan Results: ${currentBuild.currentResult}",
                        body: "Security scan completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}"
                    )
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Stage 5: Deploying React app to Staging Server using SCP'
                echo 'Deploying to staging server...'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Stage 6: Running Integration Tests on Staging Server using Cypress/Selenium (Placeholder)'
                echo 'Running integration tests on staging environment...'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Stage 7: Deploying React app to Production Server using SCP'
                echo 'Deploying to production server...'
            }
        }
    }

    post {
        failure {
            mail(
                subject: "Pipeline Failed - Build #${BUILD_NUMBER}",
                body: "Pipeline failed at stage. Please check the logs.",
                to: "${NOTIFICATION_EMAIL}"
            )
        }
        success {
            mail(
                subject: "Pipeline Success - Build #${BUILD_NUMBER}",
                body: "All stages completed successfully. React app deployed.",
                to: "${NOTIFICATION_EMAIL}"
            )
        }
    }
}
