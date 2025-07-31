import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Calendar, Cpu, Star } from "lucide-react";
import Hero from "../components/HomePage/Hero";

const Home = () => {
  const stats = [
    { number: "70+", label: "Active Members", icon: Users },
    { number: "5", label: "Events in 2024-25", icon: Calendar },
    { number: "10", label: "Live Projects", icon: Cpu },
  ];

 const events = [
  {
    title: "Reinforcement Learning Rewired",
    date: "Feb 12, 2025",
    type: "Competition",
    description: "Interactive workshop on RL fundamentals with Q-Learning and DeepSeek LLM experimentation",
    image: "https://i.postimg.cc/1tNSHRXV/rlr.jpg",
    attendees: 65,
    location: "Seminar Hall 1 - Electronic City Campus",
    time: "10:00 AM - 3:00 PM",
    status: "completed",
    highlights: [
      "Reinforcement Learning (Q-Learning)",
      "DeepSeek (Local LLMs)",
      "Python & OpenAI Gym-style Environments",
      "Agent Training Pipelines",
      "Game-based Simulation Environments"
    ]
  },
  {
    title: "Agentic 101",
    date: "Jan 29, 2025",
    type: "Hands-on Workshop",
    description: "Cutting-edge workshop on GenAI, RAG, and Agentic Patterns shaping intelligent systems",
    image: "https://i.postimg.cc/LsmkMhLL/Whats-App-Image-2025-07-27-at-12-20-40-20dfe780.jpg",
    attendees: 60,
    location: "Seminar Hall 1 - Electronic City Campus",
    time: "2:30 PM - 4:45 PM",
    status: "completed",
    highlights: [
      "Generative AI (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic Design Patterns",
      "Python-based Implementation Frameworks"
    ]
  },
  {
    title: "Canvas Clue",
    date: "Nov 6, 2024",
    type: "Workshop",
    description: "Data-driven mystery event combining ML techniques with art heist storytelling during Maaya fest",
    image: "https://i.postimg.cc/mgkz3MYd/can.jpg",
    attendees: 45,
    location: "Seminar Hall 1 - Electronic City Campus",
    time: "1:30 PM - 5:00 PM",
    status: "completed",
    highlights: [
      "Python (Pandas, Scikit-Learn)",
      "Outlier Detection Algorithms",
      "Exploratory Data Analysis (EDA)",
      "Classification & Predictive Modeling"
    ]
  }
];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center glass-card p-8 glow-border hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 text-primary-accent mx-auto mb-4" />
                <h3 className="text-4xl font-poppins font-bold glow-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-primary-gray-400 font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Timeline */}
      <section className="py-20 bg-background" id="upcoming-events">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold glow-text">
              Events for the Upcoming Semester
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-primary-accent z-0"></div>

            <div className="space-y-24">
              {[
                {
                  title: "Freshers Event",
                  date: "TBD",
                  description: "Welcome new members and introduce club activities.",
                },
                {
                  title: "Workshop 1",
                  date: "August 20, 2025",
                  description: "Hands-on session for beginner members.",
                },
                {
                  title: "Pre-Hackathon Workshop",
                  date: "September 10, 2025",
                  description: "Prep session to build hackathon-ready skills.",
                },
                {
                  title: "Hackathon",
                  date: "September 12–13, 2025",
                  description: "Flagship 24-hour hackathon of Neural Hive.",
                },
                {
                  title: "Workshop 3",
                  date: "October 8, 2025",
                  description: "Deeper dive into ML/AI applications.",
                },
                {
                  title: "Maaya Event",
                  date: "TBD",
                  description: "Showcase of AIML creativity during Maaya Fest.",
                },
              ].map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-center justify-between ${
                      isLeft ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Event card */}
                    <div className="md:w-5/12 z-10">
                      <div className="glass-card p-6 shadow-xl glow-border">
                        <h3 className="text-xl font-semibold glow-text">{event.title}</h3>
                        <p className="text-primary-gray-400 mt-2">{event.description}</p>
                        <div className="mt-4 inline-block px-3 py-1 bg-primary-accent/10 text-primary-accent font-semibold text-sm rounded-full shadow">
                          {event.date}
                        </div>
                      </div>
                    </div>

                    {/* Circle */}
                    <div className="z-20 w-fit absolute left-1/2 -translate-x-1/2">
                      <div className="w-5 h-5 rounded-full bg-primary-accent border-4 border-background"></div>
                    </div>

                    <div className="md:w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              <span className="glow-text">Event Spotlight</span>
            </h2>
            <p className="text-xl text-primary-gray-400 font-inter">
              Recent highlights from our innovation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card glow-border overflow-hidden group hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-accent text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-primary-accent text-sm font-semibold mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-poppins font-semibold mb-3">
                    {event.title}
                  </h3>
                  <p className="text-primary-gray-400 font-inter">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-12"
          >
            <Star className="h-16 w-16 text-primary-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-primary-gray-300 mb-8 font-inter">
              Become a neuron in our hive and help shape the future of AI at PESU EC
            </p>
            <Link to="/join" className="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
