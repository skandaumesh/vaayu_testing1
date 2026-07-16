// Route-level SEO: gives every page a unique title, meta description and
// canonical URL. Pages that manage their own head tags via Helmet are
// skipped (SKIP list). Unmapped routes get a readable fallback built from
// the URL slug.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE = "https://vaayuchest.com";
const BRAND = "Vaayu Chest & Sleep Specialists, Bengaluru";

// Event pages own their SEO (react-helmet-async with schema)
const SKIP = ["/revive-2026", "/rehab-conference", "/capi-2025"];

const META = {
  "/": {
    t: "Vaayu Chest & Sleep Specialists | Pulmonologist & Sleep Clinic in Bengaluru",
    d: "Chest, sleep and rehabilitation specialty centre in Bengaluru — asthma, COPD, ILD, sleep apnea, allergy testing and pulmonary & cardiac rehab under one roof. Book an appointment.",
  },
  "/about": {
    t: "About Us | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Meet the team behind Vaayu Chest & Sleep Specialists — Bengaluru's dedicated centre for respiratory medicine, sleep disorders and rehabilitation.",
  },
  "/contact": {
    t: "Contact & Appointments | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Book an appointment with Vaayu Chest & Sleep Specialists, Bengaluru. Call +91 63649 28680 or email admin@vaayuchest.com.",
  },
  "/appointment": {
    t: "Book an Appointment | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Book a consultation with pulmonologists and sleep specialists in Bengaluru. Same-week appointments for chest, sleep and rehabilitation care.",
  },
  "/general-opd": {
    t: "General Chest OPD in Bengaluru | Vaayu Chest & Sleep Specialists",
    d: "Walk-in chest OPD in Bengaluru for cough, breathlessness, wheezing and chest infections — evaluation by experienced pulmonologists.",
  },
  "/specialty-clinic": {
    t: "Specialty Chest Clinics in Bengaluru | Asthma, COPD, ILD | Vaayu",
    d: "Dedicated specialty clinics in Bengaluru for asthma, COPD, ILD, sarcoidosis and pulmonary hypertension with protocol-based care.",
  },
  "/specialty-clinic/asthma": {
    t: "Asthma Clinic & Treatment in Bengaluru | Vaayu Chest Specialists",
    d: "Asthma diagnosis and long-term control in Bengaluru — spirometry, inhaler technique training and personalised action plans.",
  },
  "/specialty-clinic/copd": {
    t: "COPD Clinic & Treatment in Bengaluru | Vaayu Chest Specialists",
    d: "COPD assessment and management in Bengaluru — lung function testing, inhaler therapy, pulmonary rehabilitation and flare-up prevention.",
  },
  "/specialty-clinic/ild": {
    t: "ILD (Interstitial Lung Disease) Clinic in Bengaluru | Vaayu",
    d: "Interstitial lung disease and pulmonary fibrosis clinic in Bengaluru — HRCT review, antifibrotic therapy and rehabilitation support.",
  },
  "/specialty-clinic/sarcoidosis": {
    t: "Sarcoidosis Clinic in Bengaluru | Vaayu Chest Specialists",
    d: "Specialised sarcoidosis evaluation and treatment in Bengaluru, from diagnosis to long-term monitoring.",
  },
  "/specialty-clinic/pulmonary-hypertension": {
    t: "Pulmonary Hypertension Clinic in Bengaluru | Vaayu",
    d: "Pulmonary hypertension diagnosis and management in Bengaluru — echo-based screening, therapy and rehabilitation.",
  },
  "/sleep-clinic": {
    t: "Sleep Clinic in Bengaluru | Sleep Study & Apnea Treatment | Vaayu",
    d: "Comprehensive sleep clinic in Bengaluru — sleep studies, sleep apnea (OSA) treatment, CPAP titration, insomnia and snoring care.",
  },
  "/sleep-clinic/osa": {
    t: "Sleep Apnea (OSA) Treatment in Bengaluru | Vaayu Sleep Clinic",
    d: "Obstructive sleep apnea diagnosis and CPAP treatment in Bengaluru — home and in-lab sleep studies with specialist follow-up.",
  },
  "/sleep-clinic/snoring": {
    t: "Snoring Treatment in Bengaluru | Vaayu Sleep Clinic",
    d: "Snoring evaluation in Bengaluru — identify the cause with a sleep study and get targeted treatment options.",
  },
  "/sleep-clinic/insomnia": {
    t: "Insomnia Treatment in Bengaluru | Vaayu Sleep Clinic",
    d: "Insomnia assessment and treatment in Bengaluru, including CBT-I-based approaches and sleep hygiene programs.",
  },
  "/sleep-clinic/parasomnias": {
    t: "Parasomnia Clinic in Bengaluru | Vaayu Sleep Specialists",
    d: "Evaluation of sleepwalking, night terrors and other parasomnias in Bengaluru by sleep medicine specialists.",
  },
  "/allergy-immunology": {
    t: "Allergy & Immunology Clinic in Bengaluru | Vaayu",
    d: "Allergy and immunology care in Bengaluru — skin prick testing, allergic rhinitis and asthma allergy management.",
  },
  "/allergy-immunology/allergy-testing": {
    t: "Allergy Testing in Bengaluru | Skin Prick Test | Vaayu",
    d: "Comprehensive allergy testing in Bengaluru — skin prick tests and specific IgE panels with specialist interpretation.",
  },
  "/allergy-immunology/immunotherapy": {
    t: "Allergen Immunotherapy in Bengaluru | Vaayu",
    d: "Allergen immunotherapy (desensitisation) in Bengaluru for long-term relief from allergic rhinitis and asthma triggers.",
  },
  "/pulmonary-rehab": {
    t: "Pulmonary Rehabilitation in Bengaluru | Vaayu Chest Specialists",
    d: "Structured pulmonary rehabilitation programs in Bengaluru for COPD, ILD, post-COVID and chronic lung disease — supervised by specialists.",
  },
  "/pulmonary-rehab/cardiac": {
    t: "Cardiac Rehabilitation in Bengaluru | Vaayu",
    d: "Medically supervised cardiac rehabilitation in Bengaluru — exercise training, risk-factor management and recovery after cardiac events.",
  },
  "/pulmonary-rehab/pulmonary": {
    t: "Lung Rehabilitation Program in Bengaluru | Vaayu",
    d: "Personalised lung rehabilitation in Bengaluru — breathing retraining, exercise conditioning and education for chronic lung disease.",
  },
  "/pulmonary-rehab/pulmonaryhypertensionrehab": {
    t: "Pulmonary Hypertension Rehabilitation in Bengaluru | Vaayu",
    d: "Specialised rehabilitation for pulmonary hypertension patients in Bengaluru with safe, monitored exercise programs.",
  },
  "/pulmonary-rehab/pain-management": {
    t: "Pain Management in Bengaluru | Vaayu Rehabilitation",
    d: "Multidisciplinary pain management in Bengaluru as part of comprehensive rehabilitation care.",
  },
  "/rehab-wellness": {
    t: "Rehabilitation & Wellness Centre in Bengaluru | Vaayu",
    d: "Rehabilitation and wellness programs in Bengaluru — physiotherapy, clinical yoga, occupational therapy and stress management.",
  },
  "/rehab-wellness/clinical-yoga": {
    t: "Clinical Yoga for Lung Health in Bengaluru | Vaayu",
    d: "Clinical yoga programs in Bengaluru designed for respiratory and cardiac patients, guided by trained therapists.",
  },
  "/rehab-wellness/cancer-rehab": {
    t: "Cancer Rehabilitation in Bengaluru | Vaayu",
    d: "Onco-rehabilitation in Bengaluru — regain strength, function and quality of life during and after cancer treatment.",
  },
  "/rehab-wellness/occupational-therapy": {
    t: "Occupational Therapy in Bengaluru | Vaayu",
    d: "Occupational therapy in Bengaluru to restore independence in daily activities for respiratory and neuro patients.",
  },
  "/rehab-wellness/stress-management": {
    t: "Stress Management Programs in Bengaluru | Vaayu",
    d: "Clinician-led stress management and relaxation programs in Bengaluru for better sleep and breathing.",
  },
  "/rehab-wellness/integrated-cardio-pulmonary": {
    t: "Integrated Cardio-Pulmonary Rehab in Bengaluru | Vaayu",
    d: "Combined heart and lung rehabilitation in Bengaluru with monitored exercise and education.",
  },
  "/rehab-wellness/therapy": {
    t: "Physiotherapy in Bengaluru | Vaayu Rehabilitation",
    d: "Chest physiotherapy and rehabilitation therapy in Bengaluru delivered by specialised respiratory physiotherapists.",
  },
  "/rehab-wellness/wellness": {
    t: "Wellness Programs in Bengaluru | Vaayu",
    d: "Preventive wellness programs in Bengaluru — breathe easy, sleep well, live well with Vaayu's specialist-led plans.",
  },
  "/home-care": {
    t: "Home Care Services in Bengaluru | Nursing, Testing, Rehab | Vaayu",
    d: "Medical home care in Bengaluru — home nursing, home sleep testing, physiotherapy at home, medications and injections.",
  },
  "/home-care/home-nursing": {
    t: "Home Nursing Services in Bengaluru | Vaayu",
    d: "Trained home nursing in Bengaluru for respiratory and post-hospital care, coordinated by specialists.",
  },
  "/home-care/home-testing": {
    t: "Home Sleep Study & Lab Tests in Bengaluru | Vaayu",
    d: "Home-based diagnostics in Bengaluru — sleep studies, blood tests and monitoring without visiting the clinic.",
  },
  "/home-care/home-rehab": {
    t: "Home Physiotherapy & Rehab in Bengaluru | Vaayu",
    d: "Rehabilitation at home in Bengaluru — physiotherapy and breathing exercises supervised by Vaayu's rehab team.",
  },
  "/home-care/medications": {
    t: "Home Medication Support in Bengaluru | Vaayu",
    d: "Medication delivery and administration support at home in Bengaluru for chronic respiratory patients.",
  },
  "/home-care/injectionsantibiotics": {
    t: "Home Injections & IV Antibiotics in Bengaluru | Vaayu",
    d: "Safe administration of injections and IV antibiotics at home in Bengaluru by trained nursing staff.",
  },
  "/preventive-clinics": {
    t: "Preventive Health Clinics in Bengaluru | Vaayu",
    d: "Preventive care in Bengaluru — lung health checks and tobacco cessation programs by chest specialists.",
  },
  "/preventive-clinics/health-checks": {
    t: "Lung Health Check Packages in Bengaluru | Vaayu",
    d: "Comprehensive lung and sleep health check packages in Bengaluru — spirometry, imaging and specialist consult.",
  },
  "/preventive-clinics/tobacco-cessation": {
    t: "Tobacco & Smoking Cessation Clinic in Bengaluru | Vaayu",
    d: "Quit smoking with Bengaluru's specialist-led tobacco cessation clinic — counselling, medication and follow-up.",
  },
  "/allied-services": {
    t: "Allied Specialty Services in Bengaluru | ENT, Diet, Psychology | Vaayu",
    d: "Allied care at Vaayu Bengaluru — ENT, pediatric pulmonology, clinical psychology, diet and weight management.",
  },
  "/allied-services/ent": {
    t: "ENT Services in Bengaluru | Vaayu",
    d: "ENT consultation in Bengaluru for snoring, sinusitis and airway problems linked to sleep and breathing.",
  },
  "/allied-services/pediatric-pulmonology": {
    t: "Pediatric Pulmonology in Bengaluru | Child Chest Specialist | Vaayu",
    d: "Child chest specialists in Bengaluru — asthma, recurrent cough and breathing problems in children.",
  },
  "/allied-services/clinical-psychology": {
    t: "Clinical Psychology Services in Bengaluru | Vaayu",
    d: "Clinical psychology support in Bengaluru for sleep, stress and chronic illness coping.",
  },
  "/allied-services/diet": {
    t: "Diet & Nutrition Counselling in Bengaluru | Vaayu",
    d: "Dietician-led nutrition plans in Bengaluru for respiratory health, weight and lifestyle disease management.",
  },
  "/allied-services/weight-management": {
    t: "Weight Management Program in Bengaluru | Vaayu",
    d: "Medically supervised weight management in Bengaluru — important for sleep apnea and breathing health.",
  },
  "/patient-resources/education": {
    t: "Patient Education | Lung & Sleep Health Guides | Vaayu Bengaluru",
    d: "Patient-friendly guides on lung and sleep conditions from Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/patient-resources/education/tuberculosis": {
    t: "Tuberculosis (TB): Symptoms & Treatment Guide | Vaayu Bengaluru",
    d: "Understand TB — symptoms, diagnosis, treatment and recovery — from Bengaluru chest specialists.",
  },
  "/patient-resources/education/lung-cancer": {
    t: "Lung Cancer: Early Signs & Diagnosis Guide | Vaayu Bengaluru",
    d: "Lung cancer warning signs, screening and diagnosis explained by Bengaluru pulmonologists.",
  },
  "/patient-resources/education/bronchiectasis": {
    t: "Bronchiectasis Guide: Symptoms & Care | Vaayu Bengaluru",
    d: "Bronchiectasis explained — causes, airway clearance and long-term management from chest specialists.",
  },
  "/patient-resources/education/lung-transplant": {
    t: "Lung Transplant: Patient Guide | Vaayu Bengaluru",
    d: "When lung transplant is considered, evaluation steps and life after transplant — specialist guide.",
  },
  "/patient-resources/education/critical-care": {
    t: "Respiratory Critical Care Guide | Vaayu Bengaluru",
    d: "Understanding respiratory ICU care — ventilation, monitoring and recovery — for patients and families.",
  },
  "/patient-resources/critical-care/ecmo": {
    t: "ECMO: What Patients & Families Should Know | Vaayu Bengaluru",
    d: "ECMO life support explained by critical-care specialists — when it's used and what to expect.",
  },
  "/patient-resources/critical-care/icu-bronchoscopy": {
    t: "ICU Bronchoscopy Explained | Vaayu Bengaluru",
    d: "How bronchoscopy is used in intensive care — procedure, safety and recovery.",
  },
  "/patient-resources/critical-care/oxygen-therapy": {
    t: "Oxygen Therapy at Home & Hospital | Vaayu Bengaluru",
    d: "Oxygen therapy explained — who needs it, devices, and safe home use, by Bengaluru chest specialists.",
  },
  "/patient-resources/critical-care/respiratory-therapy": {
    t: "Respiratory Therapy Services | Vaayu Bengaluru",
    d: "Respiratory therapy in Bengaluru — airway clearance, nebulisation and ventilator care by trained therapists.",
  },
  "/patient-resources/testimonials": {
    t: "Patient Testimonials | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "What patients say about their care at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/doctors/dr-ravindra-mehta": {
    t: "Dr. Ravindra Mehta | Senior Pulmonologist, Bengaluru | Vaayu",
    d: "Profile of Dr. Ravindra Mehta — senior interventional pulmonologist and critical care specialist at Vaayu, Bengaluru.",
  },
  "/doctors/dr-sameer-bansal": {
    t: "Dr. Sameer Bansal | Consultant Pulmonologist, Bengaluru | Vaayu",
    d: "Profile of Dr. Sameer Bansal — consultant pulmonologist and clinical head at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/doctors/dr-ajitha": {
    t: "Dr. Ajitha | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Profile of Dr. Ajitha at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/doctors/dr-rasheeka-vp": {
    t: "Dr. Rasheeka V P | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Profile of Dr. Rasheeka V P at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/doctors/nandini-g": {
    t: "Nandini G | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Profile of Nandini G at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/blogs": {
    t: "Health Blog | Lung & Sleep Advice from Specialists | Vaayu Bengaluru",
    d: "Expert articles on breathing, sleep and rehabilitation from Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/gallery": {
    t: "Gallery | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Photos from Vaayu Chest & Sleep Specialists — clinic, events and community programs in Bengaluru.",
  },
  "/camp": {
    t: "Health Camps in Bengaluru | Vaayu Chest & Sleep Specialists",
    d: "Community lung health camps and screening drives by Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/social-impact": {
    t: "Social Impact & Community Health | Vaayu Bengaluru",
    d: "Vaayu's community health initiatives — camps, education and outreach across Bengaluru.",
  },
  "/media-spotlight": {
    t: "Media Coverage | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Vaayu Chest & Sleep Specialists in the news — media features and expert commentary.",
  },
  "/resources/publications": {
    t: "Research & Publications | Vaayu Chest & Sleep Specialists",
    d: "Scientific publications and research by the specialists at Vaayu Chest & Sleep, Bengaluru.",
  },
  "/resources/innovations": {
    t: "Innovations in Respiratory Care | Vaayu Bengaluru",
    d: "Innovation in lung and sleep care at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
  "/resources/job-openings": {
    t: "Careers & Job Openings | Vaayu Chest & Sleep Specialists, Bengaluru",
    d: "Join the Vaayu team — current openings for clinical and allied health roles in Bengaluru.",
  },
  "/procedural-training": {
    t: "Procedural Training Programs | Vaayu Chest & Sleep Specialists",
    d: "Hands-on procedural training for clinicians at Vaayu Chest & Sleep Specialists, Bengaluru.",
  },
};

const slugToTitle = (path) => {
  const last = path.split("/").filter(Boolean).pop() || "";
  const words = last
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
};

const upsertMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = (pathname.replace(/\/+$/, "") || "/").toLowerCase();
    if (SKIP.includes(key)) return;

    const m = META[key];
    if (m) {
      document.title = m.t;
      upsertMeta("description", m.d);
    } else {
      document.title = `${slugToTitle(key)} | ${BRAND}`;
    }
    upsertCanonical(`${BASE}${key === "/" ? "/" : key}`);
  }, [pathname]);

  return null;
}
