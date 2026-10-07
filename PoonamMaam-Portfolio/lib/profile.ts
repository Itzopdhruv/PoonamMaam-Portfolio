// Single source of truth for every fact shown on the site.
// Change a number or a name here and it updates in every section.

export const PROFILE = {
  name: 'Dr. Poonam Rani',
  title: 'Associate Professor',
  department: 'Department of Computer Science & Engineering',
  university: 'Netaji Subhas University of Technology (NSUT)',
  universityShort: 'NSUT',
  campus: 'NSUT Main Campus, Dwarka, New Delhi',
  email: 'poonam.rani@nsut.ac.in',
  phone: '011-25000051',
  phoneHref: 'tel:+911125000051',
  office: {
    room: 'Room No. 125, Block 5 (125/5)',
    lines: [
      'Department of Computer Science & Engineering',
      'Netaji Subhas University of Technology (NSUT)',
      'Sector 3, Dwarka',
      'New Delhi 110078, India',
    ],
    mapUrl: 'https://maps.google.com/?q=Netaji+Subhas+University+of+Technology+Dwarka+New+Delhi',
  },
  phd: 'Ph.D. in Computer Engineering, University of Delhi (2021)',
}

export const LINKS = {
  scholar: 'https://scholar.google.com/citations?user=_cDpLFAAAAAJ&hl=en',
  researchgate: 'https://www.researchgate.net/profile/Poonam-Rani-10',
  orcid: 'https://orcid.org/0000-0001-5866-238X',
  linkedin: 'https://www.linkedin.com/in/dr-poonam-rani-98998423b/',
  nsut: 'https://www.nsut.ac.in/en/node/255',
}

export const PROFILE_LINKS = [
  { name: 'Google Scholar', url: LINKS.scholar },
  { name: 'ResearchGate', url: LINKS.researchgate },
  { name: 'ORCID', url: LINKS.orcid },
  { name: 'LinkedIn', url: LINKS.linkedin },
  { name: 'NSUT Profile', url: LINKS.nsut },
]

// Headline metrics. Citations / h-index / i10 match Google Scholar.
export const STATS = [
  { value: 800, suffix: '+', label: 'Citations' },
  { value: 14, suffix: '', label: 'h-index' },
  { value: 60, suffix: '+', label: 'Publications' },
  { value: 18, suffix: '+', label: 'Years Experience' },
]

export const SCHOLAR_METRICS = [
  { value: '800+', label: 'Citations' },
  { value: '14', label: 'h-index' },
  { value: '19', label: 'i10-index' },
  { value: '60+', label: 'Publications' },
]

export const RESEARCH_AREAS = [
  {
    key: 'quantum',
    title: 'Quantum Computing',
    subtitle: 'Quantum Machine Learning',
    description:
      'Quantum-enhanced classifiers such as QEKLR and QSVC-based frameworks, and the use of quantum machine learning for healthcare prediction.',
    work: [
      'QEKLR: Quantum-enhanced kernel logistic regression — The Journal of Supercomputing, 2025',
      'QuMLF: Quantum framework for heart disease prediction using QSVC & GA — 2025',
      'Quantum Machine Learning: A Comprehensive Overview — IEEE ICCCNT, 2024',
    ],
  },
  {
    key: 'ai',
    title: 'Machine Learning & AI',
    subtitle: 'Deep Learning · Ensemble Models',
    description:
      'Deep learning for medical imaging, speech emotion recognition, drug–target interaction prediction and generative models.',
  },
  {
    key: 'blockchain',
    title: 'Blockchain Technology',
    subtitle: 'Security · Trust · Consensus',
    description:
      'Blockchain for fake-news and rumour detection, secure IoT healthcare, supply-chain traceability and consensus algorithms.',
  },
  {
    key: 'iot',
    title: 'Internet of Things',
    subtitle: 'Opportunistic IoT · VANETs',
    description:
      'Secure routing in opportunistic IoT, vehicular ad hoc networks, wireless sensor networks and Industrial IoT data compression.',
  },
  {
    key: 'sna',
    title: 'Social Network Analysis',
    subtitle: 'Graphs · Communities · Recommendation',
    description:
      'Fuzzy-graph social network models, community detection, link prediction and trust-aware recommender systems.',
  },
  {
    key: 'soft',
    title: 'Soft Computing',
    subtitle: 'Fuzzy Logic · Evolutionary Algorithms',
    description:
      'Fuzzy clustering, OWA operators, neuro-fuzzy prediction and genetic / swarm-based feature selection.',
  },
]

