# CMPE451 Customer Presentation Milestone 3

# Group Milestone Report

## Executive Summary

### Summary of Project Status

Following the customer milestone 2 demo, we have identified the final features that we wish to add to the application, and ordered them by their importance and urgency given that we have 2 weeks to the final demo. We have identified 3 primary tasks. These were;

* Implementing annotation support
* Implementing semantic search using an ontology
* Getting the web and mobile applications to have the same capabilities

Right after identifying these task, we divided the relevant parts of them in each subgroup and began working on them. Each subgroup assigned the relevant parts of the tasks above to their members and began working on them. At the end of the 2 week period, we have completed two of the three tasks. Before the final demo, we have synchronized the development status of the mobile and web apps, and implemented W3C standard compliant annotation support. In addition, we tied up the loose ends of the features implemented during the last milestone preparation.

Overall, we have implemented the following features;

* Registration and account management
* Content Creation
  * Creating, editing and deleting posts and comments
  * Labeling posts
* Reputation System
  * Upvoting and downvoting posts and comments
* Annotation Support
  * Text and image annotations
* Keyword and label based search
* Basic chatbot support
  * Using decision trees

### Status of the Deliverables

We have completed the following deliverables;

1. Group Milestone Report - This report
2. Project Artifacts - Included in this document
3. Software Package - The application is dockerized and deployed
4. Individual Reports - Included in this document

### Final Release Notes

1. The web application is now fully functional. It has all the features that the mobile application has, and it is fully integrated with the backend.
2. The web application now supports text and image annotations on posts and comments.
3. The mobile application now supports text annotations on posts and comments.
4. Annotations are now W3C standard compliant and kept in their own database.
5. It is now possible to edit posts and comments.
6. Chatbot has been improved to display previous replies of the user.

### Changes Made and Planned from Previous Milestone

Apart from the details of what needs to implemented, we have decided to ensure a more communicative development process to speed up the development of features that require a high degree of colloboration, such as the annotation support. Unlike before, the assignees of such tasks got together after the general meetings to decide on the details of the implementation and to ensure that the implementation is done in a way that is compatible with the rest of the application. This has resulted in a more efficient development process.

### Reflections from Final Milestone Demo

Although unfortunately we have not met all the criteria we hoped to satisfy, we have managed to implement the most important features of the application. Although we have implemented numerous features in the two week period, we believe that our presentation was enough to showcase them clearly. Because our presentation was easy to follow, there has been a very few questions and we were able to answer them quickly. We believe that this was a good sign that our presentation was clear and concise. In addition, we have discussed about how the presentation could be improved and concluded that practicing it more would have been beneficial.

### What Could be Done Differently?

One of the biggest problems we faced was the tracking of the tasks that were assigned. The tracking of the tasks assigned to each member was not done as well as it could have been. This resulted in some members not being able to complete their tasks in time. To change this, several measures about what should be done when a member did not complete their tasks in time should have been taken. For example, the tasks that were not completed in time should have been reassigned to other members, or the tasks should have been split into smaller tasks. Ideally, we believe that these measures would solve the challenges we faced. Although we have discussed these solutions at the start of the project, given the nature of the course and the lack of hierarchy between the students to enforce the rules we discussed, realizing these solutions was not possible.

What could be done instead, was to request help from the teaching assistants and the course instructor. This way, we could benefit from their experiences about such challenges, and they could point us in a better direction to solve the problems we faced.

Apart from the management issues we faced, we could also revise how we prioritize the tasks. Rather than giving a higher priority to implementing very refined versions of the features, we could have given a higher priority to implementing the features in a more basic form. This way, we could have implemented more features in the time we had.
## Progress Based on Teamwork

### Summary of Work Performed

