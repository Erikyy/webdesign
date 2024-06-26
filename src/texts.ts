

export const TEXTS = {
    title: "WebFlow",
    heroContent: "We offer you the tools to create modern web services!",
    buttons: {
        getStarted: 'Get Started'
    },
    features: {
        title: 'Features and Pricing',
        additionalContent: 'Choose your preferred edition',
    },
    plugins: {
        support: 'Our tools have support for first and thirdparty plugins',
    }
};

export type Pricing = {
    value: string;
    type: '/month' | '/annually' | null,
    small: boolean,
};

export type Feature = {
    name: string;
    additionalContent: string;
    features: string[],
    buttonContent: string,
    pricing: Pricing[],
};

export const FEATURES: Feature[] = [
    {
        name: 'Community Edition',
        additionalContent: 'Best for self hosted solutions and for learning projects.',
        features: [
            "Open Source",
            "Plugin sdk (Rust, C++, ...)",
            "Web only",
            "Self hosted"
        ],
        buttonContent: 'Get Started',
        pricing: [
            {
                value: 'Free',
                type: null,
                small: false,
            }
        ],
    },
    {
        name: 'Pro Edition',
        additionalContent: 'Use our hosting providers and more advanced tools.',
        features: [
            "Everything from Community Edition and:",
            "Web or Mobile apps",
            "Only our hosting providers"
        ],
        buttonContent: 'Get Started',
        pricing: [
            {
                value: '15€',
                type: '/month',
                small: false,
            }
        ],
    },
    {
        name: 'Enterprise Edition',
        additionalContent: 'For businesses and more large scale applications.',
        features: [
            "Everything from Pro Edition and:",
            "Self hosting",
            "Advanced security features"
        ],
        buttonContent: 'Contact us',
        pricing: [
            {
                value: 'Contact us for sales',
                type: null,
                small: true
            }
        ],
    }
];

export type Plugin = {
    name: string;
};

export const FIRST_PARTY_PLUGINS: Plugin[] = [
    { name: "First Plugin" },
    { name: "Second Plugin" },
    { name: "Third Plugin" }
];

export const THIRD_PARTY_PLUGINS: Plugin[] = [
    { name: "First Plugin" },
    { name: "Second Plugin" },
    { name: "Third Plugin" }
];

export type Reason = {
    header: string;
    content: string;
}

export const REASONS_TO_USE: Reason[] = [
    {
        header: 'Free community edition',
        content: 'Get started for free using our basic version of our tools.'
    },
    {
        header: 'Easy to use',
        content: 'Our tools are created to be easy to use for experienced developers and beginners.'
    },
    {
        header: 'Extensible',
        content: 'Our integration with first and third party plugins allows you to extend your web and mobile apps.'
    },
    {
        header: 'Mobile apps',
        content: 'With our tools. It makes poosible to create easy to use mobile apps in parallel to web apps.'
    }
];

export type Customer = {
    name: string;
    profession: string;
    imageUrl: string;
    imgAlt: string;
    feedback: string;
};

// NOTE!: This content is generated by AI, this is for educational purposes, DO NOT USE in prod
export const CUSTOMERS: Customer[] = [
    {
        name: 'Sarah',
        profession: 'Software Engineer',
        imgAlt: 'Sarah',
        imageUrl: 'https://media.gettyimages.com/id/1212006375/photo/confident-asian-businesswoman-in-office.jpg?s=612x612&w=gi&k=20&c=-S1G8CZR8jhf52tIZqcXWSjt0KZFZ2HgCjpJjnidmv0=',
        feedback: 'As a seasoned software engineer, I\'m all about efficiency and precision. Webflow has revolutionized my workflow, allowing me to craft pixel-perfect websites without diving into code. It\'s a game-changer for developers who value speed and flexibility.',
    },
    {
        name: 'David',
        profession: 'UX Designer',
        imgAlt: 'David',
        imageUrl: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
        feedback: 'Webflow empowers me to bring my designs to life seamlessly. As a UX designer, I appreciate the balance between customization and simplicity. It\'s the perfect tool for those who want to create stunning experiences without getting bogged down in code.',
    },
    {
        name: 'Michael',
        profession: 'Frontend Developer',
        imgAlt: 'Michael',
        imageUrl: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg',
        feedback: 'Being a frontend developer, I\'m no stranger to coding. Yet, Webflow has become my go-to for rapid prototyping and client presentations. Its intuitive interface and robust features make it an indispensable asset for developers looking to streamline their workflow.',
    },
    {
        name: 'Emily',
        profession: 'Digital Marketer',
        imgAlt: 'Emily',
        imageUrl: 'https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713571200&semt=ais',
        feedback: 'Webflow has completely transformed the way I approach web design. As a digital marketer, I need to iterate quickly and experiment with different layouts. With Webflow, I can prototype, iterate, and launch campaigns faster than ever before. It\'s a must-have for anyone in the fast-paced world of digital marketing.',
    }
];