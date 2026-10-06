// Portfolio project data. Add a new object here to add a card to the page.
// Anything in [TODO] brackets still needs to be filled in.

const projects = [
    {
        id: 'customer-community',
        title: 'Customer Community',
        context: 'PointClickCare · Healthcare SaaS',
        role: 'Lead Developer',
        years: '[TODO: year(s)]',
        tags: ['Experience Cloud', 'LWR', 'LWC', 'SSO', 'JIT Provisioning'],
        headline: '[TODO: headline result, e.g. "X,000 customer users at launch"]',
        challenge:
            '[TODO: what problem the community solved, e.g. customers had no central place to ask questions, share best practices, or join beta programs.]',
        approach: [
            'Led development of the customer community on an Experience Cloud LWR site.',
            'Built discussion forums for customers to [TODO: ask questions / share best practices].',
            'Built beta program groups so customers could [TODO: preview and give feedback on new features].',
            'Implemented single sign-on with just-in-time user provisioning, so customers get a community account automatically on first login, with no manual setup.'
        ],
        outcome: '[TODO: adoption, engagement, or support deflection results]'
    },
    {
        id: 'case-access-delegation',
        title: 'Case Access Delegation',
        context: '[TODO: client type, e.g. "PointClickCare · Customer Community"]',
        role: '[TODO: role]',
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
