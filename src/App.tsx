import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Brain, Database, LineChart, Terminal, UserCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Rocío Baigorria</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data Scientist
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transforming data into actionable insights through analysis and machine learning
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get in Touch
              </a>
              <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Data visualization" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="Machine Learning"
              description="Experience with supervised and unsupervised learning algorithms, model evaluation, and deployment"
            />
            <SkillCard 
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Data Analysis"
              description="Proficient in data cleaning, exploration, and visualization using Python and SQL"
            />
            <SkillCard 
              icon={<LineChart className="w-8 h-8 text-blue-600" />}
              title="Statistical Analysis"
              description="Strong foundation in statistical methods and hypothesis testing"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
              title="Customer Churn Prediction"
              description="Built a machine learning model to predict customer churn with 85% accuracy"
              tags={["Python", "Scikit-learn", "Pandas"]}
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              title="Sales Forecasting"
              description="Developed time series models to forecast monthly sales for a retail client"
              tags={["Python", "Prophet", "Power BI"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            <SocialLink icon={<Github />} href="https://github.com/tuni56" label="GitHub" />
            <SocialLink icon={<Linkedin />} href="https://linkedin.com/in/rociobaigorria" label="LinkedIn" />
            <SocialLink icon={<Mail />} href="mailto:rociomnbaigorria@gmail.com" label="Email" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Rocío Baigorria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ image, title, description, tags }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon, href, label }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default App;