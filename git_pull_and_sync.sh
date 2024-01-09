#!/bin/bash

# AWS S3 bucket name
S3_BUCKET="s3testpush"

# List of folders to download from S3 with relative paths
S3_FOLDERS=("public/Images")

# Function to download folders from S3
download_from_s3() {
    for folder in "${S3_FOLDERS[@]}"; do
        aws s3 sync "s3://$S3_BUCKET/$folder" "$folder"
    done
}

# Run git pull to get the latest code from GitHub
git pull origin main

# Download folders from S3 and merge with local code
download_from_s3
