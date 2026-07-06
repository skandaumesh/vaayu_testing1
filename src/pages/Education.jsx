import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import headerBg from "../assets/img/PIC2.jpg";
import asthmaImage from "../assets/img/asthma_symptoms_mosaic.png";
import triggersImage from "../assets/img/images.png";
import diagnosisImage from "../assets/img/dia-H.jpg";

const educationData = [
  { title: "Asthma", content: "A condition in which your airways narrow and swell and may produce extra mucus, causing breathing difficulties." },
  { title: "COPD", content: "Chronic Obstructive Pulmonary Disease (COPD) is a chronic lung condition that blocks airflow and makes it difficult to breathe." },
  { title: "Interstitial Lung Disease", content: "A group of disorders causing scarring of lung tissue, affecting breathing and oxygen exchange." },
  { title: "Sarcoidosis", content: "An inflammatory disease that affects multiple organs, primarily the lungs and lymph glands." },
  { title: "Bronchiectasis", content: "A condition where the airways become abnormally widened, leading to mucus build-up and infection." },
  { title: "Pulmonary Hypertension", content: "High blood pressure in the arteries of the lungs, which can lead to heart failure." },
  { title: "Tuberculosis", content: "A contagious infection usually affecting the lungs, caused by the bacteria Mycobacterium tuberculosis." },
  { title: "Obstructive Sleep Apnea", content: "A condition where breathing repeatedly stops and starts during sleep due to throat muscles intermittently relaxing." },
  { title: "Lung Cancer", content: "A type of cancer that begins in the lungs and is often associated with smoking." },
  { title: "Lung Transplant", content: "A surgical procedure to replace a diseased or failing lung with a healthy one from a donor." },
];

const Education = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const isAsthma = selected === 0;

  const getConditionContent = () => {
    if (isAsthma) {
      return (
        <div className="p-6 rounded-lg shadow-inner">
          <div className="text-3xl font-bold mb-4">Asthma</div>
          <p className="text-[#3f472e] text-lg leading-relaxed mb-6">
            {educationData[0].content}
          </p>
          <img src={asthmaImage} alt="Asthma Symptoms" className="rounded-lg mb-6 shadow" />
          <h3 className="text-xl font-semibold mb-2">What causes Asthma?</h3>
          <ul className="list-disc list-inside text-[#3f472e]">
            <li>Family History</li>
            <li>Childhood Exposures</li>
            <li>Immune System Triggers</li>
            <li>Symptoms vary by individual</li>
          </ul>
        </div>
      );
    } else {
      const condition = educationData[selected];
      return (
        <div className="p-6 rounded-lg shadow-inner">
          <div className="text-3xl font-bold mb-4">{condition.title}</div>
          <p className="text-[#3f472e] text-lg leading-relaxed mb-6">
            {condition.content}
          </p>
          <img src={diagnosisImage} alt="Condition" className="rounded-lg mb-6 shadow" />
          <h3 className="text-xl font-semibold mb-2">Common Triggers</h3>
          <ul className="list-disc list-inside text-[#3f472e]">
            <li>Environmental exposure</li>
            <li>Air pollution</li>
            <li>Genetics</li>
            <li>Lifestyle choices</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-sans" style={{ backgroundColor: '#bfc0b4' }}>
      <aside className="w-full md:w-1/4 p-6 bg-[#ededeb] text-black">
        <ul className="space-y-2">
          {educationData.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                const titleSlug = item.title.toLowerCase().replace(/\s+/g, "-");
switch (titleSlug) {
  case "asthma":
    navigate("/specialty-clinic/asthma");
    break;
  case "copd":
    navigate("/specialty-clinic/copd");
    break;
  case "interstitial-lung-disease":
    navigate("/specialty-clinic/ild");
    break;
  case "pulmonary-hypertension":
    navigate("/specialty-clinic/pulmonary-hypertension");
    break;
  case "obstructive-sleep-apnea":
    navigate("/sleep-clinic/osa");
    break;
  case "lung-cancer":
    navigate("/patient-resources/education/lung-cancer");
    break;
  case "lung-transplant":
    navigate("/patient-resources/education/lung-transplant");
    break;
  case "tuberculosis":
    navigate("/patient-resources/education/tuberculosis");
    break;
     case "bronchiectasis":
    navigate("/patient-resources/education/bronchiectasis");
    break;
  default:
    setSelected(idx);
    break;
}

              }}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 ${
                selected === idx ? "bg-white text-[#3f472e] font-semibold" : "hover:bg-[#939587]"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
      <section className="w-full md:w-3/4 p-10 bg-white">
        {getConditionContent()}
      </section>
    </div>
  );
};

export default Education;
