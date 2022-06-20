<template>
  <div class="passenger">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <div class="left">
            <ul class="linkUl">
              <li v-for="link in links" :key="link">
                <router-link :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <p class="mainTitle">
            Single Transport Card with Contactless Technology (NFC)
          </p>
          <div class="attoLogo">
            <img src="../assets/attoImg.jpg" alt="" />
          </div>
          <div class="text">
            <p>
              The advertising campaign of the operator "ATTO" has ended. From
              December 1 of this year, the operator of the automated transport
              payment system is completing a campaign for the free provision of
              a transport card, the purpose of which was to popularize the
              transport card among users of public public transport.
              <br />
              <br />
              According to the campaign, launched on July 1 of this year, the
              transport card was provided to passengers free of charge at the
              expense of the operator (from the budget allocated for marketing),
              and the amount paid by passengers, that is, 5,000 soums,
              replenished the balance of the ATTO card. In turn, passengers
              could use the transport card to pay for the first three trips,
              with its subsequent replenishment and use both in the metro and on
              buses in the city of Tashkent. The results of the campaign, among
              other things, are the sales of transport cards, which have already
              exceeded 120,000.
              <br />
              <br />
              After the end of the promotion, the sale price of the "ATTO" card
              will be 15,000 soums. At the same time, this amount includes the
              cost of the card (10,000 UZS) and replenishment of the card
              balance in the amount of 5,000 UZS.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Transport cards", url: "#" },
        { title: "Preferential transport cards", url: "#" },
        { title: "Tariffs", url: "#" },
        { title: "Replenishment ", url: "#" },
        { title: "SMS informing", url: "#" },
        { title: "FAQ", url: "#" },
      ],
    };
  },
};
</script>

<style scoped>
.passenger {
  margin: 70px 0 0 0;
}
.mainTitle {
  font-family: "Gilroy-Bold", sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #232455;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
}
.left {
  margin: 70px 0 0 0;
  position: sticky;
  top: 20px;
}
.linkUl li {
  transition: 0.3s;
  position: relative;
  border-bottom: 1px solid #eeeff8;
}
.linkUl li:before {
  content: "";
  position: absolute;
  top: calc(100% - 1px);
  height: 2px;
  width: 0;
  background-color: #4cb0fe;
  transition: 0.3s;
}
.linkUl li:hover:before {
  width: 36px;
}
.linkUl li a {
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 18px 0;
  font-size: 14px;
  line-height: 1.4;
}
.attoLogo {
  width: 100%;
  margin: 30px 0 0 0;
}
.attoLogo img {
  width: 100%;
}
.text {
  padding: 50px 50px 0 50px;
}
.text p {
  font-size: 14px;
  line-height: 1.8;
  color: #232455;
  margin-bottom: 95px;
}

@media screen and (max-width: 996px) {
  .mainTitle {
    margin: 40px 0 0 0;
  }
  .left {
    margin: 0;
  }
  .text {
    padding: 30px 0px 0 0px;
  }
}

@media screen and (max-width: 369px) {
  .mainTitle {
    font-size: 18px;
  }
}
</style>