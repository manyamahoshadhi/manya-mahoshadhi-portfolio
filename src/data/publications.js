/** Research publications — edit this file to update the Publications section. */
export const publications = [
  {
    id: 1,
    title:
      'Interactive Sign Language Learning System with Multimodal Emotion and Interaction Recognition Analysis',
    authors: ['K M Mahoshadhi','S N Rupasinghe','P A D K Lakshman','K S Dilumina','Samanthi E.R Siriwardana','I Weerathunga'],
    conference:
      '2026 IEEE International Conference on Humanoid Robotics and Applications (ICHoRA)',
    publisher: 'IEEE',
    year: '2026',
    type: 'Conference Paper',
    abstract:
      'Child-centric intelligent applications increasingly require adaptive mechanisms to understand emotional engagement and provide inclusive learning experiences. However, existing systems often rely on single-modal emotion recognition or non-interactive learning approaches, limiting reliability and accessibility. This paper presents a two-component intelligent framework that addresses these challenges through a multimodal emotion and interaction analysis module that fuses facial emotion recognition and hand movement intensity, and a gamified sign language learning and progress-tracking module designed for deaf and mute children. The first component employs an EfficientNet-B0-based facial emotion recognition model trained on FER2013 and fine-tuned using CK+, achieving 96.9% validation accuracy, combined with motion-based hand interaction analysis to generate stable session-level engagement insights. The second component introduces a camera-assisted, game-based sign language learning environment with a landmark-based DNN gesture validation model achieving 97% validation accuracy, along with a parent-oriented progress dashboard. Experimental results demonstrate improved robustness in engagement detection and effective learning support through gamification.',
    keywords: [
      'Hand Gesture Recognition',
      'Emotion Recognition',
      'Sign Language Learning',
      'Multimodal Analysis',
      'Accessible Computing',
      'Deep Neural Networks',
    ],
    doi: '10.1109/ICHoRA69329.2026.11537237',
    paperUrl: 'https://ieeexplore.ieee.org/document/11537237',
    status: 'Published',
  },
  {
    id: 2,

    title:
      'Interactive Learning and Multilingual Sign Recognition for Hearing-Impaired Children with Emotion Detection and Safety Systems',

    authors: [
      'K M Mahoshadhi',
      'S N Rupasinghe',
      'P A D K Lakshman',
      'K S Dilumina',
      'Samanthi E.R Siriwardana',
      'I Weerathunga',
    ],

    institution:
      'Sri Lanka Institute of Information Technology (SLIIT)',

    publisher: 'Undergraduate Research Project',
    year: '2025 - 2026',
    type: 'Final Year Research Project',

    abstract:
      'Developed an AI-powered child-centric assistive framework designed to improve communication accessibility, emotional understanding, learning engagement, and environmental safety for hearing-impaired children. The system integrates multimodal emotion recognition, gamified sign language learning, multilingual sign language recognition and translation for Sinhala Sign Language and American Sign Language, real-time sentence generation, and context-aware hazard detection within a unified intelligent environment.',

    keywords: [
      'Artificial Intelligence',
      'Sign Language Recognition',
      'Emotion Recognition',
      'Accessible Computing',
      'Assistive Technology',
      'Computer Vision',
      'Deep Learning',
    ],

    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'React Native',
      'Flask',
      'MediaPipe',
      'EfficientNet-B0',
      'MobileNetV2',
      'BiLSTM',
      'Computer Vision',
      'Deep Learning',
    ],

    components: [
      'Multimodal Emotion and Interaction Analysis',
      'Gamified Sign Language Learning with Gesture Validation',
      'Multilingual Sign Recognition and Translation for Sinhala Sign Language and American Sign Language',
      'Emergency Sound Tracking and Safety Alert System',
    ],

    contributions: [
      'Developed real-time sign language recognition and translation pipelines.',
      'Implemented multimodal emotion detection using facial expressions and hand movement analysis.',
      'Designed gamified learning modules with gesture validation and progress tracking.',
      'Integrated context-aware hazard detection and safety alert mechanisms.',
      'Contributed to the development of scalable mobile-assisted AI solutions for accessible learning environments.',
    ],

    githubUrl: 'https://github.com/SLIIT-Group-projects/Interactive-Learning-and-Multilingual-Sign-Recognition-with-Emotion-and-Safety-Support#',
    projectUrl: '',

    status: 'Completed',
  },
];

/**
 * Formats a publication into IEEE-style citation text.
 * Example: A. Author, "Title," in Conf. Name, Year. doi: ...
 */
export function formatIeeeCitation(pub) {
  const authorList = pub.authors
    .map((name, index) => {
      const parts = name.trim().split(/\s+/);
      if (parts.length === 1) return parts[0];
      const last = parts[parts.length - 1];
      const initials = parts
        .slice(0, -1)
        .map((n) => `${n.charAt(0).toUpperCase()}.`)
        .join(' ');
      const formatted = `${initials} ${last}`;
      return index === pub.authors.length - 1 && pub.authors.length > 1
        ? `and ${formatted}`
        : formatted;
    })
    .join(', ')
    .replace(', and', ', and');

  const doiPart = pub.doi ? ` doi: ${pub.doi}.` : '';
  return `${authorList}, "${pub.title}," in ${pub.conference}, ${pub.year}.${doiPart}`;
}
