import React from "react";
import Link from "next/link";

export default function MatchItemsPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Match Items</h1>
      <p>This is the Match Items page. You can list all matched items here.</p>

      <Link href="/landing" style={{ color: "#0A66C2", marginTop: "1rem", display: "inline-block" }}>
        ← Back to Landing
      </Link>
    </div>
  );
}