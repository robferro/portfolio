// Portfolio project data. Add a new object here to add a card to the page.

const projects = [
    {
        id: 'customer-community',
        title: 'Customer Community',
        context: 'PointClickCare · Community Portal',
        role: 'Principal Engineer',
        years: '2026',
        tags: ['Experience Cloud', 'LWR', 'LWC','Apex', 'Single sign-on', 'JIT Provisioning'],
        headline: '300+ organizations at launch',
        challenge:
            'To create a seamless, centralized community hub that empowers customers and PCC teams to connect, share knowledge, advocate and drive meaningful outcomes - fueling product innovation and enabling every customer to realize the full value of PointClickCare.',
        approach: [
            'Architected the community as an Experience Cloud LWR site with ~30 custom LWCs backed by Apex controllers. LWR site cannot leverage standard Chatter components or customizable notification emails, so the forum UI and member notifications were built from scratch on top of native Chatter object.',
            'Built discussion forums on Chatter via ConnectApi, with a companion object for metadata Chatter can’t store (category, interest, industry). Members can post, comment, like, @mention, attach files and run polls, and moderators can pin one post per category.',
            'Personalized content: an intake profile captures each member’s interests, care setting and country, and all content queries filter on it. Shared global value sets keep content tags and member interests identical, and a member’s interests automatically drive their group memberships via Apex triggers.',
            'Built private beta program groups: publishing beta content auto-creates the group via Flow, customers request access through a config-driven questionnaire (admins add questions with no code change), and admins approve or decline through a guided flow that always sends the requester a reason.',
            'Implemented SAML single sign-on from the PointClickCare platform with a just-in-time provisioning handler that matches or creates the Account, Contact and User from assertion attributes. A login flow assigns permissions so first-time users have full access on their first page load.',
            'Designed a custom notification engine with per-group preferences (instant, daily, weekly or every post). The every-post digest runs as a self-rescheduling 5-minute batch chain with a high-water mark and an independent watchdog, since the Apex scheduler can’t repeat more often than hourly and a per-post async approach hit governor limits.',
            'Implemented custom moderation since LWR sites do not support Aura moderation rules. Keyword screening runs before a post is created (block with a friendly inline error, or allow and flag for review), member “report post”, and a moderator queue that keeps a content snapshot even after the original post is deleted.',
            'Built for operations: one content model drives Learning, Product Updates, Events and Announcements with a 90-day review cycle; Nebula Logger captures errors across Apex, LWC and Flow; and community health dashboards track activation, engagement and return rates.'
        ],
        outcome:
            'Over 400 unique visits on launch day and more than 60 discussions and comments, with strong early feedback from customers on early-access programs, notification controls and learning content.',
        testimonials: [
            "I like the way you can see what opportunities there are to sign in for early access and things like that. It's nice for everyone to have that opportunity to see what's going on and be a part of it.",
            'You can actually set up e-mail notifications for like every single one of those categories and say whether you want to get an update right away on certain things or whether you want like a daily digest or a weekly digest, which I absolutely love.',
            "I go for the forums, I go for the education. I go for what I don't know, to learn something new or get updates."
        ]
    },
    {
        id: 'case-access-delegation',
        title: 'Case Access Delegation',
        context: 'PointClickCare · Healthcare SaaS · Support Portal',
        role: 'Lead Developer',
        years: '[TODO: year(s)]',
        tags: ['LWC', 'Lightning Datatable', 'Apex', 'Sharing Model', 'Experience Cloud'],
        headline: '[TODO: headline result]',
        challenge:
            '[TODO: e.g. executive users needed to give colleagues visibility into specific cases without admin involvement.]',
        approach: [
            'Designed and developed an LWC datatable that lets executive users share cases dynamically from within an Experience Site.',
            '[TODO: how sharing was applied, e.g. Apex creating CaseShare records, sharing sets, or a custom access model]',
            '[TODO: any security considerations, e.g. restricting who can delegate and to whom]'
        ],
        outcome: '[TODO: e.g. removed manual sharing requests to admins]'
    },
    {
        id: 'canada-post-integration',
        title: 'Canada Post Address Integration',
        context: '[TODO: client type]',
        role: '[TODO: role]',
        years: '[TODO: year(s)]',
        tags: ['LWC', 'REST API', 'Apex', 'Integration', 'Data Quality'],
        headline: '[TODO: headline result, e.g. "Fewer invalid addresses entered"]',
        challenge:
            '[TODO: e.g. users entered client addresses by hand, which led to typos and undeliverable mail.]',
        approach: [
            'Developed an LWC that integrates with the Canada Post API to suggest and validate addresses as users type.',
            '[TODO: how the callout was made, e.g. Apex callout with Named Credentials]',
            '[TODO: UX details, e.g. autocomplete dropdown, auto-filling address fields]'
        ],
        outcome: '[TODO: data quality or time-saved results]'
    }
];

export default projects;
