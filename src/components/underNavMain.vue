<template>
  <kinesis-container class="mainBox">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <div class="box_left">
            <p class="text">Mobile app</p>
            <ul class="underUl">
              <li class="underLi">Control your spending</li>
              <li class="underLi">Top up your card online</li>
              <li class="underLi">Block the card in case of loss</li>
            </ul>
            <div class="btnLinks">
              <router-link :to="{ name: 'serve' }">
                <img src="../assets/appStore.jpg" class="appStore" alt="" />
              </router-link>
              <router-link :to="{ name: 'serve' }">
                <img src="../assets/googlePlay.jpg" alt="" />
              </router-link>
            </div>
          </div>
        </div>
        <kinesis-element class="col-12 col-lg-6" :strength="30">
          <div class="box_right">
            <img
              src="../assets/smartPhone.png"
              class="smartPhone"
              alt="Main img"
            />
            <img
              src="../assets/bgSmartPhone.svg"
              alt="img"
              class="bgSmartPhone"
            />
          </div>
        </kinesis-element>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.mainBox {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  padding: 0 30px;
}
.box_left {
  font-size: 20px;
}
.text {
  font-size: 80px;
}
.underLi {
  list-style: disc;
  list-style: inside;
}
.btnLinks {
  padding: 35px 0 0 0;
}
.appStore {
  padding: 0 20px 0 0;
}
.box_right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.box_right img {
  width: 430px;
  height: auto;
}
.bgSmartPhone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
@media screen and (max-width: 969px) {
  .text {
    font-size: 60px;
  }
  .box_left {
    font-size: 17px;
  }
  .box_right img {
    padding: 50px 0 0 0;
    width: 300px;
    height: auto;
  }
}
@media screen and (max-width: 400px) {
  .text {
    font-size: 40px;
  }
  .box_left {
    font-size: 16px;
  }
  .box_right img {
    width: 200px;
    height: auto;
  }
  .btnLinks {
    display: none;
  }
}
</style>