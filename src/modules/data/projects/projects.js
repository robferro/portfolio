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
        context: 'PointClickCare · Support Portal',
        role: 'Senior Developer',
        years: '2025',
        tags: ['Aura', 'Datatable', 'Apex', 'Sharing Model', 'Experience Cloud'],
        headline: 'Most requested Support Portal feature, now used by 300+ executives',
        challenge:
            'Customers operate complex organization structures, with a parent organization and many facilities beneath it, but portal users could only see the cases they had opened themselves. Leaders had no visibility into support activity across their organization, and extending access to colleagues meant asking PointClickCare to do it for them.',
        approach: [
            'Led the solution design and proof of concept. Evaluated out-of-the-box options with Salesforce (Community Plus super user access, sharing sets and delegated administration) and found none could express hierarchy-aware access across an organization and its facilities, so designed a custom Apex managed sharing model instead.',
            'Introduced a three-tier case sharing role on each portal user: Executives see every case across their account hierarchy, Managers see all cases on their own account but not its child facilities, and Individual Contributors see only their own cases. Every user defaults to Individual Contributor, so access is only ever widened deliberately.',
            'Built Apex that creates case sharing records on the fly based on the user’s role, backed by a batch job that keeps sharing in sync as roles and hierarchies change.',
            'Built the Case Access Delegation page, an Aura datatable visible only to Executives, listing every active portal user across their hierarchy (with account names to tell apart same-name contacts at different facilities) so they can change colleagues’ roles themselves.',
            'Aligned with business stakeholders to launch delegation and sharing together, so customers define their own users’ access rather than relying on PointClickCare to do it.'
        ],
        outcome:
            'More than 300 executive users now delegate case access across their organizations themselves. PointClickCare no longer shares cases manually, saving the Support team a couple of hours every week.'
    },
    {
        id: 'canada-post-integration',
        title: 'Canada Post Address Integration',
        context: 'Business Banking Client',
        role: 'Developer',
        years: '2022',
        tags: ['LWC', 'Screen Flow', 'Apex', 'REST API', 'Integration', 'Data Quality'],
        headline: 'Cut address entry time by 50–80% with deliverable addresses every time',
        challenge:
            'Staff typed client addresses into Salesforce by hand. It was slow, and typos or incomplete addresses meant mail could come back undeliverable, a real problem for a bank that has to reach its clients reliably.',
        approach: [
            'Built a screen flow with an embedded LWC, so address lookup slots straight into the existing data entry process and admins can keep the rest of the flow declarative.',
            'The LWC searches addresses as the user types, calling the Canada Post AddressComplete Interactive Find API through an Apex class that handles the HTTP callout and returns the suggestions to the component.',
            'Users pick a match from the suggestions, and the selected address fills in the address fields automatically, so nothing has to be retyped.',
            'Every saved address comes from Canada Post’s own address data, so it is valid and deliverable by design rather than checked after the fact.'
        ],
        outcome:
            'Every address entered can receive mail, and manual address entry time dropped by 50–80%.'
    }
];

export default projects;