// In the order given by Dr. Rani.
export const PHD_SCHOLARS = [
  {
    name: 'Monika',
    area: 'Internet of Things',
    topic: 'Internet of Things and Vehicular Ad Hoc Networks (VANETs)',
    work: ['Vehicular Ad Hoc Network: A Review (ICICC 2023)'],
  },
  {
    name: 'Astha Tripathi',
    area: 'Machine Learning · Deep Learning',
    topic: 'Speech emotion recognition using machine learning and deep learning',
    work: [
      'DMSPC — meta-learner selection for stacked ensembles (IJCA, 2026)',
      'Multilingual SER using IGRFXG feature selection (Applied Acoustics, 2025)',
      'Improved MSER with grid-search PCA and ensemble voting (MTAP, 2024)',
    ],
  },
  {
    name: 'Shrestha Misra',
    area: 'Quantum Computing',
    topic: 'Quantum machine learning for classification and healthcare prediction',
    work: [
      'QEKLR: quantum-enhanced kernel logistic regression (J. Supercomputing, 2025)',
      'QuMLF: quantum framework for heart disease prediction (2025)',
      'Quantum Machine Learning: A Comprehensive Overview (ICCCNT 2024)',
    ],
  },
  {
    name: 'Aashima Mittal',
    area: 'Deep Learning · Drug Discovery',
    topic: 'Drug–target interaction prediction using deep learning and network embeddings',
    work: [
      'CAHNetF-DTP (Journal of Chemical Information and Modeling, 2026)',
      'SlideBERT-DTI (Global AI Summit, 2025)',
    ],
  },
  {
    name: 'Saurabhi Chowdhary',
    area: 'Healthcare AI',
    topic: "Machine learning and deep learning for early detection of Alzheimer's disease",
    work: [],
  },
  {
    name: 'Tushar Dahiya',
    area: 'Quantum Computing · Healthcare',
    topic: 'Quantum machine learning for brain tumour detection',
    work: [
      'Co-author of 2025 papers on Alzheimer’s MRI classification, skin cancer detection, drug–target interaction and image compression (Int. Conf. on Pioneering Developments in Computer Science, 2025)',
    ],
  },
]

export const MEMBERSHIPS = ['Senior Member, IEEE', 'Member, IETE', 'Member, ISTE']

export const ROLES = [
  'Chairperson, DTCRC (CSE)',
  'NBA / NAAC / NCC Coordinator',
  'Departmental Library Coordinator',
  'Member, DRC Committee in Computer Engineering under FOT',
  'Officer-in-Charge (OIC), Committee Room, CSE',
  'Executive Member, Alumni Affairs Interim (AAI)',
]

export const ACADEMIC_SERVICE = [
  'Invited Faculty Resource Person in Faculty Development Programmes',
  'Session Chair and Technical Programme Committee member at international conferences',
  'Reviewer for reputed international journals',
]

export type GalleryPhoto = { src: string; alt: string; caption: string; event: string; w: number; h: number; tall?: boolean; pos?: string }

export const GALLERY: GalleryPhoto[] = [
  { src: '/gallery/fdp-address.webp', alt: 'Dr. Poonam Rani addressing participants at the podium', caption: 'Addressing the participants', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '50% 30%', w: 1600, h: 1066 },
  { src: '/gallery/ieee-tensymp-2024-b.webp', alt: 'Dr. Poonam Rani at IEEE TENSYMP 2024', caption: 'IEEE TENSYMP 2024', event: 'IEEE Region 10 Symposium, Sep 2024', tall: true, pos: '62% 50%', w: 1200, h: 1600 },
  { src: '/gallery/research-award-ceremony-2023.webp', alt: 'Receiving the NSUT Research Award in 2023', caption: 'NSUT Research & Patent Award Ceremony 2023', event: 'Research Award, NSUT', pos: '45% 70%', w: 1057, h: 550 },
  { src: '/gallery/fdp-inaugural.webp', alt: 'Inaugural session of the five-day FDP', caption: 'Inaugural session', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '82% 50%', w: 1600, h: 994 },
  { src: '/gallery/research-award-a.webp', alt: 'Dr. Poonam Rani with her research award certificate', caption: 'Research Award', event: 'NSUT IQAC', tall: true, pos: '50% 15%', w: 646, h: 1600 },
  { src: '/gallery/fdp-participants-a.webp', alt: 'Group photo of FDP participants', caption: 'With the FDP participants', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '50% 60%', w: 1600, h: 868 },
  { src: '/gallery/ieee-tensymp-2024-a.webp', alt: 'Dr. Poonam Rani at the IEEE TENSYMP 2024 venue', caption: 'IEEE TENSYMP 2024', event: 'Hosted by NSUT, New Delhi', tall: true, pos: '55% 20%', w: 922, h: 1600 },
  { src: '/gallery/fdp-lamp-lighting.webp', alt: 'Lamp lighting at the inauguration', caption: 'Lamp lighting at the inauguration', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '55% 45%', w: 1600, h: 1018 },
  { src: '/gallery/research-award-ceremony-2023-24.webp', alt: 'Awardees at the NSUT Research Award Ceremony 2023-24', caption: 'Research Award Ceremony 2023-24', event: 'NSUT IQAC, 2025', tall: true, pos: '75% 85%', w: 738, h: 1600 },
  { src: '/gallery/fdp-certificates-a.webp', alt: 'Certificate distribution at the FDP', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '47% 30%', w: 1280, h: 806 },
  { src: '/gallery/fdp-dais.webp', alt: 'Dr. Poonam Rani speaking from the dais', caption: 'On the dais', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '82% 50%', w: 1600, h: 994 },
  { src: '/gallery/research-award-b.webp', alt: 'Dr. Poonam Rani being felicitated', caption: 'Felicitation', event: 'NSUT IQAC', tall: true, pos: '70% 35%', w: 738, h: 1600 },
  { src: '/gallery/fdp-students.webp', alt: 'Dr. Poonam Rani with students', caption: 'With students', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '60% 50%', w: 1280, h: 960 },
  { src: '/gallery/fdp-certificates-b.webp', alt: 'Presenting certificates to participants', caption: 'Presenting certificates', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '60% 30%', w: 1600, h: 950 },
  { src: '/gallery/fdp-participants-b.webp', alt: 'Participants of the FDP in the auditorium', caption: 'Participants', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '50% 60%', w: 1600, h: 796 },
  { src: '/gallery/fdp-team.webp', alt: 'Organising team of the FDP', caption: 'With the organising team', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '85% 30%', w: 1280, h: 791 },
  { src: '/gallery/fdp-certificates-c.webp', alt: 'Certificate distribution', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '60% 30%', w: 1600, h: 908 },
  { src: '/gallery/fdp-session.webp', alt: 'A session at the FDP', caption: 'Technical session', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '50% 50%', w: 1600, h: 1066 },
  { src: '/gallery/fdp-certificates-d.webp', alt: 'Certificate distribution', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '60% 30%', w: 1600, h: 978 },
  { src: '/gallery/fdp-participants-c.webp', alt: 'Group photo of participants', caption: 'Group photo', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '50% 55%', w: 1280, h: 960 },
  { src: '/gallery/fdp-certificates-e.webp', alt: 'Certificate distribution', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '62% 30%', w: 1600, h: 908 },
  { src: '/gallery/fdp-certificates-f.webp', alt: 'Certificate distribution', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '55% 30%', w: 1600, h: 1032 },
  { src: '/gallery/fdp-certificates-g.webp', alt: 'Certificate distribution', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '75% 30%', w: 1280, h: 853 },
  { src: '/gallery/fdp-certificates-h.webp', alt: 'Certificate distribution', caption: 'Certificate distribution', event: 'FDP · NLP & Generative AI, Dec 2024', pos: '50% 30%', w: 1600, h: 1066 },
]

