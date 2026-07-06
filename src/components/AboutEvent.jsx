import AboutEvent from "../components/AboutEvent"; 
import eventImg from "../assets/img/event-sample.jpg"; // replace with your actual image

function EventPage() {
  return (
    <main className="pt-28">
      {/* Other sections like Hero */}
      
      <AboutEvent eventImg={eventImg} />   {/* 👈 This is your expandable section */}

      {/* More sections below */}
    </main>
  );
}

export default EventPage;
