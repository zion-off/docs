# Proposal draft

## Abstract

Social media usage had been increasing dramatically over the last decade, but the recent global pandemic has brought to the forefront concerns about people's attachment to their devices. We are now at a time where doomscrolling online is the norm, but this has as much to do with circumstances as with the design of the platforms themselves. We propose a novel mobile application, Goodscroll, which aims to redefine the presence of technology in society. Goodscroll serves primarily as an integrated and intelligent productivity system, with secondary social features that are designed to be less addictive and more meaningful than those of existing platforms. Goodscroll integrates with other digital tools such as Google Calendar, Notion, Quizlet, and Kindle to create a holistic productivity suite, while also allowing users to socialise online. The goal is to foremost cultivate more meaningful use of technology by creating a new system for organising and achieving a user's personal goals, and second to facilitate digital mindfuless through informed user experience design. 

## Introduction

Inspired by, yet distinct from, conventional social media or productivity apps, Goodscroll offers a very different experience from conventional social media in two major ways. First, users are not shown content shared by people who are not in their network. In this way, the content available for consumption to users is limited by design. Second, the app integrates with other digital tools a typical person might use in their day-to-day life to deliver a novel and unified feed, thus adding newfound value to their scrolling time. A few possible integrations include A) showing the user a slide of their schedule for the next day, using data from Google Calendar, B) helping a student revise for their exam with study sets they had created on Quizlet, C) showing a quote/page from a book the user might want to read, which they might continue to read in-app if they chose to do so.

Goodscroll does not ask the user for a commitment at the get go: users simply have to scroll away like they have always been doing. Instead, for example, by showing the user on their feed a page from a book that they’ve been meaning to read but never got to starting, Goodscroll eliminates the effort involved in physically picking up a book and reading it, essentially minimising the gap between users and information that is directly relevant to them. Furthermore, through algorithmic placement of relevant information on the user’s feed, it can leverage the power of proven psychological tactics such as spaced repetition. This approach aids the user in retaining the information they encounter, in contrast to quickly skimming through the ceaseless influx of random information found elsewhere on the internet. 

Goodscroll has leverage over other social/productivity apps mainly because, unlike most other apps, it does not need a viral movement to be engaging or useful to individual users. Rather than being a platform with “crowdfunded” content, Goodscroll’s content comes from the user themselves: most of it is generated automatically from the other tools a user is already using, and the rest are shared only by their closed circle of friends who also use the app.

In this proposal, we will provide the necessary background information on the problem of increase in social media use and decrease in productivity, and explain the different challenges and problems that Goodscroll aims to address. We will also discuss the exciting potential of this work and the impact it could have on individuals.

## Background / Related work

