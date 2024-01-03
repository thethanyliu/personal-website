# Software Architecture

## Table of Contents
- [Overview](#overview)
- [Architecture Diagram](#architecture-diagram)
- [Deployment Workflow](#deployment-workflow)

<a id="overview"></a>
## Overview
Welcome to the documentation for Ethan Liu's static portfolio website, hosted on AWS S3. The implementation and design decisions made throughout the development lifecycle achieves the following:
* Stack website hosting on AWS S3 with a root domain and subdomain bucket where the subdomain redirects to the root domain.
* Implemented HTTPS support across the board for enhanced security through a public SSL/TLS certificate provided by AWS Certificate Manager.
* Utilized AWS Route 53 for DNS routing and network traffic management.
* Implemented CD/CI pipeline with AWS CodePipeline, AWS CodeBuild and AWS Lambda for automated builds, deployments and cache invalidation.

<a id="architecture-diagram"></a>
## Architecture Diagram

![Screenshot 2024-01-02 183525](https://github.com/ethanliu666/personal-website/assets/62630748/0f43fe7a-3956-4eb2-b88d-c6a28bf35f8e)

*Figure 1: Architecture diagram of static website hosting with automated CD/CI pipline and cache invalidation.*

<a id="deployment-workflow"></a>
## Deployment Workflow
The deployment work flow based on *Figure 1* is as follows:
1. Changes are pushed to the "master" branch of this Github repository.
2. CodePipeline detects changes and imports the necessary files from the repository.
3. CodeBuild utilizes the commands specified in the [buildspec.yml](buildspec.yml) file to run a build.
4. Files in root domain S3 bucket are updated.
5. Lambda function is triggered to invalidate CloudFront cache. 
