import { Icon, IconifyIcon } from "@iconify/react";
import { Box, BoxProps, SxProps } from "@mui/material";
import React from "react";

interface IIconifyProps extends BoxProps {
  sx?: SxProps;
  icon: IconifyIcon | string;
}

export default function Iconify({ icon, sx, ...other }: IIconifyProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
