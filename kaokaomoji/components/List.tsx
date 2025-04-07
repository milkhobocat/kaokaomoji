"use client"
import React from 'react'
import Kaomojis from "@/data/kaomojis.json"
import MagicButton from './ui/MagicButton'

const List = () => {
  return (
    <div className="space-y-10 pb-10 px-2">
      {Kaomojis && Kaomojis.map((kaomojiCategory, index) => (
        <div key={index}>
          <div className="font-bold mb-1 text-center text-white 
  drop-shadow-[0_0_2px_#d43b5c,0_0_10px_#d43b5c]
">{kaomojiCategory.tag}</div>
          <div className="flex justify-center flex-wrap gap-4">
            {kaomojiCategory.kaomoji && kaomojiCategory.kaomoji.map((face, i) => (
              <MagicButton key={i}>
                {face}
              </MagicButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
