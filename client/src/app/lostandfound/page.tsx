'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function LostAndFoundPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab'); // 'lost' or 'found'
  
  const [activeTab, setActiveTab] = useState<'lost' | 'found'>('lost');

  useEffect(() => {
    if (tabParam === 'found') setActiveTab('found');
    else setActiveTab('lost');
  }, [tabParam]);

  return (
    <div>
      {/* Tabs header */}
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'lost' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('lost')}
        >
          Lost Item
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'found' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('found')}
        >
          Found Item
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'lost' && (
          <div>
            <h2>Lost Item Form</h2>
            {/* Lost form goes here */}
          </div>
        )}
        {activeTab === 'found' && (
          <div>
            <h2>Found Item Form</h2>
            {/* Found form goes here */}
          </div>
        )}
      </div>
    </div>
  );
}