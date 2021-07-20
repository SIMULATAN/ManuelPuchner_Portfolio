import { useEffect } from "react";

function Parallax({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      var scrollPos =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollPos < 500) {
        document.body.style.setProperty("--parallax-offsetY", -scrollPos);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: "translateY(calc(var(--parallax-offsetY) * 0.35px))",
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;
