import React from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";

import { Card as MuiCard } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import { useStyles } from "./styles.js";
import MaticLogo from "../../assets/polygon-matic-logo.png";

const Card = ({ tokenId, name, image, price, owner, isForSale }) => {
  const classes = useStyles();
  console.log("image: ", image);
  return (
    <Link to={`/nft/${tokenId}`}>
      <MuiCard className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="240"
            image={image}
            title={name}
          />
          <CardContent className={classes.content}>
            <div className={classes.title}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h5"}
                gutterBottom
              >
                {name}
              </Typography>
              <Chip
                size="small"
                disabled={true}
                label="Selling"
                className={classes.badge}
              />
            </div>
            <Typography variant="h6" className={classes.price}>
            <img src={MaticLogo} style={{width:"20px", height:"20px", margin:"5px"}}></img>

              <span>{Web3.utils.fromWei(String(price), "ether")}</span>
            </Typography>
            <Divider className={classes.divider} light />
            <Typography
              variant={"body1"}
              align={"center"}
              className={classes.seller}
            >
              {owner.slice(0, 7)}...{owner.slice(-4)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </Link>
  );
};

export default Card;
