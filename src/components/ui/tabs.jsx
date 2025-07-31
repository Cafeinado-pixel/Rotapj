import React, { useState } from 'react';

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      {React.Children.toArray(children).find(c => c.type.displayName === 'TabsList') &&
        React.cloneElement(
          React.Children.toArray(children).find(c => c.type.displayName === 'TabsList'),
          { value, setValue }
        )}
      {React.Children.toArray(children).filter(
        c => c.type.displayName === 'TabsContent' && c.props.value === value
      )}
    </div>
  );
}
export function TabsList({ children, value, setValue, className = '' }) {
  return <div className={className}>{React.Children.map(children, c =>
    React.cloneElement(c, { active: c.props.value === value, setValue })
  )}</div>;
}
export function TabsTrigger({ children, value, active, setValue, className = '' }) {
  return (
    <button
      className={`${active ? 'bg-blue-600 text-white' : 'bg-white'} py-2 px-4 rounded ${className}`}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}
export function TabsContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}
Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';