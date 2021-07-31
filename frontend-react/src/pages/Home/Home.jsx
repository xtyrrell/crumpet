import React from "react";

import * as S from "./Styles";
import { Container, Button } from "../../styles/shared/Styles";

export default function Home() {
  return (
    <S.Home>
      <Container>
        <S.Hero>
          <div className="text">
            <h1>Win NFT’s worth millions for just $10</h1>
            <h2>
              Enter a raffle, stand a chance to win an NFT from your favorite
              creator.
            </h2>
            <Button>Enter raffle</Button>
          </div>
          <div className="image-wrapper">
            {/* <img src="https://media.giphy.com/media/35B3Val0pYgtpScqsz/source.gif" /> */}
            {/* <img src="https://media.giphy.com/media/l3vR7ohqOmHgIOxTW/source.gif" /> */}
            {/* <img src="https://media.giphy.com/media/2A2E8jxnMGAXzL4AMj/source.gif" /> */}
            <img src="https://media.giphy.com/media/hJtqxkjZuu17W/source.gif" />
          </div>
        </S.Hero>
        <div className="emoji-divider">🥞 🥞 🥞 🥞 🥞 🥞 🥞 🥞 🥞 🥞 🥞</div>
        <h1>NFT marketplaces & auctions are no fun. </h1>
        <div className="reasons">
          <h2>😤 You pay full price</h2>
          <h2>😡 You get out-bidded by trillionaires</h2>
        </div>

        <h1>
          But Crumpet is <span className="ugly">different.</span>{" "}
        </h1>

        <h3>
          We think everyone should have a chance to own the best NFT’s. That’s
          why we allow creators to sell{" "}
          <span className="highlight">tickets</span> to an NFT{" "}
          <span className="highlight">raffle</span>. That means you can support
          your fave creators & buy their art, without breaking the bank.
        </h3>

        <h1>
          Supporting creators should be as fun as going to the game arcade.
        </h1>
        <img className="fun-image" src="/assets/images/arcade-2.png" />
      </Container>
    </S.Home>
  );
}
