import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";

import { Skeleton, useBreakpointValue } from "@chakra-ui/react";

export const GoogleMap: React.FC = () => {
  const heightSize = useBreakpointValue({ base: "300px", md: "500px" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Skeleton isLoaded={isLoaded} height={heightSize} width="100%">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2914.65695374852!2d141.34593882822702!3d43.069681989972224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x5f0b2974d2c3f903%3A0xa5e2b18cdd4a47a5!2z5YyX5rW36YGT5pyt5bmM5biC5YyX5Yy65YyX77yW5p2h6KW_77yT5LiB55uu77yU5LiB55uuIOacreW5jOmnhQ!3m2!1d43.0686606!2d141.3507553!4m5!1s0x5f0b290983084a75%3A0xb3b26a1e9f81ea7f!2z44CSMDYwLTA4MDgg5YyX5rW36YGT5pyt5bmM5biC5YyX5Yy65YyX77yY5p2h6KW_77yV5LiB55uu77yY4oiS77yRIOWMl-a1t-mBk-Wkp-WtpiDlrabooZPkuqTmtYHkvJrppKg!3m2!1d43.0708888!2d141.3470752!5e0!3m2!1sja!2sjp!4v1685455508834!5m2!1sja!2sjp"
          width="100%"
          height={heightSize}
          styles={{ border: 0 }}
          loading="lazy"
        ></Iframe>
      </Skeleton>
    </>
  );
};
