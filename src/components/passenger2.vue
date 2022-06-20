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
            <img src="../assets/variedAttos.jpg" alt="" />
          </div>
          <div class="text">
            <p class="text_p">
              From January 1, 2021, the implementation of preferential transport
              cards has begun: student (green), student (yellow) and social
              (red).
              <br />
              <br />
              Preferential transport cards provide the opportunity to travel
              with a 50% discount for pupils, students, pensioners and the
              disabled, subject to the purchase of special tariff plans.
              <br />
              <br />
              Currently, preferential transport cards can be obtained free of
              charge at 70 kiosks selling monthly travel tickets
              "Toshshahartyulovchitrans", subject to the purchase of tariff
              plans. To obtain a preferential transport card, you must submit
              the following documents:
              <br />
              <br />
              * For students - a copy of the passport and student card;<br />
              * Pensioners - a copy of the passport and pension certificate;<br />
              * Schoolchildren - a copy of the passport of one of the parents
              and a certificate about the birth of a student.
            </p>
            <p class="rate">
              <strong> Tarifs </strong>
            </p>

            <p class="text_p">
              For preferential categories of citizens, a convenient line of
              tariffs for 5, 10, 15, 20 or 30 days has been developed.
              <br />

              Tariffs are of two types only for the bus or dual - for the bus
              and metro.
              <br />
              To date, JSC "Toshshahartranskhizmat" has set the following prices
              for preferential tariffs:
              <br />
            </p>

            <table style="border-collapse: collapse" cellspacing="0">
              <tbody>
                <tr>
                  <td>
                    <p><strong>Количество дней</strong></p>
                  </td>
                  <td>
                    <p><strong>Автобус </strong></p>
                  </td>
                  <td>
                    <p><strong>Автобус+Метро</strong></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>5 дней</p>
                  </td>
                  <td>
                    <p>10&nbsp;000 сумов</p>
                  </td>
                  <td>
                    <p>14&nbsp;000 сумов</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>10 дней</p>
                  </td>
                  <td>
                    <p>20&nbsp;000 сумов</p>
                  </td>
                  <td>
                    <p>28&nbsp;000 сумов</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>15 дней</p>
                  </td>
                  <td>
                    <p>30&nbsp;000 сумов</p>
                  </td>
                  <td>
                    <p>42&nbsp;000 сумов</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>20 дней</p>
                  </td>
                  <td>
                    <p>40&nbsp;000 сумов</p>
                  </td>
                  <td>
                    <p>56&nbsp;000 сумов</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>30 дней</p>
                  </td>
                  <td>
                    <p>60&nbsp;000 сумов</p>
                  </td>
                  <td>
                    <p>83&nbsp;000 сумов</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <p class="text_p">
              By purchasing the above tariffs, the passenger can make an
              unlimited number of trips for the selected period. For example,
              for 10,000 soums, you can use the bus for 5 days without any
              restrictions. If we take into account even the minimum number of
              trips - two per day, then even in this case the benefit is obvious
              - the cost of one trip is 1000 soums. The more trips a passenger
              makes in a certain period, the cheaper the price of each trip is.
            </p>

            <p class="text_p">
              You can choose and purchase a suitable tariff in several ways:
            </p>

            <p class="text_p">
              * In the ATTO mobile application;
              <br />
              * In your personal account on the website atto.uz;
              <br />
              * In land-based kiosks for the sale of cards.
              <br />
              * At ground and underground ticket offices of the subway
              <br />
            </p>

            <p class="rate">
              <strong> Replenishment </strong>
            </p>

            <p class="text_p">
              The balance of the card must be replenished regularly after the
              expiration of the tariff. You can do this in several ways:
            </p>

            <p class="text_p">
              * Through payment systems and mobile applications - MyUzcard,
              Click, PayMe, UPay, Apelsin;
              <br />
              * Through infokiosks;
              <br />
              * In ground and underground cash desks of the subway.
              <br />
              * At points of sale of monthly travel cards JSC
              "Toshshahartranskhizmat"
            </p>

            <p class="rate">
              <strong> Use of a preferential transport card </strong>
            </p>

            <p class="text_p">
              Despite the fact that preferential cards were put into circulation
              three months ago and many have already appreciated the convenience
              and savings, nevertheless, passengers still have questions
              regarding the use of transport cards.
              <br />
              <br />
              The most common question is whether it is necessary to activate
              the tariff on the card every time after replenishing the balance.
              Yes need. At the same time, do not even activate, but purchase a
              tariff each time. This is done just the same so that a person can
              easily change the number of days for trips and not be “tied” to a
              certain tariff.
              <br />
              <br />
              For example, in March, a passenger travels for a full month, and
              in April he goes on vacation, or, if he is a student or a
              schoolboy, he starts his vacation, practice. Naturally, it does
              not make sense for a passenger to purchase a fare for 30 days.
              Based on his schedule, a person buys the tariff that is convenient
              for him or does not buy at all.
              <br />
              <br />
              It is important to note that if a passenger topped up the balance
              of the card and did not purchase a tariff, money will be withdrawn
              during trips as from a regular card - 1,400 soums per trip.
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
.text_p {
  font-size: 14px;
  line-height: 1.8;
  color: #232455;
  margin-bottom: 30px;
}
.rate strong {
  font-family: "SFProDisplay-Bold", sans-serif;
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.3;
}
table {
  margin: 0 0 30px 0;
}
td {
  border: 1px solid #000;
  vertical-align: top;
  width: 180px;
  padding: 0 0 20px 5px;
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