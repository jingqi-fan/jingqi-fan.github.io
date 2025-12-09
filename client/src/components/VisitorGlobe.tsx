import { useEffect, useRef } from "react";

export default function VisitorGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//clustrmaps.com/globe.js?d=EsPP6NPX6itD8hnKvsau0bXu4Fw00_Xr7L5G4uPboF8";
    script.id = "clstr_globe";
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "180px",   // 想要多小改这里
        height: "180px",
      }}
    />
  );
}