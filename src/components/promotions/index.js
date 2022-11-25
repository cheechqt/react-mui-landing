import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import { Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "styles/promotions";

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe",
];

export default function Promotions() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [show, setShow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => setShow(false), 3000);

    const intervalId = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{ enter: 500, exit: 100 }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[msgIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
