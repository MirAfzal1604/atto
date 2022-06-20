<template>
  <div class="loader" v-show="loading">
    <p class="text">
      <img src="./assets/loading.svg" alt="" />
    </p>
  </div>
  <div class="nav">
    <div class="container">
      <div class="nav_flex">
        <div class="nav_left">
          <router-link :to="{ name: 'mainPage' }">
            <img src="./assets/attoLogo.jpg" alt="Atto logo" />
          </router-link>
          <ul v-show="!mobile" class="navUl">
            <li v-for="navLink of navlinks" :key="navLink" class="nav_btn_line">
              <router-link :to="navLink.url">{{ navLink.label }}</router-link>
              <ul class="dropDownUl" v-if="navLink.children">
                <li v-for="child in navLink.children" :key="child">
                  <a :href="child.url">{{ child.label }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="nav_right">
          <p class="tel_number">+998(94)426-16-04</p>
          <button class="per_btn">
            <router-link :to="{ name: 'mainPage' }">
              Personal cabinet
            </router-link>
          </button>
          <div
            id="navIcon"
            :class="{ isClicked: clicked }"
            @click="toggleMobileDev"
            v-show="mobile"
          >
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
        </div>
      </div>
      <transition name="mobileTransition">
        <div class="mobileNav" v-show="mobileNav">
          <ul class="navUl">
            <li v-for="navLink of navlinks" :key="navLink" class="nav_btn_line">
              <a :href="navLink.url">{{ navLink.label }}</a>
              <ul class="dropDownUl" v-if="navLink.children">
                <li v-for="child in navLink.children" :key="child">
                  <a :href="child.url">{{ child.label }}</a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="contactNav">
            <p class="tel_number">+998(94)426-16-04</p>
            <button class="per_btn">
              <router-link :to="{ name: 'mainPage' }">
                Personal cabinet
              </router-link>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <router-view />

  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="left">
            <ul class="footerLinks">
              <li v-for="(item1, index) in items1" :key="index">
                <p>{{ item1.title }}</p>

                <ul class="" v-if="item1.children">
                  <li v-for="child1 in item1.children" :key="child1">
                    <a :href="child1.link">{{ child1.childTitle }}</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="footerLinks">
              <li v-for="(item2, index) in items2" :key="index">
                <p>{{ item2.title }}</p>

                <ul class="" v-if="item2.children">
                  <li v-for="child2 in item2.children" :key="child2">
                    <a :href="child2.link">{{ child2.childTitle }}</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="footerLinks">
              <li v-for="(item3, index) in items3" :key="index">
                <p>{{ item3.title }}</p>

                <ul class="" v-if="item3.children">
                  <li v-for="child3 in item3.children" :key="child3">
                    <a :href="child3.link">{{ child3.childTitle }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="right">
            <div class="linkStore">
              <router-link :to="{ name: 'serve' }">
                <img src="./assets/appStore.jpg" alt="" />
              </router-link>
              <router-link :to="{ name: 'serve' }">
                <img src="./assets/googlePlay.jpg" alt="" />
              </router-link>
            </div>
            <div class="box">
              <h3>Card blocked?</h3>
              <p>
                Most likely, you do not have enough funds on your card to pay
                for travel
              </p>
              <button class="box-btn">Unblock the card</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footerInfo">
        <div class="footer-bottom">
          <div class="footer-column">
            <router-link class="footerImg" :to="{ name: 'serve' }">
              <img src="./assets/attoFooter.jpg" alt="" />
            </router-link>
            <span>
              © 2022. ООО "AVTOMATLASHTIRILGAN TRANSPORT TO'LOV TIZIMI
              OPERATORI".<br />
              All rights reserved, services are licensed. License №15.
            </span>
          </div>
          <div class="footer-column">
            <router-link class="links" :to="{ name: 'serve' }"
              >Terms of use</router-link
            >
            <router-link class="links" :to="{ name: 'serve' }"
              >Oferta</router-link
            >
          </div>
          <div class="footer-column">
            <a
              href="https://t.me/mirafzal_16"
              target="_blank"
              class="footer-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="footer-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram/.com/mirafzal_16"
              target="_blank"
              class="footer-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  beforeMount() {
    setTimeout(() => (this.loading = false), 2000);
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      clicked: false,
      loading: true,
      navlinks: [
        {
          label: "Passengers",
          url: "/atto/passengers",
          children: [
            { label: "Transport cards", url: "/atto/passengers" },
            { label: "Preferential transport cards", url: "/atto/passenger2" },
            { label: "Tariffs", url: "#" },
            { label: "Replenishment", url: "#" },
            { label: "СМС информирование", url: "#" },
            { label: "FAQ", url: "#" },
          ],
        },
        {
          label: "To transporters",
          url: "#",
          children: [
            { label: "Validators", url: "#" },
            { label: "Terms of cooperation", url: "#" },
          ],
        },
        {
          label: "About us",
          url: "#",
          children: [
            { label: "About company", url: "#" },
            { label: "Documents", url: "#" },
            { label: "Vacancies", url: "#" },
          ],
        },
        {
          label: "News",
          url: "#",
        },
        {
          label: "Contacts",
          url: "#",
        },
      ],
      items1: [
        {
          title: "PASSENGERS",
          children: [
            { childTitle: "Transport cards", link: "#" },
            { childTitle: "Preferential transport cards", link: "#" },
            { childTitle: "Tariffs", link: "#" },
            { childTitle: "Replenishment", link: "#" },
            { childTitle: "SMS informing", link: "#" },
            { childTitle: "FAQ", link: "#" },
          ],
        },
      ],
      items2: [
        {
          title: "TO TRANSPORTERS",
          children: [
            { childTitle: "Validators", link: "#" },
            { childTitle: "Terms of cooperation", link: "#" },
          ],
        },
      ],
      items3: [
        {
          title: "ABOUT US",
          children: [
            { childTitle: "About company", link: "#" },
            { childTitle: "Documentation", link: "#" },
            { childTitle: "Vacancies", link: "#" },
          ],
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileDev() {
      this.mobileNav = !this.mobileNav;

      this.clicked = !this.clicked;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1200) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>


<style scoped>
.loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
}
.text {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text img {
  animation: load 1.5s infinite;
  width: 350px;
  height: auto;
}
@keyframes load {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
a {
  color: #000;
}
a:hover {
  color: #000;
}
.nav {
  box-shadow: 0 6px 20px rgba(165, 166, 180, 0.13);
}
.nav_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav_left {
  display: flex;
  align-items: center;
}
.nav_left img {
  padding: 0 20px 0 0;
}
.nav_left .navUl {
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;
}
.navUl > li {
  position: relative;
}
.navUl li a {
  font-size: 15px;
  margin: 0 20px;
  color: #232455;
  padding: 20px 0;
}
.nav_btn_line {
  position: relative;
  transition: all 0.7s ease;
}
.navUl .nav_btn_line:hover:nth-child(4)::before,
.navUl .nav_btn_line:hover:nth-child(5)::before {
  content: "";
  position: absolute;
  bottom: -23px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #4cb0fe;
}
.navUl li:hover .dropDownUl {
  opacity: 1;
  visibility: visible;
  position: absolute;
  top: 35px;
  left: 0;
  transform: perspective(50em) rotateX(0deg);
  z-index: 2;
}
.dropDownUl {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 60px;
  left: 0;
  transform: perspective(50em) rotateY(-100deg);
  transition: all 0.8s ease;
  width: 230px;
  box-shadow: 0 0 20px rgba(165, 166, 180, 0.13);
  background-color: #ffffff;
  z-index: 2;
}
.dropDownUl li {
  padding: 8px 0px;
  cursor: pointer;
  width: 100%;
}
.dropDownUl li:hover {
  background-color: #4cb0fe;
}
.dropDownUl li:hover a {
  color: #fff;
}
.nav_right {
  display: flex;
  align-items: center;
}
.tel_number {
  font-size: 15px;
  font-weight: 700;
  padding: 0 20px 0 0;
}
.per_btn {
  padding: 22px 20px;
  background-color: #00c68a;
}
.per_btn a {
  color: #fff;
  font-size: 15px;
}

.footer {
  padding: 50px 0 30px;
  background: linear-gradient(180deg, #1749a5 0%, #113375 100%);
}
.left {
  display: flex;
  justify-content: space-between;
}
.footer ul > li > * {
  color: #fff;
  font-size: 13px;
}
.footer ul > li > a:hover {
  text-decoration: underline;
}
.footer ul li {
  margin-bottom: 14px;
}
.footerLinks li p {
  color: #ffffff;
  opacity: 0.7;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.linkStore img {
  border-radius: 7px 15px 15px 10px;
  padding: 0 10px 0 0;
}
.footerLinks:nth-child(3) {
  margin: 0 150px 0 0;
}
.box {
  margin: 20px 0 0 0;
  font-style: normal;
  line-height: 16px;
  font-weight: normal;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
}
.box h3 {
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 12px;
}
.box p {
  font-size: 12px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}
.box-btn {
  padding: 16px;
  background: #00c68a;
  border-radius: 40px;
  font-size: 14px;
  color: #ffffff;
}
.footerInfo {
  margin: 50px 0 0 0;
}
.footer-bottom {
  padding: 15px 0 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.footer-column {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
}
.footer-column .links {
  margin-right: 40px;
}
.footer-column .links:hover {
  text-decoration: underline;
}
.footerImg {
  margin-right: 26px;
}
.footer-column a,
.footer-column span {
  color: #fff;
}
.footer-column span {
  opacity: 0.5;
  font-size: 14px;
}

.footer-icon {
  color: #ffffff;
  margin-left: 35px;
  margin-top: 10px;
  padding: 5px;
  display: inline-block;
}
.footer-icon svg {
  width: 25px;
  height: 25px;
  transition: all 0.6s ease;
  cursor: pointer;
}
.footer-icon:hover svg {
  transform: scale(1.3);
}

@media screen and (max-width: 1200px) {
  .line {
    width: 30px;
    height: 3px;
    background: #000;
    margin: 5px 0;
  }
  .mobileNav {
    width: 50%;
    min-height: 100%;
    background: #f8f9fa;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0 5px;
    z-index: 99;
  }
  .navUl {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navUl > li {
    margin: 15px 0px;
    padding: 0;
  }
  .navUl li:hover .dropDownUl {
    top: 25px;
  }
  .navUl .nav_btn_line:hover:nth-child(4)::before,
  .navUl .nav_btn_line:hover:nth-child(5)::before {
    display: none;
  }
  .contactNav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .contactNav .per_btn {
    width: 100%;
  }
  .contactNav .tel_number {
    width: 100%;
    text-align: center;
    padding: 0 0 15px 0;
  }
  #navIcon {
    cursor: pointer;
  }
  .line1,
  .line2,
  .line3 {
    transition: all 0.5s ease;
  }
  .isClicked .line1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 7px);
    transform: rotate(-45deg) translate(-6px, 7px);
  }
  .isClicked .line2 {
    opacity: 0;
  }
  .isClicked .line3 {
    -webkit-transform: rotate(45deg) translate(-5px, -5px);
    transform: rotate(45deg) translate(-5px, -5px);
  }
  .nav {
    padding: 20px 0;
  }
  .nav_left .navUl {
    display: none;
  }
  .nav_right .per_btn,
  .nav_right .tel_number {
    display: none;
  }
  .mobileTransition-enter-active,
  .mobileTransition-leave-active {
    transition: all 0.7s ease;
  }
  .mobileTransition-enter-from,
  .mobileTransition-leave-to {
    transform: translateX(-100%);
  }
}
@media screen and (max-width: 769px) {
  .left {
    flex-direction: column;
  }
  .footerLinks {
    margin: 0 0 20px 0;
  }
}
@media screen and (max-width: 450px) {
  .mobileNav {
    width: 70%;
  }
}
@media screen and (max-width: 369px) {
  .linkStore img {
    width: 140px;
  }
}
</style>