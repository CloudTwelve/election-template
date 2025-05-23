import React from 'react';
import './Carousel.css';
import Card from './Card';

const presCands = [
    {
        pName: "Efosa Aimuanwosa",
        vpName: "Dinesh Babu",
        src: "/images/EnD.jpeg",
        bio: "Hello fellow Students, my name is Efosa Emmanuel Aimuanwosa and I am running for president because as a fellow student, I see you, I see the problems we face every day, and I am dedicated to making a better pioneer for us all. I am the son of Nigerian immigrants, a brother of two, and a follower of Christ. I do not want to go on about myself as I am not running for myself, but for you, so here are my qualifications, experiences, and skills that make me the best candidate for the job. I have been in Model United Nations for over three years, winning countless awards such as best delegate 2x, best public speaker, and outstanding delegate 1x. Attending conferences such as MIT, Tufts, Bosmun, Bc high, and many more taught me the value of other perspectives and helped me improve my public speaking skills, a skill that is non-negotiable when it comes to student president. I have worked in the childcare industry for nearly two years. Throughout my tenure in the childcare industry, I have learned valuable skillsets such as how to be empathetic and loving, a skill I can hope to apply to my presidency, a skill that allows me to listen to your issues, your problems, and be empathic towards you. What matters truly to me is you.I have been in multiple leadership roles that forced me to go above and beyond not only for myself but those around me. These roles include varsity basketball captain 2x, Bible study leader, Roles at work, and many others. These roles forced me to be a better man, a man people can look to in times of need.We are going to win it big, and make pioneer great again for you!",
        socials: "insta - @mpga_26"
    },
    {
        pName: "Maria Alves",
        vpName: "Mohamed Bouzaghou",
        src: "/images/MnM.jpeg",
        bio: "Hello everyone! I’m Maria Eduarda Alves, and I’m thrilled to share my candidacy for President, alongside my running mate, Mohamed Bouzaghou. Together, we share a vision and a deep commitment to serving our school community. Our primary goal is to boost the voices of the student body and ensure that every aspect of our senior year is enjoyable and memorable. I am dedicated to organizing a variety of activities and events that will highlight our final year together, creating lasting memories for all of us. Additionally, I aim to implement college programs that offer volunteer service hours and, reduce the stress of the application process during our senior year. With experience as a leader in our school community—serving as President of the Red Cross Charter, the Captain of the Girls Varsity Soccer Team, and the President of SAAC—I have gained the skills necessary to promote collaboration and drive positive change. I believe that our class deserves a President who is not only experienced but also truly understands how to lead effectively. Our mission is to support you and ensure that every individual feels valued and appreciated. By choosing us you will have representatives who genuinely advocate for the needs of both females and males. We recognize the power of diversity and inclusivity, and we are committed to creating an environment where your voice is my mission.",
        socials: "insta - @mambco26"
    },
    {
        pName: "Ayomide Osineye",
        vpName: "Rayford Adam",
        src: "/images/AnR.jpeg",
        bio: "Fellow Pirates! It is both an honor and a privilege to run as Vice President under Ayomide Osineye, for the Pioneer Pirates! Our party's intentions towards this campaign is to emphasize the importance of community. Our goal is to unite the entire grade to make our last year at Pioneer meaningful. Through all the adversities and obstacles we faced at Pioneer, from completing our first years on zoom, to getting burnt out from the intense workload, we all have managed to make it to senior year. Unfortunately, throughout the process we have lost many friends and former classmates. But we cannot let this opportunity pass us. For the first time in our time at Pioneer, we have a say, we have a vote! We can make an impact for ourselves, we can create memories that we will go on to tell our kids about! This is our last shot at high school. Oftentimes there is a lot of talk but little action. I have been fortunate enough to be put into multiple positions of leadership during my time at Pioneer. My time as a ball player has taught me that actions speak louder than words while events like international day showed me that organization and preparation are key. It's time for us, as a class, to come together and use our talents to create the most unforgettable senior year in Pioneer history. When we stand united, we rise, but divided, we fall. Let’s make this year one for the books!",
        socials: "none"
    },
]
const secCands = [
    { name: "Camila Lima", src: "/images/Camila.jpg", bio: "My key motivations for running in this election is that I want to be involved and make sure everyone's voice is heard as we enter our senior year. My goal is to have an enjoyable year that accommodates everyone's needs financial-wise and distance-wise when planning events.", socials: "insta - @probablycamila" },
    { name: "Yusra Makhlouf", src: "/images/Yusra.jpeg", bio: "My name is Yusra Makhlouf, and I will be running for class secretary. I am an experienced team collaborator, as I work as a Sunday School teacher and participate in Model United Nations conferences, where I developed strong communication and negotiation skills. My background includes successfully organizing multiple events for Sunday School, showcasing my ability to manage schedules and coordinate activities effectively. Currently, I am involved in marketing for several running campaigns, further enhancing my outreach skills and capacity to work with others. As I look forward to my senior year, I am committed to ensuring that every student feels heard and included. I plan to conduct one-on-one talks with my class body to gather individual concerns, which I will make sure is heard within the student council, ensuring that nobody is left out or feels that their concern does not hold value. My vision is to foster an inclusivity through active listening and engaging initiatives that promote community involvement, hopefully leaving a positive impact on my peers.", socials: "none" },
    { name: "Ethan Sydavong", src: "/images/Ethan.jpeg", bio: "Pioneer has changed me a lot for the better and I appreciate the community deeply so I want to help make reforms within the school so that it can be improved as well. I have a lot of experience planning and coordinating with others whether it being maintained within my friend group or hosting school wide events. I want to prioritize the benefit of the senior class over all else and will do my best to help everyone else.", socials: "insta - @ethansssja" }
];

