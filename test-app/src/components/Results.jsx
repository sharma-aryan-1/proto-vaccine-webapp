import React from 'react';
import { motion } from 'framer-motion';

import { vaccineRecommendations } from '../data/vaccineData.js';

export default function Results({ ageGroup, gender, onBack }) {
  const vaccines = vaccineRecommendations[ageGroup] || [];

  const handlePrint = () => {
    window.print();
  };


  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>Here are the vaccines you may need</h2>
      <ul>
        {vaccines.map((vax, idx) => (
          <li key={idx}>
            <span style={{ fontWeight: 700, color: "#1F3C88" }}>{vax.name}</span>
            <span style={{ color: "#345082", marginLeft: "8px", fontWeight: 500 }}>{vax.note}</span>
          </li>
        ))}
      </ul>
      <div style={{marginTop: "26px", width: "100%", textAlign: "center"}}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ width: "90%", margin: "6px 0", borderRadius: "10px" }}
        />
        <button 
            style={{ width: "90%", marginTop: "8px", fontWeight: 700 }}
            onClick={handlePrint}
            >Print
        </button>
        <button 
          style={{ marginTop: "14px", background: "#eee", color: "#1F3C88", fontWeight: 700 }}
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </motion.div>
  );
}
