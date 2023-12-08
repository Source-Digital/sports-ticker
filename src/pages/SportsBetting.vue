<template>
  <div class="transparent">
    <div class="row q-py-xs q-px-md justify-end">
      <div class="col-auto">
        <q-card style="border-radius: 15px; width: 525px" class="col bg-white">
          <div class="row">
            <q-card-section class="row items-center">
              <q-avatar color="white" text-color="white" class="q-ma-xs">
                <q-img
                  src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/logos/sports/pga-tour-6-logo-png-transparent.png"
                  spinner-color="white"
                  fill
                  style="max-width: 80%"
                />
              </q-avatar>
              <span class="q-ml-sm text-subtitle2 text-weight-medium"
                >Complete your wager below</span
              >
            </q-card-section>
            <q-card-section class="q-pa-none q-ma-none q-mx-sm full-width">
              <div class="row q-px-sm">
                <div class="col">
                  <q-img
                    src="https://storage.googleapis.com/source-uploads-production/uploads/BN_Golfer_768x389_82b2dcf3f3/BN_Golfer_768x389_82b2dcf3f3.png"
                    :ratio="16 / 9"
                    style="max-height: 200px; border-radius: 15px"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                </div>
              </div>
            </q-card-section>
            <div class="col-12 q-px-xs">
              <div class="row">
                <div class="col">
                  <q-expansion-item
                    expand-separator
                    dense
                    icon="sports_golf"
                    class="text-weight-medium text-grey-8 bg-grey-2 q-mt-md q-px-sm q-pt-xs q-pb-sm"
                    style="border-radius: 20px"
                    label="Outright Winner"
                  >
                    <div class="row flex-start justify-center q-mt-sm">
                      <div
                        class="col-xs-12 col-sm-6"
                        v-for="wager in tourWagers"
                        :key="wager.id"
                      >
                        <q-card
                          @click="wagerDialog = true"
                          style="border-radius: 15px"
                          clickable
                          v-ripple
                          class="bg-grey-1 row no-wrap q-pa-xs q-ma-xs justify-around items-center text-grey-10"
                        >
                          <div class="col-auto q-mx-sm">
                            {{ wager.name }}
                          </div>
                          <q-space />
                          <div class="col-auto q-ml-md">
                            <q-btn
                              style="border-radius: 15px"
                              class=""
                              flat
                              color="grey-3"
                              text-color="blue-5"
                              :label="wager.lineValue"
                            />
                          </div>
                        </q-card>
                        <q-dialog
                          v-model="wagerDialog"
                          persistent
                          full-width
                          full-height
                          class="transparent q-pa-none q-ma-none"
                        >
                          <q-card style="border-radius: 15px" class="bg-white">
                            <q-card-section class="row items-center">
                              <q-avatar
                                color="white"
                                text-color="white"
                                class="q-ma-xs"
                              >
                                <q-img
                                  src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/logos/sports/pga-tour-6-logo-png-transparent.png"
                                  spinner-color="white"
                                  fill
                                  style="max-width: 80%"
                                />
                              </q-avatar>
                              <span
                                class="q-ml-sm text-subtitle2 text-weight-medium"
                                >Complete your wager below</span
                              >
                            </q-card-section>
                            <q-card-section class="q-pa-none q-ma-none q-mx-sm">
                              <div class="row">
                                <div class="col">
                                  <q-img
                                    src="https://storage.googleapis.com/source-uploads-production/uploads/BN_Golfer_768x389_82b2dcf3f3/BN_Golfer_768x389_82b2dcf3f3.png"
                                    :ratio="16 / 9"
                                    style="
                                      max-height: 200px;
                                      border-radius: 15px;
                                    "
                                    spinner-color="primary"
                                    spinner-size="82px"
                                  />
                                </div>
                              </div>
                            </q-card-section>
                            <q-card-section class="q-pa-sm q-mb-xs">
                              <div
                                style="border-radius: 15px"
                                class="row q-pa-sm items-center justify-center q-gutter-xs"
                              >
                                <div
                                  style="border-radius: 15px"
                                  class="col-12 bg-white text-center text-black text-weight-medium q-py-xs q-px-md text-h6"
                                >
                                  AT&T Byron Nelson Championship
                                </div>
                                <div
                                  style="border-radius: 15px"
                                  class="col-auto bg-white text-grey-8 text-weight-medium q-py-xs q-px-sm text-subtitle2"
                                >
                                  Bryson DeChambeau
                                </div>
                                <div
                                  style="border-radius: 15px"
                                  class="col-auto bg-white text-grey-8 text-weight-medium q-py-xs q-px-sm text-subtitle2"
                                >
                                  Outright Winner
                                </div>
                              </div>
                            </q-card-section>
                            <q-card-section class="q-pa-sm q-my-sm">
                              <div
                                style="border-radius: 15px"
                                class="row bg-grey-3 q-pa-sm"
                              >
                                <div class="col-5">
                                  <div
                                    class="row justify-around items-center q-pa-xs"
                                  >
                                    <div class="col-10">
                                      <q-slider
                                        v-model="wagerAmount"
                                        :min="0"
                                        :max="500"
                                        :step="5"
                                        label
                                        dense
                                        :label-value="'$' + wagerAmount"
                                        label-always
                                      />
                                    </div>
                                    <div class="col-auto">
                                      <q-avatar
                                        class=""
                                        color="grey-6"
                                        text-color="white"
                                        icon="info"
                                        size="xs"
                                      />
                                    </div>
                                  </div>
                                  <q-input
                                    style="border-radius: 15px"
                                    class="q-pa-sm bg-grey-1"
                                    input-class="text-weight-bold q-pa-xs"
                                    dense
                                    borderless
                                    v-model="wagerAmount"
                                    label="Wager Amount"
                                  >
                                    <template v-slot:prepend>
                                      <q-icon name="attach_money" />
                                    </template>
                                  </q-input>
                                </div>
                                <div class="col-7">
                                  <div
                                    class="row no-wrap justify-around q-mx-xs"
                                  >
                                    <q-card
                                      flat
                                      style="border-radius: 15px"
                                      class="col bg-grey-1 q-pa-md q-mx-xs"
                                    >
                                      <div
                                        class="row justify-center items-center"
                                      >
                                        <dic
                                          class="col-auto text-blue-4 text-h6"
                                        >
                                          + {{ lineValue }}
                                        </dic>
                                      </div>
                                      <div
                                        class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                                      >
                                        <div class="col-auto">Moneyline</div>
                                      </div>
                                    </q-card>
                                    <q-card
                                      flat
                                      style="border-radius: 15px"
                                      class="col bg-grey-1 q-pa-md q-mx-xs text-h6"
                                    >
                                      <div
                                        class="row justify-center items-center"
                                      >
                                        <dic class="col-auto">
                                          $ {{ payout() }}
                                        </dic>
                                      </div>
                                      <div
                                        class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                                      >
                                        <div class="col-auto">To Win</div>
                                      </div>
                                    </q-card>
                                  </div>
                                </div>
                              </div>
                            </q-card-section>

                            <q-card-actions align="right">
                              <q-btn
                                style="border-radius: 15px"
                                class="q-px-sm text-capitalize text-weight-medium text-blue-8"
                                dense
                                outlined
                                size="lg"
                                label="Add to Betslip"
                                color=""
                                v-close-popup
                              />
                              <q-btn
                                style="border-radius: 15px"
                                class="q-px-sm text-capitalize text-weight-normal"
                                dense
                                size="lg"
                                label="Place Bet"
                                color="green-6"
                                @click="completedWagerDialog = true"
                              />
                            </q-card-actions>
                          </q-card>
                          <q-dialog
                            v-model="completedWagerDialog"
                            persistent
                            full-width
                            full-height
                            class="bg-white q-pa-none q-ma-none"
                          >
                            <q-card
                              style="border-radius: 15px"
                              class="bg-white"
                            >
                              <q-card-section class="row items-center no-wrap">
                                <q-avatar
                                  color="white"
                                  text-color="white"
                                  class="q-ma-xs"
                                >
                                  <q-icon
                                    size="xl"
                                    color="green-8"
                                    name="verified"
                                  />
                                </q-avatar>
                                <span
                                  class="q-ml-sm text-h6 text-weight-medium text-green-8"
                                  >Success!
                                </span>
                                <q-space />
                                <span
                                  class="q-mx-sm text-body text-weight-medium text-grey-9"
                                  >Added to your ContentWallet™
                                </span>
                              </q-card-section>
                              <q-card-section
                                class="q-pa-none q-ma-none q-mx-sm"
                              >
                                <div class="row">
                                  <div class="col">
                                    <q-img
                                      src="https://storage.googleapis.com/source-uploads-production/uploads/BN_Golfer_768x389_82b2dcf3f3/BN_Golfer_768x389_82b2dcf3f3.png"
                                      :ratio="16 / 9"
                                      style="
                                        max-height: 200px;
                                        border-radius: 15px;
                                      "
                                      spinner-color="primary"
                                      spinner-size="82px"
                                    />
                                  </div>
                                </div>
                              </q-card-section>
                              <q-card-section class="q-pa-sm q-mb-xs">
                                <div
                                  style="border-radius: 15px"
                                  class="row q-pa-sm items-center justify-center q-gutter-xs"
                                >
                                  <div
                                    style="border-radius: 15px"
                                    class="col-12 bg-white text-center text-black text-weight-medium q-py-xs q-px-md text-h6"
                                  >
                                    AT&T Byron Nelson Championship
                                  </div>
                                  <div
                                    style="border-radius: 15px"
                                    class="col-auto bg-white text-grey-8 text-weight-medium q-py-xs q-px-sm text-subtitle2"
                                  >
                                    Bryson DeChambeau
                                  </div>
                                  <div
                                    style="border-radius: 15px"
                                    class="col-auto bg-white text-grey-8 text-weight-medium q-py-xs q-px-sm text-subtitle2"
                                  >
                                    Outright Winner
                                  </div>
                                </div>
                              </q-card-section>
                              <q-card-section class="q-pa-sm q-my-sm">
                                <div
                                  style="border-radius: 15px"
                                  class="row bg-grey-3 q-pa-sm"
                                >
                                  <div class="col-5">
                                    <q-card
                                      flat
                                      style="border-radius: 15px"
                                      class="col bg-grey-1 q-pa-md q-mx-xs text-h6"
                                    >
                                      <div
                                        class="row justify-center items-center"
                                      >
                                        <dic class="col-auto">
                                          $ {{ wagerAmount }}
                                        </dic>
                                      </div>
                                      <div
                                        class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                                      >
                                        <div class="col-auto">Wager</div>
                                      </div>
                                    </q-card>
                                  </div>
                                  <div class="col-7">
                                    <div
                                      class="row no-wrap justify-around q-mx-xs"
                                    >
                                      <q-card
                                        flat
                                        style="border-radius: 15px"
                                        class="col bg-grey-1 q-pa-md q-mx-xs"
                                      >
                                        <div
                                          class="row justify-center items-center"
                                        >
                                          <dic
                                            class="col-auto text-center text-blue-4 text-h6"
                                          >
                                            + {{ lineValue }}
                                          </dic>
                                        </div>
                                        <div
                                          class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                                        >
                                          <div class="col-auto">Moneyline</div>
                                        </div>
                                      </q-card>
                                      <q-card
                                        flat
                                        style="border-radius: 15px"
                                        class="col bg-grey-1 q-pa-md q-mx-xs text-h6"
                                      >
                                        <div
                                          class="row justify-center items-center"
                                        >
                                          <dic class="col-auto">
                                            $ {{ payout() }}
                                          </dic>
                                        </div>
                                        <div
                                          class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                                        >
                                          <div class="col-auto">To Win</div>
                                        </div>
                                      </q-card>
                                    </div>
                                  </div>
                                </div>
                              </q-card-section>

                              <q-card-actions align="right">
                                <q-btn
                                  style="border-radius: 15px"
                                  class="q-px-sm"
                                  dense
                                  size="md"
                                  label="Close"
                                  color="blue-10"
                                  v-close-popup="2"
                                />
                              </q-card-actions>
                            </q-card>
                          </q-dialog>
                        </q-dialog>
                      </div>
                    </div>
                  </q-expansion-item>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <q-expansion-item
                    expand-separator
                    dense
                    icon="golf_course"
                    class="text-weight-medium text-grey-8 bg-grey-2 q-mt-md q-px-sm q-pt-xs q-pb-sm overflow-auto"
                    style="border-radius: 20px; max-height: 200px"
                    label="Betting W/O"
                  >
                    <div class="row flex-start justify-center q-mt-sm">
                      <div
                        class="col-6"
                        v-for="wager in tourWagers"
                        :key="wager.id"
                      >
                        <q-card
                          style="border-radius: 15px"
                          clickable
                          v-ripple
                          class="bg-grey-1 row no-wrap q-pa-xs q-ma-xs justify-around items-center text-grey-10"
                        >
                          <div class="col-auto q-mx-sm">
                            {{ wager.name }}
                          </div>
                          <div class="col-auto q-ml-md">
                            <q-btn
                              style="border-radius: 15px"
                              class=""
                              flat
                              color="grey-3"
                              text-color="blue-5"
                              :label="wager.lineValue"
                            />
                          </div>
                        </q-card>
                      </div>
                    </div>
                  </q-expansion-item>
                </div>
              </div>
            </div>
            <div class="">
              <div
                class="text-weight-light text-subtitle1 q-ma-md q-my-xs text-grey-9"
              >
                Moments
              </div>
            </div>
            <div class="row no-wrap q-ma-xs q-px-sm q-pb-md items-center">
              <div class="col">
                <div class="row no-wrap justify-start items-center q-mx-md">
                  <div class="q-ml-lg avatars">
                    <span class="avatar">
                      <q-img
                        :ratio="1"
                        src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/images/images%20(1).jpeg"
                      />
                    </span>
                    <span class="avatar">
                      <q-img
                        :ratio="1"
                        src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/images/images.jpeg"
                      />
                    </span>
                    <span class="avatar">
                      <q-img
                        :ratio="1"
                        src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/images/images%20(1).jpeg"
                      />
                    </span>
                    <span class="avatar">
                      <q-img
                        :ratio="1"
                        src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/images/images%20(2).jpeg"
                      />
                    </span>
                    <span class="avatar">
                      <q-img
                        :ratio="1"
                        src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/images/images%20(3).jpeg"
                      />
                    </span>
                    <span class="avatar">
                      <q-img
                        :ratio="1"
                        src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/images/images%20(4).jpeg"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-auto q-mx-sm">
                <div>
                  <q-btn
                    dense
                    class="q-px-sm"
                    rounded
                    color="grey-2"
                    text-color="white"
                  >
                    <div
                      class="text-grey-9 text-capitalize q-ma-ms text-body2 text-weight-medium"
                    >
                      See All
                    </div>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <q-card-section class="row items-center">
              <q-avatar color="white" text-color="white" class="q-ma-xs">
                <q-img
                  src="https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/sports-grid/assets/logos/sports/pga-tour-6-logo-png-transparent.png"
                  spinner-color="white"
                  fill
                  style="max-width: 80%"
                />
              </q-avatar>
              <span class="q-ml-sm text-subtitle2 text-weight-medium"
                >Complete your wager below</span
              >
            </q-card-section>
            <q-card-section class="q-pa-none q-ma-none q-mx-sm">
              <div class="row">
                <div class="col">
                  <q-img
                    src="https://storage.googleapis.com/source-uploads-production/uploads/BN_Golfer_768x389_82b2dcf3f3/BN_Golfer_768x389_82b2dcf3f3.png"
                    :ratio="16 / 9"
                    style="max-height: 200px; border-radius: 15px"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm q-mb-xs">
              <div
                style="border-radius: 15px"
                class="row q-pa-sm items-center justify-center q-gutter-xs"
              >
                <div
                  style="border-radius: 15px"
                  class="col-12 bg-white text-center text-black text-weight-medium q-py-xs q-px-md text-h6"
                >
                  AT&T Byron Nelson Championship
                </div>
                <div
                  style="border-radius: 15px"
                  class="col-auto bg-white text-grey-8 text-weight-medium q-py-xs q-px-sm text-subtitle2"
                >
                  Bryson DeChambeau
                </div>
                <div
                  style="border-radius: 15px"
                  class="col-auto bg-white text-grey-8 text-weight-medium q-py-xs q-px-sm text-subtitle2"
                >
                  Outright Winner
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm q-my-sm">
              <div style="border-radius: 15px" class="row bg-grey-3 q-pa-sm">
                <div class="col-5">
                  <div class="row justify-around items-center q-pa-xs">
                    <div class="col-10">
                      <q-slider
                        v-model="wagerAmount"
                        :min="0"
                        :max="500"
                        :step="5"
                        label
                        dense
                        :label-value="'$' + wagerAmount"
                        label-always
                      />
                    </div>
                    <div class="col-auto">
                      <q-avatar
                        class=""
                        color="grey-6"
                        text-color="white"
                        icon="info"
                        size="xs"
                      />
                    </div>
                  </div>
                  <q-input
                    style="border-radius: 15px"
                    class="q-pa-sm bg-grey-1"
                    input-class="text-weight-bold q-pa-xs"
                    dense
                    borderless
                    v-model="wagerAmount"
                    label="Wager Amount"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_money" />
                    </template>
                  </q-input>
                </div>
                <div class="col-7">
                  <div class="row no-wrap justify-around q-mx-xs">
                    <q-card
                      flat
                      style="border-radius: 15px"
                      class="col bg-grey-1 q-pa-md q-mx-xs"
                    >
                      <div class="row justify-center items-center">
                        <dic class="col-auto text-blue-4 text-h6">
                          + {{ lineValue }}
                        </dic>
                      </div>
                      <div
                        class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                      >
                        <div class="col-auto">Moneyline</div>
                      </div>
                    </q-card>
                    <q-card
                      flat
                      style="border-radius: 15px"
                      class="col bg-grey-1 q-pa-md q-mx-xs text-h6"
                    >
                      <div class="row justify-center items-center">
                        <dic class="col-auto"> $ {{ payout() }} </dic>
                      </div>
                      <div
                        class="row justify-center text-subtitle2 text-grey-8 text-weight-light"
                      >
                        <div class="col-auto">To Win</div>
                      </div>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-card-section>
          </div> -->

          <q-card-actions align="right">
            <q-btn
              style="border-radius: 15px"
              class="q-px-sm text-capitalize text-weight-medium text-blue-8"
              dense
              outlined
              size="lg"
              label="Add to Betslip"
              color=""
              v-close-popup
            />
            <q-btn
              style="border-radius: 15px"
              class="q-px-sm text-capitalize text-weight-normal"
              dense
              size="lg"
              label="Place Bet"
              color="green-6"
              @click="WagerDialog = true"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Vue3Marquee } from "vue3-marquee";

