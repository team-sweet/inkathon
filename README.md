# TEAM SWEET - WACOM INKATHON KINKY APP

**NOTICE:**

All of the content provided in this repository is **classified as Wacom Confidential Material**, therefore the signed NON-DISCLOSURE AGREEMENT applies.
Be aware that the **technology components are still under active development** with minimal QA testing, and **API interfaces and functionality could be changed or removed**.

This might also apply to other **technologies** and  **APIs** in use from **Microsoft** and **Google**

# Description
This app is a prototype dating app service that uses handwritings and drawing to communicate back and forth with user clients and prompts them to draw picture doodles which others concurrent users in the service chat room rate anonymously, like, and favorite.  At the end of a 10 round sprint where users draw 10 iterations based on questions like: 

* What is your favorite animal?
* What does the vacation of your dreams look like?  
* Draw your ideal partner?

the service will then pair up the most likely candidates together.

# Starting the Sample Application
Clone the Repos:
###Front End Repo is located here: https://github.com/team-sweet
###Back End Repo is located here: https://github.com/FreedomFrog/kinky

Be sure and Launch the WILL 3 server: 
The web based app needs a web server. Python's `SimpleHTTPServer` provides an easy way to get started.
To start Docker: ```Docker-compose up```
To start the front end web server, in your commandline run:
```
python -m SimpleHTTPServer 8080 
```
and access the web-demo via:
 *http://localhost:8080/index.html*

---
## Technology Usage
* WILL 3 SDK 
* Google Low Latencey Rendering 
* Microsoft Ink Recognizer API

***Below is a disclaimer for contributing technologies we've included in our app***
**No Commercial Use**. NOTWITHSTANDING ANYTHING TO THE CONTRARY, THIS AGREEMENT DOES NOT CONVEY ANY LICENSE TO USE THE EVALUATION MATERIALS IN PRODUCTION, OR TO DISTRIBUTE THE EVALUATION MATERIALS TO ANY THIRD PARTY. THE PARTNER ARE REQUIRED TO EXECUTE A SEPARATE LICENSE AGREEMENT WITH WACOM BEFORE MANUFACTURING OR DISTRIBUTING THE EVALUATION MATERIALS OR ANY PRODUCTS THAT CONTAIN THE EVALUATION MATERIALS. The Partner hereby acknowledge and agree that: (i) any use by The Partner of the Evaluation Materials in production, or any other distribution of the Evaluation Materials is a material breach of this Agreement; and (ii) any such unauthorized use or distribution will be at The Partner sole risk. No such unauthorized use or distribution shall impose any liability on Wacom, or any of its licensors, whether by implication, by estoppel, through course of dealing, or otherwise. The Partner hereby agree to indemnify Wacom, its affiliates and licensors against any and all claims, losses, and damages based on The Partner use or distribution of the Evaluation Materials in breach of this Agreement.

---




