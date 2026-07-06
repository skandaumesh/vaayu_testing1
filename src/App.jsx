import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { sendPageview } from "./analytics";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./components/Services";
import DoctorsAndTeam from "./components/DoctorsAndTeam";
import Blogs from "./components/Blogs";
import FaqAndAppointment from "./components/FaqAndAppointment";

import ClinicalYogaPage from "./pages/ClinicalYogaPage";


import Rehabconference from "./pages/Rehabconference";
import Revive2026 from "./pages/Revive2026";
import Mediaspotlight from "./pages/Mediaspotlight";
import ContactNEW from "./pages/ContactNEW";
import Camp from "./pages/Camp.jsx";
import Gallery from "./pages/Gallery";
import CAPI2025 from "./pages/CAPI2025";
import ComplicationCasesPage from "./pages/ComplicationCasesPage";
import AboutUs from "./pages/AboutUs";
import SocialImpact from "./pages/SocialImpact";
import Testimonials from "./pages/Testimonials";
import DrRavindraMehtaTOI from "./pages/DrRavindraMehtaTOI";
import RehabWellness from "./pages/RehabWellness";

import Sameer from "./pages/Doctors/Sameer";
import Ajitha from "./pages/Doctors/Ajitha";
import Nandini from "./pages/Doctors/Nandini";
import Ravindra from "./pages/Doctors/Ravindra.jsx";
import Rasheeka from "./pages/Doctors/Rasheeka";
import PainManagement from "./pages/PainManagement";
import OccupationalTherapyPage from "./pages/OccupationalTherapyPage";
import CancerRehabPage from "./pages/CancerRehabPage";
import IntegratedCardioPulmonaryPage from "./pages/IntegratedCardioPulmonaryPage";
import SarcoidosisClinic from "./pages/SarcoidosisClinic";
import PulmonaryHypertensionClinic from "./pages/PulmonaryHypertensionClinic";
import WellnessPage from "./pages/WellnessPage";
import TherapyPainManagement from "./pages/TherapyPainManagement";
import StressManagementPage from "./pages/StressManagementPage";

import SnoringClinic from "./pages/SnoringClinic";
import ObstructiveSleepApnea from "./pages/ObstructiveSleepApnea";
import Insomnia from "./pages/insomnia";
import Parasomnias from "./pages/Parasomnias";

import ILDClinic from "./pages/ILDClinic";
import COPDClinic from "./pages/COPDClinic";
import AsthmaClinic from "./pages/AsthmaClinic";
import LungCancer from "./pages/LungCancerClinic";

import PulmonarySub from "./pages/PulmonarySub";
import CardiacSub from "./pages/CardiacSub";
import PulmonaryHypertensionRehab from "./pages/PulmonaryHypertensionRehab";

import GeneralOPD from "./pages/GeneralOPD";
import SpecialtyClinic from "./pages/SpecialtyClinic";
import PreventiveClinics from "./pages/PreventiveClinics";
import PulmonaryRehab from "./pages/PulmonaryRehab";
import SleepClinic from "./pages/SleepClinic";
import AlliedServices from "./pages/Alliedservices";
import AppointmentForm from "./pages/AppointmentForm";

import AllergyImmunology from "./pages/AllergyImmunology";
import AllergyTesting from "./pages/AllergyTesting";
import ImmunotherapyPage from "./pages/ImmunotherapyPage";

import PediatricPulmonology from "./pages/PediatricPulmonology";
import ClinicalPsychology from "./pages/ClinicalPsychology";
import WeightManagement from "./pages/WeightManagement";
import VaayuNutritionPage from "./pages/Diet";
import ENTServices from "./pages/ENT";

import HomeCareOverview from "./pages/HomeCareOverview";
import HomeNursing from "./pages/HomeNursing";
import HomeTesting from "./pages/HomeTesting";
import HomeRehab from "./pages/HomeRehab";
import HomeMedications from "./pages/Medications";
import HomeInjections from "./pages/InjectionsAntibiotics";

import TobaccoCessation from "./pages/TobaccoCessation";
import HealthChecks from "./pages/HealthChecks";

import Innovations from "./pages/Innovations";
import JobOpenings from "./pages/JobOpenings";
import PublicationsPage from "./pages/PublicationsPage.jsx";

import Bronchiectasis from "./pages/Bronchiectasis";
import Tuberculosis from "./pages/Tuberculosis";
import LungTransplant from "./pages/LungTransplant";

import CriticalCare from "./pages/CriticalCare";
import OxygenTherapy from "./pages/OxygenTherapy";
import ICUBronchoscopy from "./pages/ICUBronchoscopy";
import RespiratoryTherapy from "./pages/RespiratoryTherapy";
import ECMOProgram from "./pages/ECMOProgram";

import AOS from "aos";
import "aos/dist/aos.css";

ReactGA.initialize("G-ZBYG8VX7R3");

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });

    if (typeof sendPageview === "function") {
      sendPageview(location.pathname + location.search);
    }
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />

      <Navbar />

      <main className="pt-[100px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>

               

              </>
            }
          />

<Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/capi-2025" element={<CAPI2025 />} />
          <Route path="/Procedural-Training" element={<ComplicationCasesPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/rehab-conference" element={<Rehabconference />} />
          <Route path="/revive-2026" element={<Revive2026 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/camp" element={<Camp />} />
          <Route path="/contact" element={<ContactNEW />} />

          <Route path="/general-opd" element={<GeneralOPD />} />
          <Route path="/specialty-clinic" element={<SpecialtyClinic />} />
          <Route path="/preventive-clinics" element={<PreventiveClinics />} />
          <Route path="/pulmonary-rehab" element={<PulmonaryRehab />} />
          <Route path="/sleep-clinic" element={<SleepClinic />} />
          <Route path="/Allied-services" element={<AlliedServices />} />

          <Route
            path="/patient-resources/education"
            element={<Navigate to="/specialty-clinic/asthma" replace />}
          />
          <Route path="/patient-resources/testimonials" element={<Testimonials />} />

          <Route path="/resources/innovations" element={<Innovations />} />
          <Route path="/resources/job-openings" element={<JobOpenings />} />
          <Route path="/resources/publications" element={<PublicationsPage />} />

          <Route path="/specialty-clinic/ild" element={<ILDClinic />} />
          <Route path="/specialty-clinic/copd" element={<COPDClinic />} />
          <Route path="/specialty-clinic/asthma" element={<AsthmaClinic />} />
          <Route path="/specialty-clinic/sarcoidosis" element={<SarcoidosisClinic />} />
          <Route
            path="/specialty-clinic/pulmonary-hypertension"
            element={<PulmonaryHypertensionClinic />}
          />

          <Route path="/patient-resources/education/lung-cancer" element={<LungCancer />} />

          <Route path="/pulmonary-rehab/pulmonary" element={<PulmonarySub />} />
          <Route path="/pulmonary-rehab/cardiac" element={<CardiacSub />} />
          <Route
            path="/pulmonary-rehab/PulmonaryHypertensionRehab"
            element={<PulmonaryHypertensionRehab />}
          />
          <Route path="/pulmonary-rehab/pain-management" element={<PainManagement />} />

          <Route path="/appointment" element={<AppointmentForm />} />

          <Route path="/sleep-clinic/snoring" element={<SnoringClinic />} />
          <Route path="/sleep-clinic/osa" element={<ObstructiveSleepApnea />} />
          <Route path="/sleep-clinic/insomnia" element={<Insomnia />} />
          <Route path="/sleep-clinic/parasomnias" element={<Parasomnias />} />

          <Route path="/allergy-immunology" element={<AllergyImmunology />} />
          <Route path="/allergy-immunology/allergy-testing" element={<AllergyTesting />} />
          <Route
            path="/allergy-immunology/immunotherapy"
            element={<ImmunotherapyPage />}
          />

          <Route
            path="/allied-services/pediatric-pulmonology"
            element={<PediatricPulmonology />}
          />
          <Route path="/allied-services/Weight-Management" element={<WeightManagement />} />
          <Route
            path="/allied-services/Clinical-Psychology"
            element={<ClinicalPsychology />}
          />
          <Route path="/allied-services/diet" element={<VaayuNutritionPage />} />
          <Route path="/allied-services/ent" element={<ENTServices />} />

          <Route path="/home-care" element={<HomeCareOverview />} />
          <Route path="/home-care/home-nursing" element={<HomeNursing />} />
          <Route path="/home-care/home-testing" element={<HomeTesting />} />
          <Route path="/home-care/home-rehab" element={<HomeRehab />} />
          <Route path="/home-care/medications" element={<HomeMedications />} />
          <Route
            path="/home-care/injectionsantibiotics"
            element={<HomeInjections />}
          />

          <Route path="/media-spotlight" element={<Mediaspotlight />} />
          <Route
            path="/media/dr-ravindra-mehta-times-of-india"
            element={<DrRavindraMehtaTOI />}
          />

          <Route
            path="/preventive-clinics/tobacco-cessation"
            element={<TobaccoCessation />}
          />
          <Route
            path="/preventive-clinics/health-checks"
            element={<HealthChecks />}
          />

          <Route
            path="/patient-resources/education/bronchiectasis"
            element={<Bronchiectasis />}
          />
          <Route
            path="/patient-resources/education/tuberculosis"
            element={<Tuberculosis />}
          />
          <Route
            path="/patient-resources/education/lung-transplant"
            element={<LungTransplant />}
          />
          <Route
            path="/patient-resources/education/critical-care"
            element={<CriticalCare />}
          />

          <Route
            path="/patient-resources/critical-care/oxygen-therapy"
            element={<OxygenTherapy />}
          />
          <Route
            path="/patient-resources/critical-care/icu-bronchoscopy"
            element={<ICUBronchoscopy />}
          />
          <Route
            path="/patient-resources/critical-care/respiratory-therapy"
            element={<RespiratoryTherapy />}
          />
          <Route
            path="/patient-resources/critical-care/ecmo"
            element={<ECMOProgram />}
          />

          <Route path="/doctors/dr-sameer-bansal" element={<Sameer />} />
          <Route path="/doctors/dr-ajitha" element={<Ajitha />} />
          <Route path="/doctors/nandini-g" element={<Nandini />} />
          <Route path="/doctors/dr-ravindra-mehta" element={<Ravindra />} />
<Route path="/doctors/dr-rasheeka-vp" element={<Rasheeka />} />
          <Route path="/rehab-wellness" element={<RehabWellness />} />
          <Route
            path="/rehab-wellness/occupational-therapy"
            element={<OccupationalTherapyPage />}
          />
          <Route path="/rehab-wellness/cancer-rehab" element={<CancerRehabPage />} />
          <Route
            path="/rehab-wellness/integrated-cardio-pulmonary"
            element={<IntegratedCardioPulmonaryPage />}
          />
          <Route
            path="/rehab-wellness/stress-management"
            element={<StressManagementPage />}
          />
          <Route
            path="/rehab-wellness/clinical-yoga"
            element={<ClinicalYogaPage />}
          />
          <Route path="/rehab-wellness/therapy" element={<TherapyPainManagement />} />
          <Route path="/rehab-wellness/wellness" element={<WellnessPage />} />

      
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;