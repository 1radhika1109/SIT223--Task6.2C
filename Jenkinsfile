pipeline {
    agent any

    environment {
        NOTIFICATION_EMAIL = 'goyalradhika005@gmail.com'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Stage 1: Building React Application using npm (Build Automation Tool)'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Running Unit & Integration Tests using Jest (Test Automation Tool)'
            }
            post {
                always {
                    emailext(
                        subject: "Test Results: ${currentBuild.currentResult}",
                        body: "Unit & Integration tests completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}",
                    )
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Stage 3: Running ESLint for Code Analysis'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Stage 4: Running npm audit Security Scan'
            }
            post {
                always {
                    emailext(
                        subject: "Security Scan Results: ${currentBuild.currentResult}",
                        body: "Security scan completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}",
                    )
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Stage 5: Deploying React app to Staging Server (Tool: SCP/SSH)'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Stage 6: Running Integration Tests on Staging using Cypress/Selenium(..)'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Stage 7: Deploying React app to Production Server (Tool: SCP/SSH)'
            }
        }
    }

   post {
    success {
        mail to: 'goyalradhika005@gmail.com',
             subject: "Build Success",
             body: "The build was successful."
    }
    failure {
        mail to: 'goyalradhika005@gmail.com',
             subject: "Build Failed",
             body: "The build has failed. Please check Jenkins."
    }
}

    }
