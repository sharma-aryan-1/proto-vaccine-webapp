import React from 'react';
import { motion } from 'framer-motion';


export default function Welcome({ onStart }) {
  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1>GetVax</h1>
      <p style={{marginBottom: "24px", color: "#345082", fontSize: "1.08rem"}}>
        Find out which vaccines you may need
      </p>
      <button onClick={onStart}>Start on this device</button>
      <hr style={{margin:"28px 0",width:"80%"}} />
      <p>Scan with your phone</p>
      <img 
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com/search?q=a+prototype" 
        alt="QR Code"
        style={{ width: 120, borderRadius: 12, marginTop: 16 }}
     />

    </motion.div>
  );
}


