import subprocess

DRY_RUN = False

def execute_command(command):
    result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return result.stdout.decode().strip()

def upload_to_s3(file):
    # Add your S3 upload logic here
    print(f"Uploading {file} to S3...")

def main():
    # Identify files larger than 100MB
    large_files = [
        file.split(None, 1)[1] for file in execute_command("git ls-files --ignored --exclude-standard -o -z | xargs -0 du -h").split('\n') 
        if file and file.split(None, 1)[0][-1] == 'M' and int(file.split(None, 1)[0][:-1]) > 100
    ]

    if large_files:
        print("Files larger than 100MB found.")

        # Upload large files to S3
        for file in large_files:
            upload_to_s3(file)

        print("Large files uploaded to S3.")
    else:
        print("No files larger than 100MB.")

if __name__ == "__main__":
    main()
