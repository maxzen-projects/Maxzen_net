pipeline {
    agent any

    environment {
        APP_NAME = "maxzen"
        IMAGE_TAG = "maxzen:test-${BUILD_NUMBER}"
        CONTAINER_NAME = "maxzen-test"
        PORT = "3100"
    }

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_TAG .'
            }
        }

        stage('Replace Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME 2>/dev/null || true
                docker rm $CONTAINER_NAME 2>/dev/null || true
                docker run -d -p $PORT:80 --name $CONTAINER_NAME $IMAGE_TAG
                '''
            }
        }
    }
}
