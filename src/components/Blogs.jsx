import heroImage from "../assets/img/blogs-hero.jpg";
import blogImg10 from "../assets/img/swd.jpg";
import blogImg0 from "../assets/img/weak-young-caucasian-ill-girl.jpg";
import blogImg1 from "../assets/img/blogs1.jpg";
import blogImg2 from "../assets/img/blog2.jpg";
import blogImg3 from "../assets/img/blog31.png";
import blogImg4 from "../assets/img/blog4.png";
import blogImg5 from "../assets/img/blog51.png";
import React, { useEffect, useMemo, useState } from "react";

import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import toiClip from "../assets/img/ravi.jpeg";

const EKA_CARE_URL =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const blogs = [
  {
    id: 1,
    title:
      "Why Is My Cough Not Going Away? Understanding the Rise in Viral Respiratory Illnesses.",
    summary:
      "Why coughs are lasting longer in India, what's driving the spike in viral infections, how to protect your family, and adult vaccines that help. By Dr Sameer Bansal, Consultant Pulmonologist & Clinical Head at Vaayu Chest and Sleep Specialists.",
    image: blogImg0,
    category: "Respiratory Health",
    readTime: "5 min read",
    content: `
If you feel like everyone around you has been coughing this year — and that those coughs are lasting longer than before — you are not imagining it. Over the last two years, and especially in the past couple of months, doctors across India have noticed a clear rise in viral respiratory illnesses. More people are falling sick, their symptoms are lingering, and many are experiencing significant post-viral fatigue.

As a pulmonologist, I want to share what may be behind this trend, how you can protect yourself and your family, and what vaccines are available to reduce your risk.

## Why Are More People Falling Sick Now?

Respiratory viruses such as influenza, RSV, rhinoviruses, parainfluenza, and adenoviruses have always circulated in the community. But several factors have come together recently that make us more vulnerable than before.

### 1. Poor Hand and Cough Hygiene
Many of us dropped our guard after the COVID-19 pandemic. Mask use reduced, cough etiquette is often forgotten, and handwashing is less frequent. These small lapses allow viruses to spread rapidly in crowded places like schools, offices, and public transport.

### 2. Festival Season Overlaps with Flu Season
In India, festivals often coincide with the peak influenza season. Large gatherings, close contact, and travel increase the chance of spreading viruses across families and communities.

### 3. Increased Air Pollution
Polluted air irritates the respiratory tract and weakens our natural defense mechanisms. Fine particles like PM2.5 and other pollutants impair the mucosal barrier, making it easier for viruses to enter and cause infections.

### 4. Frequent Travel
With life returning to normal, people are traveling more for work and leisure. Airports, trains, and buses are hotspots for viral transmission. A single sick passenger can spread infection to many others in enclosed spaces.

### 5. High Stress and Poor Lifestyle Habits
Long working hours, irregular sleep, and chronic stress weaken the immune system. Combined with poor-quality diets and reduced exercise, the body’s ability to fight infections goes down significantly.

### 6. Climate Change
Changing weather patterns, prolonged monsoons, unseasonal rains, and fluctuating temperatures create ideal conditions for viruses to thrive. Climate change is also affecting pollution levels, indirectly worsening respiratory health.

All these factors add up, creating a perfect storm for viruses to spread more easily and cause prolonged illness.

## What Are We Seeing in Clinics?

- More frequent viral infections
- Cough lasting 3 to 4 weeks in many patients
- Post-viral fatigue even after fever and cough improve
- More complications in elderly patients, children, and people with asthma, COPD, diabetes, or heart disease

## How Can You Protect Yourself?

### 1. Practice Respiratory Hygiene
- Cover your mouth and nose when coughing or sneezing.
- Wash your hands frequently with soap and water or use sanitizer.
- Avoid close contact with people who are visibly sick.

### 2. Maintain a Healthy Lifestyle
- Sleep at least 7 to 8 hours.
- Eat a balanced diet rich in fruits, vegetables, and proteins.
- Exercise regularly to support immunity.
- Manage stress with yoga, meditation, or relaxation techniques.

### 3. Reduce Exposure to Pollution
- Check air quality levels before outdoor activities.
- Use masks in high-pollution areas.
- Support greener initiatives in your community.

### 4. Be Cautious During Festivals and Travel
- Avoid crowded indoor gatherings if you feel unwell.
- Keep sanitizers handy when traveling.
- Encourage children and family members to follow hygiene rules.

## The Role of Vaccines

Vaccines are one of the most effective tools we have against viral illnesses. Many people think vaccines are only for children or COVID-19, but adults also need vaccines, especially the elderly and people with chronic diseases.

### 1. Influenza Vaccine
Recommended annually because flu strains change each year. It reduces the risk of infection, hospitalization, and complications.

### 2. RSV Vaccine
Recently introduced for high-risk groups such as elderly people and those with chronic illnesses. RSV can cause severe lower respiratory infections, especially in older adults.

### 3. Other Important Vaccines
- Pneumococcal vaccine
- COVID-19 booster if not already taken
- Pertussis vaccine for adults in close contact with infants

By staying up to date with vaccines, we protect not just ourselves but also our families and communities.

## When to Seek Medical Attention

Most viral coughs improve with rest, fluids, and symptomatic treatment. However, you should consult a doctor if:

- Cough lasts more than 3 weeks.
- There is high fever, breathlessness, or chest pain.
- You have asthma, COPD, diabetes, heart disease, or another chronic condition.
- You notice blood in sputum or significant weight loss.

## Final Thoughts

We are living in a time when respiratory illnesses are more frequent and longer lasting than before. Multiple factors — lifestyle, environment, travel, pollution, and climate — are contributing to this rise.

While we cannot control all these factors, we can certainly protect ourselves by improving hygiene, making healthier lifestyle choices, and most importantly, getting vaccinated.

A lingering cough is not always just viral. It could be a sign that your body needs rest, support, or medical attention. Taking proactive steps today can help you and your loved ones breathe easier tomorrow.
`,
  },
  {
    id: 2,
    title: "From Pollution to Post-COVID: Why Bengaluru Needs Pulmonary Rehab",
    summary:
      "By Dr Prerana Abhisheki, Cardio-Pulmonary Rehab Specialist at Vaayu Chest and Sleep Specialists.",
    image: blogImg10,
    category: "Pulmonary Rehab",
    readTime: "4 min read",
    content: `
## Why Pulmonary Rehab Matters

Pulmonary rehabilitation helps people with lung conditions improve endurance, breathing confidence, and quality of life. It is especially useful for patients who continue to feel breathless, weak, or limited in daily activity even after medical treatment.

Bengaluru’s changing air quality, repeated infections, post-COVID symptoms, chronic respiratory diseases, and sedentary lifestyle patterns have made structured respiratory recovery more important than ever.

## Who Can Benefit?

People with COPD, post-COVID symptoms, asthma, interstitial lung disease, bronchiectasis, chronic breathlessness, reduced stamina, oxygen dependency, or post-hospital weakness may benefit from pulmonary rehabilitation.

## What It Includes

- Guided breathing exercises
- Gradual physical conditioning
- Education and self-management support
- Techniques to reduce breathlessness during activity
- Airway clearance support
- Oxygen and exercise guidance
- Strength and endurance rebuilding

## Why It Matters After COVID and Pollution Exposure

Many patients recover from the infection but continue to struggle with fatigue, low stamina, breathlessness, or reduced confidence while walking or climbing stairs. Pollution can further irritate the airways and worsen symptoms in people with underlying lung disease.

Pulmonary rehabilitation helps bridge this gap by supporting recovery beyond medicines alone.

## Final Thoughts

The goal is not just recovery. It is helping patients return to everyday life with better breathing confidence, improved stamina, and a more structured long-term care plan.
`,
  },
  {
    id: 3,
    title: "Inhale Health, Exhale Illness",
    summary:
      "Feeling under the weather? This post explores proven ways to build respiratory immunity through food, breathing exercises, and lifestyle changes.",
    image: blogImg1,
    category: "Wellness",
    readTime: "4 min read",
    content: `
## Simple Strategies to Strengthen Your Respiratory System

Keeping your respiratory system healthy is vital, especially during flu season. While no single action guarantees immunity, small consistent habits can support better lung health and overall wellness.

### Fuel Your Body Right
- Eat a variety of fruits and vegetables rich in vitamins and antioxidants.
- Include citrus fruits, leafy greens, bell peppers and other nutrient-rich foods.
- Add healthy fats such as fatty fish, nuts and olive oil.
- Maintain adequate protein intake to support recovery and immunity.

### Breathing Exercises

### Diaphragmatic Breathing
- Sit or lie down comfortably.
- Place one hand on your belly.
- Inhale slowly through the nose and allow the belly to rise.
- Exhale slowly through pursed lips and allow the belly to fall.

### Pursed-Lip Breathing
- Inhale gently through the nose.
- Purse your lips as if you are blowing out a candle.
- Exhale slowly and fully.
- This may help reduce breathlessness during activity.

### Alternate Nostril Breathing
- Inhale through one nostril and exhale through the other.
- Repeat slowly for 5 to 10 minutes.
- Practice only if comfortable.

Always consult a Vaayu professional before starting breathing exercises if you have respiratory conditions.

### Embrace a Healthy Lifestyle
- Sleep 7 to 8 hours a night.
- Exercise moderately on most days.
- Stay hydrated to keep airways moist.
- Manage stress with yoga, meditation, walking or relaxation practices.

### Bonus Tips
- Include probiotic foods like yogurt where suitable.
- Maintain hand hygiene.
- Avoid smoking and vaping.
- Seek medical advice if symptoms persist.

## Final Thoughts

Building long-term respiratory health requires consistency. Food, movement, sleep, hydration, stress control and timely medical care all play a role in helping you breathe better.
`,
  },
  {
    id: 4,
    title: "Reshaping the Future of Healing",
    summary:
      "This post highlights new medical frontiers—from the journey of doctors to tech-powered care and the evolution of outpatient models.",
    image: blogImg2,
    category: "Healthcare Trends",
    readTime: "3 min read",
    content: `
## Journey Through Modern Medicine

Healthcare is changing rapidly. The future of healing is no longer limited to hospital beds, prescriptions and isolated consultations. It is moving toward patient-centered, technology-enabled and continuity-focused care.

### A Doctor’s Path

Every doctor’s journey is shaped by purpose, discipline, resilience and years of patient care. Stories like Dr. Ravindra Mehta’s reflect how medical experience evolves into a larger mission — building systems that support patients beyond one-time treatment.

### Patient-Centric Care at Vaayu

Patient-centered care focuses on trust, communication, transparency and collaboration. It helps patients understand their condition, participate in decisions and stay committed to long-term health plans.

### Rise of Outpatient Models

Modern outpatient care can reduce unnecessary hospital visits, support faster recovery, improve convenience and lower the burden on patients and families.

For chronic respiratory conditions, this model is especially important because patients need continuity, monitoring, rehabilitation and lifestyle support.

### The Expanding Realm of Medicine

Medical science is evolving quickly. New diagnostics, remote monitoring, AI-assisted decision-making and personalized care pathways are changing how care is delivered.

### Lifelong Learning

Medicine requires continuous learning. Doctors and healthcare teams must evolve with research, technology, patient needs and changing disease patterns.

### Redefining the Doctor’s Role

The doctor is no longer only a prescriber. The modern doctor is also a guide, educator, coordinator and long-term partner in health.

## Final Thoughts

The future of healing belongs to systems that combine expertise, empathy, technology and continuity. Vaayu’s care model reflects this shift toward structured, long-term respiratory and sleep health.
`,
  },
  {
    id: 5,
    title: "Oil Drowning",
    summary:
      "A rare and life-threatening condition. This case study recounts a patient’s journey from critical illness to recovery after an oil well accident.",
    image: blogImg3,
    category: "Case Study",
    readTime: "3 min read",
    content: `
## Surviving an Oil Well Drowning

Oil aspiration is rare, dangerous and can become life-threatening when oily substances enter the lungs. This case highlights the importance of advanced respiratory care, teamwork and timely intervention.

### The Incident

A 28-year-old man from Goa drowned in an oil well and was airlifted in critical condition. His lungs were filled with oil, making it extremely difficult for him to breathe.

### Advanced Interventions

The medical team stabilized infections and supported his breathing through advanced critical care. He was placed on ECMO, which acts as an artificial lung support system in severe respiratory failure.

He then underwent whole lung lavage, a complex procedure where the lungs are carefully washed to remove the aspirated material. Around 25 liters per lung were used over nearly 10 hours.

### Recovery

After the procedure, the patient gradually improved. He was weaned off ECMO and eventually discharged.

He returned to Goa, resumed life and later got married — a powerful reminder of how advanced care can create second chances.

## Final Thoughts

Oil aspiration requires urgent medical attention. Early recognition, advanced respiratory support and coordinated specialist care can make a life-saving difference.
`,
  },
  {
    id: 6,
    title: "Severe COVID in a Pregnant Lady",
    summary:
      "A powerful survival story of a mother diagnosed with severe COVID right after childbirth and the critical care that saved her life.",
    image: blogImg4,
    category: "Case Study",
    readTime: "4 min read",
    content: `
## COVID-19 and Motherhood: A Survival Story

Pregnancy and childbirth are already physically demanding. When severe COVID pneumonia develops around delivery, the risks can become life-threatening.

### The Crisis

A 34-year-old woman developed severe COVID pneumonia just two days after delivery during India’s second wave. Her breathing worsened rapidly and conventional ventilator support was not enough.

### Life-Saving Measures

She was placed on ECMO, an advanced form of life support used when the lungs are unable to provide adequate oxygen despite maximal treatment.

Her recovery journey was difficult. She faced complications including bleeding, infections and major financial stress. However, with intensive care, monitoring and persistence, her lungs slowly began to recover.

### The Turnaround

After four weeks on ECMO, her lung function improved. She was gradually weaned off support and eventually discharged.

Today, she leads a happy and active life with her baby girl and husband.

## Final Thoughts

This case reflects the power of modern critical care, multidisciplinary teamwork and perseverance. Severe respiratory illness can be frightening, but timely advanced care can save lives.
`,
  },
  {
    id: 7,
    title: "Lung Transplant",
    summary:
      "Explore the life-saving power of lung transplants—when they’re needed, how they’re done, and what recovery looks like.",
    image: blogImg5,
    category: "Advanced Care",
    readTime: "4 min read",
    content: `
## Understanding Lung Transplantation

When all other treatment options are no longer enough, a lung transplant may become a life-saving option for selected patients with end-stage lung disease.

### Why It Is Done

Lung transplantation may be considered in advanced conditions such as:

- End-stage lung disease
- Pulmonary fibrosis
- Severe COPD
- Advanced pulmonary hypertension
- Other progressive lung diseases that do not respond to standard care

### The Procedure

A lung transplant involves replacing one or both damaged lungs with healthy donor lungs. The procedure requires careful evaluation, donor matching, surgery and intensive post-operative care.

The surgery may last several hours, and patients usually require ICU monitoring after the procedure.

### Life After Transplant

Recovery does not end with surgery. Patients need long-term follow-up, infection prevention, rehabilitation and medications to prevent rejection.

### Rehabilitation After Transplant

Pulmonary rehabilitation helps rebuild strength, improve stamina and support return to daily activities after transplant surgery.

### Key Insight

Early diagnosis and timely referral are important. Patients with advanced lung disease should be evaluated before the disease becomes too severe for transplant consideration.

## Final Thoughts

Lung transplant is a major medical journey, but for the right patient at the right time, it can offer a new chance at life.
`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const formatBlogContent = (content) => {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
};

const Blogspage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selectedBlog]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const query = searchTerm.toLowerCase();
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.summary.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.content.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#F4F5EC] text-[#3f472e]">
      {!selectedBlog && (
        <Helmet>
          <title>Blogs | Vaayu Chest & Sleep Specialists</title>
          <meta
            name="description"
            content="Explore expert blogs, awareness articles, media coverage, and patient-friendly resources on lung health, sleep health, pulmonary rehab and respiratory care."
          />
          <link rel="canonical" href="https://vaayuchest.com/blogs" />
        </Helmet>
      )}

      {selectedBlog && selectedBlog.id === 1 && (
        <Helmet>
          <title>
            Why Is My Cough Not Going Away? | Dr Sameer Bansal | Vaayu Chest & Sleep Specialists
          </title>
          <meta
            name="description"
            content="Understand why coughs are lasting longer in India, what’s driving viral respiratory illnesses, and how adult vaccines help. Written by Dr Sameer Bansal."
          />
          <link rel="canonical" href="https://vaayuchest.com/blogs/why-cough-not-going-away" />
        </Helmet>
      )}

      {!selectedBlog ? (
        <>
          <section
            className="relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d3422]/80 via-[#3f472e]/60 to-[#556b2f]/45" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md border border-white/20">
                  Vaayu Blogs & Resources
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                  Expert blogs for better
                  <span className="block text-[#E8F0D4]">lung & sleep health</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
                  Explore expert advice, awareness blogs, patient-friendly guidance,
                  rehabilitation insights and respiratory wellness content designed to
                  help you breathe better and live better.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:max-w-lg">
                    <input
                      type="text"
                      placeholder="Search blogs, topics, conditions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full rounded-full border border-white/25 bg-white py-3 pl-5 pr-28 text-sm text-[#3f472e] placeholder:text-[#798362] shadow-lg outline-none transition-all duration-300 focus:border-[#5B6641] focus:ring-4 focus:ring-[#5B6641]/15"
                    />

                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#5B6641] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#4d5639] active:scale-95"
                      aria-label="Search Blogs"
                    >
                      Search
                    </button>
                  </div>

                  <Link
                    to="/media/dr-ravindra-mehta-times-of-india"
                    className="inline-flex items-center justify-center rounded-full bg-[#5B6641] px-6 py-3 text-sm font-extrabold text-white shadow-lg hover:opacity-95 transition"
                  >
                    Media Coverage
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-hidden rounded-[2rem] border border-[#5B6641]/15 bg-white shadow-[0_20px_80px_rgba(63,71,46,0.12)]"
            >
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7 p-7 sm:p-10">
                  <span className="inline-flex rounded-full bg-[#EEF2E4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5B6641]">
                    Featured Media Coverage
                  </span>

                  <h2 className="mt-4 text-2xl sm:text-3xl md:text-[2rem] font-black leading-tight text-[#2f3722]">
                    Dr. Ravindra Mehta quoted in
                    <span className="text-[#5B6641]"> Times of India</span>
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#4e573b]">
                    Dr. Ravindra Mehta, Senior Consultant at Vaayu Chest & Sleep Clinic,
                    was featured in The Times of India discussing how rising air pollution
                    is increasing respiratory burden in Bengaluru.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/media/dr-ravindra-mehta-times-of-india"
                      className="inline-flex items-center justify-center rounded-2xl bg-[#5B6641] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95 transition"
                    >
                      Read Full Coverage
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        window.open(toiClip, "_blank", "noopener,noreferrer")
                      }
                      className="inline-flex items-center justify-center rounded-2xl border border-[#5B6641]/20 px-5 py-3 text-sm font-extrabold text-[#5B6641] hover:bg-[#5B6641]/5 transition"
                    >
                      View Clipping Image
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-[#6A734F]">
                    Dr Ravindra Mehta Vaayu • Dr Ravindra Mehta Times of India • Pulmonologist Bengaluru
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#F4F5EC]">
                  <div className="relative h-full min-h-[280px] overflow-hidden">
                    <img
                      src={toiClip}
                      alt="Times of India clipping featuring Dr. Ravindra Mehta"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6A734F]">
                  Blog Library
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-[#2f3722]">
                  Latest articles & insights
                </h2>
              </div>

              <div className="text-sm text-[#5e6747]">
                Showing <span className="font-bold">{filteredBlogs.length}</span> blog
                {filteredBlogs.length !== 1 ? "s" : ""}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04 }}
                  className="group overflow-hidden rounded-[1.8rem] border border-[#DDE3CF] bg-white shadow-[0_12px_40px_rgba(63,71,46,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(63,71,46,0.14)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#5B6641] shadow-md">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 text-xs text-[#6A734F]">
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-xl font-black leading-snug text-[#2f3722]">
                      {blog.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#5c6547]">
                      {blog.summary}
                    </p>

                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="mt-6 inline-flex items-center rounded-full bg-[#6A734F] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#586044]"
                    >
                      Read More
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="mt-12 rounded-[1.8rem] border border-dashed border-[#C7D0B4] bg-white/70 px-6 py-16 text-center">
                <h3 className="text-2xl font-bold text-[#3f472e]">No blogs found</h3>
                <p className="mt-2 text-[#66704f]">
                  Try searching with another keyword.
                </p>
              </div>
            )}
          </section>
        </>
      ) : (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-20">
          <button
            onClick={() => setSelectedBlog(null)}
            className="inline-flex items-center rounded-full border border-[#C9D1BA] bg-white px-5 py-2.5 text-sm font-bold text-[#5B6641] shadow-sm hover:bg-[#f8faf3] transition"
          >
            Back to Blogs
          </button>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#DDE3CF] bg-white shadow-[0_20px_80px_rgba(63,71,46,0.10)]">
            <div className="relative h-[260px] sm:h-[360px] overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3422]/80 via-[#2d3422]/25 to-transparent" />

              <div className="absolute left-5 bottom-5 right-5 sm:left-8 sm:bottom-8 sm:right-8">
                <div className="mb-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5B6641]">
                  {selectedBlog.category}
                </div>

                <h1 className="max-w-4xl text-2xl sm:text-4xl font-black leading-tight text-white">
                  {selectedBlog.title}
                </h1>

                <div className="mt-3 text-sm text-white/90">
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
              <div className="mb-8 rounded-[1.5rem] bg-[#F7F8F2] p-5 sm:p-6 border border-[#E3E8D7]">
                <p className="text-sm sm:text-base leading-relaxed text-[#4d5639]">
                  {selectedBlog.summary}
                </p>
              </div>

              <div className="space-y-4">
                {formatBlogContent(selectedBlog.content).map((block, i) => {
                  const isMainHeading =
                    block.startsWith("# ") && !block.startsWith("## ");
                  const isHeading =
                    block.startsWith("## ") && !block.startsWith("### ");
                  const isSubheading = block.startsWith("### ");
                  const isBullet = block.startsWith("- ");

                  if (isMainHeading) {
                    return (
                      <h2
                        key={i}
                        className="mt-8 text-2xl sm:text-[1.9rem] font-black text-[#2f3722]"
                      >
                        {block.replace(/^#\s*/, "")}
                      </h2>
                    );
                  }

                  if (isHeading) {
                    return (
                      <h2
                        key={i}
                        className="mt-8 text-2xl sm:text-[1.9rem] font-black text-[#2f3722]"
                      >
                        {block.replace(/^##\s*/, "")}
                      </h2>
                    );
                  }

                  if (isSubheading) {
                    return (
                      <h3
                        key={i}
                        className="mt-6 text-lg sm:text-xl font-bold text-[#5B6641]"
                      >
                        {block.replace(/^###\s*/, "")}
                      </h3>
                    );
                  }

                  if (isBullet) {
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-[#E3E8D7] bg-[#FBFCF8] px-4 py-3"
                      >
                        <p className="text-[15px] leading-relaxed text-[#475034]">
                          {block.replace(/^- /, "")}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p
                      key={i}
                      className="text-[15px] sm:text-base leading-8 text-[#475034]"
                    >
                      {block}
                    </p>
                  );
                })}
              </div>

              <div className="mt-10 rounded-[1.5rem] bg-[#5B6641] px-6 py-6 text-white">
                <h3 className="text-xl sm:text-2xl font-black">
                  Need expert guidance for breathing or recovery support?
                </h3>

                <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed">
                  Early support, right guidance, and the right rehabilitation approach can
                  help improve confidence and quality of life.
                </p>

                <div className="mt-5">
                  <a
                    href={EKA_CARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#5B6641] transition hover:opacity-95"
                  >
                    Book a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Blogspage;