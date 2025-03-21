pipeline {
    agent any

    environment {

        NOTIFICATION_EMAIL = 'goyalradhika005@gmail.com'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Stage 1: Building React Application'
                sh '''
                    echo "Installing dependencies..."
                    npm install
                    echo "Building React app..."
                    npm run build
                '''
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Running Unit & Integration Tests'
                sh '''
                    echo "Executing tests..."
                    npm test -- --watchAll=false
                '''
            }
            post {
                always {
                    emailext(
                        subject: "Test Results: ${currentBuild.currentResult}",
                        body: "Unit & Integration tests completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}",
                        attachLog: true
                    )
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Stage 3: Running ESLint for Code Analysis'
                sh '''
                    echo "Linting source code..."
                    npx eslint ./src || true
                '''
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Stage 4: Running npm audit Security Scan'
                sh '''
                    echo "Scanning dependencies for vulnerabilities..."
                    npm audit --audit-level=moderate || true
                '''
            }
            post {
                always {
                    emailext(
                        subject: "Security Scan Results: ${currentBuild.currentResult}",
                        body: "Security scan completed. Result: ${currentBuild.currentResult}",
                        to: "${NOTIFICATION_EMAIL}",
                        attachLog: true
                    )
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Stage 5: Deploying React app to Staging Server'
                    sh '''
                        echo "Deploying to staging server..."
                        scp -r build/* ubuntu@${STAGING_SERVER}:/var/www/html/
                    '''
                }
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Stage 6: Running Integration Tests on Staging Server'
                sh '''
                    echo "Running integration tests on staging environment..."
                    # Placeholder - actual test framework (Cypress, Selenium) can be integrated here
                '''
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Stage 7: Deploying React app to Production Server'
                    sh '''
                        echo "Deploying to production server..."
                        scp -r build/* ubuntu@${PRODUCTION_SERVER}:/var/www/html/
                    '''
                }
            }
        }
    }

    post {
        failure {
            emailext(
                subject: "Pipeline Failed - Build #${BUILD_NUMBER}",
                body: "Pipeline failed at stage: ${STAGE_NAME}. Please check the logs.",
                to: "${NOTIFICATION_EMAIL}",
                attachLog: true
            )
        }
        success {
            emailext(
                subject: "Pipeline Success - Build #${BUILD_NUMBER}",
                body: "All stages completed successfully. React app deployed.",
                to: "${NOTIFICATION_EMAIL}"
            )
        }
    }
}
