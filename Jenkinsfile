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
                    mail(
                        subject: "Unit & Integration Tests Completed",
                        body: "All Unit & Integration Tests are completed.",
                        to: "${NOTIFICATION_EMAIL}"
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
                    mail(
                        subject: "Security Scan Completed",
                        body: "Security Scan using npm audit is completed.",
                        to: "${NOTIFICATION_EMAIL}"
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
                echo 'Stage 6: Running Integration Tests on Staging using CypressSelenium'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Stage 7: Deploying React app to Production Server (Tool: SCP/SSH)'
            }
        }
    }

    post {
        failure {
            mail(
                subject: "Pipeline Failed",
                body: "The pipeline has failed. Please check Jenkins logs for details.",
                to: "${NOTIFICATION_EMAIL}"
            )
        }
        success {
            mail(
                subject: "Pipeline Successful",
                body: "All stages completed successfully. React app has been deployed.",
                to: "${NOTIFICATION_EMAIL}"
            )
        }
    }
}