// Latest first.
export const HIGHLIGHTS = [
  {
    year: '2026',
    title: 'IEEE International Conference — Manchester, UK',
    description: 'Presented her research at an IEEE international conference held in Manchester, United Kingdom.',
    category: 'International Conference',
    location: 'Manchester, UK',
    image: undefined as string | undefined,
    pos: undefined as string | undefined,
  },
  {
    year: '2026',
    title: 'Journal of Chemical Information and Modeling (ACS)',
    description:
      'CAHNetF-DTP, a community-aware heterogeneous network embedding framework for drug–target interaction prediction, published with PhD scholar Aashima Mittal.',
    category: 'Publication',
  },
  {
    year: '2025',
    title: 'NSUT Research Award 2023-24',
    description:
      'Honoured at the Research Award Distribution Ceremony 2023-24 organised by the Internal Quality Assurance Cell, NSUT.',
    category: 'Award',
    image: '/gallery/research-award-ceremony-2023-24.webp',
    pos: '75% 85%',
  },
  {
    year: '2025',
    title: 'Quantum machine learning in The Journal of Supercomputing',
    description:
      'QEKLR (quantum-enhanced kernel logistic regression) published in Springer’s The Journal of Supercomputing, alongside Applied Acoustics (Elsevier) work on multilingual speech emotion recognition.',
    category: 'Publication',
  },
  {
    year: '2024',
    title: 'Five-Day Workshop / FDP on Pioneering Advances in NLP & Generative AI',
    description: 'Five-day workshop and faculty development programme held at NSUT, 9–13 December 2024.',
    category: 'Faculty Development',
    location: 'NSUT, New Delhi',
    image: '/gallery/fdp-address.webp',
    pos: '50% 30%',
  },
  {
    year: '2024',
    title: 'IEEE TENSYMP 2024',
    description: 'Participated in the IEEE Region 10 Symposium (TENSYMP 2024), hosted by NSUT, 27–29 September 2024.',
    category: 'IEEE Symposium',
    location: 'New Delhi',
    image: '/gallery/ieee-tensymp-2024-b.webp',
    pos: '62% 50%',
  },
  {
    year: '2023',
    title: 'NSUT Research & Patent Award 2023',
    description:
      'Received a research award at the Second Research & Patent Award Distribution Ceremony 2023, organised by the Internal Quality Assurance Cell, NSUT.',
    category: 'Award',
    image: '/gallery/research-award-ceremony-2023.webp',
    pos: '45% 70%',
  },
  {
    year: '2023',
    title: 'Distinguished Speaker — Global Summit, London',
    description:
      'Invited Distinguished Speaker at the 2nd Global Summit on Advances in Earth Science and Climate Change (Adv. ESCC 2023), London, UK, presenting “Blockchain-based IoT enabled health-monitoring system”.',
    category: 'Invited Talk',
    location: 'London, UK',
  },
]
