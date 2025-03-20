pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/1radhika1109/SIT223--Task6.2C.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Linting') {
            steps {
                sh 'npm run lint || true' // optional if lint configured
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true' // optional if tests exist
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage placeholder'
                // Optional: Add SCP/FTP steps or integration with deployment tools
            }
        }

        stage('Notify') {
            steps {
                mail bcc: '', body: 'Build Completed', from: '', subject: 'Jenkins Build Status', to: 'your-email@example.com'
            }
        }
    }
}
