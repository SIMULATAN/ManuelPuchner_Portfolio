import { useState, useEffect } from "react";

function Parallax({ children }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      var scrollPos =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollPos < 500) {
        setOffsetY(-scrollPos);
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
        transform: `translateY(${offsetY * 0.25}px)`,
      }}
    >
      {children.map((child, index) => {
        return (
          <div
            key={index}
            style={{ transform: `scale(${offsetY / 4000 + 1})` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default Parallax;
