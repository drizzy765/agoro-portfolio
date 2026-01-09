
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group glass rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:border-neon-green hover:glow-green relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neon-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] uppercase tracking-widest text-neon-blue font-bold px-2 py-1 rounded bg-neon-blue/10">
          {project.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors flex items-center gap-2">
        {project.title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-neon-green hover:bg-neon-green/80 text-black font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 text-sm"
          >
            <ExternalLink size={16} />
            Live App
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 text-sm"
          >
            <Github size={16} />
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
