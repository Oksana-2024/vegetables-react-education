//import css from "./Discount.module.css";
import { useSpring, animated } from "@react-spring/web";

const Discount = (textDiscount) => {
   const springs = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "rotate(2deg)" },
    config: { duration: 2000 },
    loop: true,
  });
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}>
      <animated.div
        style={{
          ...springs,
          display: "inline-block",
        }}
      >
        {textDiscount.map((item, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              marginRight: "20px",
              fontSize: "1.5rem",
            }}
          >
            {item}
          </span>
        ))}
      </animated.div>
    </div>
  );
};

export default Discount;
