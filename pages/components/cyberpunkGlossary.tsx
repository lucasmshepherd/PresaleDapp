import React, { useState } from 'react';
import { Combobox } from '@headlessui/react'

const glossary = [
  {Term: 'S.B.R.', Meaning: 'Synthesized Biochemical Robotics'},
  {Term: 'S.O.U.L.', Meaning: 'Synthesized Organic Uploaded Lifeform'},
]

export function CyberpunkGlossaryComboBox({ comboBoxClass,  optionBoxClass}: { comboBoxClass: string, optionBoxClass: string }) {
  const [selectedTerm, setSelectedTerm] = useState(glossary[0])
  const [query, setQuery] = useState('')

  const filteredTerms =
    query === ''
      ? glossary
      : glossary.filter((keyValue) => {
          return keyValue.Term.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedTerm} onChange={setSelectedTerm} 
    >
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} 
      className={comboBoxClass}/>
      <Combobox.Options
        className={optionBoxClass}>
        {filteredTerms.map((keyValue) => (
          <Combobox.Option key={keyValue.Term} value={keyValue.Term + ': ' + keyValue.Meaning}>
            {keyValue.Term}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}