import Welcome from './components/Welcome.jsx';
import InputForm from './components/InputForm.jsx';
import Results from './components/Results.jsx';
import { vaccineRecommendations } from './data/vaccineData.js';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');

  const goNext = () => setStep((s) => Math.min(s + 1, 3));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="container">
      {step === 1 && (
        <Welcome onStart={goNext} />
      )}
      {step === 2 && (
        <InputForm
          onAgeSelect={setAgeGroup}
          onGenderSelect={setGender}
          onNext={goNext}
          onBack={goBack}
        />
      )}
      {step === 3 && (
        <Results
          ageGroup={ageGroup}
          gender={gender}
          onBack={goBack}
        />
      )}
    </div>
  );
}
export default App;
