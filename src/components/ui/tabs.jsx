import React, { useState } from 'react';

export function Tabs({ defaultValue, children, className = '' }) {
  const [tab, setTab] = useState(defaultValue);
  return <div className={className}>{React.Children.map(children, child => React.cloneElement(child, { tab, setTab }))}</div>;
}

export function TabsList({ children, className = '' }) {
  return <div className={`flex gap-2 mb-4 ${className}`}>{children}</div>;
}

export function TabsTrigger({ children, value, tab, setTab, className = '' }) {
  const active = tab === value;
  return (
    <button
      onClick={() => setTab(value)}
      className={`px-3 py-2 rounded-lg border ${active ? 'bg-blue-600 text-white' : 'bg-white'} ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, tab, className = '' }) {
  return tab === value ? <div className={className}>{children}</div> : null;
}
