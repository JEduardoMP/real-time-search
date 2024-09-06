'use client'
import { useState } from 'react'
import items from './data/items.json'
import { APP_MESSAGES } from './userFacingMessages'

// Improvements
// 1. using useDebounce for futures requests
// 2. Feedback item for a better UX

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{APP_MESSAGES.TITLE}</h1>
      <input
        type="text"
        placeholder="Search items..."
        className="w-full p-2 mb-4 border rounded text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredItems.map(item => (
          <li key={item.id} className="p-2 bg-gray-100 text-black rounded">
            <span className="font-semibold">{item.name}</span> - {item.category}
          </li>
        ))}
      </ul>
    </div>
  )
}