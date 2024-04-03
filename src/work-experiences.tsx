import { IExperienceResource } from '../types';

export const WORK_EXPERIENCES = (): IExperienceResource[] => [
  {
    id: 'free',
    slug: 'free',
    type: 'work',
    company: 'Free',
    role: 'Frontend Developer',
    description: (
      <>
        Free is France&apos;s leading mobile operator and one of the
        country&apos;s leading Internet service providers.
        <br />
        <br />
        In a team of around 25 people divided into squads, we work within the
        Agile Scrum methodology as we develop the next star product for the
        company.
        <br />
        <br />
        <ul>
          <li>
            As a React developer, I played a crucial role in building key
            features for the company&apos;s highly anticipated flagship product
          </li>
          <li>
            Contributed to the front-end architecture by participating in the
            technology selection process.
          </li>
          <li>
            Implemented numerous components/features within the in-house UI Kit
          </li>
        </ul>
      </>
    ),
    logo: '/assets/images/free/logo.png',
    color: '#CC0100',
    images: [],
    deliverable: ['Still in progress. Cannot disclose.'],
    used_techs: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Figma',
      'GitLab',
      'Microservices'
    ]
  },
  {
    id: 'spvie',
    slug: 'spvie',
    type: 'work',
    company: 'SPVIE',
    role: 'Frontend Developer',
    description: (
      <>
        SPVIE is an insurance company looking to transition to digital
        platforms, aiming to provide its current customers with a mobile
        application and online services. These tools are intended to streamline
        communication with their advisors and simplify daily tasks for
        customers.
        <br />
        <br />
        In a team of around ten people, we worked using the agile SCRUM
        methodology with 2-week sprints. During this time, we successfully
        developed and launched two different mobile applications. Additionally,
        we created a complex online journey that allowed potential customers to
        automatically obtain insurance in less than 5 minutes. Theses
        initiatives resulted in a 30% increase in customer satisfaction and
        attracted over 200 new customers within the first week.
        <br />
        <br />
        <ul>
          <li>
            Led the front-end development of 2 React Native mobile applications
            for this health insurance company, aimed at their +400k customers,
            in an agile team of around ten people.
          </li>
          <li>
            Built key features of a complex online journey that allowed
            potential customers to automatically obtain insurance in less than 5
            minutes
          </li>
          <li>
            Integration of continuous integration/continuous deployment (CI/CD)
            pipelines for both mobile apps under the supervision of the Chief
            DevOps
          </li>
          <li>Pull request / Code reviews</li>
        </ul>
      </>
    ),
    logo: '/assets/images/spvie/logo.png',
    color: '#28AE7B',
    images: [
      '/assets/images/spvie/carousel-1.png',
      '/assets/images/spvie/carousel-2.png',
      '/assets/images/spvie/carousel-3.png',
      '/assets/images/spvie/carousel-4.png'
    ],
    deliverable: [
      '2 mobile applications',
      '1 signup journey',
      'CI/CD pipelines'
    ],
    used_techs: [
      'React Native',
      'React',
      'Next.js',
      'Typescript',
      'Redux',
      'Tailwind CSS',
      'Azure DevOps',
      'Figma'
    ]
  },
  {
    id: 'openup',
    slug: 'openup',
    type: 'work',
    company: "Open'up",
    role: 'Product Engineer & Frontend Developer',
    description: (
      <>
        Downloaded and used by over 80,000 people, Open&apos;up is an mobile app
        for young people that allows you to ask others in your community if
        they&apos;ve ever felt the same way as you. Its aim is to combat the
        challenges commonly encountered by young people and promote honesty and
        authenticity.
        <br />
        <br />
        In a team of 4 people, we followed an agile approach, conducting rapid
        iteration cycles lasting 1 to 2 weeks.
        <br />
        <br />
        During this experience, all the technologies and tools used were
        entirely unfamiliar to me. Through hands-on learning, I became
        proficient, even reaching expert level in some of these technologies.
        <br />
        <br />
        <ul>
          <li>
            Built a mobile application from scratch, implementing multiple major
            updates, including a referral system that attracted over 10,000 new
            users, a live chat system with a peak of 350 active users in real
            time, real-time messaging, and more
          </li>
          <li>
            Designed the entire UI and UX wireframes for the mobile application,
            as well as the branding, including the logo, application stores,
            colors, typography, and more.
          </li>
          <li>
            Developed advanced growth hacking tools that facilitated the
            acquisition of over 50,000 new users for our platform.
          </li>
          <li>
            Developed a moderation panel that effectively manages the moderation
            of over 10,000 new pieces of content daily.
          </li>
          <li>
            Integration of advanced front-end analytics to analyze specific user
            behaviors with Amplitude.
          </li>
          <li>
            Creation of video generation tools to automate the creation of
            targeted advertising with Javascript vanilla
          </li>
        </ul>
      </>
    ),
    logo: '/assets/images/openup/logo.png',
    color: '#2B65B5',
    images: [
      '/assets/images/openup/carousel-1.png',
      '/assets/images/openup/carousel-2.png',
      '/assets/images/openup/carousel-3.png'
    ],
    deliverable: [
      '1 mobile application with 3 major updates',
      '1 moderation panel',
      'Multiples chrome extensions',
      'Ads video generating tool'
    ],
    used_techs: [
      'React Native',
      'React',
      'Typescript',
      'JS Vanilla',
      'Redux',
      'GitHub',
      'Adobe XD',
      'SCSS'
    ]
  },
  {
    id: 'emergence',
    slug: 'emergence',
    type: 'work',
    company: 'Emergence',
    role: 'React Developer Intern',
    description: (
      <>
        Emergence is a B2B product designed to help businesses enhance their
        internal communication and encourage the identification of issues or
        desires within the company.
        <br />
        <br />
        <ul>
          <li>Built a real-time chat with socket.io</li>
          <li>
            Designed and developed the landing page and the online pitch deck
            with React
          </li>
          <li>Developed a moderation and website management panel.</li>
        </ul>
      </>
    ),
    logo: '/assets/images/emergence/logo.png',
    color: '#42008A',
    images: [
      '/assets/images/emergence/carousel-1.png',
      '/assets/images/emergence/carousel-2.png'
    ],
    deliverable: ['1 realtime chat', '1 moderation panel', '1 Landing page'],
    used_techs: [
      'React',
      'Javascript',
      'CSS',
      'HTML',
      'socket.io',
      'Adobe XD',
      'GitHub'
    ]
  },
  {
    id: 'shoops',
    slug: 'the-shoops',
    type: 'personal',
    company: 'The Shoops',
    description: (
      <>
        The Shoops is a generative NFT collection consisting of more than 150
        different traits. This collection was never officially released but
        served as a means to understand the NFT/Web 3 ecosystem while also
        enjoying a fun and creative time.
        <br />
        <br />
        Each traits and design have been done by myself.
      </>
    ),
    logo: '/assets/images/shoops/logo.png',
    color: '#8C695D',
    images: [
      '/assets/images/shoops/carousel-1.png',
      '/assets/images/shoops/carousel-2.png'
    ],
    deliverable: ['+ 150 different NFT traits', '1 landing page'],
    used_techs: ['Adobe XD', 'Adobe Illustrator']
  }
];
