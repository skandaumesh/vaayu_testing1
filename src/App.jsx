import React, { useEffect, lazy, Suspense } from "react";
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
import SeoManager from "./components/SeoManager";
import MobileContactBar from "./components/MobileContactBar";
import { initConversionTracking } from "./analytics/track";
import Home from "./pages/Home";
import Services from "./components/Services";
import DoctorsAndTeam from "./components/DoctorsAndTeam";
import Blogs from "./components/Blogs";
import FaqAndAppointment from "./components/FaqAndAppointment";

const ClinicalYogaPage = lazy(() => import("./pages/ClinicalYogaPage"));
const Rehabconference = lazy(() => import("./pages/Rehabconference"));
const Revive2026 = lazy(() => import("./pages/Revive2026"));
const Voric = lazy(() => import("./pages/Voric"));
const Mediaspotlight = lazy(() => import("./pages/Mediaspotlight"));
const ContactNEW = lazy(() => import("./pages/ContactNEW"));
const Camp = lazy(() => import("./pages/Camp.jsx"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CAPI2025 = lazy(() => import("./pages/CAPI2025"));
const ComplicationCasesPage = lazy(() => import("./pages/ComplicationCasesPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const SocialImpact = lazy(() => import("./pages/SocialImpact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const DrRavindraMehtaTOI = lazy(() => import("./pages/DrRavindraMehtaTOI"));
const RehabWellness = lazy(() => import("./pages/RehabWellness"));
const Sameer = lazy(() => import("./pages/Doctors/Sameer"));
const Ajitha = lazy(() => import("./pages/Doctors/Ajitha"));
const Nandini = lazy(() => import("./pages/Doctors/Nandini"));
const Ravindra = lazy(() => import("./pages/Doctors/Ravindra.jsx"));
const Rasheeka = lazy(() => import("./pages/Doctors/Rasheeka"));
const PainManagement = lazy(() => import("./pages/PainManagement"));
const OccupationalTherapyPage = lazy(() => import("./pages/OccupationalTherapyPage"));
const CancerRehabPage = lazy(() => import("./pages/CancerRehabPage"));
const IntegratedCardioPulmonaryPage = lazy(() => import("./pages/IntegratedCardioPulmonaryPage"));
const SarcoidosisClinic = lazy(() => import("./pages/SarcoidosisClinic"));
const PulmonaryHypertensionClinic = lazy(() => import("./pages/PulmonaryHypertensionClinic"));
const WellnessPage = lazy(() => import("./pages/WellnessPage"));
const TherapyPainManagement = lazy(() => import("./pages/TherapyPainManagement"));
const StressManagementPage = lazy(() => import("./pages/StressManagementPage"));
const SnoringClinic = lazy(() => import("./pages/SnoringClinic"));
const ObstructiveSleepApnea = lazy(() => import("./pages/ObstructiveSleepApnea"));
const Insomnia = lazy(() => import("./pages/insomnia"));
const Parasomnias = lazy(() => import("./pages/Parasomnias"));
const ILDClinic = lazy(() => import("./pages/ILDClinic"));
const COPDClinic = lazy(() => import("./pages/COPDClinic"));
const AsthmaClinic = lazy(() => import("./pages/AsthmaClinic"));
const LungCancer = lazy(() => import("./pages/LungCancerClinic"));
const PulmonarySub = lazy(() => import("./pages/PulmonarySub"));
const CardiacSub = lazy(() => import("./pages/CardiacSub"));
const PulmonaryHypertensionRehab = lazy(() => import("./pages/PulmonaryHypertensionRehab"));
const GeneralOPD = lazy(() => import("./pages/GeneralOPD"));
const SpecialtyClinic = lazy(() => import("./pages/SpecialtyClinic"));
const PreventiveClinics = lazy(() => import("./pages/PreventiveClinics"));
const PulmonaryRehab = lazy(() => import("./pages/PulmonaryRehab"));
const SleepClinic = lazy(() => import("./pages/SleepClinic"));
const AlliedServices = lazy(() => import("./pages/Alliedservices"));
const AppointmentForm = lazy(() => import("./pages/AppointmentForm"));
const AllergyImmunology = lazy(() => import("./pages/AllergyImmunology"));
const AllergyTesting = lazy(() => import("./pages/AllergyTesting"));
const ImmunotherapyPage = lazy(() => import("./pages/ImmunotherapyPage"));
const PediatricPulmonology = lazy(() => import("./pages/PediatricPulmonology"));
const ClinicalPsychology = lazy(() => import("./pages/ClinicalPsychology"));
const WeightManagement = lazy(() => import("./pages/WeightManagement"));
const VaayuNutritionPage = lazy(() => import("./pages/Diet"));
const ENTServices = lazy(() => import("./pages/ENT"));
const HomeCareOverview = lazy(() => import("./pages/HomeCareOverview"));
const HomeNursing = lazy(() => import("./pages/HomeNursing"));
const HomeTesting = lazy(() => import("./pages/HomeTesting"));
const HomeRehab = lazy(() => import("./pages/HomeRehab"));
const HomeMedications = lazy(() => import("./pages/Medications"));
const HomeInjections = lazy(() => import("./pages/InjectionsAntibiotics"));
const TobaccoCessation = lazy(() => import("./pages/TobaccoCessation"));
const HealthChecks = lazy(() => import("./pages/HealthChecks"));
const Innovations = lazy(() => import("./pages/Innovations"));
const JobOpenings = lazy(() => import("./pages/JobOpenings"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage.jsx"));
const Bronchiectasis = lazy(() => import("./pages/Bronchiectasis"));
const Tuberculosis = lazy(() => import("./pages/Tuberculosis"));
const LungTransplant = lazy(() => import("./pages/LungTransplant"));
const CriticalCare = lazy(() => import("./pages/CriticalCare"));
const OxygenTherapy = lazy(() => import("./pages/OxygenTherapy"));
const ICUBronchoscopy = lazy(() => import("./pages/ICUBronchoscopy"));
const RespiratoryTherapy = lazy(() => import("./pages/RespiratoryTherapy"));
const ECMOProgram = lazy(() => import("./pages/ECMOProgram"));
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

// Shown while a route's chunk downloads. Reserves a tall block so the footer
// does not jump up and then back down as the page arrives.
const RouteLoader = () => (
  <div
    style={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    role="status"
    aria-live="polite"
  >
    <span
      style={{
        width: 34,
        height: 34,
        border: "3px solid #e2e8d8",
        borderTopColor: "#61724e",
        borderRadius: "50%",
        animation: "vaayu-spin .8s linear infinite",
      }}
    />
    <style>{`
      @keyframes vaayu-spin { to { transform: rotate(360deg); } }
      @media (prefers-reduced-motion: reduce) {
        [role="status"] span { animation-duration: 2.4s; }
      }
    `}</style>
    <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
      Loading
    </span>
  </div>
);

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
    initConversionTracking();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <AnalyticsTracker />

      <Navbar />

      <main className="pt-[100px]">
        <Suspense fallback={<RouteLoader />}>
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
          <Route path="/voric" element={<Voric />} />
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
        </Suspense>
      </main>

      <Footer />
      <MobileContactBar />
    </Router>
  );
};

export default App;