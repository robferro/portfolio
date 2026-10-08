import { LightningElement } from 'lwc';
import projects from 'data/projects';

export default class App extends LightningElement {
    name = 'Roberto Ferro';
    projects = projects;

    // One-liner shown between the name and the skills
    intro = 'I build Salesforce solutions and the delivery pipelines behind them, so teams they serve get better software, faster.';

    // Skills shown as chips in the hero's right column
    skills = [
        'Sales Cloud',
        'Service Cloud',
        'Experience Cloud',
        'Lightning Web Components',
        'Apex',
        'Integrations'
    ];

    // Links shown as buttons in the hero; the first one is the highlighted button
    links = [
        { label: 'View resume ↗', url: 'https://robferro.github.io/resume/', className: 'btn btn-primary' },
        { label: 'LinkedIn ↗', url: 'https://linkedin.com/in/robferro', className: 'btn' },
        { label: 'Trailblazer ↗', url: 'https://trailblazer.me/id/rferro', className: 'btn' }
    ];

    // Headline numbers shown under the hero
    stats = [
        { value: '25+', label: 'Projects delivered' },
        { value: '7+', label: 'Years of Experience' },
        { value: '16', label: 'Certifications' }
    ];
}