const treasCands = [
    { name: "Abdalla Abdelhamid", src: "/images/Abdalla.jpeg", bio: "I am excited to run for the Treasurer of the Senior Class, building on my experience as the Treasurer for the Red Cross Club. My high school job taught me essential money management skills, balancing savings while funding personal projects. I gained valuable experience overseeing the budget and design for a JPL NASA innovation competition, which deepened my understanding of resource allocation and the school’s purchasing processes. Additionally, I successfully raised over $2,000 through just six bake sales, demonstrating my ability to achieve results and secure funds efficiently.", socials: "insta - @abdallaghonime" },
    { name: "Sana Hasaba", src: "https://example.com/image11.jpg", bio: "Yes, a treasurer manages money and finances, but they also carry the responsibility of honesty, integrity, consistency, and follow-through. I’m Sana, and I hope to be your future Senior Class Treasurer to help make our final year unforgettable without making it unaffordable. To me, this role is more than spreadsheets. It’s about turning budgets into real, meaningful experiences. Over the past few years, I’ve done that through leadership and service. I’ve volunteered at Winchester Hospital, led fundraisers as a Charity Week Ambassador, and helped organize major events like the New England Muslim Festival. At school, I’ve worked behind the scenes on events like Hispanic Culture Day and the Fall Festival. As a volunteer and President of our Red Cross chapter, I’ve raised funds through bake sales, food packaging, and donation drives while managing logistics and coordinating projects from start to finish. If elected, I’ll bring transparency, creativity, and smart planning to everything we do. I want to run fundraisers that are fun and effective, like thrift pop-ups, snack bars, school auctions, alumni sponsorships, and theme-day donations. I also plan to introduce a Senior Year Bundle, a discounted package combining prom, merch, the yearbook, and key events, with flexible payment options, done through vendor outreach and budget forecasting. It’s a simple way to help us plan ahead, save money, and make sure no one is left out. Senior year only happens once. Don’t let your biases get in the way. Remember, your vote counts. Vote Sana for Treasurer.", socials: "none" }
];



const Carousel = (props) => {
    const [candidates, setCandidates] = React.useState(presCands); // Default to presidential candidates]
    const [candidateType, setCandType] = React.useState("presidential"); // Default to presidential candidates

    const changeCandidates = (e) => {
        const selectedType = e.target.value;
        switch (selectedType) {
            case "presidential":
                setCandidates(presCands);
                setCandType("presidential");
                break;
            case "secretarial":
                setCandidates(secCands);
                setCandType("secretarial");
                break;
            case "treasurial":
                setCandidates(treasCands);
                setCandType("treasurial");
                break;
            default:
                setCandidates(presCands);
                setCandType("presidential");
        }
    }

    return (
        <>
            <div className="slider" style={{ 
    "--width": "250px", 
    "--height": "330px", 
    "--quantity": candidates.length.toString() 
  }}>
                <div className="list" style={{"--order": 0}}>
                    {candidates.map((cand, index) => (<Card candType={candidateType} key={index} cand={cand} onClick={() => props.onCardClick && props.onCardClick(cand, candidateType)}/>))}
                </div>
                <div className="list" style={{"--order": 1}}>
                    {candidates.map((cand, index) => (<Card candType={candidateType} key={index} cand={cand} onClick={() => props.onCardClick && props.onCardClick(cand, candidateType)}/>))}
                </div>
            </div>
            <div className="message">
                <label forEach="runner-choice">You're viewing:</label>
                <select id="runner-choice" name="runner-choice" onChange={changeCandidates}>
                    <option value="presidential">Presidential</option>
                    <option value="secretarial">Secretarial</option>
                    <option value="treasurial">Treasurial</option>
                </select>
            </div>
        </>
    );
    };

export default Carousel;