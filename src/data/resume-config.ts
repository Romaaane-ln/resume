import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Romane Lavenu',
    photoBackEmoji: '🎨',
    title: {
      fr: 'Design • Web • Réseaux',
    },
    subtitle: {
      fr: 'En reconversion vers les métiers du digital',
    },
    location: 'Le Havre, France',
  },
  seo: {
    title: 'Romane Lavenu — Design • Web • Réseaux',
    description: 'CV interactif de Romane Lavenu, passionnée par le design digital, l\'identité visuelle et la communication en ligne.',
  },
  languages: {
    default: 'fr',
    available: ['fr'],
    labels: { fr: 'FR' },
  },
  contact: [
    { type: 'linkedin', label: 'romane-lavenu', href: 'https://www.linkedin.com/in/romane-lavenu' },
    { type: 'email', label: 'r.lavenu@hotmail.com' },
    { type: 'phone', label: '07.86.14.62.51' },
    { type: 'location', label: 'Le Havre, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { fr: 'Français' }, level: { fr: 'Natif' } },
        { name: { fr: 'Espagnol' }, level: { fr: 'B1' } },
        { name: { fr: 'Anglais' }, level: { fr: 'A2' } },
      ],
    },
    {
      title: { fr: 'Outils & Logiciels' },
      type: 'badges',
      items: [
        { name: 'Canva' },
        { name: 'Word' },
        { name: 'Excel' },
        { name: 'PowerPoint' },
      ],
    },
    {
      title: { fr: 'Créatif & Design' },
      type: 'badges',
      items: [
        { name: 'Design graphique', color: '#E91E8C' },
        { name: 'Identité visuelle', color: '#9C27B0' },
        { name: 'Montage vidéo/photo', color: '#3F51B5' },
        { name: 'Création d\'affiches', color: '#00BCD4' },
      ],
    },
    {
      title: { fr: 'Compétences administratives' },
      type: 'text',
      items: [
        { name: { fr: 'Réception et suivi des appels téléphoniques, accueil des clients, gestion administrative' } },
      ],
    },
    {
      title: { fr: 'Qualités' },
      type: 'text',
      items: [
        { name: { fr: 'Autonomie, Créativité, Inventivité, Travail en équipe, Réactivité' } },
      ],
    },
    {
      title: { fr: 'Mobilité' },
      type: 'text',
      items: [
        { name: { fr: 'Permis B + Véhicule personnel' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'ambp-apprentie',
      company: { fr: 'AMBP (Aménagement Menuiserie Bois Plâtrerie)' },
      role: { fr: 'Technicienne Métreuse & Secrétaire — Apprentie' },
      type: { fr: 'Alternance' },
      period: { fr: 'Octobre 2023 - Août 2024' },
      description: {
        fr: 'Alternance réalisée dans le cadre du BTS MEC. Gestion administrative, accueil clients et suivi de chantiers.',
      },
      techs: [],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Entreprise spécialisée en aménagement menuiserie bois plâtrerie, basée à St Martin du Manoir.',
        },
        tasks: {
          fr: [
            'Réception et suivi des appels téléphoniques',
            'Accueil et renseignement des clients',
            'Utilisation quotidienne des outils bureautiques (Word, Excel, PowerPoint)',
            'Création d\'affiches "Présentation de l\'employé" pour l\'entreprise',
          ],
        },
        env: {
          fr: 'Word / Excel / PowerPoint / Canva',
        },
      },
    },
    {
      id: 'ambp-stage',
      company: { fr: 'AMBP (Aménagement Menuiserie Bois Plâtrerie)' },
      role: { fr: 'Stagiaire — 1ère année de BTS' },
      type: { fr: 'Stage' },
      period: { fr: 'Mai 2023 - Juillet 2023' },
      description: {
        fr: 'Stage de première année de BTS au sein de la même entreprise, découverte du milieu professionnel du bâtiment.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Entreprise spécialisée en aménagement menuiserie bois plâtrerie, basée à St Martin du Manoir.',
        },
        tasks: {
          fr: [
            'Observation et participation aux tâches administratives',
            'Prise en main des outils de gestion de l\'entreprise',
          ],
        },
        env: {
          fr: 'Word / Excel / PowerPoint',
        },
      },
    },
    {
      id: 'cabinet-dubernet',
      company: { fr: 'Cabinet Dubernet Architecte' },
      role: { fr: 'Stagiaire — Stage d\'observation de 3ème' },
      type: { fr: 'Stage' },
      period: { fr: 'Décembre 2018' },
      description: {
        fr: 'Stage d\'observation au sein d\'un cabinet d\'architectes au Havre, découverte du secteur de l\'architecture.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Cabinet d\'architecture basé au Havre.',
        },
        tasks: {
          fr: [
            'Observation du fonctionnement d\'un cabinet d\'architectes',
            'Découverte des métiers de l\'architecture et du design',
          ],
        },
        env: {
          fr: 'Outils de conception architecturale',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'INCO Academy — Villa Raphaëlle, Le Havre' },
      degree: { fr: 'Formation Découverte "Get Into Tech"' },
      specialty: { fr: 'Introduction aux métiers du digital' },
      period: 'Janvier 2026 - Février 2026',
    },
    {
      school: { fr: 'Lycée Schuman-Perret, Le Havre' },
      degree: { fr: 'BTS MEC — Management Économique de la Construction' },
      period: '2022 - 2024',
    },
    {
      school: { fr: 'Lycée Schuman-Perret, Le Havre' },
      degree: { fr: 'BAC STI2D — Sciences et Technologies de l\'Industrie et du Développement Durable' },
      specialty: { fr: 'Spécialité Architecture' },
      period: '2020 - 2022',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Photographie' },
    },
    {
      title: { fr: 'Jeux vidéos' },
    },
    {
      title: { fr: 'Design / Graphisme' },
      details: [
        { fr: 'Passion pour la création visuelle' },
      ],
    },
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { fr: 'FORMATION' },
      projects: { fr: 'PROJETS' },
      hobbies: { fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :' },
      moreTasks: { fr: 'autres missions...' },
      training: { fr: 'Formations :' },
      techEnv: { fr: 'Env. technique :' },
      technologies: { fr: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { fr: 'Changer le thème' },
      downloadPdf: { fr: 'Télécharger le PDF' },
    },
  },
}
