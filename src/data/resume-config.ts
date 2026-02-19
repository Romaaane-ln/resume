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
    location: 'Le Havre',
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
    { type: 'location', label: 'Le Havre' },
  ],
  skills: [
    {
      title: { fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { fr: 'Anglais' }, level: { fr: 'Niveau A2' } },
        { name: { fr: 'Espagnol' }, level: { fr: 'Niveau B1' } },
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
        { name: 'AutoCAD', color: '#E51837' },
      ],
    },
    {
      title: { fr: 'Créatif & Digital' },
      type: 'badges',
      items: [
        { name: 'Design graphique', color: '#FF6B6B' },
        { name: 'Montage vidéo/photo', color: '#9B59B6' },
        { name: 'Identité visuelle', color: '#3498DB' },
        { name: 'Réseaux sociaux', color: '#E4405F' },
      ],
    },
    {
      title: { fr: 'Compétences métier' },
      type: 'text',
      items: [
        { name: { fr: 'Accueil clients, suivi téléphonique, gestion de mails, devis de chantiers, chiffrage, réponses d\'appels d\'offres' } },
      ],
    },
    {
      title: { fr: 'Qualités' },
      type: 'text',
      items: [
        { name: { fr: 'Autonomie, Créativité, Travail en équipe, Réactivité' } },
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
        fr: 'Alternance au sein d\'une entreprise spécialisée dans l\'aménagement intérieur, à St Martin du Manoir.',
      },
      techs: ['Word', 'Excel', 'PowerPoint'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Entreprise spécialisée dans l\'aménagement, la menuiserie, le bois et la plâtrerie — St Martin du Manoir.',
        },
        tasks: {
          fr: [
            'Réception et suivi des appels téléphoniques',
            'Accueil et renseignement des clients',
            'Utilisation des outils bureautiques (Word, Excel, PowerPoint)',
            'Consultations de mails',
            'Mise en place du logiciel de gestion commerciale',
            'Devis de chantiers',
            'Dessins de plan',
            'Réponses d\'appels d\'offres',
          ],
        },
        env: {
          fr: 'Word / Excel / PowerPoint / Logiciel de gestion commerciale',
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
        fr: 'Stage de 1ère année de BTS au sein de la même entreprise d\'aménagement intérieur.',
      },
      techs: ['Word', 'Excel', 'PowerPoint'],
      details: {
        context: {
          fr: 'Entreprise spécialisée dans l\'aménagement, la menuiserie, le bois et la plâtrerie — St Martin du Manoir.',
        },
        tasks: {
          fr: [
            'Repérage de Travaux',
            'Calculs de métré',
            'Création d\'affiches "Présentation de l\'employé" pour l\'entreprise',
            'Utilisation des outils bureautiques (Word, Excel, PowerPoint)',
            'Consultations de mails',
            'Quantitatif',
          ],
        },
        env: {
          fr: 'Word / Excel / PowerPoint',
        },
      },
    },
    {
      id: 'dubernet-stage',
      company: { fr: 'Cabinet Dubernet Architecte' },
      role: { fr: 'Stage d\'observation — 3ème' },
      type: { fr: 'Stage' },
      period: { fr: 'Décembre 2018' },
      description: {
        fr: 'Stage d\'observation au sein d\'un cabinet d\'architectes au Havre.',
      },
      techs: ['AutoCAD'],
      details: {
        context: {
          fr: 'Cabinet d\'architectes — Le Havre.',
        },
        tasks: {
          fr: [
            'Observation du fonctionnement d\'un cabinet d\'architectes',
            'Découverte des métiers de l\'architecture et du design',
            'Dessin de plan sur papier',
            'Dessin de plan sur Autocad',
            'Maquette en carton',
          ],
        },
        env: {
          fr: 'AutoCAD',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'INCO Academy — Villa Raphaëlle, Le Havre' },
      degree: { fr: 'Formation Découverte "Get Into Tech"' },
      specialty: { fr: 'Web Design, Développement Web et Marketing digital' },
      period: 'Janvier 2026 - Février 2026',
    },
    {
      school: { fr: 'Lycée Schuman-Perret — Le Havre' },
      degree: { fr: 'BTS MEC (Management Économique de la Construction)' },
      specialty: { fr: 'Logiciels Word, PowerPoint, Canva, Excel — Devis de chantiers, Chiffrage' },
      period: '2022 - 2024',
    },
    {
      school: { fr: 'Lycée Schuman-Perret — Le Havre' },
      degree: { fr: 'BAC STI2D (Sciences et Technologies de l\'Industrie et du Développement Durable)' },
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
    },
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'EXPÉRIENCES' },
      education: { fr: 'FORMATIONS' },
      projects: { fr: 'PROJETS' },
      hobbies: { fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { fr: 'Missions :' },
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
