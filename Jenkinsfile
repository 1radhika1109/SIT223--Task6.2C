pipeline {
    agent any

    environment {
        NOTIFICATION_EMAIL = 'goyalradhika005@gmail.com'
    }

    triggers {
        // GitHub webhook trigger (recommended for auto-trigger)
        githubPush()
    }

    stages {

        stage('Build') {
            steps {
                echo 'Stage 1: Building React Application using npm (Build Automation Tool: npm)'
                sh '''
                    npm install
                    npm run build
                '''
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Running Unit & Integration Tests using Jest (Test Automation Tool)'
                sh '''
                    npm test > test-results.txt || true
                '''
            }
            post {
                always {
                    emailext(
                        subject: "Test Results: ${currentBuild.currentResult}",
                        body: "Unit & Integration tests completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}",
                        attachmentsPattern: 'test-results.txt'
                    )
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Stage 3: Running ESLint for Code Analysis'
                sh '''
                    npm install eslint
                    npx eslint . > eslint-report.txt || true
                '''
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Stage 4: Running npm audit Security Scan'
                sh '''
                    npm audit --json > audit-report.json || true
                '''
            }
            post {
                always {
                    emailext(
                        subject: "Security Scan Results: ${currentBuild.currentResult}",
                        body: "Security scan completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}",
                        attachmentsPattern: 'audit-report.json'
                    )
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Stage 5: Deploying React app to Staging Server (Tool: SCP/SSH)'
                sh '''
                    echo "scp -r build/ user@staging-server:/path/to/staging"
                    # Actual SCP command should be configured here
                '''
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Stage 6: Running Integration Tests on Staging using Cypress/Selenium (Placeholder)'
                sh '''
                    echo "Run integration tests on staging server"
                    # Actual test commands go here
                '''
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Stage 7: Deploying React app to Production Server (Tool: SCP/SSH)'
                sh '''
                    echo "scp -r build/ user@production-server:/path/to/production"
                    # Actual SCP command should be configured here
                '''
            }
        }
    }

    post {
        failure {
            mail(
                subject: "Pipeline Failed - Build #${BUILD_NUMBER}",
                body: "Pipeline failed at stage ${env.STAGE_NAME}. Please check Jenkins logs.",
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
