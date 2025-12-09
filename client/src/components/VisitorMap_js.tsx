import { useEffect, useRef } from "react";

export default function VisitorMap_js() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 避免在严格模式 / 重新渲染时重复插入
    if (containerRef.current.querySelector("script#clustrmaps")) {
      return;
    }

    const script = document.createElement("script");
    script.id = "clustrmaps";
    script.type = "text/javascript";
    script.src =
      "//cdn.clustrmaps.com/map_v2.js?cl=555555&w=300&t=n&d=EsPP6NPX6itD8hnKvsau0bXu4Fw00_Xr7L5G4uPboF8&co=d0d0d0&cmo=c9a86a&cmn=ffd700&ct=555555";
    // ❗ 不要设置 async
    // script.async = true;  // 删掉这一行

    containerRef.current.appendChild(script);

    // 清理：卸载组件时把内容清掉
    return () => {
      containerRef.current && (containerRef.current.innerHTML = "");
    };
  }, []);

  return (
    <div className="mt-8 flex justify-center">
      <div
        ref={containerRef}
        style={{
          // 宽度高度只控制容器，你可以按需要调
          width: "400px",
          minHeight: "160px",
        }}
      />
    </div>
  );
}
