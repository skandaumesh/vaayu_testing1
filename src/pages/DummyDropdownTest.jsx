import TestNavbar from "../components/TestNavbar";

export default function DummyDropdownTest() {
  return (
    <div style={{ minHeight: "100vh", background: "#f6f7fb" }}>
      <TestNavbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>
          Dummy Dropdown Test Page
        </h1>
        <p style={{ marginBottom: 24 }}>
          Hover “Services” in the top bar. If dropdown opens here, your real
          navbar issue is not logic — it’s layout/CSS (overflow/z-index/wrapper).
        </p>

        <div style={{ height: 1200, background: "#fff", borderRadius: 16, padding: 16 }}>
          Scroll area to ensure nothing weird happens. Dropdown should still appear above.
        </div>
      </main>
    </div>
  );
}
