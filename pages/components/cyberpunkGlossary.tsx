import React, { useState } from 'react';
import { Combobox } from '@headlessui/react'

const glossary = [
  {Term: 'S.B.R.', Meaning:'Synthesized Biochemical Robotics'},
  {Term: 'S.O.U.L.', Meaning:'Synthesized Organic Uploaded Lifeform'},
  {Term: 'B.R.A.I.N.', Meaning:'Biosynthesized Receptor-Activated Intelligent Neurofiber'},
  {Term: 'I.C.E.', Meaning:'Incursion Countermeasure Executable. Black Ice kills intruders.'},
  {Term: 'D.O.S.', Meaning:'Something really really old, “Dusty Old Shit”'},
  {Term: 'Meatspace', Meaning:' Real world'},
  {Term: 'Netpig', Meaning:'Net police'},
  {Term: 'Dock', Meaning:'Sex'},
  {Term: 'Picksocket', Meaning:'Pickpocket for tech slots'},
  {Term: 'Highrider', Meaning:'Space punk, cybernaut'},
  {Term: 'Chrome', Meaning:'Cybertech/cyberware human-integrated biotech aka wetware'},
  {Term: 'Vidiot', Meaning:'VR or game junky'},
  {Term: 'Killed', Meaning:'Zeroed, Drew an Ace, Ace of Spades'},
  {Term: 'Net', Meaning:'Cyberspace, Matrix'},
  {Term: 'Recycling', Meaning:'kill and take body to body bank'},
  {Term: 'Ferryman', Meaning:'Expert assassin'},
  {Term: 'Ronin', Meaning:'Street samurai freelance often untrustworthy where as samurai have code'},
  {Term: 'Cyberdeck', Meaning:'Hardware to link up'},
  {Term: 'Bankster', Meaning:'Financial gangster'},
  {Term: 'Combat Courier', Meaning:'Battle drivers through combat zones'},
  {Term: 'Badge', Meaning:'Police'},
  {Term: 'Adhocracy', Meaning:'Organization; the opposite of a bureaucracy; assembles and disassembles as needed'},
  {Term: 'Friend', Meaning:'Betch, Choom (Choomba)'},
  {Term: 'Cool', Meaning:'Nova, Bubbly, Chizz, Shiny'},
  {Term: 'Stupid', Meaning:'Crash, Duppy, Gonk, Scanbox (crazy), Bakebrain (moron)'},
  {Term: 'Deadhead', Meaning:'Suspended animation'},
  {Term: 'Fuck', Meaning:'Frack, Frag'},
  {Term: 'Message', Meaning:'Ping'},
  {Term: 'Shoot', Meaning:'Splash`'},
  {Term: 'Rogue', Meaning:'Untether (off-node) AIs'},
  {Term: 'Chrome', Meaning:'ngers - Psychosquad a.k.a. C-SWAT or Circuit Breakers'},
  {Term: 'Coyote', Meaning:'Smuggler (often smuggling people)'},
  {Term: 'Dead', Meaning:'esidents - Paper currency'},
  {Term: 'Iron', Meaning:'Weapons'},
  {Term: 'Corpse', Meaning:'CORPorate Security Expert (Assassin)'},
  {Term: 'Shoemaker', Meaning:'Create fake ID and credsticks'},
  {Term: 'Juggalo', Meaning:'Bozo gangers aka clowns'},
  {Term: 'Time', Meaning:'Clock i.e. “No clock for this” (I don’t have time for this)'},
  {Term: 'Money', Meaning:'Eddies, Nuyen, Scratch, Credits, Creds'},
  {Term: 'Wallet', Meaning:'Credstick'},

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