* Artun Akdoğan

    |Contribution|Link|
    |---|---|
    |Attended all weekly group and backend meetings||
    |Wrote personal reports for all customer milestones||
    |Updated personal Wiki page for CmpE451 | [#160](https://github.com/bounswe/bounswe2022group6/issues/160)|
    |Reviewed requirement items under [1.1.1.1](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1111-creating-an-account), [1.1.1.2](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1112-adding-information-to-a-account), [1.1.1.3](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1113-editing-the-information-in-an-account), [1.1.1.4](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1114-removing-information-from-an-account), [1.1.1.5](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1115-deleting-an-account), and [1.1.1.6](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1116-logging-inlogging-out) sections | [#167](https://github.com/bounswe/bounswe2022group6/issues/167)|
    |Created [Backend Meeting #1](https://github.com/bounswe/bounswe2022group6/wiki/Backend-Meeting-%231-17.10.2022) template, updated meeting agenda, reviewed and updated meeting notes, updated Home Wiki page and Sidebar to include this meeting | [#169](https://github.com/bounswe/bounswe2022group6/issues/169)|
    |Updated [Communication Plan](https://github.com/bounswe/bounswe2022group6/wiki/Communication-Plan) page for Backend Group, created Discord server, appointed the first meeting | [#166](https://github.com/bounswe/bounswe2022group6/issues/166)|
    |Initialized the folder structure of the project Groups|
    |Initialized Backend Group's workspace with Django, MySQL, and Docker | [#174](https://github.com/bounswe/bounswe2022group6/issues/174)|
    |Refactor folder structure of Backend group for better reference | [#178](https://github.com/bounswe/bounswe2022group6/issues/178), [#180](https://github.com/bounswe/bounswe2022group6/pull/180), PR: [#180](https://github.com/bounswe/bounswe2022group6/pull/180)|
    |Inplemented user registration REST API, and required models | [#181](https://github.com/bounswe/bounswe2022group6/issues/181), PR: [#191](https://github.com/bounswe/bounswe2022group6/pull/191)|
    |Enclosed MySQL port on docker to prevent port conflict | [#188](https://github.com/bounswe/bounswe2022group6/issues/188), PR: [#189](https://github.com/bounswe/bounswe2022group6/pull/189)|
    |Containerized Frontend workspace and unified Backend API with Frontend application via Docker Compose | [#206](https://github.com/bounswe/bounswe2022group6/issues/206), PR: [#207](https://github.com/bounswe/bounswe2022group6/pull/207)|
    |Deployed and modified AWS EC2 instance with required settings | [#208](https://github.com/bounswe/bounswe2022group6/issues/208)|
    |Resolved final problems regarding AWS deployment via bugfixes and minor modifications | [#240](https://github.com/bounswe/bounswe2022group6/issues/240)|
    |Implemented "Account View" function | [#242](https://github.com/bounswe/bounswe2022group6/issues/242), PR: [#228](https://github.com/bounswe/bounswe2022group6/pull/228), [#229](https://github.com/bounswe/bounswe2022group6/pull/229)|
    |Wrote Frontend Containerized Execution Notes | [#244](https://github.com/bounswe/bounswe2022group6/issues/244)|
    |Wrote Individual Contribution Report | [#231](https://github.com/bounswe/bounswe2022group6/issues/231)|
    |Uploaded [Backend Meeting #4](https://github.com/bounswe/bounswe2022group6/wiki/Backend-Meeting-%234---03.11.2022) notes | [#254](https://github.com/bounswe/bounswe2022group6/issues/254)|
    |Reviewed and updated the requirements addressed in [Milestone 1](https://github.com/bounswe/bounswe2022group6/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1.md#11-user-requirements) | [#251](https://github.com/bounswe/bounswe2022group6/issues/251)|
    |Wrote my individual responsibilities and work in [Milestone 1](https://github.com/bounswe/bounswe2022group6/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1.md)|
    |Researched Location API Implementation | [#255](https://github.com/bounswe/bounswe2022group6/issues/255)||
    |Fixed image replication issue and updated Docker with new service | [#261](https://github.com/bounswe/bounswe2022group6/issues/261), PR: [#262](https://github.com/bounswe/bounswe2022group6/pull/262)|
    |Implemented locmgr APIs for IP location retrieval and country/state/city list retrieval | [#257](https://github.com/bounswe/bounswe2022group6/issues/257), PR: [#260](https://github.com/bounswe/bounswe2022group6/pull/260)|
    |Fixed image replication issue on docker, and implemented reset-db command on docker compose | [#261](https://github.com/bounswe/bounswe2022group6/issues/261)|
    |Uploaded the Group Meeting #5 Notes | [#263](https://github.com/bounswe/bounswe2022group6/issues/263)|
    |Restructured locmgr API's location data script by updating SQL file | [#272](https://github.com/bounswe/bounswe2022group6/issues/272)|
    |Migrated the database from MySQL to PostgreSQL | [#271](https://github.com/bounswe/bounswe2022group6/issues/261), PR: [#274](https://github.com/bounswe/bounswe2022group6/pull/274)|
    |Wrote testcases and documentation for locmgr | [#275](https://github.com/bounswe/bounswe2022group6/issues/275), PR: [#276](https://github.com/bounswe/bounswe2022group6/pull/276)|
    |Fixed error that causes frontend to not compile | [#282](https://github.com/bounswe/bounswe2022group6/issues/282), PR: [#283](https://github.com/bounswe/bounswe2022group6/pull/283)|
    |Initialized contmgr Django Application | [#286](https://github.com/bounswe/bounswe2022group6/issues/286), PR: [#287](https://github.com/bounswe/bounswe2022group6/pull/287)|
    |Fixed hot reload bug on Frontend | [#290](https://github.com/bounswe/bounswe2022group6/issues/290), PR: [#291](https://github.com/bounswe/bounswe2022group6/pull/291)|
    |Implemented Post View API | [#299](https://github.com/bounswe/bounswe2022group6/issues/299), PR: [#303](https://github.com/bounswe/bounswe2022group6/pull/303)|
    |Implemented Comment View API | [#301](https://github.com/bounswe/bounswe2022group6/issues/301), PR: [#304](https://github.com/bounswe/bounswe2022group6/pull/304)|
    |Implemented Content Voting System | [#302](https://github.com/bounswe/bounswe2022group6/issues/302), PR: [#305](https://github.com/bounswe/bounswe2022group6/pull/305)|
    |Wrote Content Manager's Documentation and Tests | [#309](https://github.com/bounswe/bounswe2022group6/pull/309), PR: [#390](https://github.com/bounswe/bounswe2022group6/pull/390)|
    |Added documents for content manager to showcase endpoint API | [#310](https://github.com/bounswe/bounswe2022group6/pull/310), PR: [#310](https://github.com/bounswe/bounswe2022group6/pull/310)|
    |Backend Bug Fix for Post | [#322](https://github.com/bounswe/bounswe2022group6/issues/322), PR: [#346](https://github.com/bounswe/bounswe2022group6/pull/346)|
    |Updating Running Manuals of Backend and Frontend | [#371](https://github.com/bounswe/bounswe2022group6/issues/371)|
    |Wrote Milestone 2 Customer Feedback | [#386](https://github.com/bounswe/bounswe2022group6/issues/386)|
    |Implemented Edit Post/Comment Endpoint | [#387](https://github.com/bounswe/bounswe2022group6/issues/387), PR: [#389](https://github.com/bounswe/bounswe2022group6/pull/389)|
    |Implemented Reputation Field for Users and ViewProfile Endpoint | [#399](https://github.com/bounswe/bounswe2022group6/issues/399), PR: [#400](https://github.com/bounswe/bounswe2022group6/pull/400)|
    |Implemented Picture Store for Posts and Accounts (Cancelled) | [#409](https://github.com/bounswe/bounswe2022group6/issues/409), PR: [#410](https://github.com/bounswe/bounswe2022group6/pull/410)|
    |Implemented Delete Method for Comments and Posts | [#424](https://github.com/bounswe/bounswe2022group6/issues/424), PR: [#425](https://github.com/bounswe/bounswe2022group6/pull/425)|
    |Implemented Production Docker Code and Its Documentations | [#427](https://github.com/bounswe/bounswe2022group6/issues/427), PR: [#428](https://github.com/bounswe/bounswe2022group6/pull/428)|
    |Wrote API Endpoints (Location Manager Part) for Final Group Report | [#461](https://github.com/bounswe/bounswe2022group6/issues/461), PR: [#470](https://github.com/bounswe/bounswe2022group6/pull/470)|


* İhsan Mert Atalay

    |Contribution|Link|
    |---|---|
    | Designing HomePage for Frontend |[#202](https://github.com/bounswe/bounswe2022group6/issues/202), PR: [#205](https://github.com/bounswe/bounswe2022group6/pull/205)|
    | Designing and colorizing homepage |[#343](https://github.com/bounswe/bounswe2022group6/issues/343), PR: [#321](https://github.com/bounswe/bounswe2022group6/pull/321)|
    |Making and placing logo for homepage |[#343](https://github.com/bounswe/bounswe2022group6/issues/343), PR: [#321](https://github.com/bounswe/bounswe2022group6/pull/321)|
    |Adding fav icon|[#343](https://github.com/bounswe/bounswe2022group6/issues/343), PR: [#321](https://github.com/bounswe/bounswe2022group6/pull/321)|
    |Label filter search input maked functional|[#344](https://github.com/bounswe/bounswe2022group6/issues/344), PR: [#345](https://github.com/bounswe/bounswe2022group6/pull/345)|
    |Voting system at home page  designed dynamically|[#266](https://github.com/bounswe/bounswe2022group6/issues/266), PR: [#321](https://github.com/bounswe/bounswe2022group6/pull/321)|
    |Label and search styles at home page designed dynamically|[#267](https://github.com/bounswe/bounswe2022group6/issues/267), PR: [#321](https://github.com/bounswe/bounswe2022group6/pull/321)|



* Hakan Balık

    1. **Milestone 1**
    
        |Contribution|Link|
        |------------|----|
        |Reviewed the lecture notes of the previous semester.|-|
        |Attended all of the meetings except 1.|-|
        |Reviewed my [personal Wiki page](https://github.com/bounswe/bounswe2022group6/wiki/Hakan-Bal%C4%B1k).|[#160](https://github.com/bounswe/bounswe2022group6/issues/160)|
        |Checked the previous years' github pages to get an insight.|-|
        |Introduced the customer to the project.|[#170](https://github.com/bounswe/bounswe2022group6/issues/170)|
        |Reviewed Requirements between 1.1.1.7-1.1.2.2.4 and made some changes.|[#163](https://github.com/bounswe/bounswe2022group6/issues/163)|
        |Researched about Reactjs projects and did some practices.|-|
        |Reviewed the [Meeting Notes](https://github.com/bounswe/bounswe2022group6/wiki/Frontend-Meeting-%232-26.10.2022).|[#195](https://github.com/bounswe/bounswe2022group6/issues/195)|
        |Created the initial version of frontend.|[#184](https://github.com/bounswe/bounswe2022group6/issues/184) PR: [#192](https://github.com/bounswe/bounswe2022group6/pull/192)|
        |Created a poll and a google sheet file to determine the project name.|[#185](https://github.com/bounswe/bounswe2022group6/issues/185)|
        |During the [Meeting 4](https://github.com/bounswe/bounswe2022group6/wiki/Meeting-%234---25.10.2022) decided on the color palette to be used.|[#185](https://github.com/bounswe/bounswe2022group6/issues/185)|
        |Created the base pages for frontend which are: Landing, Login and Home.|[#193](https://github.com/bounswe/bounswe2022group6/issues/193) PR: [#194](https://github.com/bounswe/bounswe2022group6/pull/194)|
        |Reviewed and made changes to the pull request for register & profile pages.|[#196](https://github.com/bounswe/bounswe2022group6/issues/196) PR: [#199](https://github.com/bounswe/bounswe2022group6/pull/199)|
        |Reviewed Homepage design pull request.|[#202](https://github.com/bounswe/bounswe2022group6/issues/202) PR: [#205](https://github.com/bounswe/bounswe2022group6/pull/205)|
        |Found closed issues with "Status: In Progress" tag and switched them to "Status: Completed".|-|
        |Reviewed and merged Implementing Sign-Up Functionality Backend Integration which was the first frontend/backend integration.|[#198](https://github.com/bounswe/bounswe2022group6/issues/198) PR: [#216](https://github.com/bounswe/bounswe2022group6/pull/216)|
        |Reviewed API documentation for Login feature of backend team.|[#213](https://github.com/bounswe/bounswe2022group6/issues/213)|
        |Implemented login functionality backend integration.|[#224](https://github.com/bounswe/bounswe2022group6/issues/224) PR: [#226](https://github.com/bounswe/bounswe2022group6/pull/226)|
        |Updated my personal efforts.|-|
        |Initialized [Milestone 1 Report](https://github.com/bounswe/bounswe2022group6/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1.md) document with necessary template. Listed individual contributors as sorted by their surnames.|[#227](https://github.com/bounswe/bounswe2022group6/issues/227)|
        |Added necessary links to [Milestone 1 Report](https://github.com/bounswe/bounswe2022group6/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1.md) for the existing documents.|[#227](https://github.com/bounswe/bounswe2022group6/issues/227)|
        |Implemented log-out functionality backend integration.|[#238](https://github.com/bounswe/bounswe2022group6/issues/238) PR: [#239](https://github.com/bounswe/bounswe2022group6/pull/239)|
        |Reviewed Home page changes.|PR: [#237](https://github.com/bounswe/bounswe2022group6/pull/237)|
        |Listed down my individual contributions on [Milestone 1 Report](https://github.com/bounswe/bounswe2022group6/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1.md).|[#231](https://github.com/bounswe/bounswe2022group6/issues/231)|
        |Demonstrated the latest version of the application to the team. Afterwards we resolved the final issues regarding deployment and uploaded the application to AWS EC2 instance.|[#240](https://github.com/bounswe/bounswe2022group6/issues/240)|
        |Created Release and Tag for Milestone 1. |[#243](https://github.com/bounswe/bounswe2022group6/issues/243)|
        |Took notes during the customer demo. |[#249](https://github.com/bounswe/bounswe2022group6/issues/249)|
        |Created MediShare logo.|[#250](https://github.com/bounswe/bounswe2022group6/issues/250)|

    2. **Milestone 2**

        |Contribution|Link|
        |---|---|
        |Introduced a new UI structure for landing page.|[#293](https://github.com/bounswe/bounswe2022group6/issues/293), PR: [#298](https://github.com/bounswe/bounswe2022group6/pull/298)|
        |Researched and implemented S3 Server on Amazon for image upload.|[#277](https://github.com/bounswe/bounswe2022group6/issues/277), PR: [#338](https://github.com/bounswe/bounswe2022group6/pull/338)|
        |Implemented create post and integrated to backend with image.|[#315](https://github.com/bounswe/bounswe2022group6/issues/277), PR: [#338](https://github.com/bounswe/bounswe2022group6/pull/338)|
        |Reported bugs on backend about post and labels.|[#322](https://github.com/bounswe/bounswe2022group6/issues/322)|
        |Designed the project logo.|[#250](https://github.com/bounswe/bounswe2022group6/issues/250)|
        |Implemented get label API.|[#329](https://github.com/bounswe/bounswe2022group6/issues/329), , PR: [#338](https://github.com/bounswe/bounswe2022group6/pull/338)|
        |Implemented delete user API.|[#342](https://github.com/bounswe/bounswe2022group6/issues/342), PR:[#350](https://github.com/bounswe/bounswe2022group6/pull/350)|
        |Created data for Milestone 2 demo.|[#363](https://github.com/bounswe/bounswe2022group6/issues/363)|
        |Created an outline for the Milestone 2 demo.|[#312](https://github.com/bounswe/bounswe2022group6/issues/312)|
        |Created Milestone Report 2 page.|[#313](https://github.com/bounswe/bounswe2022group6/issues/313)|
        |Uploaded Meeting Notes 9.|[#314](https://github.com/bounswe/bounswe2022group6/issues/314)|
        |Created tag and release for Milestone 2.|[#317](https://github.com/bounswe/bounswe2022group6/issues/317)|
        |Established the communication throughout the progress and determined on which features to be implemented.|[#318](https://github.com/bounswe/bounswe2022group6/issues/318)|
        |Corrected the completed issues' labels.|[#349](https://github.com/bounswe/bounswe2022group6/issues/349)|
        |Uploaded all of the UI images of frontend for Milestone Report 2.|[#368](https://github.com/bounswe/bounswe2022group6/issues/368)|
        |Reviewed frontend homepage.|PRs: [#268](https://github.com/bounswe/bounswe2022group6/pull/268), [#321](https://github.com/bounswe/bounswe2022group6/pull/321), [#345](https://github.com/bounswe/bounswe2022group6/pull/345) |
        |Reviewed templates for post related operations.|PR: [#289](https://github.com/bounswe/bounswe2022group6/pull/289)|
        |Reviewed doctor verification.|PR: [#311](https://github.com/bounswe/bounswe2022group6/pull/311)|
        |Reviewed profile page APIs.|PR: [#323](https://github.com/bounswe/bounswe2022group6/pull/323)|
        |Reviewed profile page design.|PR: [#327](https://github.com/bounswe/bounswe2022group6/pull/327)|
        |Reviewed post API integration.|PR: [#352](https://github.com/bounswe/bounswe2022group6/pull/352)|
        |Reviewed mobile hot fixes.|PR: [#358](https://github.com/bounswe/bounswe2022group6/pull/358)|
        |Reviewed post views update.|PR: [#359](https://github.com/bounswe/bounswe2022group6/pull/359)|
        |Reviewed the addition of comments under post details in mobile.|PR: [#360](https://github.com/bounswe/bounswe2022group6/pull/360)|
        |Reviewed upvote count changes on mobile.|PR: [#361](https://github.com/bounswe/bounswe2022group6/pull/361)|
        |Reviewed Milestone Report 2 related pull requests.|PRs: [#365](https://github.com/bounswe/bounswe2022group6/pull/365), [#366](https://github.com/bounswe/bounswe2022group6/pull/366)|
        |You can find the missing ones (if any) with their links in this document under Individual reports section.|[Link](https://github.com/bounswe/bounswe2022group6/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_2.md#member-hakan-bal%C4%B1k-group-6---frontend)|
        
    3. **Milestone 3**

        |Contribution|Link|
        |---|---|
        |Attended all of the meetings.|-|
        |Added the flow of the presentation for Milestone 2.|[#386](https://github.com/bounswe/bounswe2022group6/issues/386)|
        |Added location field to Create Post form.|[#412](https://github.com/bounswe/bounswe2022group6/issues/412), PR: [#416](https://github.com/bounswe/bounswe2022group6/pull/416)|
        |Added location field to posts on home and post detail pages.|[#417](https://github.com/bounswe/bounswe2022group6/issues/417), PR: [#423](https://github.com/bounswe/bounswe2022group6/pull/423)|
        |Implemented Search feature for Frontend.|[#418](https://github.com/bounswe/bounswe2022group6/issues/418), PR: [#420](https://github.com/bounswe/bounswe2022group6/pull/420)|
        |Implemented search with label feature for Frontend.|[#431](https://github.com/bounswe/bounswe2022group6/issues/431), PR: [#432](https://github.com/bounswe/bounswe2022group6/pull/432)|
        |Corrected the Status of Completed Issues and PRs.|[#434](https://github.com/bounswe/bounswe2022group6/issues/434)|
        |Created Release and Tag for Milestone 3.|[#437](https://github.com/bounswe/bounswe2022group6/issues/437)|
        |Implemented profile view for all users in Frontend.|[#440](https://github.com/bounswe/bounswe2022group6/issues/440), PR: [#441](https://github.com/bounswe/bounswe2022group6/pull/441)|
        |Removed unnecessary code blocks in Frontend.|[#443](https://github.com/bounswe/bounswe2022group6/issues/443), PR: [#444](https://github.com/bounswe/bounswe2022group6/issues/444)|
        |Created the template for the Milestone Report 3.|[#452](https://github.com/bounswe/bounswe2022group6/issues/452)|
        |Uploaded the Frontend UI / UX to Final Milestone.|[#458](https://github.com/bounswe/bounswe2022group6/issues/458), PR: [#468](https://github.com/bounswe/bounswe2022group6/pull/468)|
        |Uploaded Software Design Documents for Final Milestone.|[#459](https://github.com/bounswe/bounswe2022group6/issues/459), PR: [#467](https://github.com/bounswe/bounswe2022group6/pull/467)|
        |Uploaded User Scenarios and Mockups for Final Milestone.|[#460](https://github.com/bounswe/bounswe2022group6/issues/460), PR: [#465](https://github.com/bounswe/bounswe2022group6/pull/465)|
        |Reviewed chatbot for frontend pull request.|PR: [#403](https://github.com/bounswe/bounswe2022group6/pull/403)|
        |Reviewed Changes in frontend due to backend response enhancements pull request.|PR: [#407](https://github.com/bounswe/bounswe2022group6/pull/407)|
        |Reviewed doctor verified username pull request.|PR: [#411](https://github.com/bounswe/bounswe2022group6/pull/411)|
        |Reviewed Annotations on Frontend pull request.|PR: [#413](https://github.com/bounswe/bounswe2022group6/pull/413)|
        |Reviwed Label Details Added to the Get Post Responses pull request.|PR: [#419](https://github.com/bounswe/bounswe2022group6/pull/419)|
        |Reviwed Post edit frontend pull request.|PR: [#422](https://github.com/bounswe/bounswe2022group6/pull/422)|
        |Reviwed Implementation Production Docker Code and Its Documentations pull request.|PR: [#428](https://github.com/bounswe/bounswe2022group6/pull/428)|
        |Reviwed Delete operation for post and comment pull request.|PR: [#433](https://github.com/bounswe/bounswe2022group6/pull/433)|
        |Reviwed Search Post Endpoint Now Returns Sorted Posts pull request.|PR: [#436](https://github.com/bounswe/bounswe2022group6/pull/436)|
        |Reviwed Standards Part Added pull request.|PR: [#462](https://github.com/bounswe/bounswe2022group6/pull/462)|
        |Reviwed Annotations Part Added pull request.|PR: [#463](https://github.com/bounswe/bounswe2022group6/pull/463)|
        |Reviwed Added Yusuf Erdem Nacar's Individual Report and Effort Table pull request.|PR: [#466](https://github.com/bounswe/bounswe2022group6/pull/466)|
        

* Ali Kaan Biber

    1. **Milestone 1**

        |Contribution|Link|
        |------------|----|
        |Attended all weekly meetings.||
        |Reviewed requirements from 1.1.2.4 to 1.2.1 with Aral Dörtoğul.|[#168](https://github.com/bounswe/bounswe2022group6/issues/168)|
        |Researched about popular frameworks for frontend development.||
        |Learning and practicing ReactJS||
        |Reviewed API documentation for Sign up feature of backend team.||
        |Implemented the sign up functionality backend integration.|[#198](https://github.com/bounswe/bounswe2022group6/issues/198) [PR](https://github.com/bounswe/bounswe2022group6/pull/216)|
        |Fixed the cors issue|[#214](https://github.com/bounswe/bounswe2022group6/issues/214) [PR](https://github.com/bounswe/bounswe2022group6/pull/215)|
        |Reviewed pull request of frontend dockerization|[#207](https://github.com/bounswe/bounswe2022group6/pull/207)|
        |Created AWS EC2 instance and deployed the app.|[#208](https://github.com/bounswe/bounswe2022group6/issues/208)|
        |Reviewed pull requests of other front end team members|[#239](https://github.com/bounswe/bounswe2022group6/pull/239)|

   2. **Milestone 2**

      |Contribution|Link|
      |---|---|
      |Attended all general and frontend meetings.| - |
      |Implemented a template for post creation page | [#284](https://github.com/bounswe/bounswe2022group6/issues/284) PR:[#289](https://github.com/bounswe/bounswe2022group6/pull/289)|
      |Implemented a template for post detail page | [#284](https://github.com/bounswe/bounswe2022group6/issues/284) PR:[#289](https://github.com/bounswe/bounswe2022group6/pull/289) |
      |Reviewed home page design. | [#202](https://github.com/bounswe/bounswe2022group6/issues/202) PR:[#268](https://github.com/bounswe/bounswe2022group6/pull/268)|
      |Reviewed the frontend UI design | [#293](https://github.com/bounswe/bounswe2022group6/issues/293) PR:[#298](https://github.com/bounswe/bounswe2022group6/pull/298) |
      |Reviewed and make changes to edit profile page functionality | [#281](https://github.com/bounswe/bounswe2022group6/issues/281) PR:[#294](https://github.com/bounswe/bounswe2022group6/pull/294) |
      |Reviewed API document of backend team for post and comment related operations| [API docs](https://github.com/bounswe/bounswe2022group6/tree/master/Application/Backend/api_docs)|
      |Reported what is needed from backend |[#322](https://github.com/bounswe/bounswe2022group6/issues/322)|
      |Integrated get all posts endpoint | [#316](https://github.com/bounswe/bounswe2022group6/issues/316) PR:[#352](https://github.com/bounswe/bounswe2022group6/pull/352)|
      |Integrated get post by id endpoint| [#316](https://github.com/bounswe/bounswe2022group6/issues/316) PR:[#352](https://github.com/bounswe/bounswe2022group6/pull/352)|
      |Integrated post upvote/downvote endpoint | [#316](https://github.com/bounswe/bounswe2022group6/issues/316) PR:[#352](https://github.com/bounswe/bounswe2022group6/pull/352)|
      |Integrated comment creation endpoint |[#337](https://github.com/bounswe/bounswe2022group6/issues/337) PR:[#352](https://github.com/bounswe/bounswe2022group6/pull/352) |
      |Integrated comment upvote/downvote endpoint |[#337](https://github.com/bounswe/bounswe2022group6/issues/352) PR:[#352](https://github.com/bounswe/bounswe2022group6/pull/352) |
      |Reviewed post creation functionality | [#315](https://github.com/bounswe/bounswe2022group6/issues/315) PR:[#338](https://github.com/bounswe/bounswe2022group6/pull/338)|
      |Reviewed delete user functionality | [#342](https://github.com/bounswe/bounswe2022group6/issues/342) PR:[#350](https://github.com/bounswe/bounswe2022group6/pull/350) |
      |Reviewed code updates| [#359](https://github.com/bounswe/bounswe2022group6/pull/359) |
      |Fixed some namings in the frontend due to backend changes| [#361](https://github.com/bounswe/bounswe2022group6/pull/361)|

   3. **Milestone 3**

      |Contribution|Link|
      |---|---|
      |Attended all general and frontend meetings.| - |
      |Made changes in frontend according to backend response enhancements | [#406](https://github.com/bounswe/bounswe2022group6/issues/406) PR:[#407](https://github.com/bounswe/bounswe2022group6/pull/407)|
      |Reviewed API document of backend team for annotations| [API docs](https://github.com/bounswe/bounswe2022group6/tree/master/Application/Backend/api_docs)|
      |Implemented text and image annotations | [#391](https://github.com/bounswe/bounswe2022group6/issues/391) PR:[#413](https://github.com/bounswe/bounswe2022group6/pull/413) |
      |Reviewed API document of backend team for post and comment delete| [API docs](https://github.com/bounswe/bounswe2022group6/tree/master/Application/Backend/api_docs)|
      |Implemented delete operation for posts| [#430](https://github.com/bounswe/bounswe2022group6/issues/430) PR:[#433](https://github.com/bounswe/bounswe2022group6/pull/433) |
      |Implemented delete operation for comments| [#430](https://github.com/bounswe/bounswe2022group6/issues/430) PR:[#433](https://github.com/bounswe/bounswe2022group6/pull/433) |
      |Reviewed and contributed to chatbot. | [#395](https://github.com/bounswe/bounswe2022group6/issues/395) PR:[#403](https://github.com/bounswe/bounswe2022group6/pull/403)|
      |Reviewed adding location to create post | [#412](https://github.com/bounswe/bounswe2022group6/issues/412) PR:[#416](https://github.com/bounswe/bounswe2022group6/pull/416) |
      |Reviewed search | [#418](https://github.com/bounswe/bounswe2022group6/issues/418) PR:[#420](https://github.com/bounswe/bounswe2022group6/pull/420) |
      |Reviewed location information on posts | [#417](https://github.com/bounswe/bounswe2022group6/issues/417) PR:[#423](https://github.com/bounswe/bounswe2022group6/pull/423)|
      |Reviewed label search| [#431](https://github.com/bounswe/bounswe2022group6/issues/431) PR:[#432](https://github.com/bounswe/bounswe2022group6/pull/432) |
      |Reviewed code updates| [#405](https://github.com/bounswe/bounswe2022group6/pull/405) |



* Yasir Dikbaş

    |Contribution|Link|
    |---|---|
     |Attended most of the weekly meetings||
    |Opened the issue for deciding programming language for mobile development|[#173](https://github.com/bounswe/bounswe2022group6/issues/173)|
    |Studied for react native mobile app development and made research about it mainly reading medium articles||
    |Initialized mobile application on my local|[#176]([[https://github.com/bounswe/bounswe2022group6/issues/176]
    |Created base pages for mobile app on my local|[#200](https://github.com/bounswe/bounswe2022group6/issues/200)|
    |Decided on communication method with mobile team for throughout the development process.|[#171](https://github.com/bounswe/bounswe2022group6/issues/171)|
    |[#175: Reviewing the Requirement Sections 2.1 to 2.5][#175](https://github.com/bounswe/bounswe2022group6/issues/175)|
    |Reviewed profile page initialization|[#234](https://github.com/bounswe/bounswe2022group6/issues/234)|
    |Reviewed conflicts resolved|[#236](https://github.com/bounswe/bounswe2022group6/issues/236)|
    |Reviewed our group logo and took ideas from a logo designer||
    |Prepared software requirements specification for final delivarable|[Pull Request #475](https://github.com/bounswe/bounswe2022group6/pull/475)|
    |Reviewed chatbot improvements|[Pull Request #446](https://github.com/bounswe/bounswe2022group6/pull/446)|
    |Reviewed unit tests added|[Pull Request #449](https://github.com/bounswe/bounswe2022group6/pull/449)|
    |Updated customer presentation file 1 and 2, directlt commited on master||
    |Started to implement editing profiles functionality for mobile|
    |Implemented tons of posts and comments in the web and mobile by registering multiple users|[#445](https://github.com/bounswe/bounswe2022group6/issues/445)|
    |Tested whole web app before our final presentation and reported bugs to development team|
    |Decided on the labels that should be used in our mobile and web application alongside with Alp Eren|[#448](https://github.com/bounswe/bounswe2022group6/issues/448)|
    |Kept track of my detailed work in my personal wiki page and updated it regularly, made final changes to our report|[#481](https://github.com/bounswe/bounswe2022group6/issues/481)|



* Aral Dörtoğul

    * **Milestone 1**

        |Contribution|Link|
        |---|---|
        |Attended weekly meetings.||
        |Reviewed requirements from 1.1.2.4 to 1.2.1 with Ali Kaan Biber.|[#168](https://github.com/bounswe/bounswe2022group6/issues/168)|
        |Researched about the popular frameworks for mobile application development.||
        |Decided on which mobile framework to use with the mobile team.|[#173](https://github.com/bounswe/bounswe2022group6/issues/173)|
        |Researched about React Native for mobile application development.||
        |Created a communication plan for mobile development with the mobile team.|[#171](https://github.com/bounswe/bounswe2022group6/issues/171)|
        |Set up my environment for React Native.||
        |Initialized the mobile application with Bedirhan Pamukçuoğlu.|[#176](https://github.com/bounswe/bounswe2022group6/issues/176) [#187](https://github.com/bounswe/bounswe2022group6/pull/187)|
        |Implemented the navigation of the mobile app.|[#218](https://github.com/bounswe/bounswe2022group6/issues/218)|
        |Designed the profile page of the mobile app.|[#210](https://github.com/bounswe/bounswe2022group6/issues/210)|
        |Designed the profile edit page of the mobile app.|[#210](https://github.com/bounswe/bounswe2022group6/issues/210)|
        |Initialized the messages page of the mobile app.|[#241](https://github.com/bounswe/bounswe2022group6/pull/241)|
        |Created AWS EC2 instance and deployed the app.|[#208](https://github.com/bounswe/bounswe2022group6/issues/208)|
        |Updated the project plan with Berfin Şimşek.|[#201](https://github.com/bounswe/bounswe2022group6/issues/201)|
        |Reviewed other people in Mobile Team's pull requests.|[#203](https://github.com/bounswe/bounswe2022group6/pull/203) [#236](https://github.com/bounswe/bounswe2022group6/pull/236) [#248](https://github.com/bounswe/bounswe2022group6/pull/248)|
        |Presented version [0.1.0-alpha](https://github.com/bounswe/bounswe2022group6/releases/tag/customer-presentation-1) to the customer in Milestone 1 with Bedirhan.||

    * **Milestone 2**
        |Contribution|Link|
        |---|---|
        |Designing a logo for the app|[#250](https://github.com/bounswe/bounswe2022group6/issues/250)|
        |Implementing home feed for mobile|[#270](https://github.com/bounswe/bounswe2022group6/pull/270)|
        |Implementing themes for consistency in UI|[#265](https://github.com/bounswe/bounswe2022group6/pull/265)|
        |Implementing post searching|[#328](https://github.com/bounswe/bounswe2022group6/pull/328)|
        |Adding .env support for mobile|[#328](https://github.com/bounswe/bounswe2022group6/pull/328)|
        |Connecting post search and home feed to backend|[#341](https://github.com/bounswe/bounswe2022group6/pull/341)|
        |Updating project plan|[#367](https://github.com/bounswe/bounswe2022group6/issues/367)|
        |Reviewing some mobile team's pull requests|[#319](https://github.com/bounswe/bounswe2022group6/pull/319) [#355](https://github.com/bounswe/bounswe2022group6/pull/355) [#357](https://github.com/bounswe/bounswe2022group6/pull/357) [#358](https://github.com/bounswe/bounswe2022group6/pull/358) [#360](https://github.com/bounswe/bounswe2022group6/pull/360)|
        |Presenting Milestone 2||

    * **Milestone 3**
        |Contribution|Link|
        |---|---|
        |Implementing guest login for mobile|[#377](https://github.com/bounswe/bounswe2022group6/issues/377) PR: [#397](https://github.com/bounswe/bounswe2022group6/pull/397)|
        |Improving a user's own profile page for mobile|[#378](https://github.com/bounswe/bounswe2022group6/issues/378) PR: [#414](https://github.com/bounswe/bounswe2022group6/pull/414)|
        |Improving profile edit page for mobile.|[#378](https://github.com/bounswe/bounswe2022group6/issues/378) PR: [#414](https://github.com/bounswe/bounswe2022group6/pull/414)|
        |Implementing delete account functionality for mobile.|[#379](https://github.com/bounswe/bounswe2022group6/issues/379) PR: [#426](https://github.com/bounswe/bounswe2022group6/pull/426)|
        |Implementing doctor verification for mobile|[#380](https://github.com/bounswe/bounswe2022group6/issues/380) PR: [#414](https://github.com/bounswe/bounswe2022group6/pull/414)|
        |Adding a markdown file to explain the setup steps of the mobile app.|[#381](https://github.com/bounswe/bounswe2022group6/issues/381)|
        |Implementing post edit in mobile|[#438](https://github.com/bounswe/bounswe2022group6/issues/438) PR: [#442](https://github.com/bounswe/bounswe2022group6/pull/442)|
        |Writing unit tests for mobile|[#449](https://github.com/bounswe/bounswe2022group6/pull/449)| 
        |Reviewing some mobile team's pull requests|[#439](https://github.com/bounswe/bounswe2022group6/pull/439) [#446](https://github.com/bounswe/bounswe2022group6/pull/446)|
        |Tracking final group deliverables|[#451](https://github.com/bounswe/bounswe2022group6/issues/451) [#452](https://github.com/bounswe/bounswe2022group6/issues/452) [#453](https://github.com/bounswe/bounswe2022group6/issues/453) [#454](https://github.com/bounswe/bounswe2022group6/issues/454)|
        |Presenting the final demonstration to the customer with Bedirhan.||

* Alp Eren İnceoğlu

    1. **Milestone 1**
    
        |Contribution|Link|
        |------------|----|
        |Rechecked previous documents|-|
        |Attended all of the meetings.|-|
        |Updated my personal wiki page.|-|
        |Attended mobile meeting and decided on the communication method|-|
        |Created communication method document for mobile group.|[#171](https://github.com/bounswe/bounswe2022group6/issues/171)|
        |Reviewed the Requirement Sections 2.1 to 2.5|[#175](https://github.com/bounswe/bounswe2022group6/issues/175)|
        |Created an error page, reconstronstructed the main page, added mock posts and scroll options.|Since I accidentaly did these on main I couldn't find the related pull request but the commit was done by me.|
        


    2. **Milestone 2**

        |Contribution|Link|
        |---|---|
        |Attended all of the meetings.|-|
        |Found a bug and worked on fixing it.|[#247](https://github.com/bounswe/bounswe2022group6/issues/247)|
        |Researched similar projects.|[#373](https://github.com/bounswe/bounswe2022group6/issues/373)|
        |Worked on implementing threaded comments.|[#374](https://github.com/bounswe/bounswe2022group6/issues/374)|
        |Created post preview option.|[#375](https://github.com/bounswe/bounswe2022group6/issues/375)|
        |Tried converting a React project to React Native in order to replicate an useful feature.|-|
        |Wrote unit tests for threaded comment feature which gave negative response.|-|
        
    3. **Milestone 3**

        |Contribution|Link|
        |---|---|
        |Attended all of the meetings.|-|
        |Continued trying to implement the nested comment feature.|-|
        |Researched 5 different sources with similar content to our app|-|
        |Created couple example posts and comments using the web interface.|-|
        |After the system restarted researched possible medical fields for labels.|-|
        |Created all the labels and coloured them accordingly.|[#448](https://github.com/bounswe/bounswe2022group6/issues/448)|
        |Created 50 posts using the previously mentioned research as well as AI|[#447](https://github.com/bounswe/bounswe2022group6/issues/447)|
        |Created over 70 comments and gave doctor status the required users.|-|
        
     
        



* Yusuf Erdem Nacar

    1. **Milestone 1**

        |Item|Contribution|Issue|Pull Request|
        |---|---|---|---|
        |1.1.|Reviewed requirements from 1.1.1.1 to 1.1.1.1.6 with Artun Akdoğan.|[#167](https://github.com/bounswe/bounswe2022group6/issues/167)||
        |1.2.|Helped introducing the new member to the work.|[#170](https://github.com/bounswe/bounswe2022group6/issues/170)||
        |1.3.|Initialized backend framework with Artun Akdoğan.|[#174](https://github.com/bounswe/bounswe2022group6/issues/174)||
        |1.4.|Created labels for different subteams.|[#177](https://github.com/bounswe/bounswe2022group6/issues/177)||
        |1.5.|Refactored backend structure with Artun Akdoğan.|[#178](https://github.com/bounswe/bounswe2022group6/issues/178)|[#180](https://github.com/bounswe/bounswe2022group6/pull/180)|
        |1.6.|Deleted leftover branches from the last semester.|[#179](https://github.com/bounswe/bounswe2022group6/issues/179)||
        |1.7.|Implemented user registration.|[#181](https://github.com/bounswe/bounswe2022group6/issues/181)|[#191](https://github.com/bounswe/bounswe2022group6/pull/191)|
        |1.8.|Updated some items in requirements.|[#186](https://github.com/bounswe/bounswe2022group6/issues/186)||
        |1.9.|Took meeting notes.|[#190](https://github.com/bounswe/bounswe2022group6/issues/190) [#211](https://github.com/bounswe/bounswe2022group6/issues/211)|
        |1.10.|Helped deployment of the app to the AWS.|[#208](https://github.com/bounswe/bounswe2022group6/issues/208)|
        |1.11.|Implemented login.|[#212](https://github.com/bounswe/bounswe2022group6/issues/)|[#217](https://github.com/bounswe/bounswe2022group6/pull/217)|
        |1.12.|Created API docs for login.|[#213](https://github.com/bounswe/bounswe2022group6/issues/213) [#222](https://github.com/bounswe/bounswe2022group6/issues/222)|[#217](https://github.com/bounswe/bounswe2022group6/pull/217)|
        |1.13.|Implemented logout|[#220](https://github.com/bounswe/bounswe2022group6/issues/220)|[#223](https://github.com/bounswe/bounswe2022group6/pull/223)|
        |1.14.|Created API docs for logout.|[#220](https://github.com/bounswe/bounswe2022group6/issues/220)|[#223](https://github.com/bounswe/bounswe2022group6/pull/223)|

    2. **Milestone 2**

        |Item|Contribution|Issue|Pull Request|
        |---|---|---|---|
        |2.1.|Implementing view and edit account functionalities|[#253](https://github.com/bounswe/bounswe2022group6/issues/253)|[#273](https://github.com/bounswe/bounswe2022group6/pull/273)|
        |2.2.|Updating the structure of RegisteredUser model class ro reflect the class diagram|[#256](https://github.com/bounswe/bounswe2022group6/issues/256)|[#269](https://github.com/bounswe/bounswe2022group6/pull/269)|
        |2.3.|Reviewing reset database functionality||[#262](https://github.com/bounswe/bounswe2022group6/pull/262)|
        |2.4.|Reviewing and testing the migration of the database from MySQL to PostgreSQL||[#274](https://github.com/bounswe/bounswe2022group6/pull/274)|
        |2.5.|Reviewing and testing the unit tests for location manager (locmgr) app||[#276](https://github.com/bounswe/bounswe2022group6/pull/276)|
        |2.6.|Creating model class for the content class|[#278](https://github.com/bounswe/bounswe2022group6/issues/278)|[#288](https://github.com/bounswe/bounswe2022group6/pull/288)|
        |2.7.|Creating model class for the post class|[#279](https://github.com/bounswe/bounswe2022group6/issues/279)|[#288](https://github.com/bounswe/bounswe2022group6/pull/288)|
        |2.8.|Creating model class for the comment class|[#280](https://github.com/bounswe/bounswe2022group6/issues/280)|[#288](https://github.com/bounswe/bounswe2022group6/pull/288)|
        |2.9.|Reviewing and testing the inititialization of the content manager (contmgr) app||[#287](https://github.com/bounswe/bounswe2022group6/pull/287)|
        |2.10.|Implementing the label structure|[#295](https://github.com/bounswe/bounswe2022group6/issues/295)|[#297](https://github.com/bounswe/bounswe2022group6/pull/297)|
        |2.11.|Implementing the post searching functionality|[#296](https://github.com/bounswe/bounswe2022group6/issues/296)|[#306](https://github.com/bounswe/bounswe2022group6/pull/306)|
        |2.12|Reviewing and testing the post related functionalities||[#303](https://github.com/bounswe/bounswe2022group6/pull/303)|
        |2.12.|Reviewing and testing the comment related functionalities||[#304](https://github.com/bounswe/bounswe2022group6/pull/304)|
        |2.13.|Reviewing and testing the voting system functionalities||[#305](https://github.com/bounswe/bounswe2022group6/pull/305)|
        |2.14.|Fixing a bug where post creation would not take labels as a parameter|[#322](https://github.com/bounswe/bounswe2022group6/issues/322)|[#332](https://github.com/bounswe/bounswe2022group6/pull/332)|
        |2.15.|Reviewing and testing the delete account functionality with [Hakan Balık](https://github.com/bounswe/bounswe2022group6/wiki/Hakan-Bal%C4%B1k)||[#323](https://github.com/bounswe/bounswe2022group6/pull/323)|
        |2.16.|Implementing get all posts functionality|[#331](https://github.com/bounswe/bounswe2022group6/issues/331)|[#336](https://github.com/bounswe/bounswe2022group6/pull/336)|
        |2.17.|Adding all fields of label model class to the response bodies of search posts and get all posts functionalities|[#334](https://github.com/bounswe/bounswe2022group6/issues/334)|[#335](https://github.com/bounswe/bounswe2022group6/pull/335)|
        |2.18.|Reviewing and testing the addition of downvoted users list to the post model class and to its related functionalities||[#346](https://github.com/bounswe/bounswe2022group6/pull/346)|
        |2.19.|Fixing a bug where the case sensitive image URLs were being kept as all lowercase in the database|[#351](https://github.com/bounswe/bounswe2022group6/issues/351)|[#354](https://github.com/bounswe/bounswe2022group6/pull/354)|
        |2.20.|Fixing a bug where the labels and comment count of a post were not returned in the get post functionality response body||[#359](https://github.com/bounswe/bounswe2022group6/pull/359)|
        |2.21.|Writing executive summary section for customer milestone 2 report|[#330](https://github.com/bounswe/bounswe2022group6/issues/330)|[#365](https://github.com/bounswe/bounswe2022group6/pull/365)|
        |2.22.|Writing annotation section for customer milestone 2 report|[#364](https://github.com/bounswe/bounswe2022group6/issues/364)|[#366](https://github.com/bounswe/bounswe2022group6/pull/366)|
        |2.23.|Writing standards section for customer milestone 2 report|[#369](https://github.com/bounswe/bounswe2022group6/issues/369)|[#370](https://github.com/bounswe/bounswe2022group6/pull/370)|

    3. **Milestone 3**

        |Item|Contribution|Issue|Pull Request|
        |---|---|---|---|
        |3.1.|Implementing annotation support|[#392](https://github.com/bounswe/bounswe2022group6/issues/392)|[#398](https://github.com/bounswe/bounswe2022group6/pull/398)|
        |3.2.|Enhancing return data of the get post functionalities|[#394](https://github.com/bounswe/bounswe2022group6/issues/394)|[#402](https://github.com/bounswe/bounswe2022group6/pull/402) [#404](https://github.com/bounswe/bounswe2022group6/pull/404) [#405](https://github.com/bounswe/bounswe2022group6/pull/405) [#419](https://github.com/bounswe/bounswe2022group6/pull/419) [#436](https://github.com/bounswe/bounswe2022group6/pull/436) [#453](https://github.com/bounswe/bounswe2022group6/issues/435)|
        |3.3.|Writing the executive summary part for final milestone|[#455](https://github.com/bounswe/bounswe2022group6/issues/455)||
        |3.4.|Writing the annotations part for final milestone|[#456](https://github.com/bounswe/bounswe2022group6/issues/456)|[#463](https://github.com/bounswe/bounswe2022group6/pull/463)|
        |3.5.|Writing the standards part for final milestone|[#457](https://github.com/bounswe/bounswe2022group6/issues/457)|[#462](https://github.com/bounswe/bounswe2022group6/pull/462)|
        |3.6.|Reviewing edit post and comment endpoints||[#389](https://github.com/bounswe/bounswe2022group6/pull/389)|
        |3.7.|Reviewing tests for content||[#390](https://github.com/bounswe/bounswe2022group6/pull/390)|
        |3.8.|Reviewing reputation system and view profile endpoints||[#400](https://github.com/bounswe/bounswe2022group6/pull/400)|
        |3.9.|Reviewing delete post and comment endpoints||[#425](https://github.com/bounswe/bounswe2022group6/pull/425)

* Ramazan Bedirhan Pamukçuoğlu

    |Contribution|Link|
    |---|---|
    |...|...|


* Berfin Şimşek

    |Contribution|Link|
    |------------|----|
    |Attended weekly meetings||
    |Reviewed the requirements for "Voting a Post" and "Interactions Between the Users and the Comments|[#165](https://github.com/bounswe/bounswe2022group6/issues/165)|
    |Updated deliverables, meeting notes and my personal wiki page|[#160](https://github.com/bounswe/bounswe2022group6/issues/160)|
    |Researched and practiced React.js||
    |Reviewed home page.|[#205](https://github.com/bounswe/bounswe2022group6/pull/205)|
    |Reviewed frontend base pages.|[#194](https://github.com/bounswe/bounswe2022group6/pull/194)|
    |Implementing Register and Profile Pages for Frontend |[#196](https://github.com/bounswe/bounswe2022group6/issues/196)|
    |Updated the project plan.|[#201](https://github.com/bounswe/bounswe2022group6/issues/201)|
    |Integrated backend endpoints for getting a user's account information|[Pull Request #294](https://github.com/bounswe/bounswe2022group6/pull/294)|
    |Integrated backend endpoints for editing a user's account information|[Pull Request #294](https://github.com/bounswe/bounswe2022group6/pull/294)|
    |Designed the profile page|[Pull Request #327](https://github.com/bounswe/bounswe2022group6/pull/327)|
    |Added a form to profile page for doctor verification|[Pull Request #311](https://github.com/bounswe/bounswe2022group6/pull/311)|
    |Designed the profile page|[Pull Request #327](https://github.com/bounswe/bounswe2022group6/pull/327)|
    |Implementing chatbot for frontend|[Pull Request #403](https://github.com/bounswe/bounswe2022group6/pull/403)|
    |Verified doctors' username should be distinguishable|[Pull Request #411](https://github.com/bounswe/bounswe2022group6/pull/411)|
    |Editing a post|[Pull Request #422](https://github.com/bounswe/bounswe2022group6/pull/422)|
    |Updating Project Plan for Final Milestone|[Issue: 479](https://github.com/bounswe/bounswe2022group6/issues/479)|
    |Reviewed a bug about a library|[#283: Fix react-icons bug](https://github.com/bounswe/bounswe2022group6/pull/283)|
    |Reviewed a bug about reloading the page|[#291 Frontend/fix/reload bug](https://github.com/bounswe/bounswe2022group6/pull/291)|
    |Reviewed changes in frontend after backend enhancements|[#407 Changes in frontend due to backend response enhancements](https://github.com/bounswe/bounswe2022group6/pull/407)|
    |Reviewed location feature of posts|[#416 Frontend/feature/location](https://github.com/bounswe/bounswe2022group6/pull/416)|
    |Reviewed viewing other profiles feature|[#441 Frontend/feature/view other profiles](https://github.com/bounswe/bounswe2022group6/pull/441)|
    
    
    

* Mustafa Berk Turgut

    |Contribution|Link|
    |---|---|
    |...|...|


* Beyza İrem Urhan

    |Contribution|Link|
    |---|---|
    |Attended weekly meetings||
    |Reviewed the requirements for "Voting a Post" and "Interactions Between the Users and the Comments|[#165](https://github.com/bounswe/bounswe2022group6/issues/165)|
    |Initializing Backend Framework|[#174](https://github.com/bounswe/bounswe2022group6/issues/174)|
    |Researched and practiced Django framework||
    |Creating Scenarios and Mockups for Milestone I|[#230](https://github.com/bounswe/bounswe2022group6/issues/230)|
    |Implementing "Account Delete" function |[#233](https://github.com/bounswe/bounswe2022group6/issues/233)|
    |Taking Note of The Milestone 1 Customer Feedback|[#249](https://github.com/bounswe/bounswe2022group6/issues/249)|
    |Specifying the requirements addressed in Milestone 1|[#251](https://github.com/bounswe/bounswe2022group6/issues/251)|
    |Evaluation of tools and processes used to manage team project|[#252](https://github.com/bounswe/bounswe2022group6/issues/252)|
    |Searching for a tool for label ontologies|[#383](https://github.com/bounswe/bounswe2022group6/issues/383)|
    |Searching for ways to implement semantic search functionality|[#384](https://github.com/bounswe/bounswe2022group6/issues/384)|
    |Updating delete function according to the Milestone 2 feedback|[#385](https://github.com/bounswe/bounswe2022group6/issues/385)|
    |Writing the status of the rquirements|[#469](https://github.com/bounswe/bounswe2022group6/issues/469)|

### Status of the Requirements

* Provide progress according to requirements, being either not started, in progress, or completed (implemented, tested, documented, deployed)

    |Requirement|Status|
    |---|---|
    |1 Functional Requirements||
    |1.1 User Requirements||
    |1.1.1 Account Management||
	|1.1.1.1 Creating an Account||
	|1.1.1.1.1 Unregistered users shall provide a unique username when creating an account.|Completed|
	|1.1.1.1.2 Unregistered users shall provide a password when creating an account.|Completed|
	|1.1.1.1.3 Unregistered users shall provide a unique phone number or a unique email address when creating an account.|Completed|
	|1.1.1.1.4 Unregistered users shall provide their date of birth when creating an account.|Completed|
	|1.1.1.2 Adding Information to a Account|Completed|
	|1.1.1.2.1 Registered users shall be able to add an email address to their account if the account was created using only a phone number.|Completed|
	|1.1.1.2.2 Registered users shall be able to add a phone number to their account if the account was created using only an email address.|Completed|
	|1.1.1.2.3 Registered users shall be able to add their first name to their account.|Completed|
	|1.1.1.2.4 Registered users shall be able to add a last name to their account.|Completed|
	|1.1.1.2.5 Registered users shall be able to add a profession to their account.|Completed|
	|1.1.1.2.6 Registered users shall be able to add a location to their account.|In progress|
	|1.1.1.2.7 Registered users shall be able to update their account as a doctor account via doctor verification. (see 1.1.1.7)|Completed|
	|1.1.1.3 Editing the Information in an Account||
	|1.1.1.3.1 Registered users shall be able to change the email address in their account.|Completed|
	|1.1.1.3.2 Registered users shall be able to change the phone number in their account.|Completed|
	|1.1.1.3.3 Registered users shall be able to change the profile picture in their account.|Not started|
	|1.1.1.3.4 Registered users shall be able to change the first name in their account.|Completed|
	|1.1.1.3.5 Registered users shall be able to change the last name in their account.|Completed|
	|1.1.1.3.6 Registered users shall be able to change the profession in their account.|Completed|
	|1.1.1.3.7 Registered users shall be able to change the location of their account.|In progress|
	|1.1.1.3.8 Registered users shall be able to change the password of their account.|Completed in web, not started in mobile|
	|1.1.1.3.9 Registered users shall be able to turn off the messaging feature in order not to receive any messages.|Not started|
	|1.1.1.3.10 Registered users shall be able to turn off the notifications feature in order not to receive any notifications related to posts.|Not started|
	|1.1.1.3.11 Registered users shall be able to turn on the notifications feature in order to receive notifications related to posts.|Not started|
	|1.1.1.3.12 Registered users shall be able to turn off the messaging feature in order not to receive messages.|Not started|
	|1.1.1.3.13 Registered users shall be able to turn on the messaging feature in order to receive messages.|Not started|
	|1.1.1.4 Removing Information from an Account||
	|1.1.1.4.1 Registered users shall be able to remove the email address from their account if there is a phone number in it.|Completed|
	|1.1.1.4.2 Registered users shall be able to remove the phone number from their account if there is an email address in it.|Completed|
	|1.1.1.4.3 Registered users shall be able to remove the profile picture from their account.|Not started|
	|1.1.1.4.4 Registered users shall be able to remove the first name from their account.|Completed|
	|1.1.1.4.5 Registered users shall be able to remove the last name from their account.|Completed|
	|1.1.1.4.6 Registered users shall be able to remove the profession from their account.|Completed in web, in progress in mobile|
	|1.1.1.4.7 Registered users shall be able to remove the location from their account.|In progress|
	|1.1.1.5 Deleting an Account||
	|1.1.1.5.1 Registered users shall be able to delete their accounts.|Completed|
	|1.1.1.5.2 Admins shall be able to delete any account.|Completed|
	|1.1.1.5.3 Users shall confirm their request when deleting an account.|Completed|
	|1.1.1.6 Logging in/Logging out||
	|1.1.1.6.1 Registered users shall be able to log in by providing their password with either the username, phone number, or the email of their account.|Completed|
	|1.1.1.6.2 Registered users shall not be able to log in after 5 failed attempts due to incorrect passwords.|Not started|
	|1.1.1.6.3 Registered users shall be able to stay logged in.|Completed|
	|1.1.1.6.4 Registered users shall be able to log out from the application.|Completed|
	|1.1.1.7 Doctor verification||
	|1.1.1.7.1 Registered users shall be able to verify that they are doctors via either "diploma tescil no" or "e-devlet bilgi bankası".|Completed|
	|1.1.1.7.2 Admins shall be able to verify that a user who provided the information in 1.1.1.7.1 is a doctor.|Completed|
	|1.1.1.7.3 Admins shall determine the area of expertise of a doctor with the information in 1.1.1.7.1.|Not started|
	|1.1.1.7.4 Admins shall determine the graduation year of a doctor with the information in 1.1.1.7.1.|Not started|
	|1.1.1.7.5 Admins shall determine the graduation place of a doctor with the information in 1.1.1.7.1.|Not started|
	|1.1.2 Interactions Between The Users and Forum||
	|1.1.2.1 Interactions Between the Users and the Searchbar/Search Results||
	|1.1.2.1.1 Users shall be able to search for any number of searchables.|Completed|
	|1.1.2.1.2 Users shall be able to filter the suggested searchables.|Completed|
	|1.1.2.1.3 Users shall be able to sort the search results by time.|Not started|
	|1.1.2.1.4 Users shall be able to sort the search results by vote count.|Not started|
	|1.1.2.2 Interactions Between the Users and the Posts||
	|1.1.2.2.1 Creating a Post||
	|1.1.2.2.1.1 Registered users shall provide a title when creating a post.|Completed|
	|1.1.2.2.1.2 Registered users shall provide a description when creating a post.|Completed|
	|1.1.2.2.1.3 Registered users shall provide a post type label when creating a post.|Not started|
	|1.1.2.2.1.4 Registered users shall be able to add any number of labels to their posts.|Completed in web, not started in mobile|
	|1.1.2.2.1.5 Registered users shall be able to add media to their posts.|Completed|	
	|1.1.2.2.1.6 Registered users shall be able to mark their posts as NSFW and blur the attached media.|Completed|
	|1.1.2.2.1.7 Registered users shall be able to mention other registered users in the description of their post.|Not started|
	|1.1.2.2.2 Editing a Post||
	|1.1.2.2.2.1 Registered users shall be able to change their posts' title.|Completed|
	|1.1.2.2.2.2 Registered users shall be able to change their posts' descriptions.|Completed|
	|1.1.2.2.2.3 Registered users shall be able to change their posts' labels.|In progress|	
	|1.1.2.2.2.4 Registered users shall be able to remove media from their posts.|Not started|	
	|1.1.2.2.2.5 Registered users shall be able to add media to their posts.|Completed|
	|1.1.2.2.3 Deleting a Post||
	|1.1.2.2.3.1 Registered users shall be able to delete their posts along with their comments.|Completed|
	|1.1.2.2.3.2 Admins shall be able to delete any post along with its comments.|Completed|	
	|1.1.2.2.3.3 Users who are deleting a post shall confirm their request.|Not started|
	|1.1.2.2.4 Viewing a Post||
	|1.1.2.2.4.1 Users shall be able to view the title of a post.|Completed|
	|1.1.2.2.4.2 Users shall be able to view the description of a post.|Completed|
	|1.1.2.2.4.3 Users shall be able to view the vote counts of a post.|Completed|
	|1.1.2.2.4.4 Users shall be able to view a truncated list of comments.|Completed|
	|1.1.2.2.4.5 Users shall be able to view a truncated list of labels.|Completed|
	|1.1.2.2.4.6 Users shall be able to expand the list of comments on a post.|Completed|
	|1.1.2.2.4.7 Users shall be able to expand the list of labels of a post.|Completed|
	|1.1.2.2.5 Voting a Post||
	|1.1.2.2.5.1 Registered users shall be able to upvote posts.|In progress|	
	|1.1.2.2.5.2 Registered users shall be able to downvote posts.|In progress|	
	|1.1.2.2.5.3 Registered users shall be able to unvote posts.|In progress|
	|1.1.2.3 Interactions Between the Users and the Comments||
	|1.1.2.3.1 Creating a Comment||
	|1.1.2.3.1.1 Registered users shall be able to comment under a post.|Completed in backend, not started in mobile|  
	|1.1.2.3.1.2 Registered users shall be able to comment under a comment.|Completed in backend, not started in mobile|	
	|1.1.2.3.1.3 Registered users shall be able to add media to their comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.1.4 Registered users shall be able to mark their comments as NSFW and blur the media attached to them.|Completed in backend, not started in mobile|
	|1.1.2.3.1.5 Registered users shall be able to mention other registered users in their comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.2 Editing a Comment||
	|1.1.2.3.2.1 Registered users shall be able to edit their comments' description.|Completed in backend, not started in mobile|	
	|1.1.2.3.2.2 Registered users shall be able to add media to their comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.2.3 Registered users shall be able to remove media from their comments.|Completed in backend, not started in mobile|
	|1.1.2.3.3 Deleting a Comment||
	|1.1.2.3.3.1 Registered users shall be able to delete their comments along with their comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.3.2 Admins shall be able to delete any comment along with its comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.3.3 Users who delete a comment shall confirm their request.|Not started|
	|1.1.2.3.4 Viewing a Comment||
	|1.1.2.3.4.1 Users shall be able to view the title of a comment.|Completed|
	|1.1.2.3.4.2 Users shall be able to view the description of a comment.|Completed|
	|1.1.2.3.4.3 Users shall be able to view the vote counts of a comment.|Completed|
	|1.1.2.3.4.4 Users shall be able to view a truncated list of comments.|Completed|
	|1.1.2.3.4.5 Users shall be able to expand the list of comments on a comment.|Completed|
	|1.1.2.3.5 Voting a Comment||
	|1.1.2.3.5.1 Registered users shall be able to upvote comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.5.2 Registered users shall be able to downvote comments.|Completed in backend, not started in mobile|	
	|1.1.2.3.5.3 Registered users shall be able to unvote comments.|Completed in backend, not started in mobile|	
	|1.1.2.4 Label Management||
	|1.1.2.4.1 Admins shall be able to add a label to the system.|Completed|
	|1.1.2.4.2 Admins shall be able to edit a label.|Completed|
	|1.1.2.4.3 Admins shall be able to remove a label.|Completed|
	|1.1.3 Interactions Between The Users||
	|1.1.3.1 Messaging||
	|1.1.3.1.1 Registered users shall be able to send text messages to each other.|Not started|
	|1.1.3.1.2 Registered users shall be able to send media messages to each other.|Not started|
	|1.1.3.1.3 Registered users shall be able to choose if they want to see the message sent to them.|Not started|
	|1.1.3.1.4 Registered users shall be able to block another user.|Not started|
	|1.1.3.1.5 Registered users shall be able to unblock a user that they blocked.|Not started|
	|1.1.3.1.6 Registered users shall not be able to send a message to a user who blocked them.|Not started|
	|1.1.3.1.7 Registered users shall not be able to send a message to a user who turned off their messaging feature.|Not started|
	|1.1.3.1.8 Registered users shall receive a prompt asking them if they want to receive the message sent if the sender is a user whom they have not messaged with before.|Not started|
	|1.1.3.2 Reporting||
	|1.1.3.2.1 Registered users shall be able to report other registered users for spam.|In progress|
	|1.1.3.2.2 Registered users shall be able to report other registered users for harassment.|In progress|
	|1.1.3.2.3 Registered users shall be able to report posts or comments for misinformation.|In progress|
	|1.1.3.2.4 Registered users shall be able to report posts or comments for content violating the app rules.|In progress|
	|1.1.3.2.5 Registered users shall be able to report posts or comments for content mislabeling.|In progress|
	|1.1.3.2.6 Admins shall be able to list reported posts along with their reason for reporting.|In progress|
	|1.1.4 Interactions Between The Users and the Chatbot||
	|1.1.4.1 Users shall be able to ask predetermined questions to the chatbot.|Completed|
	|1.1.4.2 Users shall be able to choose a predetermined answer to the follow-up questions of the chatbot.|Completed|
	|1.1.4.3 Users shall be able to acquire information from the chatbot depending on their answers.|Not started|
	|1.2 System Requirements|
	|1.2.1 Reputation System|
	|1.2.1.1 New accounts shall have 0 reputation.|Not started|
	|1.2.1.2 Upvotes a user's posts and comments get shall increase their account's reputation.|Not started|
	|1.2.1.3 Downvotes a user's posts and comments get shall decrease their account's reputation.|Not started|
	|1.2.1.4 Accounts with a certain amount of negative reputation shall be deleted by the system automatically|Not started|
	|1.2.2 Forum||
	|1.2.2.1 Labels|
	|1.2.2.1.1 Labels shall have a unique name.|Completed|
	|1.2.2.1.2 Labels shall have a label type.|Not started|
	|1.2.2.1.3 Content labels shall have an ontological connection to at least one of the field labels.|Not started|
	|1.2.2.1.4 Label types shall have a unique and easily distinguishable color.|Completed|
	|1.2.2.2 Searchbar||
	|1.2.2.2.1 Suggestion List||
	|1.2.2.2.1.1 Searchbar shall create a suggestion list, listing all searchables except strings, starting with the character sequence entered into the textbox.|In progress|
	|1.2.2.2.1.2 Suggestion list shall filter out searchables as more characters are typed into the textbox.|In progress|
	|1.2.2.2.1.3 Suggestion list shall have a row at the top containing filter switches for the names of the searchable classes.|Not started|
	|1.2.2.2.1.4 Flipping a switch other than the string switch shall filter out all other types of searchables from the suggestion list.|Not started|
	|1.2.2.2.1.5 Flipping the string switch shall add the string typed into the textbox of the search bar as a searchable to the search.|Not started|
	|1.2.2.2.1.6 Selecting a searchable from the suggestion list shall add the selected searchable to the search.|Not started|
	|1.2.2.2.2 Searching||
	|1.2.2.2.2.1 Search results shall be a list of post previews of the posts having the searchables that the search is done by.|Completed|
	|1.2.2.2.2.2 Search results shall be sorted by most upvoted in the last month by default.|Not started|
	|1.2.2.3 Post Previews||
	|1.2.2.3.1 Post preview shall act as a hyperlink to the post that it belongs to.|In progress|
	|1.2.3 Chatbot||
	|1.2.3.1 Chatbot shall have a set of questions that are predetermined in the system that the users can select to ask the chatbot.|Completed|
	|1.2.3.2 The predetermined questions that the chatbot presents shall include how to use the app.|Not started|
	|1.2.3.3 The chatbot shall have a set of predetermined follow-up questions that the users can select to get more detailed information about the topic or to ask about another topic.|In progress|
	|1.2.3.4 Chatbot questions shall be semantically linked to each other to clarify the topic which the user is looking for.|In progress|
	|1.2.3.5 Chatbot shall give information on the related topic depending on the questions selected by the user.|In progress|
	|1.2.3.6 The replies generated by the chatbot should contain information about where to find and the functionality of a certain feature of the app.|Not started|
	|1.2.4 Home Feed||
	|1.2.4.1 Every account shall have a home feed.|Completed|
	|1.2.4.2 Home feed shall be a list of post previews.|Completed|
	|1.2.4.3 Post previews shall be listed in an account's HomeFeed in the order of the most upvote in the last 30 days.|In progress|
	|1.2.4.4 HomeFeed shall consist of 50 post previews, grouped 10 by 10 in pages with indexes 1-5.|Not started|
	|1.2.5 Notifications||
	|1.2.5.1 When a post is shared, 3 randomly picked doctor-type users from the group of doctors whose expertise matches the content label of the post (see 1.1.1.7.3) and notifications are turned on (see 1.1.1.3.11) should be notified.|Not started|
	|1.2.5.2 When a notification of a post is clicked by the user, it should take the user to the post.|Not started|
	|1.2.5.3 When the number of upvotes or downvotes surpasses a certain amount, its author shall be notified.|Not started|
	|1.2.5.4 When a post gets a comment, its author shall be notified.|Not started|
	|1.2.5.5 When a user gets a message, the user shall be notified.|Not started|
	|2 Non-Functional Requirements||
	|2.1 Security||
	|2.1.1 Two-factor authentication should be used for users who try to log in to their accounts.|Not started|
	|2.1.2 The system shall regularly check for malware.|Not started|
	|2.1.3 Interactions in the website shall use SSL technology.|Not started|
	|2.1.4 The system shall use the HTTPS protocol.|Not started|
	|2.1.5 Users' personal information should be hidden from other members.|Not started|
	|2.2 Response||
	|2.2.1 A request made to the server should be responded to in no more than 5 seconds.|Not started|
	|2.3 Availability||
	|2.3.1 The application shall be available as a native website via modern web browsers.|Not started|
	|2.3.2 The application shall be available as a native mobile application on Android platforms.|Not started|
	|2.3.3 The application shall be dockerized.|Completed|
	|2.3.4 The application shall be deployable to a configurable server.|Completed|
	|2.3.5 The application shall support the English characters.|Completed|
	|2.4 Reliability||
	|2.4.1 The system shall always run if not intentionally shut down.|Not started|
	|2.4.2 The application shall be portable and have a dedicated server.|Not started|
	|2.4.3 The server shall scale when needed.|Not started|
	|2.5 Privacy||
	|2.5.1 The system shall store the data securely.|Not started|
	|2.5.2 The system shall provide a privacy policy to the users beforehand to inform what kind of data will be requested, how it will be stored, and with whom it will be shared.|In progress|
    
### Progress according to requirements

### API Endpoints

API Documentation:

The aim of this file is to create a document that shows how to use our API endpoints. All endpoints written below are well-defined with respect to input parameters and outputs. Necesarry parameters, error codes and successful requests given with examples. 

Thanks to Django framework, you can access API endpoints with logging into system with admin priviliges. Postman request collections are also added to related sections.

With in this documentation, you can find human readable description of endpoints, example requests, list of input parameters.

API Endpoints: 

** Authorization:
    
        *Registration: POST SERVER_URL/register/
            Params:
                username: String
                email: String 
                password: String
                gender: Char (m/f)
                birth_day: Integer
                birth_month: Integer
                birth_year: Integer 
            On success:
                "status": "Created",
				"code": 201
		
		*Login: POST SERVER_URL/login/
		    Params:
		        useridentifier: String
		        password: String
		    On success:
		        "status": "OK",
				"code": 200
		
		*Logout: GET SERVER_URL/logout/
		    Params:
		        No parameters required. 
		        Logout mechanism uses authorization token to logout user.
		    On success:
		        "status": "OK",
				"code": 200

** Profile

        *Edit Profile: POST SERVER_URL/profile/
            Params:
                    username: String,
                    first_name: String,
                    last_name: String,
                    email: String,
                    phone_number: String,
                    birth_date: Date,
                    gender: Char
            On success:
                "status": "OK",
				"code": 200
		
		*View Profile: GET SERVER_URL/viewprofile/
		    Params:
		            username: String,
                    email: String,
                    birth_date: Date,
                    gender: Char(m/f),
                    is_messaging_allowed: Boolean,
                    is_notifications_allowed: Boolean,
                    reputation: Integer,
                    first_name: String,
                    last_name: String,
                    profile_picture: String,
                    phone_number: String,
                    verified_as_doctor: Boolean,
                    profession: String,
                    location: String,
                    diplomaID: String
            On Success:
                "status": "OK",
				"code": 200,

**Content Manager

        *Get Post: GET SERVER_URL/contmgr/post
            Params:
                id: Integer
            On Success:
                "status": "OK",
				"code": 200,
                "body": Post
                
        *Create Post: POST SERVER_URL/contmgr/post
            Params:
                title: String, Required
                type: String, Required
                description: Sring, Required
                location: String
                imageURL: String
                is_marked_nsfw: Boolean
            On success:
                "status": "Created",
				"code": 201,
				"body": "{\n    \"info\": \"post creation successful\",\n    \"postID\": 1\n}"
		
		*Get Comment: GET SEVER_URL/contmgr/comment/
		    Params:
		        id: Integer
		    On Success:
		        "status": "OK",
				"code": 200,
				"body": Comment
		
		*Create a Comment to a Post: POST SERVER_URL/contmgr/comment/
            Params:
                description: String, Required
                parent_post_id: Integer, Required
                mentioned_users: String
            On Success:
                "status": "Created",
				"code": 201,
				"body": "{\n    \"info\": \"comment creation successful\",\n    \"commentID\": 3\n}"
		
		*Create a Comment to a Comment: POST SERVER_URL/contmgr/comment/
            Params:
                description: String, Required
                parent_comment_id: Integer, Required
                mentioned_users: String
            On Success:
                "status": "Created",
				"code": 201,
				"body": "{\n    \"info\": \"comment creation successful\",\n    \"commentID\": 3\n}"
		
		*Edit a Comment: PUT SERVER_URL/contmgr/comment/
            Params:
                id: Integer, Required
                description: String, Required
                mentioned_users: String
            On Success:
                "status": "Created",
				"code": 201,
				"body": "{\n    \"info\": \"comment update successful\",\n    \"postID\": 4\n}"
		
		*Delete a Comment: DEL SERVER_URL/contmgr/comment/
		    Params:
		        id: Integer, Required
		    On Success:
		        "status": "Created",
				"code": 201,
				"body": "{\n    \"info\": \"comment delete successful\"\n}"

		*Vote a Post: POST SERVER_URL/contmgr/postvote/
		    Params:
		        id: Integer, Required
		        vote: String (up, down), Required
		    On Success:
		        "status": "Created",
				"code": 201,
                "body": "{\n    \"info\": \"Upvote added to post for user\"\n}"
        
        *Vote a Comment: POST SERVER_URL/contmgr/commentvote/
		    Params:
		        id: Integer, Required
		        vote: String (up, down), Required
		    On Success:
		        "status": "Created",
				"code": 201,
                "body": "{\n    \"info\": \"Upvote added to comment for user\"\n}"
        
        *Remove Vote from Post: POST SERVER_URL/contmgr/postvote/
		    Params:
		        id: Integer, Required
		        vote: String (up, down), Required
		    On Success:
		        "status": "Created",
				"code": 201,
                "body": "{\n    \"info\": \"Upvote removed from post for user\"\n}"
        
        *Remove Vote from Comment: POST SERVER_URL/contmgr/commentvote/
		    Params:
		        id: Integer, Required
		        vote: String (up, down), Required
		    On Success:
		        "status": "Created",
				"code": 201,
                "body": "{\n    \"info\": \"Upvote removed from comment for user\"\n}"
        
        * Get Labels: GET SERVER_URL/contmgr/labels
            Params: -
            On Success:
                "status": "OK",
				"code": 200,
                "body": [Label]
        
        * Keyword Search: GET SERVER_URL/contmgr/searchpost
            Params:
                keyword: String
            On Success: 
                "status": "OK",
				"code": 200,
				body: [Post]
		
		*Label Search: GET SERVER_URL/contmgr/searchpost
		    Params:
                label: String
            On Success: 
                "status": "OK",
				"code": 200,
				body: [Post]
				
		*Combined Search: GET SERVER_URL/contmgr/searchpost
		    Params:
                label: String,
                keyword: String
            On Success: 
                "status": "OK",
				"code": 200,
				body: [Post]
				
** Location Manager:
    
        *Information: GET SERVER_URL/locmgr/info/
            Params:
                country: String
                state: String
            On success:
                [data]
		
		*Location: POST SERVER_URL/locmgr/location/
		    Params:
		        ip: String, Required
		    On success:
		        "loc": [country, state, city]
		    On failure:
		        "loc": []
		       
** Annotations:
    
        *Text Annotation Create: POST SERVER_URL/contmgr/annotations
            Params:
                annotation_type: String, Required
                content_type: String, Required
                content_id: String, Required
                jsonld: String, Required
            On Success:
                "status": "OK",
				"code": 200,
                "body": "{\n    \"info\": \"annotation creation successful\",\n    \"annotation_id\": \"#48d7b458-fead-45af-b317-db2d9ddf4c38\"\n}"
        
        *Image Annotation Create: POST SERVER_URL/contmgr/annotations
            Params:
                annotation_type: String, Required
                content_id: String, Required
                jsonld: String, Required
            On Success:
                "status": "OK",
				"code": 200,
                "body": "{\n    \"info\": \"annotation creation successful\",\n    \"annotation_id\": \"#48d7b458-fead-45af-b317-db2d9ddf4c38\"\n}"
                
        *Image Annotation Delete: DELETE SERVER_URL/contmgr/annotations
            Params:
                annotation_id: String, Required
                annotation_type: String, Required
            On Success:
                "status": "OK",
				"code": 200,
                "body": "{\n    \"info\": \"annotation delete successful\",\n    \"annotation_id\": \"#48d7b458-fead-45af-b317-db2d9ddf4c38\"\n}"

For the Postman Collections:
    https://github.com/bounswe/bounswe2022group6/tree/master/Application/Backend/api_docs

### User Interface / User Experience

* Frontend 

   * Landing Page
   
   ![image](https://user-images.githubusercontent.com/56560206/206656333-1fbbd388-2195-467f-bd88-ad4fa34f33ae.png)
   ![image](https://user-images.githubusercontent.com/56560206/206656062-9f12f709-0bd3-45e6-bad4-724f24912e1c.png)
   ![image](https://user-images.githubusercontent.com/56560206/206656373-445de345-e1bb-4e41-9cc2-65e36ccf784c.png)
   
   * Register Page
   
   ![image](https://user-images.githubusercontent.com/56560206/206656754-5e8f9c8b-8a05-41e8-b0de-e5dfd7109d85.png)
   
   * Login Page
   
   ![image](https://user-images.githubusercontent.com/56560206/206656630-9a5afff9-0221-4fc0-bf21-72fca80a78da.png)

   * Home Page

   ![image](https://user-images.githubusercontent.com/56560206/210249034-e0d84a56-8e83-45f4-b91b-e9ecb1e31704.png)
   
   * Home Page with Chatbot open

   ![image](https://user-images.githubusercontent.com/56560206/210249143-9e2d1351-eff6-41f8-89ca-98e2a97f479b.png)
   
   * Home Page with Search
   
   ![image](https://user-images.githubusercontent.com/56560206/210249216-5be2c464-c80b-4a9e-807f-0b84975dfa17.png)
   
   * Home Page with Label Filter

   ![image](https://user-images.githubusercontent.com/56560206/210249301-777a64cb-657b-40d1-9155-02ac1e7e4c21.png)

   * Create Post Form
   
   ![image](https://user-images.githubusercontent.com/56560206/210249384-4faa6d27-4ea5-4890-adb5-e36b40d181f9.png)

   * Profile Page

   ![image](https://user-images.githubusercontent.com/56560206/210249525-28353337-d4bd-4789-963a-0205e2891eac.png)
   
   * Profile Page of Other Users

   ![image](https://user-images.githubusercontent.com/56560206/210249733-308df3bd-e70f-4ac6-8dff-fffda188df0d.png)


   * Post Detail Page

   ![image](https://user-images.githubusercontent.com/56560206/210249682-cd9f3c3f-2354-45f6-ae00-784acac8b2ed.png)
   
   * Post Detail with Annotations

   ![image](https://user-images.githubusercontent.com/56560206/210249920-25258b52-c589-4f8a-a148-f377092f1985.png)
   
   * Post Detail Page of the Owner with Edit Section Open

   ![image](https://user-images.githubusercontent.com/56560206/210250348-63b4ad9b-ae45-4f31-a6ad-61d738f23a75.png)

* Mobile

    For each UI design, hyperlinks are provided in bullet points:

    * [Login Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/authentication/Login.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/206706024-4fc14fc2-9dad-4994-b0b6-16deb3b36e6d.png" width=400 />

    * [Signup Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/authentication/SignUpScreen.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/206706063-9a4dc1f2-a2e0-42fc-bc06-9318381db395.png" width=400 />
    
    * [Guest User Home Feed (with disabled buttons)](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/HomeFeed.js) (Related Code: [HomeHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/HomeHeader.js))
    
    <img src = "https://user-images.githubusercontent.com/73420291/210267956-320a1fff-e8f9-4853-89a7-c8aeb3da806a.png" width=400 />
    
    * [Guest User Drawer Options](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/HomeScreen.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/210267964-ae367262-98aa-49bb-b2a0-3fc956de1181.png" width=400 />
    
    * [Home Feed (Registered User)](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/HomeFeed.js) (Related Code: [HomeHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/HomeHeader.js))

    <img src = "https://user-images.githubusercontent.com/73420291/206711167-78e90d69-79e7-4b86-b61a-97da6f58b437.png" width=400 />
    <img src = "https://user-images.githubusercontent.com/73420291/206706135-abe741c1-8e66-45d8-ab97-46e732ec0101.png" width=400 />
    
    * [NSFW Button Click](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/post/PostPreview.js)

    <img src = "https://user-images.githubusercontent.com/73420291/206706266-ac023c98-78a9-45d0-8d7e-61a25b574b4a.png" width=400 />
    
    * [Post Details (with Comments)](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/post/PostDetails.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/206707364-9add5ab9-662a-4a61-8bb8-90879cef9d4c.png" width=400 />
    
    * [Text Annotations in a Post](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/post/PostDetails.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/210268368-41734781-6d37-411f-b4be-6f8bb9fc9a6e.png" width=400 />

    * [Edit Post](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/post/PostDetails.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/210268278-b99edc60-95c2-43a4-a148-21c17fd3f410.png" width=400 />
    <img src = "https://user-images.githubusercontent.com/73420291/210268276-f66111bc-e9b7-4dd8-9c7f-200f5f92b80a.png" width=400 />
    <img src = "https://user-images.githubusercontent.com/73420291/210268274-2d76b67f-5e03-4aa2-92c1-00c0a4b4bf08.png" width=400 />
  
    * [Search Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/search/SearchScreen.js) (Related code: [SearchScreenHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/search/SearchScreenHeader.js), [SearchListHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/search/SearchListHeader.js))

    <img src = "https://user-images.githubusercontent.com/73420291/206707412-9fc7c3b6-6f2e-4d78-beca-b55697a59e19.png" width=400 />

    * [Search Filters](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/search/FilterModal.js) (Related code: [FilterModal.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/search/FilterModal.js))
    
    <img src = "https://user-images.githubusercontent.com/73420291/206707483-079db9e9-dc5f-40d8-9b43-7f54f628dd0b.png" width=400 />

    * [Search Results](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/search/SearchScreen.js)(first two images: only label search, third image: only keyword search, fourth image: both keyword and label search)
    
    1. Only label search
    
    <img src = "https://user-images.githubusercontent.com/73420291/206707542-dca21402-8c5d-4f52-8830-cbbbe1f48c28.png" width=400 />
    
    <img src = "https://user-images.githubusercontent.com/73420291/206707813-9c0f05fa-71d8-45e5-bd73-494816b9239f.png" width=400 />
    
    2. Only keyword search
    
    <img src = "https://user-images.githubusercontent.com/73420291/206707831-86244e15-2e07-4d07-b3ce-fbc5f7a04d42.png" width=400 />
    
    3. Both keyword and label search
    
    <img src = "https://user-images.githubusercontent.com/73420291/206707843-b42c9342-40fa-4a78-9a10-327b7d1cdc83.png" width=400 />

    * [ChatBot Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/Chatbot.js)
    <img src = "https://user-images.githubusercontent.com/73420291/210268173-f330f550-7a47-4296-aab5-65d47205aca7.png" width=400 />

    * [Create New Post Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/post/CreatePost.js)
    <img src = "https://user-images.githubusercontent.com/73420291/206708389-fa2886b7-fdb4-4536-8197-ffb8551de3b7.png" width=400 />

    * [Drawer](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/home/HomeScreen.js)
    <img src = "https://user-images.githubusercontent.com/73420291/210267832-1114a66f-6d46-40ae-bc3c-cca3623ff912.png" width=400 />

    * [Profile Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/ProfileScreen.js) (Related: [ProfileScreenHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/ProfileScreenHeader.js))
    <img src = "https://user-images.githubusercontent.com/73420291/210269385-00f87865-05c3-48ea-8ceb-5fe8ffd83638.png" width=400 />

    * [Profile Edit Page](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/EditProfileScreen.js) (Related: [ProfileScreenHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/ProfileScreenHeader.js))
    
    <img src = "https://user-images.githubusercontent.com/73420291/210268546-1dc6e88a-c7f2-4cc3-97a4-109dc0317540.png" width=400 />
    <img src = "https://user-images.githubusercontent.com/73420291/210268544-855d36f1-d811-4a0b-ace2-c5ec2ee5479c.png" width=400 />
    
    * [Delete Account Confirmation](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/EditProfileScreen.js)
    
    <img src = "https://user-images.githubusercontent.com/73420291/210268543-1d6ec095-0c2d-44d4-ab74-a4785e1b06b0.png" width=400 />
    
    * [Profile Page After Adding a Field (Phone number in this case)](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/ProfileScreen.js) (Related: [ProfileScreenHeader.js](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Mobile/pages/profile/ProfileScreenHeader.js))
    <img src = "https://user-images.githubusercontent.com/73420291/210269390-eefb6692-f6c3-4356-a006-37331d133685.png" width=400 />


### Annotations

In the current status of our project, annotations are supported in compliance with the W3C standard. The created annotations are kept in a seperate database, and they are kept in the specified jsonld format with the specified fields.

The app allows creation of text annotations on both mobile and web application. On both applications, only posts and comments can be text annotated. The users are able to create and delete their annotations as well as see the annotations created by other users.

In addition to the text annotations, the web application also supports image annotations where users can annotate the images attached to the the posts. Just like text annotations, the users can create and delete their image annotations and see the image annotations of other users.

On top of that for both image and text annotations users can add tags.

### Standards


In our project, we have utilized annotations. The annotations we are using are in compliance with the W3C annotation standards. The annotation object are kept in jsonld format with the specified fields such as target, context etc. In addition to the standards, we also keep the annotations in a seperate database to better isolate the annotations from the contents of the application.

### Scenarios



# Project Artifacts

## Manuals

### User Manual

Welcome to Medishare!


This manual will provide you with all the information you need to safely and effectively use our platform to share your medical experiences with others. Please read it carefully and keep it in a safe place for future reference.

You do not necesseraily have to create an account initially. You can visit the website as guest user. An account creation is required for further functionalities such as creating a post, making a comment, voting etc.

## Creating an Account

1. Go to www.medishare.example.com and click "Sign Up" to create a new account.

2. Follow the prompts to create your account, including entering a unique username, a password, a unique email address, your gender, and your birth date.

## Adding Information to Your Account

1. Once your account is created, you can add a phone number to your account by going to your profile and clicking "Edit Profile."

2. To add your first name, go to your profile and click "Edit Profile." Enter your first name in the appropriate field and click "Save Changes."

3. To add your last name, go to your profile and click "Edit Profile." Enter your last name in the appropriate field and click "Save Changes."

4. To add your profession, go to your profile and click "Edit Profile." Enter your profession in the appropriate field and click "Save Changes."

5. To add your location, go to your profile and click "Edit Profile." Enter your location in the appropriate field and click "Save Changes."

## Editing the Information in Your Account

1. To change the email address in your account, go to your profile and click "Edit Profile." Enter your new email address in the appropriate field and click "Save Changes."

2. To change the phone number in your account, go to your profile and click "Edit Profile." Enter your new phone number in the appropriate field and click "Save Changes."

2. To change the profile picture in your account, go to your profile and click "Edit Profile." Click "Change Picture" and select a new image from your computer. Click "Save Changes" to update your profile picture.

3. To change the first name in your account, go to your profile and click "Edit Profile." Enter your new first name in the appropriate field and click "Save Changes."

4. To change the last name in your account, go to your profile and click "Edit Profile." Enter your new last name in the appropriate field and click "Save Changes."

5. To change the profession in your account, go to your profile and click "Edit Profile." Enter your new profession in the appropriate field and click "Save Changes."

6. To change the location in your account, go to your profile and click "Edit Profile." Enter your new location in the appropriate field and click "Save Changes."

7. To change the password in your account, go to your profile and click "Edit Profile." Enter your current password in the "Current Password" field and your new password in the "New Password" and "Confirm Password" fields. Click "Save Changes" to update your password.

## Removing Information from Your Account

1. To remove the email address from your account, go to your profile and click "Edit Profile." Delete the email address from the appropriate field and click "Save Changes." 

Note: You must have a phone number in your account in order to remove the email address.

2. To remove the phone number from your account, go to your profile and click "Edit Profile." Delete the phone number from the appropriate field and click "Save Changes." 

Note: You must have an email address in your account in order to remove the phone number.

3. To remove the profile picture from your account, go to your profile and click "Edit Profile." Click "Change Picture" and select the default image. Click "Save Changes" to update your profile picture.

4. To remove the first name from your account, go to your profile and click "Edit Profile." Delete the first name from the appropriate field and click "Save Changes."

5. To remove the last name from your account, go to your profile and click "Edit Profile." Delete the last name from the appropriate field and click "Save Changes."

6. To remove the profession from your account, go to your profile and click "Edit Profile." Delete the profession from the appropriate field and click "Save Changes."

7. To remove the location from your account, go to your profile and click "Edit Profile." Delete the location from the appropriate field and click "Save Changes."

##Deleting Your Account

1. To delete your account, go to your profile and click "Edit Profile." Click "Delete Account" and confirm your request.

2. Admins can delete any account by going to the user's profile and clicking "Delete Account." They will be prompted to confirm the request.

## Logging In/Logging Out

1. To log in to your Medishare account, go to www.medishare.example.com and enter your password along with your username, phone number, or email in the appropriate fields. Click "Log In."

2. To log out of your account, click on your username in the top right corner of the dashboard and select "Log Out."

## Doctor Verification

1. To update your account as a doctor account, go to your profile and click "Edit Profile."

2. Click "Verify as a Doctor" and follow the prompts to provide proof of your medical credentials.

3. Your request for doctor verification will be reviewed by the Medishare team. If approved, your account will be updated as a doctor account.

## Using Medishare

1. To share your medical experience, click "New Post" on the dashboard.

2. Enter a title and description of your experience, and select the appropriate category from the menu.

3. You can also add photos to your post by clicking "Add Media."

4. When you are finished, click "Post" to share your post with the Medishare community.

## Interacting with Other Users

1. You can filter the experiences by category, location, or other criteria using the search bar.

2. To interact with a user's post, you can click the "Upvote" or "Downvote" buttons or leave a comment.

## Annotating Posts and Images

1. To annotate a post or image, click on the post or image and select the "Annotate" button.

2. A new window will open with the post or image.

3. Click on the post or image to add the annotation at the desired location.

4. Use the toolbar to adjust the size and other properties of the annotation as needed.

5. To add multiple annotations to the same post or image, repeat steps 2-4.

6. To delete an annotation, hover over the annotation and click the "Delete" button that appears.

7. When you are finished annotating, click the "Save" button to save your changes.

8. The annotated post or image will now be visible to other users.

We hope you enjoy using Medishare! If you have any questions or need assistance, please don't hesitate to contact us.

### System Manual

#### Android Application

MediShare's Android application is built with the open source UI framework [React Native](https://reactnative.dev) by Meta Platforms, Inc.

##### Setting Up the Development Environment

The steps below are taken from React Native's  ["Setting Up the Development Environment"](https://reactnative.dev/docs/environment-setup) page.

This document will help you install and build MediShare's Android app. The instructions are a bit different depending on your development operating system:

##### Installing Dependencies

<details>
<summary><strong>Windows</strong></summary>

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

1. Node, JDK

    We recommend installing Node via [Chocolatey](https://chocolatey.org/), a popular package manager for Windows.

    It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via [nvm-windows](https://github.com/coreybutler/nvm-windows), a Node version manager for Windows.

    React Native also requires [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/11/), which can be installed using Chocolatey as well.

    Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

    ``` bash
    choco install -y nodejs-lts openjdk11
    ```
    If you have already installed Node on your system, make sure it is Node 14 or newer. If you already have a JDK on your system, we recommend JDK11. You may encounter problems using higher JDK versions.

    *Note: You can find additional installation options on [Node's Downloads page](https://nodejs.org/en/download/).*

    *Note: If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project so it can recognize the JDK. You can do that by going to `{project root folder}\android\gradle\wrapper\gradle-wrapper.properties` and changing the `distributionUrl` value to upgrade the Gradle version. You can check out [here the latest releases of Gradle](https://gradle.org/releases/).*

2. Android development environment

    Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

    1. Install Android Studio

        [Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

        - Android SDK
        - Android SDK Platform
        - Android Virtual Device
        - If you are not already using Hyper-V: Performance (Intel ® HAXM) ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

        Then, click "Next" to install all of these components.

        *Note: If the checkboxes are grayed out, you will have a chance to install these components later on.*

        Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 12 (S)** SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

        To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

        *Note: The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.*

        Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the **Android 12 (S)** entry, then make sure the following items are checked:

        - **Android SDK Platform 31**
        - **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image**

        Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the **Android SDK Build-Tools** entry, then make sure that **31.0.0** is selected.

        Finally, click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the `ANDROID_HOME` environment variable

        The React Native tools require some environment variables to be set up in order to build apps with native code.

        1. Open the **Windows Control Panel**.
        2. Click on **User Accounts**, then click **User Accounts** again
        3. Click on **Change my environment variables**
        4. Click on **New...** to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK.

        The SDK is installed, by default, at the following location:

        ```
        %LOCALAPPDATA%\Android\Sdk
        ```
        You can find the actual location of the SDK in the Android Studio "Settings" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

        Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

        1. Open powershell
        2. Copy and paste `Get-ChildItem -Path Env:\` into powershell
        3. Verify `ANDROID_HOME` has been added
    4. Add platform-tools to Path

        1. Open the **Windows Control Panel**.
        2. Click on **User Accounts**, then click **User Accounts** again
        3. Click on **Change my environment variables**
        4. Select the **Path** variable.
        5. Click **Edit**.
        6. Click **New** and add the path to platform-tools to the list.

        The default location for this folder is:

        ```
        %LOCALAPPDATA%\Android\Sdk\platform-tools
        ```

3. React Native Command Line Interface

    React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.
</details>

<details>
<summary><strong>MacOS</strong></summary>

You will need Xcode, Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build MediShare for Android.

1. Xcode

    You can download Xcode directly from Apple's App Store. 

2. Node & Watchman

    We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

    ``` bash
    brew install node
    brew install watchman
    ```
    
    If you have already installed Node on your system, make sure it is Node 14 or newer.

    [Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

3. Java Development Kit

    We recommend installing the OpenJDK distribution called Azul **Zulu** using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

    ``` bash
    brew tap homebrew/cask-versions
    brew install --cask zulu11
    ```

    The Zulu OpenJDK distribution offers JDKs for **both Intel and M1 Macs**. This will make sure your builds are faster on M1 Macs compared to using an Intel-based JDK.

    If you have already installed JDK on your system, we recommend JDK 11. You may encounter problems using higher JDK versions.

4. Android development environment

    Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

    1. Install Android Studio

        [Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

        - Android SDK
        - Android SDK Platform
        - Android Virtual Device,

        Then, click "Next" to install all of these components.

        *Note: If the checkboxes are grayed out, you will have a chance to install these components later on.*

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 12 (S)** SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

        To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

        *Note: The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.*

        Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the **Android 12 (S)** entry, then make sure the following items are checked:

        - **Android SDK Platform 31**
        - **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image** or (for Apple M1 Silicon) **Google APIs ARM 64 v8a System Image**

        Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that **31.0.0** is selected.

        Finally, click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the `ANDROID_SDK_ROOT` environment variable

        The React Native tools require some environment variables to be set up in order to build apps with native code.

        Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

        ``` bash
        export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
        ```

        *Note: `.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.*

        Type source `$HOME/.bash_profile` for bash or source `$HOME/.zprofile` to load the config into your current shell. Verify that `ANDROID_SDK_ROOT` has been set by running `echo $ANDROID_SDK_ROOT` and the appropriate directories have been added to your path by running `echo $PATH`.

        *Note: Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.*

5. React Native Command Line Interface

    React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.
</details>

<details>
<summary><strong>Linux</strong></summary>

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

1. Node

    Follow the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/) to install Node 14 or newer.

2. Java Development Kit

    React Native currently recommends version 11 of the Java SE Development Kit (JDK). You may encounter problems using higher JDK versions. You may download and install [OpenJDK](http://openjdk.java.net/) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager.

3. Android development environment

    Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

    1. Install Android Studio

        [Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

        - **Android SDK**
        - **Android SDK Platform**
        - **Android Virtual Device**

        Then, click "Next" to install all of these components.

        *Note: If the checkboxes are grayed out, you will have a chance to install these components later on.*

        Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

    2. Install the Android SDK

        Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the **Android 12 (S)** SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

        To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

        Note: The SDK Manager can also be found within the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

        Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the **Android 12 (S)** entry, then make sure the following items are checked:

        - **Android SDK Platform 31**
        - **Intel x86 Atom_64 System Image** or **Google APIs Intel x86 Atom System Image**

        Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that **31.0.0** is selected.

        Finally, click "Apply" to download and install the Android SDK and related build tools.

    3. Configure the `ANDROID_SDK_ROOT` environment variable

        The React Native tools require some environment variables to be set up in order to build apps with native code.

        Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

        ``` bash
        export ANDROID_SDK_ROOT=$HOME/Library/Android/Sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
        ```

        *Note: `.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.*

        Type `source $HOME/.bash_profile` for `bash` or source `$HOME/.zprofile` to load the config into your current shell. Verify that ANDROID_SDK_ROOT has been set by running `echo $ANDROID_SDK_ROOT` and the appropriate directories have been added to your path by running `echo $PATH`.

        Note: Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

4. Watchman

    Follow the [Watchman installation guide](https://facebook.github.io/watchman/docs/install/#buildinstall) to compile and install Watchman from source.

    *[Watchman](https://facebook.github.io/watchman/docs/install/) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance and increased compatibility in certain edge cases (translation: you may be able to get by without installing this, but your mileage may vary; installing this now may save you from a headache later).*

5. React Native Command Line Interface

    React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.
</details>


## Preparing the Android device

You will need an Android device to run MediShare's Android app. This can be either a physical Android device, or you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

### Using a physical device

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](https://reactnative.dev/docs/running-on-device).

### Using a virtual device

If you use Android Studio to open `bounswe2022group6/Application/Mobile/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio.

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **S** API Level 31 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

## Running MediShare App

### Put the .env file inside this folder

MediShare cannot be built without the .env file, which should be inside `bounswe2022group6/Application/Mobile`. .env stores important environment variables.

### Install Required Node Packages

All the packages used in MediShare's mobile app are written in `package.json`. In order to install these packages, open a terminal at this folder and type:

``` bash
npm install
```

This command will install all the requirements one by one. This should work, but if you encounter an error message saying that the packages have conflicting dependencies, install the packages by running:

``` bash
npm install --force
```

### Start Metro

First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

To start Metro, run `npx react-native start` inside this folder (`bounswe2022group6/Application/Mobile`):

``` bash
npx react-native start
```

`react-native start` starts Metro Bundler.

*Note: If you use the Yarn package manager, you can use yarn instead of npx when running React Native commands inside an existing project.*

### Start MediShare App

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

```bash
npx react-native run-android
```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

*Note: If you encounter an error due to the .env file after changing the contents of .env, please go to the previous step ([Start Metro](https://github.com/bounswe/bounswe2022group6/tree/master/Application/Mobile#start-metro)) and type*

``` bash
npx react-native start --reset-cache
```

*instead.*

`npx react-native run-android` is one way to run your app - you can also run it directly from within Android Studio.

*Note: If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.*

## MediShare Backend System Manual

### Introduction
MediShare's backend application is built using Django, a high-level Python web framework, and uses a MySQL database for storing data. The application is containerized using Docker and can be easily run using Docker Compose.

### Setting Up the Development Environment
To run the MediShare backend application, you need to have Docker and Docker Compose installed on your computer. You can install Docker Desktop to get both tools.

### Running the Backend Application
To run the MediShare backend application in a containerized environment, follow these steps:

Add a .env file to the Backend folder. This file is necessary for the application to run and contains important environment variables.

Open a terminal and navigate to the Backend folder.

Run the following command:

docker-compose up
This will start the containers for the Django backend and MySQL database, and run the application.

### Development Notes
During development, the Django backend application will automatically refresh when a file that it is watching is changed. This allows for an easy development experience within the containerized environment. A non-containerized approach is not implemented.


## Software Requirements Specification
You can check our Requirements from the following links:
   * [Glossary](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#glossary-1)
   * [1 Functional Requirements](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#1-functional-requirements-1)
     * [1.1 User Requirements](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#11-user-requirements-1)
         * [1.1.1 Account Management](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#111-account-management)
         * [1.1.2 Interactions Between The Users and Forum](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#112-interactions-between-the-users-and-forum)
         * [1.1.3 Interactions Between The Users](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#113-interactions-between-the-users)
         * [1.1.4 Interactions Between The Users and the Chatbot](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#114-interactions-between-the-users-and-the-chatbot)
     *  [1.2 System Requirements](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#12-system-requirements-1)
         * [1.2.1 Reputation System](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#121-reputation-system)
         * [1.2.2 Forum](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#122-forum)
         * [1.2.3 Chatbot](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#123-chatbot)
         * [1.2.4 Home Feed](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#124-home-feed)
         * [1.2.5 Notifications](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#125-notifications)
   *  [2 Non-Functional Requirements](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#2-non-functional-requirements-1)
      * [2.1 Security](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#21-security-1)
      * [2.2 Response](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#22-response-1)
      * [2.3 Availability](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#23-availability-1)
      * [2.4 Reliability](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#24-reliability-1)
      * [2.5 Privacy](https://github.com/bounswe/bounswe2022group6/wiki/Requirements#25-privacy-1)

## Software Design Documents

### Use Case Diagram

For a better view you can visit [LucidChart](https://lucid.app/lucidchart/55201991-c352-4fbb-8966-5f95d507477f/edit?invitationId=inv_7d68d82a-ab05-4a43-98ac-5cb552303d5f).

![Use Case Diagram](https://user-images.githubusercontent.com/56560206/163480716-adca686d-c86b-4670-acbf-6a98a62dc302.png)

### Class Diagram

For a better view you can visit [LucidChart](https://lucid.app/lucidchart/55201991-c352-4fbb-8966-5f95d507477f/edit?invitationId=inv_7d68d82a-ab05-4a43-98ac-5cb552303d5f).

![Use Case Diagram](https://user-images.githubusercontent.com/56560206/163480716-adca686d-c86b-4670-acbf-6a98a62dc302.png)

### Sequence Diagrams

For a better view you can visit [Lucidchart](https://lucid.app/lucidchart/596a52e4-1174-46d5-b40f-d13ed1a0bd6f/edit?invitationId=inv_4c11462b-4f78-472b-b9b5-0167423bf454).

#### Creating a Post

![Sequence Diagram - Creating a Post](https://user-images.githubusercontent.com/56560206/163482765-7e6c7d6f-4c14-41dd-bb51-ed618e76d1fc.png)

#### Creating a Comment

![Sequence Diagram - Creating a Comment](https://user-images.githubusercontent.com/56560206/163483313-417d9935-031f-40b2-89b0-9e6cd8c854da.png)

#### Creating a Label

![Sequence Diagram - Creating a Label](https://user-images.githubusercontent.com/56560206/163482793-00da756d-f7e8-40f3-ba98-382fe5a81741.png)

#### Using Searchbar

![Sequence Diagram - Using Searchbar](https://user-images.githubusercontent.com/56560206/163540386-000ff668-553b-4043-944a-f4439c93597b.png)

#### Reporting a Post/Comment

![Sequence Diagram - Reporting a Post_Comment](https://user-images.githubusercontent.com/56560206/163540349-5189ac6f-8ed2-45ed-a4a1-4986a9853983.png)

#### Using Chatbot

![Sequence Diagram - Using Chatbot](https://user-images.githubusercontent.com/56560206/163483567-975f1633-d8c8-4c57-bfe3-936fa0919090.png)

#### Editing an Account

![Sequence Diagram - Editing an Account](https://user-images.githubusercontent.com/56560206/163483506-4cb6f5f7-ce60-47c6-8ccf-1ab6c82cd6ca.png)

#### Editing a Label's Name

![Sequence Diagram - Editing a Label's Name](https://user-images.githubusercontent.com/56560206/163483642-a1392735-292e-4223-b9a7-981c84dab56c.png)

#### Notifying the Doctor of a Post

![Sequence Diagram - Notifying the Doctor of a Post](https://user-images.githubusercontent.com/56560206/163540304-716da3ab-42a8-4781-9799-2ed10648d518.png)

#### Voting a Post/Comment

![Sequence Diagram - Voting a Post_Comment](https://user-images.githubusercontent.com/56560206/163483253-b241fa0a-aa01-46c2-9309-30f39dff6110.png)

#### Editing a Post

![Sequence Diagram - Editing a Post](https://user-images.githubusercontent.com/56560206/163482917-b590c8b9-b1f4-409b-b392-32e4e5adcb5a.png)


## User Scenarios and Mockups

### Sharing a Post

#### Melisa Dönmez

<img src="https://user-images.githubusercontent.com/74210334/159339384-83104a53-6f63-44cc-b982-a8f6a1de5192.png"  width="250" height="250" />

##### Persona

* Age: 32 
* Job: Accountant
* Interest: sketching , solving sudoku, dancing 

#### Story 

* She hates spending a lot of time in traffic. That’s why, she bought a new model motorcycle, and she prefers using it over her old car. While driving to work, she had an unlucky traffic accident, and she broke her nose which caused permanent structural damage. She was feeling insecure about her look and looked for a reliable and affordable solution, which caused her to choose plastic surgery. 

#### Goals

* She felt like sharing her overall experience for informing other people who are contemplating having a similar surgery.

#### Preconditions

* Melisa is a registered user.
* She uses this website time to time and while searching for her own condition, she was not able to come across a similar situation.	
* She logged in and the website is open in her browser.

####  Actions

1.	She is on the Home page.
2.	She clicks the “New Post” button. Post creation page opens.
3.	She enters the title, fills the body part, and adds an image of her before and after plastic surgery.
4.	She selects the related labels to make post be easily findable. Then, she clicks the “Post” button.
5.	The post appears in Home page. She logs out.


#### Acceptance Criteria

* 1.1.1.6.3 Registered users shall be able to stay logged in.
* 1.1.2.2.1.1 Registered users shall provide a title when creating a post.
* 1.1.2.2.1.2 Registered users shall provide a description when creating a post.
* 1.1.2.2.1.3 Registered users shall provide a post type label when creating a post.
* 1.1.2.2.1.4 Registered users shall be able to add any number of labels to their posts.
* 1.1.2.2.1.5 Registered users shall be able to add media to their posts.
* 1.2.2.1.1 Labels shall have a unique name.
* 1.2.2.1.2 Labels shall have a label type.
* 1.2.2.3.1 Post preview shall act as a hyperlink to the post that it belongs to.
* 1.2.4.1 Every account shall have a home feed.
* 1.2.4.2 Home feed shall be a list of post previews.
* 2.3.1 The application shall be available as a native website via modern web browsers.

#### Mockups

1. She already logged in and the website is open in her browser.

![sayfa1](https://user-images.githubusercontent.com/74210334/161385131-235b7d62-2780-4829-b7be-0ac0b7c3c82d.png)

2. She clicks the "New Post" button and post creation page opens.

![sayfa2](https://user-images.githubusercontent.com/74210334/161385270-0fa880f5-5efa-452d-8992-2ae906cee6dd.png)

3. She enters the title, fills the body part, and adds an image of her before and after plastic surgery.

![sayfa3](https://user-images.githubusercontent.com/74210334/161385168-f2ddd1a6-8d2e-4514-8dcf-e269db0c3ec3.png)

4. She selects the related labels to make post be easily findable. Then, she clicks the “Post” button.

![sayfa4](https://user-images.githubusercontent.com/74210334/161385192-899c0de2-a905-41bc-b810-3662b4dece76.png)

5. The post appears in Home page.

![sayfa5](https://user-images.githubusercontent.com/74210334/161385220-f03fb5af-e606-499b-aa2d-3234c94aea07.png)

### Using Chatbot

#### Gizem Öztürk

<img src="https://user-images.githubusercontent.com/45121414/159352530-be6bb299-951d-4518-94f0-9654946618e8.jpeg"  width="250" height="250" />

#### Persona

* Age: 19
* Job: Arts Student
* Interests: Gardening, Photography, Boxing
* Province: İzmir / Turkey

#### Story 

* She loves the nature and taking pictures. She has had saved enough for an abroad trip and recently been to Japan and took some awesome shots. While returning home she thought it would be great to plant some Sakura trees ,that she admired most, to her garden so she brought some seeds. After 10 weeks the seeds sprouted and she was very excited about it. But unfortunately she felt itchy on her hands. She wanted to find out if the reason was the seedlings and if she was allergic to sakura.

#### Goals

* She wants to get a quick response from the app therefore uses the Chatbot feature.
* She wants to find out if there were any prior shared experiences on the platform.

#### Preconditions

* Gizem is a registered user.
* She is logged in to the website.
* She is currently at the Home Page.
* She knows where the Chatbot is placed but she had never used it before.

#### Actions
1. She clicks on the "Chatbot".
1. She selects "Search for Experiences" on the prompt.
1. She selects "Keyword" on the prompt.
1. She types "sakura" as a keyword in Chatbot.
1. Chatbot redirects her to search page with "sakura" related posts.
1. She reads 2 experiences shared on the platform.
1. She decides to see a doctor for treatment and logs out.

#### Acceptance Criteria

* 1.1.1.6.1 Registered users shall be able to log in by providing their password with either the username, phone number, or the email of their account.
* 1.1.1.6.4 Registered users shall be able to log out from the application.
* 1.1.2.1.1 Users shall be able to search for any number searchables.
* 1.1.2.2.4 Viewing a Post (with all subrequirements).
* 1.1.2.3.4 Viewing a Comment (with all subrequirements).
* 1.1.4.1 Users shall be able to ask predetermined questions to the chatbot.
* 1.1.4.2 Users shall be able to choose a predetermined answer to the follow-up questions of the chatbot.
* 1.1.4.3 Users shall be able to acquire information from the chatbot depending on their answers to the questions asked by the chatbot.
* 1.2.2.3.1 Post preview shall act as a hyperlink to the post it belongs to.
* 1.2.3.1 Chatbot shall have a set of questions that are predetermined in the system that the users can select to ask the chatbot.
* 1.2.3.2 The predetermined questions that the chatbot presents should be about how to use the app.
* 1.2.3.3 The chatbot shall have a set of predetermined follow-up questions that the users can select to get more detailed information about the topic or to ask about another topic.
* 1.2.3.4 Chatbot questions are semantically linked to each other in order to clarify the topic which the user is looking for.
* 1.2.3.5 Chatbot shall give information on the related topic depending on the questions selected by the user.
* 1.2.3.6 The information presented by the chatbot should contain information about the location or the functionality of a certain feature of the app.
* 1.2.4 Home Feed (with all subrequirements).
* 2.3.1 The application shall be available as a native website via modern web browsers.
* 2.3.5 The application shall support the English characters.

#### Mockup

1. She clicks on the "Chatbot".

![1](https://user-images.githubusercontent.com/74202057/161434124-256641fa-1a19-47a6-857a-61931f23c78d.png)

2. She selects "Search for Experiences" on the prompt.

![2](https://user-images.githubusercontent.com/74202057/161434099-813bfe65-d2b1-4039-b026-49d0a8d235df.png)

3. She selects "Keyword" on the prompt.

![3](https://user-images.githubusercontent.com/74202057/161434126-e98448eb-6279-4727-a7ff-71a8bb74948d.png)

4. She types "sakura" as a keyword in Chatbot.

![5](https://user-images.githubusercontent.com/74202057/161434158-da4fb951-ea89-4005-bb32-0bfb5b8be46e.png)

5. Chatbot redirects her to search page with "sakura" related posts.

![6](https://user-images.githubusercontent.com/74202057/161434163-f3f68107-6752-4708-aca5-5e0eff250b28.png)

6. She reads 2 experiences shared on the platform.

![7](https://user-images.githubusercontent.com/74202057/161434193-9dca46d6-3b68-47d4-807d-52ecaa43db8c.png)

![8](https://user-images.githubusercontent.com/74202057/161434196-24b0e6e7-f474-4121-85a8-4699cbc39350.png)

7. She decides to see a doctor for treatment and logs out.

![9](https://user-images.githubusercontent.com/74202057/161434204-de705f77-121c-42a8-bfc5-27762ca54e69.png)

### Reviewing a Post on the Forum

#### John Sucuksever

<img src="https://user-images.githubusercontent.com/74202008/159582930-e59b4da3-e498-45ba-b33c-e389e4cb7662.png" width=20% height=20%>

#### Persona

* Age: 45
* Job: Obstetrician
* Interests: Biking, Hiking, Wrist watches
* Province: Wisconsin, USA

#### Story 

* John gets a notification of a post from a woman who gave birth to her first child 3 months ago. She wants to lose her extra pounds with a diet she found on the web, but she is concerned about how it would affect her breast-feeding. John wants to share his medical advice, also getting his friend Endocrinologist Ali’s opinion.

#### Goals

* He wants to help a concerned mother.
* He wants to become a high ranked doctor in the forum.


#### Preconditions

* John is a doctor-type user on the platform.
* John is logged in to his account on his phone.
* John’s mobile notifications are turned on.
* There is a post about which John got a notification.
* Ali is a doctor-type user with nickname: DrAliDiyarbakirli


####  Actions

1. John clicks on the notification
2. He comes across the relevant post
3. He clicks to the part where he can write his comment.
4. He writes his advice and mentions a colleague.
5. He clicks the “Reply” button.
6. 2 days later he gained the “10th upvote” batch after his comment getting 10 upvotes.

#### Acceptance Criteria

* 1.1.1.3.12 Registered users shall be able to turn on the notifications feature in order to receive notifications related to posts.
* 1.1.1.6.3 Registered users shall be able to stay logged in.
* 1.1.2.2.1.7 Registered users shall be able to mention other registered users in the description of their post.
* 1.1.2.2.5.1 Registered users shall be able to upvote posts.
* 1.1.2.2.5.2 Registered users shall be able to downvote posts.
* 1.1.2.2.5.3 Registered users shall be able to unvote posts.
* 1.1.2.3.1.1 Registered users shall be able to comment under a post.
* 1.2.1.2 Upvotes a user's posts and comments get shall increase their account's reputation.
* 1.2.5.2 When a notification of a post is clicked by the user, it should take the user to the post preview of the post.

#### Mockups

| 1. John receives a notification  | 2. He taps the notification and he sees the post | 3. He taps the "Create a Reply" button |
| :---: | :---: | :---: |
| ![notification](https://user-images.githubusercontent.com/74202008/159579751-cb6417f5-93bf-4adf-89e9-b98818f76e28.png) | ![frame1](https://user-images.githubusercontent.com/74202008/159580784-b36a2509-9712-412e-a3e4-86f1329c0cb9.png) | ![frame2](https://user-images.githubusercontent.com/74202008/159581490-c74d4f90-dc1c-4668-b214-81a990477aaf.png) |
|4. He writes his response | 5. He taps "Post" and returns to the original post | 6. He receives a notification about his response |
|![frame3](https://user-images.githubusercontent.com/74202008/159581805-59d811b3-42bb-4d90-be75-306693ce673a.png)|![frame4](https://user-images.githubusercontent.com/74202008/159582712-ab5ad55a-6215-4230-b51d-073ef1dc07cb.png)|![frame5](https://user-images.githubusercontent.com/74202008/159582635-3c2f12e9-4963-4047-86af-b6e477e1c138.png)|

### Registering to the Website

#### Fatma Elçim
![image](https://user-images.githubusercontent.com/71015118/199179007-6b41cbc2-c3e3-4d6b-852f-fb576e3c2fb0.png)

#### Persona

* Age: 29
* Job: Master Student
* Interest: Skiing, theatre

#### Story 

* She has been having an occasional eye twitch for over a week, and she is really annoyed by that. Yet, she has no time to go to see a doctor because she is very busy as a master's student. Plus, it is really hard to get an appointment with a doctor due to the high demand. So she wanted to get some insight into what is going on and trying the solve her problem without going to a doctor.

#### Goals

* Fatma aims to search for her issue on the website and read the experience of the people who have been through the same process as her. Thus, she wants to register on the site.

#### Preconditions

* Fatma has an e-mail address.
* Fatma is not a registered user.

####  Actions

1.	She is on the main page.
2.	She clicks the “Register” button. 
3.	She enters the necessary credentials such as e-mail, username, password, name, surname, and birthday.
4.	She understands she is registered after getting a success message on the screen.


#### Acceptance Criteria
- 1.1.1.1.1 Unregistered users shall be able to create an account by providing a unique username, a password, a unique email address, gender, and birth date.
- 1.1.1.2.1 Registered users shall be able to add a phone number to their account.
- 1.1.1.2.2 Registered users shall be able to add their first name to their account.
- 1.1.1.2.3 Registered users shall be able to add a last name to their account.


### Log in to the Website

#### Hakan Yıldırım
![image](https://user-images.githubusercontent.com/71015118/199205080-d3aa9a65-38fc-4ac1-a0a2-fd56c466cfba.png)

#### Persona

* Age: 33
* Job: Cashier
* Interest: Body Building, Cars

#### Story 

* He likes to surf the internet a lot. His mom complains about the pain in her knees and asks him to find a doctor. Before searching for traditional solutions, he wants to check the comments about the nearby hospitals.

#### Goals

* Hakan aims to search for his mother's issue on the website and read the experience of people who went to the nearby orthopedist. Thus, he wants to log in to one of his favorite websites: MediShare.

#### Preconditions

* Hakan is a registered user.
* Hakan wants to log in to the Medishare

####  Actions

1. He is on the main page.
2. He clicks the "Log in" button. 
3. He makes a typo while writing his password and tries again.
4. He enters the necessary credentials, such as username and password.
5. He is directed to the "Home" page.
6. After he is finished, he logs out.


#### Acceptance Criteria
- 1.1.1.6.1 Registered users shall be able to log in by providing their password with either the username, phone number, or email of their account.
- 1.1.1.6.2 Registered users shall not be able to log in after 5 failed attempts due to incorrect passwords.
- 1.1.1.6.3 Registered users shall be able to stay logged in.
- 1.1.1.6.4 Registered users shall be able to log out from the application.


## Project Plan

## Unit Tests

### Backend:

- Account Management
  - [Registration Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L5)
  - [Login Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L110)
  - [Logout Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L160)
  - [Profile Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L185)

- Content Management
  - [Search Post Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L237)
  - [Label Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L224)
  - [Post Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L24)
  - [Comment Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L90)
  - [Content Vote Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L166)

- Annotation Management
  - [Annotation Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L301)

- Location Management
  - [Location Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/locmgr/tests.py)

### Mobile:

- Whole App

    - renders correctly: [App-test.js, line 14](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/App-test.js#L14)

- Home Header

    - should render top bar on header: [HomeHeader-test.js, line 9](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L9)
    - should render menu button on header: [HomeHeader-test.js, line 13](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L13)
    - should render logo on header: [HomeHeader-test.js, line 17](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L17)
    - should render search button on header: [HomeHeader-test.js, line 21](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L21)
    - should render chatbot button on header: [HomeHeader-test.js, line 25](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L25)

- Login Screen

    - should render login button on page: [Login-test.js, line 11](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/Login-test.js#L11)
    - should render sign up button on page: [Login-test.js, line 15](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/Login-test.js#L15)

- Search Screen Header

    - should render back button on header: [SearchHeader-test.js, line 9](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SearchHeader-test.js#L9)
    - should render searchbar on header: [SearchHeader-test.js, line 13](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SearchHeader-test.js#L9)
    - should render filter button on header: [SearchHeader-test.js, line 17](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SearchHeader-test.js#L9)

# Individual Milestone Report

* [Artun Akdoğan](https://github.com/bounswe/bounswe2022group6/wiki/Artun-Akdo%C4%9Fan)
## **Member:** [Artun Akdoğan](https://github.com/bounswe/bounswe2022group6/wiki/Artun-Akdo%C4%9Fan), Group 6 - Backend.

### **Responsibilities:**

#### **Milestone 1**
We started this semester by reviewing last semester's already-prepared requirements. I suggested and changed parts of the account management requirements to make them more precise and correct. Also, I was able to plan the Backend subteam's communication plan and initialize the communication channel via Discord.

As a backend developer, I was responsible for initializing the application and implementing the basic API for the first milestone described in the requirements. I have taken an active role in containerizing both Backend and Frontend via Docker, finding the most suitable database for our project, and unifying them in a relevant, robust and secure manner via Docker Compose. I also took an active role in the Deployment of the pre-release on the AWS EC2 instance. Besides, I have created the profile view API and user registration API. Apart from those work, I was constantly dealing with bugs that are either caused by backend frameworks, or by Deployment.

Last but not least, I was able to fix some deployment bugs on the Amazon instance and deploy the milestone demo. Also, I updated the project plan according to my work.

#### **Milestone 2**
As a member of Backend subteam, I was mainly responsible for developing required features on the backend that both Frontend and Mobile subteams can use. I wrote required code and made related changes on Backend and Database environments for this task. I also fixed lots of code on Backend and Frontend. Besides, I was responsible for containerization and deployment of the application.

My main responsibility was developing appropriate Location manager and Content manager classes, and writing related code within it. For location manager, I have researched large amounts of existing API's, but I decided that it was best to keep world data in our database. So, I wrote relevant code and models to implement it. I wrote documentations and testcases for my work. I also implemented comment, post, and vote endpoints, for both GET and POST methods, on Content Manager app. I fixed related issues that raised afterwards, and wrote documentation for it.

For annotation feature and better management of location data for Location Manager, I had to migrate our database from MySQL to PostgreSQL, and I created 3 different databases to store general data, annotation data, and location-based large data. For this mission, I have researched huge amounts of materials, and fixed already implemented code. Unfortunately, I required to remove reset-db feaute that mainly used for development purposes, as it wasn't compatible with PostgreSQL. Fortunately, I was able to connect our Django Backend with the new database successfully.

#### **Milestone 3**
For the final milestone, I was mainly responsible for creating Backend endpoints and writing the relevant testcases with Postman documents. Those endpoints were critical as both Backend and Mobile subteams needed them to finalize their work. Also, I was responsible for relevant Docker containerization updates and improvements that must be done to decrease container footprint on the AWS instances as we were working with very low RAM.

I started my work by completing the missing tests from Milestone 2. After writing testcases and enhancing documents, I implemented necessary endpoints for other subteams to use. Also, I have written necessary codes to store images in the volume of the container in AWS system. Nonetheless, we decided to keep those images in another AWS instance to increase the security and lower the storage footprint. Therefore, we discarded those changes and cancelled the pull request that I have created. Besides, we were missing a production build for docker containers. Before this build, we were using development builds with their debug options enabled. This was a security breach, not to mention its extra overhead on the system.

Last but not least, I have contributed to Customer Milestone 2's report as I kept the notes of the customer's advices and wishes. Also,I have contributed to the group report by writing the documentation of Location Manager API.


## **Main contributions:**

#### **Milestone 1**
* Researching on technologies to use in Backend development.
* Deciding on the roadmap of Backend Development via meetings and requirements review.
* Creating Application workspace folders for Backend, Frontend, and Mobile subteams.
* Initializing Backend workspace via Django and with MySQL database.
* Deploying the application via docker compose on AWS EC2 instance.
* Containerizing both Backend and Frontend applications via Docker.
* Implementing the Account View function.
* Implementing the User Registration feature.
* Documenting API's via Postman.
* Fixing bugs that are related to Backend or Deployment.
* Attending all meetings and taking notes for them.

#### **Milestone 2**
* Deployment of Backend and Frontend on Amazon AWS
* Various bug fixes on backend and frontend
* Reviewing pull requests
* Implementing locmgr APIs for IP location retrieval and country/state/city list retrieval
* Restructuring locmgr API's location data script by updating SQL file
* Migrating the database from MySQL to PostgreSQL
* Implementing Post View API
* Implementing Comment View API
* Implementing Content Voting System
* Uploading the Group Meeting #5 Notes

#### **Milestone 3**
* Writing the missing tests for content manager
* Implementing Edit Post/Comment Endpoint
* Implementing Reputation Field for Users
* Implementing ViewProfile Endpoint
* Implementing Picture Store for Posts and Accounts (Its cancelled as we decided to keep data in another AWS instance)
* Implementing Delete Method for Comments and Posts
* Implementing Production Docker Code and Its Documentations
* Updating Running Manuals of Backend and Frontend
* Writing Milestone 2 Customer Feedback
* Writing Location Manager API for Final Group Report


#### **Code related significant issues:**

   1. Implementing "Account View" function - [#242](https://github.com/bounswe/bounswe2022group6/issues/242)
   2. Frontend Containerization - [#206](https://github.com/bounswe/bounswe2022group6/issues/206)
   3. Initializing Backend Framework - [#174](https://github.com/bounswe/bounswe2022group6/issues/174)
   4. AWS EC2 instance creation and deployment - [#208](https://github.com/bounswe/bounswe2022group6/issues/208)
   5. Implementing User Registration  - [#181](https://github.com/bounswe/bounswe2022group6/issues/181)
   6. Implementing locmgr APIs for IP location retrieval and country/state/city list retrieval - [#257](https://github.com/bounswe/bounswe2022group6/issues/257)
   7. Restructuring locmgr API's location data script by updating SQL file - [#272](https://github.com/bounswe/bounswe2022group6/issues/272)
   8. Migrating the database from MySQL to PostgreSQL - [#271](https://github.com/bounswe/bounswe2022group6/issues/261)
   9. Implementing Post View API - [#299](https://github.com/bounswe/bounswe2022group6/issues/299)
   10. Implementing Comment View API - [#301](https://github.com/bounswe/bounswe2022group6/issues/301)
   11. Implementing Content Voting System - [#302](https://github.com/bounswe/bounswe2022group6/issues/302)Wrote Content Manager's 
   12. Documentation and Tests - [#309](https://github.com/bounswe/bounswe2022group6/pull/309)
   13. Implemented Edit Post/Comment Endpoint - [#387](https://github.com/bounswe/bounswe2022group6/issues/387)
   14. Implemented Reputation Field for Users and ViewProfile Endpoint - [#399](https://github.com/bounswe/bounswe2022group6/issues/399)
   15. Implemented Picture Store for Posts and Accounts (Cancelled) - [#409](https://github.com/bounswe/bounswe2022group6/issues/409)
   16. Implemented Delete Method for Comments and Posts - [#424](https://github.com/bounswe/bounswe2022group6/issues/424)
   17. Implemented Production Docker Code and Its Documentations - [#427](https://github.com/bounswe/bounswe2022group6/issues/427)
   

#### **Management related significant issues:**

   1. Created a Communication Plan for Frontend, Backend and Mobile Subteams - [#166](https://github.com/bounswe/bounswe2022group6/issues/166)
   2. Reviewed the Requirement Sections 1.1.1.1 to 1.1.1.6 - [#167](https://github.com/bounswe/bounswe2022group6/issues/167)
   3. Uploaded the Backend Meeting #1 Notes - [#169](https://github.com/bounswe/bounswe2022group6/issues/169)
   4. Uploaded the Group Meeting #5 Notes - [#263](https://github.com/bounswe/bounswe2022group6/issues/263)
   5. Updated Running Manuals of Backend and Frontend - [#371](https://github.com/bounswe/bounswe2022group6/issues/371)
   6. Wrote Milestone 2 Customer Feedback - [#386](https://github.com/bounswe/bounswe2022group6/issues/386)
   7. Wrote API Endpoints (Location Manager Part) for Final Group Report - [#461](https://github.com/bounswe/bounswe2022group6/issues/461)

### **Pull requests:**

Pull requests opened by me:
* [PR: #180](https://github.com/bounswe/bounswe2022group6/pull/180): Refactor folder structure, update dockerfiles
* [PR: #189](https://github.com/bounswe/bounswe2022group6/pull/189): Backend/fix/database port enclose
* [PR: #207](https://github.com/bounswe/bounswe2022group6/pull/207): Add dockerfile and docker-compose.yml for containerization
* [PR: #209](https://github.com/bounswe/bounswe2022group6/pull/209): Update frontend base image
* [PR: #228](https://github.com/bounswe/bounswe2022group6/pull/228): Add profile API to get user details
* [PR: #229](https://github.com/bounswe/bounswe2022group6/pull/229): Add docs for profile details Postman documents
* [PR: #260](https://github.com/bounswe/bounswe2022group6/pull/260): Backend/feature/locmgr
* [PR: #262](https://github.com/bounswe/bounswe2022group6/pull/262): Fix dockerization image dublication issue, add reset_db
* [PR: #274](https://github.com/bounswe/bounswe2022group6/pull/274): Backend/update/database migration
* [PR: #276](https://github.com/bounswe/bounswe2022group6/pull/276): Backend/feature/locmgr tests
* [PR: #283](https://github.com/bounswe/bounswe2022group6/pull/283): Fix react-icons bug
* [PR: #287](https://github.com/bounswe/bounswe2022group6/pull/287): Add contmgr app, refactor code
* [PR: #291](https://github.com/bounswe/bounswe2022group6/pull/291): Frontend/fix/reload bug
* [PR: #303](https://github.com/bounswe/bounswe2022group6/pull/303): Backend/feature/post view
* [PR: #304](https://github.com/bounswe/bounswe2022group6/pull/304): Backend/feature/comment view
* [PR: #305](https://github.com/bounswe/bounswe2022group6/pull/305): Backend/feature/content voting system
* [PR: #310](https://github.com/bounswe/bounswe2022group6/pull/310): Add documents for content manager
* [PR: #346](https://github.com/bounswe/bounswe2022group6/pull/346): Fix required items requested
* [PR: #389](https://github.com/bounswe/bounswe2022group6/pull/389): Edit Post Comment Endpoint Implementation Merge
* [PR: #390](https://github.com/bounswe/bounswe2022group6/pull/390): Contmgr Documentation and Tests
* [PR: #400](https://github.com/bounswe/bounswe2022group6/pull/400): Implementing Reputation Field for Users and ViewProfile Endpoint
* [PR: #410](https://github.com/bounswe/bounswe2022group6/pull/410): Implementation of Account and Post Image Upload/Delete (Cancelled)
* [PR: #425](https://github.com/bounswe/bounswe2022group6/pull/425): Backend/feature/post comment delete
* [PR: #428](https://github.com/bounswe/bounswe2022group6/pull/428): Implementation Production Docker Code and Its Documentations

Pull requests reviewed by me: 
* [PR: #191](https://github.com/bounswe/bounswe2022group6/pull/191): Signup Feature Completion
* [PR: #215](https://github.com/bounswe/bounswe2022group6/pull/215): Solving the encountered CORS error
* [PR: #217](https://github.com/bounswe/bounswe2022group6/pull/217): Login Feature Completion
* [PR: #223](https://github.com/bounswe/bounswe2022group6/pull/223): Logout Feature Completion
* [PR: #269](https://github.com/bounswe/bounswe2022group6/pull/269): RegisteredUser Model Updated and Account Model Created
* [PR: #273](https://github.com/bounswe/bounswe2022group6/pull/273): Profile View/Edit Functionalities Implemented
* [PR: #288](https://github.com/bounswe/bounswe2022group6/pull/288): Content Models Added
* [PR: #297](https://github.com/bounswe/bounswe2022group6/pull/297): Label Structure Implemented
* [PR: #306](https://github.com/bounswe/bounswe2022group6/pull/306): Search Feature Implemented
* [PR: #332](https://github.com/bounswe/bounswe2022group6/pull/332): Added Label Addition to Post Creation View
* [PR: #335](https://github.com/bounswe/bounswe2022group6/pull/335): Post Model Class as_dict() Method Updated
* [PR: #336](https://github.com/bounswe/bounswe2022group6/pull/336): Get All Posts Endpoint Added
* [PR: #398](https://github.com/bounswe/bounswe2022group6/pull/398): Annotation Support for Backend Implemented
* [PR: #402](https://github.com/bounswe/bounswe2022group6/pull/402): Enhanced Response Data of Profile, Post and Comment Retrieval
* [PR: #404](https://github.com/bounswe/bounswe2022group6/pull/404): Annotation Retrieval Moved
* [PR: #470](https://github.com/bounswe/bounswe2022group6/pull/470): API Endpoints are updated

### **Unit Tests:**

In latest release, I have following unit test classes:
1. [Post Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L24)
2. [Comment Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L90)
3. [Vote Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L166)
4. [Location Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/locmgr/tests.py#L5)

<b>Note:</b> Please note that my testcases for User Registration has been updated and therefore testcases that I wrote aren't available at the latest code. It is possible to find related information and old testcases in this issue: <br>
[Implementing User Registration - #181](https://github.com/bounswe/bounswe2022group6/issues/181)

### **Additional Information:**
Please view my [Home Wiki](https://github.com/bounswe/bounswe2022group6/wiki/Artun-Akdo%C4%9Fan) for details and for any missing information. All work related information is available at here since CmpE352.

---

* [İhsan Mert Atalay](https://github.com/bounswe/bounswe2022group6/wiki/%C4%B0hsan-Mert-Atalay)

## **Member:** İhsan Mert Atalay, Group 6 - Frontend

### **Responsibilities:**

I took part in the design side of the front end. While I was designing, I wrote the code in a way that could be object-based and dynamic on the frontend and prepared to connect it to the background. Generally ı worked on the homepage design.


### **Main contributions:**

- Designing and colorizing homepage 
- Making and placing logo for homepage
- Adding fav icon
- Label filter search input maked functional
- Voting system at home page designed dynamically

#### **Code related significant issues:**

- Created Issues:
   1. [#344 - label filter search input should be functional](https://github.com/bounswe/bounswe2022group6/issues/344)
   2. [#343 - colorize homopage,adding logo at home page and addin fav icon ](https://github.com/bounswe/bounswe2022group6/issues/343)
   3. [#267 - Label and search styles at home page should be designed dynamically](https://github.com/bounswe/bounswe2022group6/issues/267)
   4. [#266 - Voting system at home page should be designed dynamically](https://github.com/bounswe/bounswe2022group6/issues/266)
   5. [#202 - Designing HomePage for Frontend](https://github.com/bounswe/bounswe2022group6/issues/202)
   6. [#164 - Reviewing the System requirements 1.2.2 to 1.2.5](https://github.com/bounswe/bounswe2022group6/issues/164)
   7. [#161 - As a fresh eyes. provide feedback to improve repo](https://github.com/bounswe/bounswe2022group6/issues/161)
   8. [#159 - Creating a personal Wiki page for İhsan Mert Atalay](https://github.com/bounswe/bounswe2022group6/issues/159)

### **Pull requests:**

- Pull requests I created

    1. [#345 - label filter search input maked functional](https://github.com/bounswe/bounswe2022group6/pull/345)
    2. [#321 - home page colorized and designed, logo placed , fav icon added](https://github.com/bounswe/bounswe2022group6/pull/321)
    3. [#205 - Home Page Designed.](https://github.com/bounswe/bounswe2022group6/pull/205) Merged
    4. [#204 - Home Page Designed](https://github.com/bounswe/bounswe2022group6/pull/204) Canceled
    5. [#237 - Home Page Changes ](https://github.com/bounswe/bounswe2022group6/pull/237) Merged

* [Hakan Balık](https://github.com/bounswe/bounswe2022group6/wiki/Hakan-Bal%C4%B1k)

## **Member:** Hakan Balık, Group 6 - Frontend

### **Responsibilities:**

   1. **Milestone 1**  
I have been involved with most of the tasks either by owning or reviewing. I believe my most important contribution was to finalize the M2 deliverable last semester. For this semester, I have taken active role on onboarding the new customer. I also led the task where we decided on the project name and color palette. Apart from that I focused on delivering the frontend functionalities decided for Milestone 1 and taken role on every aspect except for Dockerization. Apart from those I took meeting notes, did a lot of research and reviewed the Requirements with my team. I will also be taking notes during the Demo presentation.

   2. **Milestone 2**  
    Similar to the previous Milestone, on the frontend side I either created or reviewed almost **all of the functionalies**. I was highly involved with establishing the communication with the customer and between the subteams throughout the project. With consulting the team members I decided on which features to be implemented for Milestone 2. Apart from those I can say that my biggest impact for this Milestone was to create an extraordinary structure from scratch for landing page which also included the register and login pages on a carousel structure, on top of that I created the Medishare logo. I also created the Milestone 2 presentation outline with Bedirhan and contributed by triggering some functionalities during the presentation. Except frontend, I also gave some small ideas, reviewed the code and tracked the progresses of both mobile and backend teams. You can view the rest of my responsibilities from below.
        
   3. **Milestone 3**  
    Likewise to previous milestones I either created or reviewed almost **all of the functionalies** on frontend side. Since there were little time between this milestone and the Milestone 2, we had to decide on the last features which should be implemented and which ones to be prioritized. I was highly active during the meetings and by discussing the remaining requirements we listed down the aforementioned features. I have implemented new features such as location information on posts, filtering operation using labels, searching keyword, viewing other user's profile pages, and more. Like I did in the previous two milestones I created the tag and release for this milestone. Lastly, I was in close contact with both backend and mobile teams throughout the semester.
    
### **Main contributions:**

As I have created or commented on issues, you can easily find my contribution via visitting the links provided in the next two sections.


#### **Code related significant issues:**

   1. **Milestone 1**  
    
         * Created Issues:

            1. [#184 - Creating the Initials of Frontend](https://github.com/bounswe/bounswe2022group6/issues/184)
            2. [#193 - Creating the Base Pages for Frontend](https://github.com/bounswe/bounswe2022group6/issues/193)
            3. [#224 - Implementing Log-in Functionality Backend Integration](https://github.com/bounswe/bounswe2022group6/issues/224)
            4. [#238 - Implementing Log-out Functionality Backend Integration](https://github.com/bounswe/bounswe2022group6/issues/238)
         * Contributed Issues:

            1. [#196 - Creating Register and Profile Pages for Frontend](https://github.com/bounswe/bounswe2022group6/issues/196)
            2. [#202 - Designing HomePage for Frontend](https://github.com/bounswe/bounswe2022group6/issues/202)
            3. [#198 - Implementing Sign-Up Functionality Backend Integration](https://github.com/bounswe/bounswe2022group6/issues/198)
            4. [#213 - Creating API Documentation for Login](https://github.com/bounswe/bounswe2022group6/issues/213)
            5. [#240 - Resolving Final Issues Regarding Deployment For Milestone I](https://github.com/bounswe/bounswe2022group6/issues/240)
            
   2. **Milestone 2**  
    
        * Created Issues:

           1. [#293 - Improving UI of Frontend](https://github.com/bounswe/bounswe2022group6/issues/293)
           2. [#315 - Integrating Create Post to Backend with Image](https://github.com/bounswe/bounswe2022group6/issues/315)
           3. [#322 - Backend Bug Fix for Post and Label](https://github.com/bounswe/bounswe2022group6/issues/322)
           4. [#329 - Implementing Get Label API](https://github.com/bounswe/bounswe2022group6/issues/329)
           5. [#342 - Delete User Backend Integration](https://github.com/bounswe/bounswe2022group6/issues/342)
           6. [#363 - Creating data for Demo](https://github.com/bounswe/bounswe2022group6/issues/363)

        * Contributed Issues:

           - [#277 - Creating S3 Server on AWS for Image Uploads](https://github.com/bounswe/bounswe2022group6/issues/277)
           - Rest of the code related contributed issues are related to the pull requests that I reviewed. 
           
   3. **Milestone 3**  
    
        * Created Issues:

           1. [#412 - Adding location to Create Post on Frontend](https://github.com/bounswe/bounswe2022group6/issues/412)
           2. [#417 - Adding location information to Posts on Frontend](https://github.com/bounswe/bounswe2022group6/issues/417)
           3. [#418 - Implementing Search feature for Frontend](https://github.com/bounswe/bounswe2022group6/issues/418)
           4. [#431 - Implementing search with label feature for Frontend](https://github.com/bounswe/bounswe2022group6/issues/431)
           5. [#440 - Implementing profile view for all users in Frontend](https://github.com/bounswe/bounswe2022group6/issues/440)
           6. [#443 - Removing unnecessary code blocks in Frontend](https://github.com/bounswe/bounswe2022group6/issues/443)

        * Contributed Issues:

           - The issues related to the pull requests I have reviewed can be counted as my contributed issues.
           
           
#### **Management related significant issues:**

   1. **Milestone 1**  
    
         * Created Issues:

            1. [#170 - Introducing new customer to the project](https://github.com/bounswe/bounswe2022group6/issues/170)
            2. [#182 - Updating Meeting Notes 3](https://github.com/bounswe/bounswe2022group6/issues/182)
            3. [#183 - Uploading Frontend Meeting Notes 1](https://github.com/bounswe/bounswe2022group6/issues/183)
            4. [#185 - Determining Project Name and Colors](https://github.com/bounswe/bounswe2022group6/issues/185)
            5. [#243 - Creating Release and Tag for Milestone 1](https://github.com/bounswe/bounswe2022group6/issues/243)

         * Contributed Issues:

            1. [#160 - Revising the Wiki](https://github.com/bounswe/bounswe2022group6/issues/160)
            2. [#163 - Requirements Review (1.1.1.7-1.1.2.2.4)](https://github.com/bounswe/bounswe2022group6/issues/163)
            3. [#166 - Creating a Communication Plan for Frontend, Backend and Mobile Subteams](https://github.com/bounswe/bounswe2022group6/issues/166)
            4. [#195 - Uploading Frontend Meeting #2 Notes](https://github.com/bounswe/bounswe2022group6/issues/195)
            5. [#227 - Preparing Customer Milestone 1 Deliverables](https://github.com/bounswe/bounswe2022group6/issues/227)
            6. [#231 - Reporting Individual Contribution](https://github.com/bounswe/bounswe2022group6/issues/231)
            7. [#232 - Creating Milestone I Group Review Report](https://github.com/bounswe/bounswe2022group6/issues/232)

   2. **Milestone 2**  
    
        - Created Issues:

           1. [#312 - Demo 2 Planning](https://github.com/bounswe/bounswe2022group6/issues/312)
           2. [#313 - Creating Milestone 2 Page](https://github.com/bounswe/bounswe2022group6/issues/313)
           3. [#314 - Uploading Meeting Notes 9](https://github.com/bounswe/bounswe2022group6/issues/314)
           4. [#317 - Creating Release and Tag for Milestone 2](https://github.com/bounswe/bounswe2022group6/issues/317)
           5. [#318 - Project Management](https://github.com/bounswe/bounswe2022group6/issues/318)
           6. [#320 - Milestone Report 2 Individual Reports](https://github.com/bounswe/bounswe2022group6/issues/320)
           7. [#349 - Changing the Status of Completed Issues](https://github.com/bounswe/bounswe2022group6/issues/349)
           8. [#368 - Uploading Images of Frontend for Milestone Report 2](https://github.com/bounswe/bounswe2022group6/issues/368)

        - Contributed Issues:

           - [#250 - Designing a Logo for Medishare](https://github.com/bounswe/bounswe2022group6/issues/250)
  
  3. **Milestone 3**  
    
        - Created Issues:

           1. [#434 - Correcting the Status of Completed Issues and PRs](https://github.com/bounswe/bounswe2022group6/issues/434)
           2. [#437 - Creating Release and Tag for Milestone 3](https://github.com/bounswe/bounswe2022group6/issues/437)
           3. [#458 - Uploading the Frontend UI / UX to Final Milestone](https://github.com/bounswe/bounswe2022group6/issues/458)
           4. [#459 - Uploading Software Design Documents for Final Milestone](https://github.com/bounswe/bounswe2022group6/issues/459)
           5. [#460 - Uploading User Scenarios and Mockups for Final Milestone](https://github.com/bounswe/bounswe2022group6/issues/460)

        - Contributed Issues:

           1. [#386 - CMPE 451 Milestone 2 Customer Feedback](https://github.com/bounswe/bounswe2022group6/issues/386)
           2. [#452 - Preparing the Group Milestone Report](https://github.com/bounswe/bounswe2022group6/issues/452)
           
### **Pull requests:**

   1. **Milestone 1**  
    
      * Created Pull Requests:

         1. [#192 - Initialized frontend project.](https://github.com/bounswe/bounswe2022group6/pull/192)
         2. [#194 - Frontend/feature/base pages](https://github.com/bounswe/bounswe2022group6/pull/194)
         3. [#226 - Frontend/feature/log in api integration](https://github.com/bounswe/bounswe2022group6/pull/226)
         4. [#239 - Frontend/feature/log out api integration](https://github.com/bounswe/bounswe2022group6/pull/239)

      * Reviewed Pull Requests:

         1. [#199 - Profile and register pages are added.](https://github.com/bounswe/bounswe2022group6/pull/199)
         2. [#205 - Home Page Designed](https://github.com/bounswe/bounswe2022group6/pull/205)
         3. [#216 - Registration endpoint integration](https://github.com/bounswe/bounswe2022group6/pull/216)
         4. [#237 - Home Page Changes](https://github.com/bounswe/bounswe2022group6/pull/237)

   2. **Milestone 2**  
    
      * Pull requests I created

         1. [#298 - Frontend UI design](https://github.com/bounswe/bounswe2022group6/pull/298)
         2. [#338 - Frontend/feature/create post api integration](https://github.com/bounswe/bounswe2022group6/pull/338)
         3. [#350 - Frontend/feature/delete user](https://github.com/bounswe/bounswe2022group6/pull/350)

      * Pull requests I reviewed

         1. [#268 - Frontend/homepage](https://github.com/bounswe/bounswe2022group6/pull/268)
         2. [#289 - Templates for post related operations are implemened](https://github.com/bounswe/bounswe2022group6/pull/289)
         3. [#311 - Doctor verification is added.](https://github.com/bounswe/bounswe2022group6/pull/311)
         4. [#321 - Frontend/homepage](https://github.com/bounswe/bounswe2022group6/pull/321)
         5. [#323 - Backend/feature/profile](https://github.com/bounswe/bounswe2022group6/pull/323)
         6. [#327 - Frontend/feature/profile page design](https://github.com/bounswe/bounswe2022group6/pull/327)
         7. [#345 - Frontend/homepage](https://github.com/bounswe/bounswe2022group6/pull/345)
         8. [#352 - Frontend/feature/post api integration](https://github.com/bounswe/bounswe2022group6/pull/352)
         9. [#358 - Mobile/hot fixes](https://github.com/bounswe/bounswe2022group6/pull/358) (Reviewed face to face)
         10. [#359 - Post Views Updated](https://github.com/bounswe/bounswe2022group6/pull/359) (Reviewed face to face)
         11. [#360 - post details comments added](https://github.com/bounswe/bounswe2022group6/pull/360) (Reviewed face to face)
         12. [#361 - hotfix for labels and comment count changes from backend](https://github.com/bounswe/bounswe2022group6/pull/361) (Reviewed face to face)
         13. [#365 - Executive Summary Section Added to Milestone 2 Report](https://github.com/bounswe/bounswe2022group6/pull/365)
         14. [#366 - Added Annotation Section to the Customer Presentation Milestone 2](https://github.com/bounswe/bounswe2022group6/pull/366)


   3. **Milestone 3**  
    
      * Created Pull Requests:

         1. [#416 - Frontend/feature/location](https://github.com/bounswe/bounswe2022group6/pull/416)
         2. [#420 - Frontend/feature/search](https://github.com/bounswe/bounswe2022group6/pull/420)
         3. [#423 - Frontend/feature/post location](https://github.com/bounswe/bounswe2022group6/pull/423)
         4. [#432 - Frontend/feature/search label](https://github.com/bounswe/bounswe2022group6/pull/432)
         5. [#441 - Frontend/feature/view other profiles](https://github.com/bounswe/bounswe2022group6/pull/441)
         6. [#444 - Frontend/enhancement/removing unnecessary codes](https://github.com/bounswe/bounswe2022group6/pull/444)
         7. [#465 - User Scenarios and Mockups](https://github.com/bounswe/bounswe2022group6/pull/465)
         8. [$467 - UML diagrams added](https://github.com/bounswe/bounswe2022group6/pull/467)
         9. [#468 - UI / UX of Frontend](https://github.com/bounswe/bounswe2022group6/pull/468)

      * Reviewed Pull Requests:

         1. [#403 - Frontend/feature/chatbot](https://github.com/bounswe/bounswe2022group6/pull/403)
         2. [#407 - Changes in frontend due to backend response enhancements](https://github.com/bounswe/bounswe2022group6/pull/407)
         3. [#411 - Frontend/feature/verified doctor username](https://github.com/bounswe/bounswe2022group6/pull/411)
         4. [#413 - Annotations On Frontend](https://github.com/bounswe/bounswe2022group6/pull/413)
         5. [#419 - Label Details Added to the Get Post Responses](https://github.com/bounswe/bounswe2022group6/pull/419)
         6. [#422 - Frontend/feature/post edit](https://github.com/bounswe/bounswe2022group6/pull/422)
         7. [#428 - Implementation Production Docker Code and Its Documentations](https://github.com/bounswe/bounswe2022group6/pull/428)
         8. [#433 - Delete operation for post and comment](https://github.com/bounswe/bounswe2022group6/pull/433)
         9. [#436 - Search Post Endpoint Now Returns Sorted Posts](https://github.com/bounswe/bounswe2022group6/pull/436)
         10. [#462 - Standards Part Added](https://github.com/bounswe/bounswe2022group6/pull/462)
         11. [#463 - Annotations Part Added](https://github.com/bounswe/bounswe2022group6/pull/463)
         12. [#466 - Added Yusuf Erdem Nacar's Individual Report and Effort Table](https://github.com/bounswe/bounswe2022group6/pull/466)
         
### Unit Tests

Similar to old milestone where I mentioned about spending 6 to 8 hours just to create simple unit tests but non of the libraries I tried (Jest, React-testing-library and react-dom/test-utils) responded well for our project, I have spent 5 more extra hours but still couldn't handle testing part. Again, that's why even though I spared a considerable amount of time, there is currently no unit tests that I created in the project.

### Additional Information

I believe I have contributed a lot to the projcet throughout the semester. One can check that the percentage of issues that are assigned to  me is approximately 25% of all the issues. Also, I have either created or reviewed approximately 30% of the pull requests which belong to different sub-teams. Being member of the frontend team I also helped backend team from time to time and was in close contact with the mobile team. On top of that I have helped the team on management side as well so it would be great to consider this aspect while reviewing individual efforts as well.

---

* [Ali Kaan Biber](https://github.com/bounswe/bounswe2022group6/wiki/Ali-Kaan-Biber)

     **Member:** I am working as a frontend developer in the frontend team of group 6.

    **Responsibilities:**

    We started this semester with analyzing our requirements and introducing our project to our new team member. I reviewed and made changes
    to some of the requirements if necessary. After we decided to use ReactJS for frontend development, I made some research and spent some time learning it since I had no prior experience with it.

    For the milestone 1 my most important task in the frontend team was to integrate the register endpoint to our backend which was the first endpoint integration. I got CORS errors when I send requests to backend and also fixed it. After considerable amount of time I finished the integration and provide an overlay for my team members to follow for endpoint calls to integrate later on in the project.

    Apart from these I took some meeting notes and participated the dockerization and deployment meeting.

    For the milestone 2 I worked mostly for the post related operations such as preparing an initial template for post page and post creation form, integrating the backend endpoints for post and comment creation and upvote/downvote. I also adjusted the code to allow for unregistered users to browse and see the posts but not do unauthorized operations such as voting and creating a post.

    For final milestone my biggest responsibility was to implement text and image annotations for the webpage. I have also implemented post and comment edit functionalities.

    Apart from the above main responsibilities, fixed some minor bugs from previous developments and made some enhancements.

    ## **Main contributions:**

   1. **Milestone 1:**
      - Reviewed the requirement subsections 1.1.2.4 to 1.2.1
      - Implemented Sign-Up Functionality Backend Integration
      - Fixed the encountered CORS error
      - Taken part in the deployment meeting

   1. **Milestone 2:**

      - Implemented post detail page with its design.
      - Integrated backend endpoints for getting a post details and all post details.
      - Integrated backend endpoints for for voting posts and comments.
      - Integrated backend endpoint for creating comment to a post.
      - Used integrated label endpoint to replace the mock labels on the homepage.
      - Implemented the functionality for guest users to browse the webpage.

   1. **Milestone 3:**
      - Implementing text and image annotations on frontend
      - Made minor changes for accordance with backend enhanced responses
      - Integrated backend endpoint for deleting a post
      - Integrated backend endpoint for deleting a comment


   ### **Code related significant issues:**

   1. **Milestone 1:**

      * Issues created by me:

         * [#198](https://github.com/bounswe/bounswe2022group6/issues/198): Implementing Sign-Up Functionality Backend Integration
         * [#214](https://github.com/bounswe/bounswe2022group6/issues/214): Fixing the CORS problem in Frontend
         
      * Issues assigned to me:

         * [#208](https://github.com/bounswe/bounswe2022group6/issues/208): AWS EC2 instance creation and deployment

   2. **Milestone 2:**

      * Issues created by me:

         * [#284](https://github.com/bounswe/bounswe2022group6/issues/284): Creating templates for post operations
         * [#316](https://github.com/bounswe/bounswe2022group6/issues/316): Integrating get posts and post vote endpoints.
         * [#337](https://github.com/bounswe/bounswe2022group6/issues/337): Implementing create comment API.


   1. **Milestone 3:**

      * Issues created by me:

         * [#391](https://github.com/bounswe/bounswe2022group6/issues/391): Implementing Annotations on Frontend
         * [#406](https://github.com/bounswe/bounswe2022group6/issues/406): Correcting Frontend According to Changes In Backend Responses
         * [#430](https://github.com/bounswe/bounswe2022group6/issues/430): Integrating Post/Comment Delete APIs

   ### **Management related significant issues:**

   1. **Milestone 1:**

      * Issues created by me:

         * [#168](https://github.com/bounswe/bounswe2022group6/issues/168): Reviewing the Requirement Sections 1.1.2.4 to 1.2.1
         * [#195](https://github.com/bounswe/bounswe2022group6/issues/195): Uploading Frontend Meeting #2 Notes

   2. **Milestone 2:**

      * Issues I contributed:

         * [#322](https://github.com/bounswe/bounswe2022group6/issues/322): The issue is not opened by me but I contributed to it by letting the backend team know what we need for frontend development

   3. **Milestone 3:**


   ### **Pull requests:**

   Pull requests opened by me:

   1. **Milestone 1:**
      * [#215](https://github.com/bounswe/bounswe2022group6/pull/215): Solving the encountered CORS error
      * [#216](https://github.com/bounswe/bounswe2022group6/pull/216): Registration endpoint integration

   2. **Milestone 2:**
      - [#289](https://github.com/bounswe/bounswe2022group6/pull/289): Creating templates for post operations.
      - [#352](https://github.com/bounswe/bounswe2022group6/pull/352): Integrating post and comment related endpoints except for post creation.
      - [#361](https://github.com/bounswe/bounswe2022group6/pull/361): Bug Fix: Labels and comment count of the posts are corrected.

   3. **Milestone 3:**
      - [#407](https://github.com/bounswe/bounswe2022group6/pull/407): Changes in frontend due to backend response enhancements 
      - [#413](https://github.com/bounswe/bounswe2022group6/pull/413): Annotations On Frontend
      - [#433](https://github.com/bounswe/bounswe2022group6/pull/433): Delete operation for post and comment


   Pull requests reviewed by me: 

   1. **Milestone 1:**
      * [#226](https://github.com/bounswe/bounswe2022group6/pull/226): Frontend/feature/log in api integration
      * [#207](https://github.com/bounswe/bounswe2022group6/pull/207): Add dockerfile and docker-compose.yml for containerization

   2. **Milestone 2:**
      * [#294](https://github.com/bounswe/bounswe2022group6/pull/294): Edit Profile Page
      * [#298](https://github.com/bounswe/bounswe2022group6/pull/298): Frontend UI design
      * [#338](https://github.com/bounswe/bounswe2022group6/pull/338): Create Post API Integration
      * [#350](https://github.com/bounswe/bounswe2022group6/pull/350): Delete User
      * [#359](https://github.com/bounswe/bounswe2022group6/pull/359): Post Views Updated

   3. **Milestone 3:**
      * [#403](https://github.com/bounswe/bounswe2022group6/pull/403): Chatbot
      * [#405](https://github.com/bounswe/bounswe2022group6/pull/405): Upvoted and Downvoted Users Details Added
      * [#416](https://github.com/bounswe/bounswe2022group6/pull/416): Location
      * [#420](https://github.com/bounswe/bounswe2022group6/pull/420): Search 
      * [#423](https://github.com/bounswe/bounswe2022group6/pull/423): Post Location
      * [#432](https://github.com/bounswe/bounswe2022group6/pull/432): Label Search

* [Yasir Dikbaş](https://github.com/bounswe/bounswe2022group6/wiki/Yasir-Dikba%C5%9F)

---

* [Aral Dörtoğul](https://github.com/bounswe/bounswe2022group6/wiki/Aral-Dörtoğul)

    **Member:**

    I am working as a android UI/UX developer in the Mobile team of Group 6.

    **Responsibilities:**

    Last semester, we have worked on preparing the requirements of our project MediShare according to the standards of the software lifecycle processes. Before diving into the implementation, my group and I have reviewed the requirements and updated them according to the new customer's demands. We have also reviewed the mockups and scenarios so that they are in line with the requirements. Then, we have divided the group into three teams: Mobile, Frontend, and Backend, and I assigned myself to the mobile team.

    For the first customer milestone, I was responsible for initializing the mobile application and implementing the most fundamental features with my team. The mobile team decided to use the popular mobile framework React Native to ease the software production. It was my first time with React Native, so it took a while for me to set up my working environment and get used to developing with this new framework. I have initialized the main navigation of the mobile application, the user profile page, and a page for editing the user profile. Moreover, I have supported my team in the deployment of the application.
    
    After the first milestone, we have tried to divide our total work evenly and I was assigned to implement the home feed and post searching mechanism of MediShare before Milestone 2. Moreover, I have added the logo of MediShare and a feature to theme our components to create a consistent look in our mobile app. To comply with the coding conventions, I have added .env (dotenv) support for the app, which stores the hardcoded API URL's and other secret keys in a private file. Before Milestone 2, I have connected the app to backend following the standards of RESTful API.

    For the final milestone, we have checked the requirements that were not satisfied yet and tried to complete them. I had initialized the profile and edit profile pages before the first milestone; however, their full functionalities were supposed to be fully implemented by the other team members before the second milestone. I took over the responsibility of these pages and tried to implement their functionalities, which also included delete account functionality. I redesigned both pages according to the UI theme of the application. Moreover, I created the post edit page and added guest login feature. I have also written some component tests (unit test) for some screens.

    Last but not least, I have kept the project plan updated with Berfin, which is important in terms of the overall project management.

    I have also presented and demonstrated the application in front of the customer in all the three milestone presentations with Bedirhan.

    **Main Contibutions**

    Milestone 1:

    - Deciding which programming language to use for mobile development
    - Mobile application initiliaziton
    - Creating base pages for mobile
    - Initializing profile page for mobile app
    - Designing navigation for mobile app
    - AWS EC2 instance creation and deployment
    - Presenting milestone 1 demonstration to the customer with Bedirhan.

    Milestone 2:
    - Designing a logo for the app with Hakan.
    - Implementing home feed for mobile that shows post previews.
    - Implementing post preview component.
    - Expanding the navigation structure of the app and connecting post details, chatbot, search, create new post pages to home feed.
    - Implementing themes for consistency in UI (for mobile)
    - Implementing post searching with keywords and/or filters (labels only)
    - Adding .env support for mobile
    - Connecting post search and home feed to backend
    - Updating project plan
    - Presenting milestone 2 demonstration to the customer (with Bedirhan).

    Milestone 3:

    - Implementing guest login for mobile
    - Improving a user's own profile page for mobile
    - Improving profile edit page for mobile.
    - Implementing delete account functionality for mobile.
    - Implementing doctor verification for mobile
    - Adding a markdown file to explain the setup steps of the mobile app.
    - Implementing post edit in mobile
    - Presenting the final demonstration to the customer with Bedirhan.



    **Code Related Significant Issues**

    Milestone 1

    - Issues created by me:

        - [#200](https://github.com/bounswe/bounswe2022group6/issues/200): Creating Base Pages for Mobile

        - [#210](https://github.com/bounswe/bounswe2022group6/issues/210): Designing Profile Page for Mobile App

        - [#218](https://github.com/bounswe/bounswe2022group6/issues/218): Designing Navigation for Mobile App
        
    - Issues assigned to me:

        - [#173](https://github.com/bounswe/bounswe2022group6/issues/173): Deciding which programming language to use for mobile development

        - [#176](https://github.com/bounswe/bounswe2022group6/issues/176): Mobile Application Initiliaziton

        - [#197](https://github.com/bounswe/bounswe2022group6/issues/197): Necessary Developments for the BackEnd API Integration

        - [#208](https://github.com/bounswe/bounswe2022group6/issues/208): AWS EC2 instance creation and deployment

    Milestone 2
    - [#250](https://github.com/bounswe/bounswe2022group6/issues/250): Designing a Logo for Medishare
    - [#259](https://github.com/bounswe/bounswe2022group6/issues/259): Designing/Implementing the Home Feed for Mobile
    - [#264](https://github.com/bounswe/bounswe2022group6/issues/264): Implementing Theming Functionality for Mobile
    - [#285](https://github.com/bounswe/bounswe2022group6/issues/285): Implementing Searching Functionality
    - [#326](https://github.com/bounswe/bounswe2022group6/issues/326): Initializing .env for Mobile
    - [#339](https://github.com/bounswe/bounswe2022group6/issues/339): Connecting Mobile's Post Search to Backend
    - [#340](https://github.com/bounswe/bounswe2022group6/issues/340): Connecting Mobile's Home Feed to Backend

    Milestone 3

    - [#377](https://github.com/bounswe/bounswe2022group6/issues/377): Implementing Guest Login for Mobile

    - [#378](https://github.com/bounswe/bounswe2022group6/issues/378): Improving a User's Own Profile Page for Mobile

    - [#379](https://github.com/bounswe/bounswe2022group6/issues/379): Implementing Delete Account Functionality

    - [#380](https://github.com/bounswe/bounswe2022group6/issues/380): Implementing Doctor Verification for Mobile

    - [#381](https://github.com/bounswe/bounswe2022group6/issues/381): Adding a Markdown File to Explain the Setup Steps of the Mobile App

    - [#415](https://github.com/bounswe/bounswe2022group6/issues/415): Adding Locations to User Profiles in Mobile

    - [#438](https://github.com/bounswe/bounswe2022group6/issues/438): Implementing Post Edit in Mobile


    **Management Related Significant Issues**

    Milestone 1

    * Issues created by me:

        * [#201](https://github.com/bounswe/bounswe2022group6/issues/201): Updating Project Plan

        * [#227](https://github.com/bounswe/bounswe2022group6/issues/227): Preparing Customer Milestone 1 Deliverables

    * Issues assigned to me:

        * [#168](https://github.com/bounswe/bounswe2022group6/issues/168): Reviewing the Requirement Sections 1.1.2.4 to 1.2.1

        * [#171](https://github.com/bounswe/bounswe2022group6/issues/171): Deciding a Communication Method for Mobile Development

    Milestone 2

    - [#367](https://github.com/bounswe/bounswe2022group6/issues/367): Project Plan should be updated

    Milestone 3

    - [#451](https://github.com/bounswe/bounswe2022group6/issues/451): Preparing Final Deliverables

    - [#452](https://github.com/bounswe/bounswe2022group6/issues/452): Preparing the Group Milestone Report

    - [#453](https://github.com/bounswe/bounswe2022group6/issues/453): Preparing the Project Artifacts

    - [#454](https://github.com/bounswe/bounswe2022group6/issues/454): Preparing Individual Milestone Reports
    

    **Pull Requests**

    *Pull requests opened by me:*

    Milestone 1

    * [#221](https://github.com/bounswe/bounswe2022group6/pull/221): Main Navigation Framework Established

    * [#234](https://github.com/bounswe/bounswe2022group6/pull/234): Profile Page Initialized

    Milestone 2

    - [#265](https://github.com/bounswe/bounswe2022group6/pull/265): Added Light & Dark Theme Objects

    - [#270](https://github.com/bounswe/bounswe2022group6/pull/270): Added Home Feed

    - [#328](https://github.com/bounswe/bounswe2022group6/pull/328): Searching Page Initialized, .env Support Added

    - [#341](https://github.com/bounswe/bounswe2022group6/pull/341): Post Search & Home Feed Backend Connection Established

    - [#362](https://github.com/bounswe/bounswe2022group6/pull/362): Vote Buttons Initialized

    Milestone 3
    
    - [#382](https://github.com/bounswe/bounswe2022group6/pull/382): Added ReadMe.md for the Mobile Folder
    - [#396](https://github.com/bounswe/bounswe2022group6/pull/396): Home Feed and Post Preview Enhancements
    - [#397](https://github.com/bounswe/bounswe2022group6/pull/397): Guest Login is Implemented for Mobile
    - [#414](https://github.com/bounswe/bounswe2022group6/pull/414): Profile & Edit Profile Pages Redesigned, Doctor Verification Implemented
    - [#426](https://github.com/bounswe/bounswe2022group6/pull/426): Delete Account Feature Implemented in Mobile
    - [#442](https://github.com/bounswe/bounswe2022group6/pull/442): Edit Post is Implemented
    - [#449](https://github.com/bounswe/bounswe2022group6/pull/449): Unit Tests Added in Mobile
    - [#450](https://github.com/bounswe/bounswe2022group6/pull/450): Hot Fix - Post Details do not have scrollview


    *Pull requests reviewed by me:* 

    Milestone 1

    * [#187](https://github.com/bounswe/bounswe2022group6/pull/187): Application Can Be Run on Emulator

    * [#203](https://github.com/bounswe/bounswe2022group6/pull/203): Login Screen Implemented

    * [#235](https://github.com/bounswe/bounswe2022group6/pull/235): Signup Page Implemented

    * [#236](https://github.com/bounswe/bounswe2022group6/pull/236): Conflicts Resolved

    Milestone 2

    - [#319](https://github.com/bounswe/bounswe2022group6/pull/319): file upload is done

    - [#355](https://github.com/bounswe/bounswe2022group6/pull/355): Mobile/chat bot

    - [#357](https://github.com/bounswe/bounswe2022group6/pull/357): Mobile/post details

    - [#358](https://github.com/bounswe/bounswe2022group6/pull/358): Mobile/hot fixes

    - [#360](https://github.com/bounswe/bounswe2022group6/pull/360): post details comments added
    
    Milestone 3

    - [#439](https://github.com/bounswe/bounswe2022group6/pull/439): text annotations implemented

    - [#446](https://github.com/bounswe/bounswe2022group6/pull/446): chatbot improved

    **Unit Tests**

    Since the core functionalities are handled by the backend team's RESTful API, the unit tests are generally carried out by the backend team.
    
    However, I have written some unit tests about the rendering of some components before Milestone 3.

    - Whole App
    
        - renders correctly: [App-test.js, line 14](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/App-test.js#L14)

    - Home Header

        - should render top bar on header: [HomeHeader-test.js, line 9](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L9)
        - should render menu button on header: [HomeHeader-test.js, line 13](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L13)
        - should render logo on header: [HomeHeader-test.js, line 17](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L17)
        - should render search button on header: [HomeHeader-test.js, line 21](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L21)
        - should render chatbot button on header: [HomeHeader-test.js, line 25](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/HomeHeader-test.js#L25)

    - Login Screen

        - should render login button on page: [Login-test.js, line 11](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/Login-test.js#L11)
        - should render sign up button on page: [Login-test.js, line 15](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/Login-test.js#L15)

    - Search Screen Header

        - should render back button on header: [SearchHeader-test.js, line 9](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SearchHeader-test.js#L9)
        - should render searchbar on header: [SearchHeader-test.js, line 13](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SearchHeader-test.js#L9)
        - should render filter button on header: [SearchHeader-test.js, line 17](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SearchHeader-test.js#L9)
    
    - Signup Screen

        - should render sign up button on page: [SignUp-test.js, line 10](https://github.com/bounswe/bounswe2022group6/blob/dc49ca742ec820566d59bea79f8f9d06db537f36/Application/Mobile/__tests__/SignUp-test.js#L10)

---

* [Alp Eren İnceoğlu](https://github.com/bounswe/bounswe2022group6/wiki/Alp-Eren-%C4%B0nceo%C4%9Flu)
## **Member:** Alp Eren İnceoğlu, Group 6 - Mobile

### **Responsibilities:**
I created the error page and most of the main page including the mock-up data. I took part in the research and additional features parts of the mobile. I have searched different approaches and contributed to the comment section, which is one of the main focuses of our app. From this point on my main responsibility was to research advanced features and figure out their feasabilities. Appart from that, since a hundred post database was required, I was responsible of creating almost all of this database as realistic as possible and putting as many different user instances as possible.

### **Main contributions:**
- Creating communication plan
- Creating error page
- Designing main page
- Creating mock-up data
- Contributing to the comment section
- Researching threaded comments
- Creating post preview with scaling images for posts
- Learning normal React in order to translate helpful parts from other React projects if necessary
- Researching and trying coding additional advanced features.
- Deciding and adding necessary labels
- Researching similar material and creating a realistic post, comment and user archive

#### **Significant issues:**

- Created Issues:
   1. [#373- Researching similar projects ](https://github.com/bounswe/bounswe2022group6/issues/373)
   2. [#374 - Implementing threaded comment  ](https://github.com/bounswe/bounswe2022group6/issues/374)
   3. [#375 - Create post preview](https://github.com/bounswe/bounswe2022group6/issues/375)
   4. [#447 - Creating 100 posts](https://github.com/bounswe/bounswe2022group6/issues/447)
   5. [#448 - Creating labels and doctors](https://github.com/bounswe/bounswe2022group6/issues/448)
### **Pull requests:**

Pull requests I created

- In the first commit I did I failed to create a pull request due to the changes being done on master. Afterwards, my experimental codes either failed or was merged with another group members work and pushed.
- One of my biggest contributions to the project which was enriching the database was either done using the back-hand site or the front-hand app therefore creating a pull request was imposible.

### **Unit Tests:**

- Wrote unit tests about threaded comments, which gave error which were one of the main reasons this pull request couldn't be made in time.

### **Additional Information:**
- While the number of issues and pull requests are quite low, these definitely are not accurate represantations on the amount of time I commited to this project. I have spent countless hours trying to implement features that were in retrospect quite impossible, which I couldn't have known without that many hours. Also, creating the database was done with much care and it can be seen how many users have their backstories and defining features, as well as showcasing helpful comments side-by-side unhelpful comments in order to further showcase a realistic use for this project and how the admin should aproach possible threats possibly in a scenario. However, since all these additions were done using different interfaces on surface it looks like the project didn't change at all, which is simply not correct.

---
## **Member:** [Yusuf Erdem Nacar](https://github.com/bounswe/bounswe2022group6/wiki/Yusuf-Erdem-Nacar), Group 6 - Backend.

As a member of the backend subteam, I was mainly responsible for developing the support for the functionalities and database model classes for the core parts of the project such as posts, comments, labels, accounts, search, and annotations.

In detail, I was tasked with laying the groundwork for the backend support for many of the functionalities of the app. This includes creating model classes for the contents, posts, comments and labels. In addition to preparing the mentioned model classes, I also implemented numerous endpoints for the core functionalities of the application, such as user management using token authentication, database support for the content in the application using django models, search functionality that makes keyword and label based searhes, and annotation functionality that allows users to annotate the contents of the application.

### **Responsibilities:**

1. **Milestone 1:**
   1. Reviewing the requirement subsections
      1. [1.1.1.1](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1111-creating-an-account)
      1. [1.1.1.2](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1112-adding-information-to-a-account)
      1. [1.1.1.3](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1113-editing-the-information-in-an-account)
      1. [1.1.1.4](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1114-removing-information-from-an-account)
      1. [1.1.1.5](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1115-deleting-an-account)
      1. [1.1.1.6](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1116-logging-inlogging-out)
   1. Creating API documents for the endpoints for the use of frontend and mobile teams
      1. registration
      1. login
      1. logout
   1. Creating and linking issues for the tracking of milestone I deliverables
   1. Taking and uploading notes for
      1. General meeting #2
      1. General meeting #4
      1. Backend meeting #3
   1. Code Related Responsibilities
      1. Implementing registration functionality
      1. Implementing login functionality
      1. Implementing logout functionality
      1. Deploying the app to the AWS instance - *shared responsibility*

1. **Milestone 2:**
   1. Implementing view and edit account functionalities
   1. Creating model classes for the content, post, comment and label classes
   1. Implementing an endpoint for fetching all posts
   1. Implementing an enpoint for fetching all labels
   1. Implementing an endpoint for searching posts
   1. Reviewing and testing a significant amount of code
   1. Fixing numerous bugs
   1. Creating API documentations for the endpoints I implemented

1. **Milestone 3:**
   1. Implementing annotations on backend
   1. Enhancing response data of post and comment retrieval

## **Main contributions:**

1. **Milestone 1:**
   1. Reviewing the requirement subsections
      1. [1.1.1.1](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1111-creating-an-account)
      1. [1.1.1.2](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1112-adding-information-to-a-account)
      1. [1.1.1.3](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1113-editing-the-information-in-an-account)
      1. [1.1.1.4](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1114-removing-information-from-an-account)
      1. [1.1.1.5](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1115-deleting-an-account)
      1. [1.1.1.6](https://github.com/bounswe/bounswe2022group6/wiki/D2:-Requirements#1116-logging-inlogging-out)
   1. Creating API documents for the endpoints for the use of frontend and mobile teams
      1. registration
      1. login
      1. logout
   1. Creating and linking issues for the tracking of milestone I deliverables
   1. Taking and uploading notes for
      1. General meeting #2
      1. General meeting #4
      1. Backend meeting #3
   1. Code Related Responsibilities
      1. Implementing registration functionality
      1. Implementing login functionality
      1. Implementing logout functionality
      1. Deploying the app to the AWS instance - *shared responsibility*

1. **Milestone 2:**

   1. Implementing view and edit account functionalities
   1. Creating model classes for the content, post, comment and label classes
   1. Implementing an endpoint for fetching all posts
   1. Implementing an enpoint for fetching all labels
   1. Implementing an endpoint for searching posts
   1. Reviewing and testing a significant amount of code
   1. Fixing numerous bugs
   1. Creating API documentations for the endpoints I implemented

1. **Milestone 3:**
   1. Implementing annotations on backend
   1. Enhancing response data of post and comment retrieval


### **Code related significant issues:**

1. **Milestone 1:**
   1. [#181](https://github.com/bounswe/bounswe2022group6/issues/181): Implementing registration functionality
   2. [#202](https://github.com/bounswe/bounswe2022group6/issues/202): Implementing login functionality
   3. [#208](https://github.com/bounswe/bounswe2022group6/issues/208): AWS EC2 instance creation and deployment
   4. [#220](https://github.com/bounswe/bounswe2022group6/issues/220): Implementing logout functionality
   5. [#240](https://github.com/bounswe/bounswe2022group6/issues/240): Resolving final issues regarding deployment for Milestone I

2. **Milestone 2:**

   1. [#253](https://github.com/bounswe/bounswe2022group6/issues/253): Implementing view and edit account functionalities
   2. [#256](https://github.com/bounswe/bounswe2022group6/issues/256): Updating the structure of RegisteredUser model class ro reflect the class diagram
   3. [#278](https://github.com/bounswe/bounswe2022group6/issues/278): Creating model class for the content class
   4. [#279](https://github.com/bounswe/bounswe2022group6/issues/279): Creating model class for the post class
   5. [#280](https://github.com/bounswe/bounswe2022group6/issues/280): Creating model class for the comment class
   6. [#295](https://github.com/bounswe/bounswe2022group6/issues/295): Implementing the label structure
   7. [#296](https://github.com/bounswe/bounswe2022group6/issues/296): Implementing the post searching functionality
   8. [#322](https://github.com/bounswe/bounswe2022group6/issues/322): Fixing a bug where post creation would not take labels as a parameter
   9. [#331](https://github.com/bounswe/bounswe2022group6/issues/331): Implementing get all posts functionality
   10. [#334](https://github.com/bounswe/bounswe2022group6/issues/334): Adding all fields of label model class to the response bodies of search posts and get all posts functionalities
   11. [#351](https://github.com/bounswe/bounswe2022group6/issues/351): Fixing a bug where the case sensitive image URLs were being kept as all lowercase in the database

1. **Milestone 3:**

   1. [#392](https://github.com/bounswe/bounswe2022group6/issues/392): Implementing annotations on backend
   2. [#394](https://github.com/bounswe/bounswe2022group6/issues/394): Enhancing Response Data of Post and Comment Retrieval
   3. [#453](https://github.com/bounswe/bounswe2022group6/issues/435): Sorting Results of Search Post Endpoint

### **Management related significant issues:**

1. **Milestone 1:**

   1. [#160](https://github.com/bounswe/bounswe2022group6/issues/160): Revising the wiki
   2. [#167](https://github.com/bounswe/bounswe2022group6/issues/167): Reviewing the Requirement Sections 1.1.1.1 to 1.1.1.6
   3. [#177](https://github.com/bounswe/bounswe2022group6/issues/177): Creating labels for different subteams
   4. [#232](https://github.com/bounswe/bounswe2022group6/issues/232): Creating milestone I group review report

2. **Milestone 2:**

   1. [#330](https://github.com/bounswe/bounswe2022group6/issues/330): Writing executive summary section for customer milestone 2 report
   2. [#364](https://github.com/bounswe/bounswe2022group6/issues/364): Writing annotation section for customer milestone 2 report
   3. [#369](https://github.com/bounswe/bounswe2022group6/issues/369): Writing standards section for customer milestone 2 report

3. **Milestone 3:**

   1. [#455](https://github.com/bounswe/bounswe2022group6/issues/455): Writing the Executive Summary Part for Final Milestone
   2. [#456](https://github.com/bounswe/bounswe2022group6/issues/456): Writing the Annotations Part for Final Milestone
   3. [#457](https://github.com/bounswe/bounswe2022group6/issues/457): Writing the Standards Part for Final Milestone 

### **Pull requests:**

Pull requests opened by me:

1. **Milestone 1:**
   1. [#191](https://github.com/bounswe/bounswe2022group6/pull/191): Implementing registration functionality
   2. [#217](https://github.com/bounswe/bounswe2022group6/pull/217): Impllementing login functionality
   3. [#223](https://github.com/bounswe/bounswe2022group6/pull/223): Implementing logout functionality

2. **Milestone 2:**
   1. [#269](https://github.com/bounswe/bounswe2022group6/pull/269): Updating the structure of RegisteredUser model class to reflect the class diagram
   1. [#273](https://github.com/bounswe/bounswe2022group6/pull/273): Implementing view and edit account functionalities
   1. [#288](https://github.com/bounswe/bounswe2022group6/pull/288): Creating model class for the content class
   1. [#297](https://github.com/bounswe/bounswe2022group6/pull/297): Implementing the label structure
   1. [#306](https://github.com/bounswe/bounswe2022group6/pull/306): Implementing the post searching functionality
   1. [#332](https://github.com/bounswe/bounswe2022group6/pull/332): Fixing a bug where post creation would not take labels as a parameter
   1. [#336](https://github.com/bounswe/bounswe2022group6/pull/336): Implementing get all posts functionality
   1. [#335](https://github.com/bounswe/bounswe2022group6/pull/335): Adding all fields of label model class to the response bodies of search posts and get all posts functionalities
   1. [#354](https://github.com/bounswe/bounswe2022group6/pull/354): Fixing a bug where the case sensitive image URLs were being kept as all lowercase in the database
   1. [#359](https://github.com/bounswe/bounswe2022group6/pull/359): Fixing a bug where the labels and comment count of a post were not returned in the get post functionality response body
   1. [#365](https://github.com/bounswe/bounswe2022group6/pull/365): Writing executive summary section for customer milestone 2 report
   1. [#366](https://github.com/bounswe/bounswe2022group6/pull/366): Writing annotation section for customer milestone 2 report
   1. [#370](https://github.com/bounswe/bounswe2022group6/pull/370): Writing standards section for customer milestone 2 report

3. **Milestone 3:**
   1. [#398](https://github.com/bounswe/bounswe2022group6/pull/398): Implementing the annotation functionality
   2. [#402](https://github.com/bounswe/bounswe2022group6/pull/402): Enhanced return data of post and comment retrieval
   3. [#404](https://github.com/bounswe/bounswe2022group6/pull/404): Moved retrieving post and comment data to serializers
   4. [#405](https://github.com/bounswe/bounswe2022group6/pull/405): Enhanced return data of post and comment retrieval to include upvoted and downvoted user details
   5. [#419](https://github.com/bounswe/bounswe2022group6/pull/419): Enhanced return data of post retrieval to include the label details of the post
   6. [#436](https://github.com/bounswe/bounswe2022group6/pull/436): Enhanced return data of search endpoint to return posts sorted by creation date
   7. [#462](https://github.com/bounswe/bounswe2022group6/pull/462): Writing standards part for final milestone report
   8. [#463](https://github.com/bounswe/bounswe2022group6/pull/463): Writing annotations part for final milestone report


Pull requests reviewed by me: 

1. **Milestone 1:**
   1. [#180](https://github.com/bounswe/bounswe2022group6/pull/180): Reviewing folder refactorings
   2. [#229](https://github.com/bounswe/bounswe2022group6/pull/229): Reviewing profile details API documents
   3. [#239](https://github.com/bounswe/bounswe2022group6/pull/239): Frontend logout API integration

2. **Milestone 2:**

   1. [#262](https://github.com/bounswe/bounswe2022group6/pull/262): Reviewing reset database functionality
   2. [#274](https://github.com/bounswe/bounswe2022group6/pull/274): Reviewing and testing the migration of the database from MySQL to PostgreSQL
   3. [#276](https://github.com/bounswe/bounswe2022group6/pull/276): Reviewing and testing the unit tests for location manager (locmgr) app
   4. [#287](https://github.com/bounswe/bounswe2022group6/pull/287): Reviewing and testing the inititialization of the content manager (contmgr) app
   5. [#303](https://github.com/bounswe/bounswe2022group6/pull/303): Reviewing and testing the post related functionalities
   6. [#304](https://github.com/bounswe/bounswe2022group6/pull/304): Reviewing and testing the comment related functionalities
   7. [#305](https://github.com/bounswe/bounswe2022group6/pull/305): Reviewing and testing the voting system functionalities
   8. [#323](https://github.com/bounswe/bounswe2022group6/pull/323): Reviewing and testing the delete account functionality with [Hakan Balık](https://github.com/bounswe/bounswe2022group6/wiki/Hakan-Bal%C4%B1k)
   9. [#346](https://github.com/bounswe/bounswe2022group6/pull/346): Reviewing and testing the addition of downvoted users list to the post model class and to its related functionalities

3. **Milestone 3:**
   1. [#389](https://github.com/bounswe/bounswe2022group6/pull/389): Reviewing edit post and comment endpoints
   2. [#390](https://github.com/bounswe/bounswe2022group6/pull/390): Reviewing tests for content
   3. [#400](https://github.com/bounswe/bounswe2022group6/pull/400): Reviewing reputation system and view profile endpoints
   4. [#425](https://github.com/bounswe/bounswe2022group6/pull/425): Reviewing delete post and comment endpoints

### **Unit Tests:**

#### **Tests Related to Accounts:**

1. [Registration Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L5)
2. [Login Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L110)
3. [Logout Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L160)
4. [Profile Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/accmgr/tests.py#L185)

#### **Tests Related to Content:**
1. [Search Post Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L237)
2. [Label Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L224)

#### **Tests Related to Annotations:**
1. [Annotation Tests](https://github.com/bounswe/bounswe2022group6/blob/master/Application/Backend/src/contmgr/tests.py#L301)

### **Additional Information:**

In general, I tried my best to be consistent about my what I have produced throughout the development of the application. All of my work, including issues, code, pull requests, tests, commit messages, etc. are very consistent within themselves and it makes them very easy to understand and track. This also helps my teammates and the development process, because a person whose work depends on mine could easily track the changes I implemented without needing to communicate with me.

Additionally, I have been very careful about my responsibilities deadlines. Almost all, if not all, of my responsibilities are completed before their respective deadlines. This is also very important for the development process, because it helps my teammates to plan their work accordingly.

In addition, I have also tried my best to determine and solve the problems with the management of the development, such as past deadlines and lack of communication. At numerous times I filled in the work that was blocking other people's work and was not being worked on, to best of my ability, even though it was not my responsibility.

Overall, I have tried my best to be a good teammate and abide by the good practices of software project management, and I believe that I have been successful in this regard.

---

---

* [Ramazan Bedirhan Pamukçuoğlu](https://github.com/bounswe/bounswe2022group6/wiki/Bedirhan-Pamukcuoglu)

---

* [Berfin Şimşek](https://github.com/bounswe/bounswe2022group6/wiki/Berfin-%C5%9Eim%C5%9Fek)

     **Member:**
   [Berfin Şimşek](https://github.com/bounswe/bounswe2022group6/wiki/Berfin-%C5%9Eim%C5%9Fek)
    
    I am working as a Frontend developer in the Frontend team of Group 6.

    **Responsibilities:**

   As a team, we started the new term by revising our wiki page and requirements. I updated and edited README.md, deliverables and meeting notes in the first week. After cleaning up our wiki, we spent some time on requirements. I reviewed "voting a post" and "Interactions Between the Users and the Comments" requirements with İrem.
   
   After dividing into subgroups as Mobile, Backend and Frontend, I decided to be on the frontend team. Until the first milestone, I was responsible for creating a profile and a register page. Since I was not familiar with React.js, I spent some time on practicing it. After looking some example pages, I have created profile and register page for our app.
   
   Finally, I have updated the project plan with Aral according to our new arrangements.

    For milestone 2, my main responsibility was implementing the necessary functions and integrating backend endpoints to the profile page of the user. I integrated GET and POST methods of the profile page so that user can see her account information and edit them if necessary. Also I changed the design of the page so that if the user is a doctor, she should form another form for vericifation by giving diploma ID and profession. I added a message to indicate the user whether verification process is completed or not. 

    Additionally, I was responsible of the page's general design and compatilibity with other pages in terms of styling.

    I modified the messages that appear after an operation such as "Login successful" so that they disappear 3 seconds after showing the message.

    I also updated the project plan with Aral according to work done by each member.
    
    For the final milestone, I was responsible for the chatbot, verified doctors' usernames and post edit functionality.
    
    First of all, I added a chatbot on our homepage by using react-simple-chatbot library. I made the questions and the options that user can choose compatible with our mobile chatbot.
    
    After that, I added a stethoscope emoji next to the verified doctors' usernames. Thus, other users can distinguish doctors' posts or comments from others.
    
    Finally, I integrated backend endpoint for editing a post. A user can edit her post's title or description via the edit button that is integrated with backend.
  
   
    **Main Contributions:** 
    
    - Reviewed requirements
    - Profile page design and implementation
    - Register page design and implementation
    - Integrated backend endpoints for getting a user's account information
    - Integrated backend endpoints for editing a user's account information
    - Designed the profile page
    - Added a form to profile page for doctor verification
    - Updated project plan
    - Chatbot for frontend
    - Doctors' username are distinguished from others by an emoji
    - Integrated backend endpoint for editing a post
    
        * **Code related significant issues:**


            * [#196: Creating Register and Profile Pages for Frontend ](https://github.com/bounswe/bounswe2022group6/issues/196)
            * [#208: AWS EC2 instance creation and deployment](https://github.com/bounswe/bounswe2022group6/issues/208)
            * [Issue #281](https://github.com/bounswe/bounswe2022group6/issues/281):Implementing Edit Account Functionality Backend Integration
            * [Issue #300](https://github.com/bounswe/bounswe2022group6/issues/300):Doctor Verification for Profile page
            * [Issue #325](https://github.com/bounswe/bounswe2022group6/issues/325):Profile page design
            * [Issue #395](https://github.com/bounswe/bounswe2022group6/issues/395):Implementing chatbot for frontend
            * [Issue #408](https://github.com/bounswe/bounswe2022group6/issues/408):Verified doctors' username should be distinguishable
            * [Issue #421](https://github.com/bounswe/bounswe2022group6/issues/421):Implementing Post Edit Functionality Backend Integration
            

        * **Management related significant issues:**
    
            * [#165: Reviewing the requirements](https://github.com/bounswe/bounswe2022group6/issues/165)
            * [Issue #367](https://github.com/bounswe/bounswe2022group6/issues/367): Project plan should be updated
            * [#160: Revising the Wiki](https://github.com/bounswe/bounswe2022group6/issues/160)
            * [#201: Updating Project Plan](https://github.com/bounswe/bounswe2022group6/issues/201)
            * [#479: Updating Project Plan for Final Milestone](https://github.com/bounswe/bounswe2022group6/issues/479)

    **Pull Requests:**
    * Pull requests opened by me:

        * [#199: Profile and register pages are added](https://github.com/bounswe/bounswe2022group6/pull/199)
        * [Pull Request #294](https://github.com/bounswe/bounswe2022group6/pull/294): Editting profile page
        * [Pull Request #311](https://github.com/bounswe/bounswe2022group6/pull/311): Doctor verification
        * [Pull Request #327](https://github.com/bounswe/bounswe2022group6/pull/327): Profile page design
        * [Pull Request #403](https://github.com/bounswe/bounswe2022group6/pull/403): Chatbot for Frontend
        * [Pull Request #411](https://github.com/bounswe/bounswe2022group6/pull/411): Verified doctors' username
        * [Pull Request #422](https://github.com/bounswe/bounswe2022group6/pull/422): Editing a post

    * Pull requests reviewed by me:

        * [#205: Home Page Designed ](https://github.com/bounswe/bounswe2022group6/pull/205)
        * [#194: Frontend/feature/base pages](https://github.com/bounswe/bounswe2022group6/pull/194)
        * [#283: Fix react-icons bug](https://github.com/bounswe/bounswe2022group6/pull/283)
        * [#291 Frontend/fix/reload bug](https://github.com/bounswe/bounswe2022group6/pull/291)
        * [#407 Changes in frontend due to backend response enhancements](https://github.com/bounswe/bounswe2022group6/pull/407)
        * [#416 Frontend/feature/location](https://github.com/bounswe/bounswe2022group6/pull/416)
        * [#441 Frontend/feature/view other profiles](https://github.com/bounswe/bounswe2022group6/pull/441)

---

* [Mustafa Berk Turgut](https://github.com/bounswe/bounswe2022group6/wiki/Mustafa-Berk-Turgut)

---

* [Beyza İrem Urhan](https://github.com/bounswe/bounswe2022group6/wiki/Beyza-%C4%B0rem-Urhan)