We now provide a brief overview in the context in which Goodscroll will eventaully be deployed. First, we discuss the rise in social media use and identify the most vulnerable groups. It is commonly acknowledged that such excess can be detrimental: for example, in a 2023 survey, 86% of adults believed social media use and teen depression rates were positively correlated. Thus, second, we enumerate several negative outcomes of said phenomenon, which have been well-documented in scientific literature. With this, we hope to justify the need for an alternative platform such as Goodscroll. [11](#ref-11)

### Rise in social media use

In a 2020 survey, 33% of adults responded that they were using more social media during after the COVID-19 outbreak than before [3](#ref-3). This does not come as a surprise, given that the pandemic had forced people into their homes, leading to more time alone with their devices. However, this upward trend predates the pandemic. By 2022, users worldwide spent an average of 2 hours and 27 minutes per day on social media, up from only 1 hour and 30 minutes 10 years ago [25](#ref-25). Further classifications reveal that Gen Z consumers are more dedicated users of social media than their older counterparts [6](#ref-6), and 93% of them report using social media at least once a week, higher than Millenials, Gen X, and Baby Boomers [9](#ref-9). They also had the least engagement with traditional media such as online or offline newspapers, radio, and telivision, favouring the accessible and unlimited entertainment that platforms such as Instagram and Tiktok offer. Certainly, the salience of such platforms have a lot to do with their popularity, as it is relatively more convenient take your phone out to scroll through your feed than to pick up a book or newspaper when you have little time to spare, such as when waiting in a line or during a short daily commute. Younger consumers indicate social media to be their go-to entertainment when they had 15 minutes to spare [7](#ref-7) [8](#ref-8), and they are just as eager to keep at it for longer periods if they can [27](#ref-27) [28](#ref-28).

### Negative consequences

The negative effects of addiction to digital experiences can range from psychological and physical to societal and economic. For example, narcissism, low self-confidence and self-esteem, stress, poor concentration, ADHD, and atrophy of critical thinking have all been linked to social media addiction, along with sleep disturbance, various effects of sedentary digital addiction lifestyle, and productivity and opportunity costs [23](#ref-23). These effects come to life by way of the premise of social networking, for example, people tend to engage in upward comparisons more frequently than downward comparisons, and so online, where there is scope for endless exposure to more successful or attractive individuals, people are more succeptible to lower self-esteem and poor self-evaluations [1](#ref-1). To put the extent of some of these negative effects into perspective, over sixty percent of those who considered themselves addicted or somewhat addicted reported experiencing strong or nearly strong stress [13](#ref-13). Moreover, around 15 percent of American college students believe that they suffer from attention deficit hyperactivity disorder (ADHD) [10](#ref-10). Adolescents with higher daily social media use are more succeptible to mental health problems [16](#ref-16) and negative academic outcomes [22](#ref-22).

Although our research does not directly aim at directly rectifying any of the negative impacts, we deem this discussion crucial to understanding the personal technology climate in mass society. We hope to show that by allowing Goodscroll a place in the user's daily lives, we can help mollify some of the dissatisfaction users express with their current social media habits. 

## Methodology / Details

As discussed earlier, societiy's leaning on social media could be a result of various factors, including including the platforms' unassuming entry points and global circumstances such as the COVID-19 outbreak. However, the creators of these platforms cannot be written off as moralists, since the inherent design of their platforms are laid out to offer an easy gateway and encourage habitual use. In these section, we provide an overview of the psychological mechanisms engineered into popular social media platforms, so we can curate an experience for Goodscroll users that is more mindful and less detrimental Goodscroll's fundamental design principles are informed by scientific literature and an understanding of the relationship between digital experiences and human psychology.

### Design of popular social media platforms versus ours

1. Erosion of natural stopping cues

    In the early days, online content was usually organized into discrete pages, giving the users the choice between viewing more content by continuing to the next page, or stopping after reaching the end of the page. However, with the advent of the infinite scroll on Facebook, Instagram, Tiktok, Twitter, and most other platforms, users' feeds are continuosly populated as they scroll, thereby eliminating any stopping cues. Unlike the page count that shows the user how much content they have viewed, here the user is left bereft of any such estimation. Furthermore, a deluge of content means users are less likely to view or remember any of it, and so any important information is bount to lose visibility [15](#ref-15). On the other hand, Goodscroll users can keep scrolling as they are used to, but they eventually reach an end, since there is an upper limit on the available content. By maintining a closed network, users are not inundated with sponsored content or posts from people they do not know, and the productivity content, such as reminders of their upcoming tasks or exam flashcards, is limited. Research supports the idea that users are more likely to actively engage with the limited and curated content they view on the app [21](#ref-21).
 
2. Engagement cues

    Among other things that can instigate a user to open a social application on their device, the effect of notifications is perhaps the strongest [23](#ref-23). Notifications operate on a variable-ratio reinforcement schedule, common to the gambling world. The unpredictable nature of notifications, whether it's a like, comment, or message, evokes the desire for repeated engagement. In contrast, Goodscroll abstains from out-of-app notifications. It keeps an accessible list of interactions, but users are not distracted by notifications when they are not using the app. Furthermore, productivity notifications are redundant in this case and are not implemented. For example, reminders such as "you have an exam tomorrow" or "you have a meeting in 30 minutes" are already present in the user's calendar app.

3. Scope for seeking social approval

    Humans are wired to seek social approval, and in a digital economy, that is exactly the purpose that likes, shares, and tags serve [23](#ref-23). By eliminating the like feature, then, Goodscroll removes need for behaviours that are driven by social approval. Even in educational apps such as Duolingo, users can share their progress with their friends, but Goodscroll does not allow its users to share their daily productivity achievements with others. Furthermore, since they cannot connect with a public audience, they are less likely to vie for status or attention within their small network they are already familiar with offline. In this lies another advantage Goodscroll has over other apps: it does not need a large user base to be useful to an individual user, since its reliance on other users for content is minimal. As such, we anticipate a higher penetration rate for Goodscroll than other social media apps.

4. Anticipation and variable rewards

    Social media applications are designed to maximise anticipation rather than reward, so users are never satisfied enough to close the app, but remain in a state where dissatisfaction drives consumption, in what is known as a Zeigarnik loop [23](#ref-23). For example, when the Twitter app is launched, a blue loading screen is displayed. While this might appear to be a result of poor network connection, this delay is in reality an engineered feature designed to generate anticipation for the following reward [24](#ref-24). Most of the content on the Goodscroll app, however, is generated by the user themselves: flashcards they had created for their exam, entries they had made in their to-do lists, or events they added to their calendars. As such, the reward is fixed rather than variable, and the anticipation element is reduced, as the user already knows what to expect, save for the small pool of content shared by their friends.

5. Algorithmically optimised feeds

    The Tiktok algorithm is perhaps a prime example of similar data-mining technologies employed by other social media platforms. The app's "For You" page is a feed of videos that are curated for each user based on their past interactions with the app. The algorithm learns users' preferences remarkably fast, so that they are always presented with new and interesting content, thus they are less likely to close the app. Furthermore, since these platforms rely on ad revenue, they need users to stay on the app for longer to gather data and display more targeted ads [23](#ref-23). In contrast, there exists no profit incentive behind the development of Goodscroll, and so the app does not have a need for such algorithms. Goodscroll's algorithm is relatively minimal, only designed to organise content in a convenient and useful way for the user.

6. Meta commentary

    Although some social media apps have started to implement features to make users conscious of their time spent on the platform, however, this practice is in direct conflict with their business model, which is to maximize engagement. Acknowledging that users may be engaged in longer, more productive activities, such as reading pages from a book on the app, Goodscroll takes a different approach. Research suggests that disruptions such as time limit notifications or reminders to take a break can undermine user experience [21](#ref-21). Instead, Goodscroll implements a color-changing footer that gradually shifts hues as users spend more time on the app. This allows users to remain conscious of their time without interruptions, and they can set the duration for the footer to transition from the initial to the final color, enabling self-regulation. Furthermore, to re-engage self-awareness, the app will periodically display slides on the feed that remind users of their upcoming tasks or deadlines, empowering users to disengage with the app if they wish to do so, overall providing a sense of control over digital activity, leading to enhanced satisfaction.

### Technology Stack

1. SwiftUI and Server-Side Swift Development

    To create a seamless and efficient user experience, the choice of our development environment for Goodscroll is SwiftUI, a user interface toolkit that allows the design of apps for all Apple platforms with a single codebase. This will enable faster development and ensure that the app runs smoothly on various Apple devices. Server-side Swift will be employed to manage the backend services, as it provides the ability to create scalable, high-performance systems.

2. Intelligent Feed Organization

    Goodscroll will use a proprietary algorithm to intelligently organize productivity content on the user's feed based on relevance and urgency, and social posts shared by their friends will be sorted choronologically. This will ensure that the user's attention is drawn to the most important things first, and they are not overwhelmed by a surge of content.

3. API Integration with Third-Party Applications

    Goodscroll will seamlessly integrate with various third-party applications through their APIs. Users can choose from a list and indicate which apps they currently use and easily connect them with their Goodscroll feed. These integration will allow users to access and engage with content from multiple sources in a single, centralized location, thus enhancing the user experience. The use of APIs will also ensure that the app remains up-to-date with any changes or updates to the integrated platforms, providing a seamless and uninterrupted experience for the user.

## Project Planning / Timeline / Budgetary Request

### Timeline

The project planning timeline for Goodscroll will be based on the Scrum framework, a popular Agile project management methodology. Scrum promotes iterative and incremental development, allowing for continuous improvement and adaptation throughout the project. The development for Goodscroll is divided into several key phases, each with specific milestones and deadlines. This timeline will ensure that the project remains on track and the app is completed within the desired timeframe.

__Phase 1: Research and Conceptualization (Duration: 6 weeks)__

* Sprint 1: Develop sound understanding of Swift fundamentals and APIs
* Sprint 2: Develop the concept for Goodscroll, create user stories, and outline key features
* Sprint 3: Finalize the app's overall design and user interface, and create mockups
* Sprint 4: Review and refine the concept, and prepare for the development phase

__Phase 2: Development (Duration: 8 weeks)__

* Sprint 1: Develop the frontend using SwiftUI, focusing on the user interface and user experience
* Sprint 2: Develop the backend using server-side Swift, implement the intelligent task organization algorithm, and integrate APIs for third-party applications
* Sprint 3: Conduct initial testing and debugging, and make any necessary adjustments

__Phase 3: Deployment and Marketing (Duration: 4 weeks)__

* Sprint 1: Finalize the app for release, including addressing any remaining bugs and implementing user feedback
* Sprint 2: Prepare the app for submission to the App Store and develop promotional materials
* Sprint 3: Launch the app on the App Store and initiate marketing efforts to attract users
* Sprint 4: Monitor app performance, gather user feedback, and make necessary updates

### Budget

The budget has been itemized into three primary categories: [App Store fees](https://developer.apple.com/programs/), which will go towards distrubting the app on the iOS store for 1 year, compensation for market research participants (100 dirham gift cards for about 20 participants), and deployment overhead, such as DigitalOcean subscription costs for services including running droplets, dataabases, and spaces.

| Item                                          | Cost (in USD) |
|-----------------------------------------------|---------------|
| App store fees                                | $100          |
| Compensation for market research participants | $600          |
| Deployment overhead                           | $300          |

## Concluding remarks

This proposal highlights the project's commitment to delivering a high-quality, user-centric platform that can have a lasting impact on its users' digital well-being. In conclusion, Goodscroll is built on three pillars: 1) leveraging technology for personal growth, 2) promoting digital minimalism in an age of information overload, and 3) decentralizing social media. Like Sisyphus, we have the choice to embrace the absurdity of our digital existence and find meaning by transforming our habits and perspectives. By promoting mindful scrolling and fostering a more relevant, personalized experience, Goodscroll invites us to redefine our relationship with the digital world, and in doing so, discover a more meaningful and fulfilling existence. As we move forward with this project, we remain dedicated to our driving principles and creating a fulfilling digital existence for all.

## References

[1](#ref-1) Can’t stop scrolling!: pathological use of social networking sites in emerging adulthood https://www.tandfonline.com/doi/full/10.1080/16066359.2017.1294164

[2](#ref-2) Mindfully Scrolling: Rethinking Facebook After Time Deactivated https://journals.sagepub.com/doi/pdf/10.1177/2056305120919105

[3](#ref-3) Online communication habits change during the coronavirus pandemic in the United States as of May 2020 https://www.statista.com/statistics/1230762/online-communication-change-during-covid-19-in-us/

[4](#ref-4) The age of doom scrolling – Social media's attractive addiction https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10079169/

[5](#ref-5) Daily time spent using media and technology in the United States in 2022, by user type and media https://www.statista.com/statistics/1350374/time-spent-user-type-media-tech-activities-by-media-us/

[6](#ref-6) Share of entertainment screen time spent on selected activities in United States as of December 2022, by age group https://www.statista.com/statistics/1281974/us-users-time-spent-on-selected-media-activities-age/

[7](#ref-7) First choice of 15-minute entertainment according to female consumers aged 18-24 in the United States as of October 2022  https://www.statista.com/statistics/1364135/first-choice-15min-entertainment-female-consumer-18to24-us/
[8](#ref-8) First choice of 15-minute entertainment according to male consumers aged 18-24 in the United States as of October 2022 https://www.statista.com/statistics/1363118/first-choice-15min-entertainment-male-consumer-18to24-us/

[9](#ref-9) Weekly media consumption in the United States in 2022, by generation https://www.statista.com/statistics/1338542/media-access-consumption-weekly-by-generation-us/

[10](#ref-10) Percentage of U.S. college students that reported select disabilities or health conditions as of fall 2022 https://www.statista.com/statistics/827023/disabilities-among-us-college-students/

[11](#ref-11) Share of adults in the United States who think that social media is responsible for the increase in depression among American teenagers as of February 2023 https://www.statista.com/statistics/1369020/us-adults-social-media-responsible-for-increase-in-teen-depression/

[12](#ref-12) Average daily time spent by children in the United States on leading social media apps in 2022 https://www.statista.com/statistics/1301888/us-time-spent-by-children-on-social-media-apps/

[13](#ref-13) Digital device addiction among users in the United States as of September 2022, by stress level https://www.statista.com/statistics/1343810/us-users-addiction-digital-devices-by-stress-level/

[14](#ref-14) Attention control moderates the relationship between social media use and psychological distress https://www.sciencedirect.com/science/article/pii/S0165032721011563

[15](#ref-15) Competing for Attention in Social Media under Information Overload Conditions https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0126090

[16](#ref-16) Associations Between Time Spent Using Social Media and Internalizing and Externalizing Problems Among US Youth https://jamanetwork.com/journals/jamapsychiatry/article-abstract/2749480

[17](#ref-17) Addictive Features of Social Media/Messenger Platforms and Freemium Games against the Background of Psychological and Economic Theories https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6679162/

[18](#ref-18) Adolescent social networking: How do social media operators facilitate habitual use? http://irep.ntu.ac.uk/id/eprint/35779/

[19](#ref-19) Designing for Digital Detox: Making Social Media Less Addictive with Digital Nudges https://dl.acm.org/doi/fullHtml/10.1145/3334480.3382810

[20](#ref-20) Building and breaking social media habits https://www.sciencedirect.com/science/article/pii/S2352250X22000057

[21](#ref-21) “I Don’t Even Remember What I Read”: How Design Influences Dissociation on Social Media https://dl.acm.org/doi/abs/10.1145/3491102.3501899

[22](#ref-22) Social Media Use, Engagement and Addiction as Predictors of Academic Performance https://www.researchgate.net/publication/283740158_Social_Media_Use_Engagement_and_Addiction_as_Predictors_of_Academic_Performance

[23](#ref-23) Addictive De-Vices: A Public Policy Analysis of Sources and Solutions to Digital Addiction https://journals.sagepub.com/doi/pdf/10.1177/0743915619859852

[24](#ref-24) Ethics of the Attention Economy: The Problem of Social Media Addiction https://www.cambridge.org/core/journals/business-ethics-quarterly/article/ethics-of-the-attention-economy-the-problem-of-social-media-addiction/1CC67609A12E9A912BB8A291FDFFE799

[25](#ref-25) Daily time spent on social networking by internet users worldwide from 2012 to 2022 https://www.statista.com/statistics/433871/daily-social-media-usage-worldwide/

[26](#ref-26) First choice of two-hour entertainment according to male consumers aged 18-24 in the United States as of October 2022 https://www.statista.com/statistics/1364181/first-choice-two-hour-entertainment-male-consumer-18to24-us/

[27](#ref-27) First choice of two-hour entertainment according to female consumers aged 18-24 in the United States as of October 2022 https://www.statista.com/statistics/1364201/first-choice-two-hour-entertainment-female-consumer-18to24-us/