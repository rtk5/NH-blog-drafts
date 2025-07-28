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
      title: "BrainHack Hackathon",
      date: "Sep 15, 2024",
      type: "24h Hackathon",
      description: "40 teams competed with healthcare AI problem statements",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Visionary Talks: Dr. Ananya Rao",
      date: "Nov 21, 2024",
      type: "Speaker Session",
      description: "AI in Medical Imaging - Industry insights and applications",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "ML 101 Workshop",
      date: "Jan 12, 2025",
      type: "Hands-on Workshop",
      description: "From regression to CNN in 4 intensive hours",
      image:
        "https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero/>

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

{/* Events Section */}
  <section className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          <span className="glow-text">Upcoming Semester Events</span>
        </h2>

        <div className="relative border-l-2 border-primary-accent pl-6 space-y-10">
          {[
            { title: "Freshers Event", date: "TBD", description: "Welcome and orientation for new members" },
            { title: "Workshop 1", date: "August 20, 2025", description: "Introductory technical workshop to kick off the semester" },
            { title: "Pre-Hackathon Workshop", date: "September 10, 2025", description: "Skill-building and team formation before the hack" },
            { title: "Hackathon", date: "September 12–13, 2025", description: "24 hours of innovation and collaboration" },
            { title: "Workshop 3", date: "October 8, 2025", description: "Advanced concepts & practical applications" },
            { title: "Maaya Event", date: "TBD", description: "Annual cultural + tech fest — details coming soon!" },
          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute w-4 h-4 bg-primary-accent rounded-full -left-[0.55rem] top-1.5 border-2 border-primary-bg" />
              <div className="ml-4">
                <h3 className="text-xl font-poppins font-semibold text-primary-accent">
                  {event.title}
                </h3>
                <p className="text-sm text-primary-gray-400 mb-1">{event.date}</p>
                <p className="text-primary-gray-300 font-inter">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
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
                  <p className="text-primary-gray-400 font-inter">
                    {event.description}
                  </p>
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
              Become a neuron in our hive and help shape the future of AI at
              PESU EC
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
