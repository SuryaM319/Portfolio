import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags = [],
}) => {
  return (
    <div className="card glow-on-hover group">
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;