import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.badge}>OFFICIAL KUTZ ONLY</div>
        <h1 style={styles.h1}>JBK Bookings</h1>
        <p style={styles.p}>Book official cuts. Fast. Simple.</p>

        <div style={styles.btnRow}>
          <Link href="/barbers" style={styles.btnPrimary}>Book Now</Link>
          <Link href="/barber/officialkutz" style={styles.btnGhost}>View OfficialKutz</Link>
        </div>

        <div style={styles.section}>
          <h2 style={styles.h2}>Services</h2>
          <ul style={styles.list}>
            <li>Haircut</li>
            <li>Haircut + Beard</li>
            <li>Kids Kutz</li>
            <li>Premium Facial</li>
            <li>Straight Razor Head Shave</li>
            <li>Mobile Executive Kut</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: { minHeight: "100vh", background: "#0b0b0b", display: "grid", placeItems: "center", padding: 20, color: "#fff", fontFamily: "Arial, sans-serif" },
  card: { width: "100%", maxWidth: 700, border: "1px solid #222", borderRadius: 16, padding: 24, background: "rgba(255,255,255,0.03)" },
  badge: { display: "inline-block", padding: "6px 10px", borderRadius: 999, border: "1px solid #00f0ff", color: "#00f0ff", fontSize: 12, letterSpacing: 1 },
  h1: { fontSize: 40, margin: "12px 0 6px" },
  p: { opacity: 0.85, margin: 0 },
  btnRow: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  btnPrimary: { background: "#00f0ff", color: "#000", padding: "12px 16px", borderRadius: 10, textDecoration: "none", fontWeight: 700 },
  btnGhost: { border: "1px solid #333", color: "#fff", padding: "12px 16px", borderRadius: 10, textDecoration: "none" },
  section: { marginTop: 22, borderTop: "1px solid #222", paddingTop: 18 },
  h2: { margin: "0 0 10px", fontSize: 18 },
  list: { margin: 0, paddingLeft: 18, opacity: 0.9, lineHeight: 1.9 }
};