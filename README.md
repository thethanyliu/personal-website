# Software Architecture

## Table of Contents
- [Overview](#overview)
- [Architecture Diagram](#architecture-diagram)
- [Deployment Workflow](#deployment-workflow)

<a id="overview"></a>
## Overview

<a id="architecture-diagram"></a>
## Architecture Diagram

![Screenshot 2024-01-02 183525](https://github.com/ethanliu666/personal-website/assets/62630748/0f43fe7a-3956-4eb2-b88d-c6a28bf35f8e)

*Figure 1: Architecture diagram of website static hosting and automated CD/CI pipeline with cache invalidation.*

<a id="deployment-workflow"></a>
## Deployment Workflow
The deployment work flow based on the above diagram is as follows:
1. Changes are pushed to the "master" branch of this Github repository.
2. CodePipeline detects changes and imports the necessary files from the repository.
3. CodeBuild utilizes the commands specified in the [buildspec.yml](buildspec.yml) file to run a build.
4. Files in root domain S3 bucket are updated.
5. Lambda function is triggered to invalidate CloudFront cache. 
