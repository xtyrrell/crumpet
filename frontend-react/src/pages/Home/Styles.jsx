import styled from "@emotion/styled";

export const Home = styled.div`
  background-image: url("/assets/images/bg.jpeg");
  background-position: center;
  background-size: cover;
  margin-top: -90px;
  padding-bottom: 90px;

  .emoji-divider {
    font-size: 80px;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: 700px) {
      font-size: 25px;
    }
  }

  h1 {
    font-weight: bolder;
    color: white;
  }

  .ugly {
    font-family: cursive;
  }

  .highlight {
    color: #d0449d;
  }

  .fun-image {
    width: 400px;
    @media (max-width: 700px) {
      width: 200px;
    }
  }

  .reasons {
    h3 {
      margin: 0;
    }
  }
`;

export const Hero = styled.div`
  margin-top: 140px;
  display: flex;
  justify-content: space-between;
  .text {
    width: 50%;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 8px;
    height: 250px;
  }

  p {
    font-size: 22px;
  }

  @media (max-width: 860px) {
    .image-wrapper {
      width: 100%;
      justify-content: flex-start;
    }
    img {
      height: 150px;
      margin-top: 50px;
    }
    flex-wrap: wrap;
    .text {
      width: 100%;
    }
  } ;
`;
