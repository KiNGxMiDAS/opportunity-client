import { useState, FC, useEffect, memo } from "react";
import { useStyles } from "./MarketDisplayStyles";

import {
  Typography,
  CardContent,
  Grid,
  Divider,
  alpha,
  Card,
  CardActions,
  CardActionArea,
  Button,
} from "@mui/material";
import ClickableCard from "../../../../common/components/ClickableCard/ClickableCard";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import {
  MARKET_DESCRIPTION_MAPPING,
  TOKEN_FACTORY_ADDRESS,
} from "../../../../constant";
import { Box } from "@mui/system";
interface IMarketDisplayProps {
  isShowingStats?: boolean;
  showDescription?: boolean;
  showStats?: boolean;
  selectable?: boolean;
  text?: boolean;
  small?: boolean;
  selected?: boolean;
  onSelect?: () => void;
  marketDetails: any;
}

const MarketDisplay: FC<IMarketDisplayProps> = ({
  isShowingStats = true,
  showDescription = true,
  showStats = true,
  small = false,
  selectable,
  selected = false,
  text = false,
  onSelect,
  marketDetails,
}) => {
  const classes = useStyles();
  const router: NextRouter = useRouter();

  const handleOnSelect = (): void => {
    //internal event

    //external event
    onSelect();
  };

  return (
    <Card
      variant="elevation"
      sx={{
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;",
        cursor: "pointer",
        border: (theme) =>
          selected
            ? `2px solid ${theme.palette.primary.main}`
            : `1px solid #ddd`,
      }}
      onClick={
        selectable
          ? () => handleOnSelect()
          : () => router.push(`/view/market/${marketDetails?.id}`)
      }
    >
      <CardContent className={classes.primaryContentContainer}>
        <Box style={{ width: 100, height: 60, borderRadius: 2 }}>
          <img
            src="/assets/images/writing_and_translation.jpeg"
            style={{ borderRadius: 2 }}
            width="100%"
            height="100%"
          />
        </Box>

        <Box px={2}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography
                sx={{
                  color: "black",
                  height: 25,
                  fontSize: small ? 12 : 16,
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
              >
                {marketDetails?.name
                  ? marketDetails?.name
                  : "Unable to load market name"}
              </Typography>
            </Grid>

            <Grid item />
          </Grid>
          {showDescription && (
            <Typography
              variant="body2"
              sx={{
                height: 75,
                py: 1,
                //  fontSize: small ? 10 : 13,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
              color="text.secondary"
            >
              {MARKET_DESCRIPTION_MAPPING[marketDetails?.name]}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export { type IMarketDisplayProps };
export default memo(MarketDisplay);
