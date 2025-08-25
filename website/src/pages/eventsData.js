import { Calendar, MapPin, Users, Clock, Star, Trophy, Mic, Code } from 'lucide-react';

// Upcoming Events Data
export const upcomingEvents = [
  // Add upcoming events here as they are announced
  // Example structure:
  {
    title: 'PreHack Workshop',
    date: '20th August, 2025',
    time: '10:00 AM - 3:00 PM',
    type: 'workshop',
    location: 'Seminar Hall 2 - Electronic City Campus',
    attendees: 65,
    status: 'completed',
    description: 'To be announced soon!!',
    highlights: [
      
    ],
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Trophy,
    featured: true
  }
];

// Past Events Data
export const pastEvents = [
  {
    title: 'Pixels2Patterns',
    date: '20th August, 2025',
    time: '2:00 PM - 5:00 PM',
    type: 'Hands-on workshop',
    location: 'PES University',
    attendees: 60,
    status: 'completed',
    description: 'Pixels2Patterns was an engaging and hands-on workshop organized by Neural Hive (AI & ML Club) that introduced students to the fundamentals of Convolutional Neural Networks (CNN) and their real-world applications. The workshop was designed for AI & ML enthusiasts eager to explore how machines interpret images and extract meaningful patterns. Through two interactive sessions, participants gained both theoretical understanding and practical experience in computer vision and deep learning.',
    highlights: [
      'Convolutional Neural Networks (CNN) architecture and implementation',
      'Computer vision fundamentals including feature extraction, detection, and classification',
      'Traditional image processing methods: edge, corner, and texture detection',
      'Modern neural network approaches and different network architectures',
      'CNN components: convolution, activation functions, pooling, flattening, fully connected layers',
      'Hands-on implementation of vanilla CNN on MNIST dataset',
      'Training models for handwritten digit recognition',
      'Understanding optimizers, loss functions, and softmax in deep learning context'
    ],
    image: 'https://pictures-for-websites.vercel.app/P2P.jpg', 
    icon: Code, 
    featured: false // Not specified as featured
  },
  {
    title: 'Reinforcement Learning Rewired',
    date: '12th February, 2025',
    time: '10:00 AM - 3:00 PM',
    type: 'Hands-on workshop',
    location: 'Seminar Hall 1 - Electronic City Campus',
    attendees: 65,
    status: 'completed',
    description: 'Reinforcement Learning Rewired was an interactive, hands-on workshop hosted by Neural Hive that introduced students to the fundamentals of Reinforcement Learning (RL) and its growing real-world applications. Designed around the concept of building intelligent agents, the session offered a fun, game-based approach to learning how AI makes decisions through trial and error. Participants got to experiment with DeepSeek, an open-source LLM that runs locally—giving them insights into GenAI while also highlighting the value of data privacy. They then built their own RL-powered agents using Q-Learning algorithms, putting theory into practice through mini-games like Tic-Tac-Toe, where the AI learned and improved with every move.',
    highlights: [
      'Reinforcement Learning (Q-Learning)',
      'DeepSeek (Local LLMs)',
      'Python & OpenAI Gym-style Environments',
      'Agent Training Pipelines',
      'Game-based Simulation Environments',
      'Understanding how RL enables agents to make autonomous decisions based on rewards and feedback',
      'Hands-on experience in implementing RL algorithms in gaming scenarios',
      'Understanding how local LLMs like DeepSeek support privacy-friendly AI experimentation'
    ],
    image: 'https://i.postimg.cc/1tNSHRXV/rlr.jpg',
    icon: Trophy,
    featured: true
  },
  {
    title: 'Agentic 101',
    date: '29th Jan 2025',
    time: '2:30 PM - 4:45 PM',
    type: 'Hands-on Workshop',
    location: 'Seminar Hall 1 - Electronic City Campus',
    attendees: 60,
    status: 'completed',
    description: 'AGENTIC 101 was an engaging workshop conducted by Neural Hive that introduced participants to some of the most cutting-edge concepts in the AI landscape—Generative AI (GenAI), Retrieval-Augmented Generation (RAG), and Agentic Patterns. The session provided valuable insights into the emerging ideas that are shaping the future of intelligent systems. The workshop covered how GenAI models can generate coherent, creative content, how RAG enables AI to augment its responses with real-time, context-aware information, and how agentic patterns allow AI systems to go beyond reactive responses—toward goal-driven planning and autonomous behavior.',
    highlights: [
      'Generative AI (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic Design Patterns',
      'Python-based Implementation Frameworks',
      'Understanding how GenAI models create human-like responses and creative outputs',
      'Learned how RAG and agentic systems make AI more context-aware and autonomous'
    ],
    image: 'https://i.postimg.cc/LsmkMhLL/Whats-App-Image-2025-07-27-at-12-20-40-20dfe780.jpg',
    icon: Code
  },
  {
    title: 'Canvas Clue',
    date: '6th November, 2024',
    time: '1:30 PM - 5:00 PM',
    type: 'Workshop',
    location: 'Seminar Hall 1 - Electronic City Campus',
    attendees: 45,
    status: 'completed',
    description: 'As part of PES University\'s annual techno-cultural fest Maaya, Neural Hive hosted Canvas Clue—a data-driven mystery event where machine learning met storytelling. The session challenged participants to act as data detectives, unraveling an art heist mystery using real-world ML techniques. Teams worked through a series of pop-culture-inspired datasets, using outlier detection, classification models, and data exploration to identify stolen artworks and track down fictional crime syndicates. With four flags to uncover and a dramatic final puzzle, the event combined critical thinking, creative problem-solving, and technical skills in a one-of-a-kind ML experience.',
    highlights: [
      'Python (Pandas, Scikit-Learn)',
      'Outlier Detection Algorithms',
      'Exploratory Data Analysis (EDA)',
      'Classification & Predictive Modeling',
      'Learning how to apply ML techniques like outlier detection in unconventional, story-driven contexts',
      'Gaining experience in team-based problem-solving using real-world data'
    ],
    image: 'https://i.postimg.cc/mgkz3MYd/can.jpg',
    icon: Mic
  },
  {
    title: 'Establishing Causality in Complex Mental Issues using AI',
    date: '16th October, 2024',
    time: '6:00 PM - 8:00 PM',
    type: 'Webinar',
    location: 'Webinar held on Google Meet',
    attendees: 50,
    status: 'completed',
    description: 'In collaboration with WEAL, Neural Hive hosted an insightful webinar on the intersection of AI and Mental Health, featuring Ayushi Agarwal, Head of Data Science at United We Care. The session provided a deep dive into how AI technologies are being applied to address complex challenges in mental health care. From causality analysis to the use of advanced models like Spatio-Temporal Graph Neural Networks, the webinar emphasized the need for ethical AI practices while showcasing the transformative role of data science in personalized healthcare.',
    highlights: [
      'Spatio-Temporal Graph Neural Networks (GNNs)',
      'Causal Inference Models',
      'AI-driven Mental Health Monitoring Tools',
      'Data Ethics Frameworks',
      'Gaining awareness of how advanced AI models can be responsibly applied in mental health',
      'Understanding the importance of causality and ethical AI in healthcare solutions'
    ],
    image: 'https://i.postimg.cc/c1TLDC4P/cas.jpg',
    icon: Trophy,
    featured: true
  },
  {
    title: 'Filter Fiesta',
    date: '17th April, 2024',
    time: '2:30 PM - 4:30 PM',
    type: 'Workshop',
    location: 'Seminar Hall 1 - Electronic City Campus',
    attendees: 60,
    status: 'completed',
    description: 'Filter Fiesta marked the beginning of our club\'s hands-on journey into applied AI. In this interactive workshop, participants learned how to create real-time Snapchat-style face filters using Python, OpenCV, and MediaPipe. By detecting facial landmarks and applying custom visual effects, attendees explored the foundations of computer vision and real-time image processing. The session provided practical exposure to facial recognition pipelines that are widely used in augmented reality, virtual try-ons, and next-generation user experiences in the tech industry.',
    highlights: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'Computer Vision Algorithms',
      'Understanding the pipeline of face detection and landmark mapping',
      'Hands-on experience with integrating AI models into live, interactive applications'
    ],
    image: 'https://i.postimg.cc/rwkZKV5F/filtrer.jpg',
    icon: Code
  }
];

// Event Statistics Data
export const eventStats = [
  { number: '5', label: 'Events Conducted', sublabel: '2024-25 Academic Year' },
  { number: '810+', label: 'Total Attendees', sublabel: 'Across all events' },
  { number: '40', label: 'Teams Participated', sublabel: 'In hackathons' },
  { number: '100%', label: 'Success Rate', sublabel: 'Event completion' }
];