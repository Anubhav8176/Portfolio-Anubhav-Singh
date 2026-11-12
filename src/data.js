// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Anubhav Singh',
  role: 'Android, backend and web developer',
  email: 'thakuranubhav623@gmail.com',
  phone: '+91-8176977004',
  whatsapp: 'https://wa.me/918176977004',
  links: {
    github: 'https://github.com/Anubhav8176',
    linkedin: 'https://www.linkedin.com/in/anubhav-singh-133358277/',
    leetcode: 'https://leetcode.com/u/anubhavsingh08/',
    codeforces: 'https://codeforces.com/profile/anubhavsingh08',
    codechef: 'https://www.codechef.com/users/anubhavsingh81',
  },
}

export const facts = [
  { value: '700+', label: 'LeetCode problems solved' },
  { value: '1600+', label: 'peak LeetCode contest rating' },
  { value: '63', label: 'public repositories on GitHub' },
  { value: '9.1', label: 'GPA out of 10, B.Tech in CSE' },
]

export const services = [
  {
    title: 'Android apps',
    body: 'Native apps in Kotlin and Jetpack Compose, from the first screen to a release build. Sign-in, offline storage, voice features, widgets and maps are all things I have shipped.',
    tags: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Firebase'],
    theme: 'violet',
  },
  {
    title: 'Backend APIs',
    body: 'Secure REST APIs with token sign-in, clean data models and Docker-ready deployment, built in Spring Boot or FastAPI to suit your stack.',
    tags: ['Spring Boot', 'FastAPI', 'MySQL', 'PostgreSQL', 'Kafka'],
    theme: 'pink',
  },
  {
    title: 'Websites and web apps',
    body: 'Responsive, fast front ends in React, HTML, CSS and JavaScript. This portfolio is one, built from scratch.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    theme: 'sun',
  },
  {
    title: 'App and API together',
    body: 'One developer for both sides means no hand-off gaps. The app and the server are designed around each other, so features land faster.',
    tags: ['Retrofit', 'JWT', 'Docker', 'Firebase'],
    theme: 'ink',
  },
]

export const projects = [
  {
    name: 'OtakuHub',
    kind: 'Android app',
    summary:
      'An anime and manga tracker. Browse titles from the Jikan API, sign in with Google and keep a synced list of favourites.',
    points: [
      'MVVM with Jetpack Compose and Dagger Hilt',
      'Google sign-in through Credential Manager',
      'Favourites saved in Firestore',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Retrofit', 'Hilt'],
    href: 'https://github.com/Anubhav8176/OtakuHub',
    theme: 'violet',
  },
  {
    name: 'Expense Tracker API',
    kind: 'Backend',
    summary:
      'A REST API for personal finance with secure sign-in. Every user only ever sees their own data.',
    points: [
      'Short-lived access tokens plus 30-day refresh tokens with rotation and revocation',
      'Paginated endpoints, date and category filters, spending breakdowns',
      'Normalised schema with UUID keys and cascade deletes',
    ],
    stack: ['FastAPI', 'SQLAlchemy', 'SQLite', 'JWT', 'Pydantic'],
    href: 'https://github.com/Anubhav8176/Expense-Tracker-api',
    theme: 'sun',
  },
  {
    name: 'Task Management API',
    kind: 'Backend',
    summary:
      'A microservice-style task API where services talk to each other asynchronously and every service runs in a container.',
    points: [
      'Layered Spring Boot services with JWT authentication',
      'Apache Kafka for messaging between services',
      'Docker for a portable deployment',
    ],
    stack: ['Spring Boot', 'Kafka', 'Docker', 'MySQL', 'JWT'],
    href: 'https://github.com/Anubhav8176/Task-Service',
    theme: 'pink',
  },
]

// Listed in the GitHub profile README. Repo links point to the profile.
export const moreProjects = [
  {
    name: 'Crypto Tracker',
    kind: 'Android app',
    summary: 'A real-time cryptocurrency app built with the MVI architecture.',
    stack: ['Kotlin', 'MVI'],
  },
  {
    name: 'Todo List API',
    kind: 'Backend',
    summary: 'A REST API with JWT authentication, an SQLAlchemy data layer and full create, read, update and delete support.',
    stack: ['FastAPI', 'SQLAlchemy', 'JWT'],
  },
]

export const practiceRepos = [
  { name: 'Data-Structure-And-Algorithm', lang: 'C++' },
  { name: 'Python-Code', lang: 'Python' },
  { name: 'Cpp-language', lang: 'C++' },
  { name: 'Solution-Challenge-2k23', lang: 'Java' },
]

export const process = [
  { title: 'Talk', body: 'We go over what you want to build, who it is for and when you need it.' },
  { title: 'Plan', body: 'You get a clear scope, timeline and price before any work starts.' },
  { title: 'Build', body: 'I build in small steps and show you working progress along the way.' },
  { title: 'Launch', body: 'I publish the app or API, hand over the code and stay available for fixes.' },
]

export const experience = [
  {
    role: 'Android Developer',
    org: 'AI start-up',
    when: 'Jul 2025 – Oct 2025',
    points: [
      'Added voice features using Google Cloud Text-to-Speech and Speech-to-Text, so users can run parts of the app hands-free.',
      'Built nested scrolling, Android widgets and Google Navigation, and set up Firebase Crashlytics to catch crashes early.',
      'Worked in an agile team to build a full Android app from scratch against real deadlines.',
    ],
  },
  {
    role: 'SDE Intern',
    org: 'Adgama Digital Pvt Ltd',
    when: 'Sep 2024 – Jan 2025',
    points: [
      'Built Android features with Hilt, Room, Retrofit and Coil on a clean architecture.',
      'Connected Firebase Authentication, Firestore and Cloud Storage for secure, real-time features.',
      'Designed and delivered a Java Swing desktop app for a client’s inventory management, from UI to data storage.',
    ],
  },
]

export const skills = [
  { group: 'Android', items: ['Jetpack Compose', 'MVVM / MVI', 'Dagger Hilt', 'Retrofit', 'Room', 'Firebase', 'Ktor', 'Koin'] },
  { group: 'Backend', items: ['Spring Boot', 'FastAPI', 'Hibernate', 'J2EE', 'Apache Kafka', 'REST API design', 'JWT', 'Docker'] },
  { group: 'Web', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Languages', items: ['Kotlin', 'Java', 'Python', 'C++', 'JavaScript', 'SQL'] },
  { group: 'Data', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Firestore'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Android Studio', 'IntelliJ IDEA', 'Postman', 'Linux'] },
]

export const learning = ['Advanced data structures and algorithms', 'Distributed systems', 'Modern React and front-end frameworks']
