import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InputForm({ onAgeSelect, onGenderSelect, onNext, onBack }) {
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>How old are you?</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "18px", flexWrap: "wrap", justifyContent: "center" }}>
        {["19-26", "27-49", "50-64", "65+"].map((range, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedAge(range);
              onAgeSelect(range);
            }}
            style={{
              border: selectedAge === range ? "2px solid #1F3C88" : "none",
              background: selectedAge === range
                ? "linear-gradient(90deg,#237EBF 0%,#38A1DB 100%)"
                : "",
            }}
          >
            {range}
          </button>
        ))}
      </div>
      <select
        style={{ width: "100%" }}
        value={selectedGender}
        onChange={e => {
          setSelectedGender(e.target.value);
          onGenderSelect(e.target.value);
        }}
      >
        <option value="">Select gender (optional)</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <div style={{ display: "flex", width: "100%", gap: "10px", marginTop: "20px" }}>
        <button 
          style={{ flex: 1, background: "#eee", color: "#1F3C88", fontWeight: 700 }}
          onClick={onBack}
        >
          Back
        </button>
        <button
          style={{ flex: 2, opacity: selectedAge ? 1 : 0.7, cursor: selectedAge ? "pointer" : "not-allowed", fontWeight: 700 }}
          onClick={onNext}
          disabled={!selectedAge}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
