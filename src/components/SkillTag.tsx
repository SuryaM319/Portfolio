import React from 'react';

interface SkillTagProps {
  name: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const SkillTag: React.FC<SkillTagProps> = ({ name, color = 'primary' }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'secondary':
        return 'bg-secondary/20 text-secondary border-secondary/50';
      case 'accent':
        return 'bg-accent/20 text-accent border-accent/50';
      default:
        return 'bg-primary/20 text-primary border-primary/50';
    }
  };

  return (
    <div
      className={`px-4 py-2 rounded-md border ${getColorClasses()} inline-block m-1 glow-on-hover transition-all duration-300`}
    >
      {name}
    </div>
  );
};

export default SkillTag;