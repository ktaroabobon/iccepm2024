import React from "react";
import {Icon, IconProps} from "@chakra-ui/react";

import {iconMapper} from "./Mapper";

type Props = IconProps & {
  icon: keyof typeof iconMapper;
}

const CustomIcon: React.FC<Props> = (props) => {
  const {icon} = props;
  return (
    <Icon as={iconMapper[icon]} {...props}/>
  )
}

export default CustomIcon;