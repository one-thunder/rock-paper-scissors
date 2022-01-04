import { Box, Paper } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { common } from '@mui/material/colors';

const DEFAULTS = {
   radius: 205,
   borderSize: 48,
   padding: 42,
   shadowCoverageRatio: 2.6,
};
const stickerShadowOffset =
   DEFAULTS.borderSize / 2 / DEFAULTS.shadowCoverageRatio;

const BaseSticker = styled(Paper)`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   width: inherit;
   height: inherit;
   padding: ${DEFAULTS.padding};
   background: ${({ color }) => color};
   transition: 0.3s all;
   cursor: pointer;

   box-shadow: ${alpha(common.black, 0.3)} 0px -${stickerShadowOffset}px 0px 1px
      inset;

   :hover {
      transform: scale(1.2) rotate(6deg);
   }
`;

const BaseStickerInner = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   min-width: ${DEFAULTS.radius - DEFAULTS.borderSize}px;
   min-height: ${DEFAULTS.radius - DEFAULTS.borderSize}px;
   background: ${({ theme }) => theme.palette.primary.main};
   box-shadow: ${alpha(common.black, 0.2)} 0px ${stickerShadowOffset}px 0px 1px
      inset;
`;

export const S = {
   BaseSticker,
   BaseStickerInner,
};
