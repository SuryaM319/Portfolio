import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  description,
}) => {
  return (
    <div className="card p-6 glow-on-hover">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-primary/20 mr-4">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{issuer}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        {description && <p className="text-gray-300">{description}</p>}
      </div>
    </div>
  );
};

export default CertificationCard;