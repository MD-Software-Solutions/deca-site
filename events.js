const event_titles = ["Fall Rally", "GA Only Testing Events", "Fall LDC", "Region", "State CDC", "International Career Development Conference"];
const event_summaries = [
    [
        "The Fall Rally for Georgia DECA is an exciting event held at Six Flags Over Georgia. It includes a variety of activities such as a general session, leadership workshops, competitive events, and thrill rides. This event is designed for all DECA advisors and student members, providing a fun and engaging environment to develop leadership skills and network with peers. Participants also enjoy lunch as part of the event. The Fall Rally is a great opportunity for students to kick off the DECA year with enthusiasm and energy.",
        "Fall Rally will take place on October 2, 2024 at Six Flags Over Georgia.", 
        "Payment Deadline is September 20. OSP: <a href='#'>N/A</a>"
    ],

    [
        "The Georgia Only Testing Events for DECA are online competitions open to all affiliated student members. These events include categories such as Advertising Services, Buying & Merchandising, Finance/Marketing Math, and Middle School Marketing and Selling. Participants compete for recognition, with the top 10 winners from each exam receiving medallions at the State Career Development Conference (CDC) and the top 3 winners earning trophies and a slot in the leadership academy at the International Career Development Conference (ICDC).",
        "GA only testing events will take place online on Oct. 16-24, 2024",
        "The event is free, but if a student signs up and does not complete their test, a fee of $5 will be applied"
    ],

    [
        "The Fall Leadership Development Conference (LDC) for Georgia DECA is an exciting event designed for all affiliated DECA advisors and student members. It features energetic sessions, hands-on leadership workshops, competitive events, and various activities aimed at developing leadership skills. Participants can expect to engage in marketing role play competitions, chapter workshops, and leadership sessions. The conference provides a great opportunity for networking and skill-building, with attendees receiving conference materials, participation certificates, and t-shirts. This event is a key part of Georgia DECA’s efforts to prepare emerging leaders and entrepreneurs for careers in marketing, finance, hospitality, and management.",
        "Fall LDC is taking place on November 7-8, 2024 at Renaissance Waverly (2450 Galleria Parkway Atlanta, GA).",
        "The event is $75 + $235/night at hotel. OSP: <a href=''>N/A</a>."
    ],

    [
        "The Region DECA events are designed to provide students with opportunities to compete in various business and marketing-related categories at a regional level. These events include role-plays, written events, and team decision-making activities. Participants showcase their skills in areas such as marketing, finance, hospitality, and management. The top performers in each category earn the chance to advance to state-level competitions, where they can further demonstrate their abilities and potentially qualify for national events. These regional competitions are a crucial part of DECA’s mission to prepare emerging leaders and entrepreneurs by offering real-world business scenarios and fostering a competitive spirit.",
        "Region is taking place on November 19-21, 2024. Location is TBD",
        "Price is TBD. OSP: <a href=''>N/A</a>"
    ],

    [
        "The State Career Development Conference (CDC) for Georgia DECA is a major event that brings together all affiliated DECA advisors and student members. It features a variety of competitions, sessions, and workshops aimed at developing leadership and business skills. Participants compete in events such as Principles of Business & Administration, Individual Series Events, Team Decision Making, Business Operations Research, Project Management, Integrated Marketing Campaigns, Professional Selling, Personal Financial Literacy, and Entrepreneurship. The conference also includes Georgia Role Play Only Events and the SBE Competition. Top performers are recognized with awards, and the event provides a valuable opportunity for networking and professional growth.",
        "CDC is taking place on January 30 - February 1, 2025 at Hyatt Regency ATL.",
        "Price TBD. OSP: <a href='#'>N/A</a>"
    ],

    [
        "The International Career Development Conference (ICDC) is the highlight of the DECA year, bringing together over 20,000 high school students, advisors, business professionals, and alumni for several days of DECA excitement. This prestigious event features a wide range of competitive events, leadership academies, and networking opportunities. Participants compete in various categories, showcasing their skills in marketing, finance, hospitality, and management. The conference also includes workshops and sessions aimed at developing leadership and professional skills. Top performers are recognized with awards, and the event provides a valuable platform for students to connect with industry leaders and peers from around the world.",
        "ICDC is taking place on April 26-29, 2025 in Orlando Florida.",
        "Price TBD. OSP: <a href='#'>N/A</a>"
    ]
];

window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search)
    const param = urlParams.get('event');
    change_event(param);
})

function change_event(index) {

    document.getElementById('event-title').innerHTML = event_titles[index];
    document.getElementById('event-summary-title-1').innerHTML = `What is ${event_titles[index]}?`;
    document.getElementById('event-summary-1').innerHTML = event_summaries[index][0];
    document.getElementById('event-summary-2').innerHTML = event_summaries[index][1];
    document.getElementById('event-summary-3').innerHTML = event_summaries[index][2];
    
}