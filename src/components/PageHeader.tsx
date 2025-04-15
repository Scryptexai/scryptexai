
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-scryptex-text">{title}</h1>
      {subtitle && <p className="text-sm text-scryptex-muted mt-1">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
