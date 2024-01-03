# Software Architecture

## Table of Contents
- [Overview](#overview)
- [Architecture Diagram](#architecture-diagram)
- [Deployment Workflow](#deployment-workflow)

<a id="overview"></a>
## Overview

<a id="architecture-diagram"></a>
## architecture Diagram

<a id="deployment-workflow"></a>
## Deployment Workflow
The deployment work flow based on the above diagram is as follows:
1. Changes are pushed to the "master" branch of this Github repository.
2. CodePipeline detects changes and imports the necessary files from the repository.
3. CodeBuild utilizes the commands specified in the [buildspec.yml](buildspec.yml) file to run a build.
4. Files are deployed to S3 root domain bucket.
5. Lambda function is then triggered to invalidate CloudFront cache. 
