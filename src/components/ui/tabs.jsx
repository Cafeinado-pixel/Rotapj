
import React, { useState } from 'react';
export function Tabs({ children, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    return <div>{React.Children.map(children, child => React.cloneElement(child, { value, setValue }))}</div>;
}
export function TabsList({ children }) { return <div>{children}</div>; }
export function TabsTrigger({ value, setValue, children }) {
    return <button onClick={() => setValue(value)}>{children}</button>;
}
export function TabsContent({ value, children, setValue }) {
    return value === setValue ? <div>{children}</div> : null;
}