const route = useRoute();

const autoplayDelay = parseInt(route.params.delay);

const marqueeItem = ref(1);

const autoplay = ref(true);

const wagerDialog = ref(false);
const completedWagerDialog = ref(false);
const wagerStrength = ref(0.7);
const wagerAmount = ref(50);
const lineValue = ref("700");
const potentialPayout = ref("");
const slide = ref("");
const expanded = ref(false);
const experienceExpanded = ref(false);
const syncNow = ref(false);
const sportsbookOdds = ref(-250);
const sportsbookOdds2 = ref(+350);
const showEventImageHeader = ref(true);
const showEventAdvertisingOpportunity = ref(false);
const tourWagers = ref([
  {
    id: 1,
    name: "Bryson DeChambeau",
    lineValue: "+700",
  },
  {
    id: 2,
    name: "Jon Rahm",
    lineValue: "+850",
  },
  {
    id: 3,
    name: "Jordan Spieth",
    lineValue: "+1000",
  },
  {
    id: 4,
    name: "Daniel Berger",
    lineValue: "+1400",
  },
  {
    id: 5,
    name: "Brooks Koepka",
    lineValue: "+1600",
  },
  {
    id: 6,
    name: "Hideki Matsuyama",
    lineValue: "+1600",
  },
  {
    id: 7,
    name: "Scottie Scheffler",
    lineValue: "+1600",
  },
  {
    id: 8,
    name: "Matthew Fitzpatrick",
    lineValue: "+1800",
  },
  {
    id: 9,
    name: "Marc Leishman",
    lineValue: "+2600",
  },
]);

function addToCart(payload) {
  this.wagerDialog = true;
  this.lineValue = payload;
}

function changeTab(tab) {
  this.$store.commit("experience/CHANGE_SPORT_TAB", tab);
}

function changeCardTab(tab) {
  this.$store.commit("experience/CHANGE_SPORT_CARD_TAB", tab);
}

function countDown() {
  return;
}

function payout() {
  return this.wagerAmount * (this.lineValue / 100);
}

onMounted(() => {});
</script>
