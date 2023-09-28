<template>
  <div class="transparent">
    <div class="col q-pb-xs q-px-md">
      <Vue3Marquee :duration="duration" pauseOnHover="true">
        <q-card
          style="border-radius: 15px; height: 118px; width: 350px"
          class="col q-px-xs q-ma-sm bg-grey-2"
          v-for="event in todaysEvents"
          :key="event.id"
        >
          <div class="row flex items-center">
            <div class="col-auto">
              <div class="row full-height q-pt-xs">
                <div class="col">
                  <q-img
                    :src="event.leagueLogo"
                    spinner-color="white"
                    fill
                    style="width: 50px"
                  />
                </div>
              </div>
            </div>
            <div class="col q-pt-sm">
              <div class="row justify-around q-mx-xs q-pa-none">
                <div class="col">
                  <div class="row justify-center">
                    <div class="column">
                      <div class="row">
                        <q-avatar size="75px" class="bg-white">
                          <q-img
                            class=""
                            contain
                            style="width: 50px"
                            :src="event.teamOneLogo"
                            spinner-color="primary"
                            spinner-size="82px"
                          >
                          </q-img>
                        </q-avatar>
                      </div>
                      <div
                        class="row justify-center z-max"
                        style="
                          margin-top: 1px;
                          z-index: 999;
                          border-radius: 20px;
                        "
                      >
                        <div
                          class="col-auto"
                          style="font-weight: bold; font-size: 23px"
                        >
                          {{ event.teamOneLine }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col q-pt-sm">
                  <div
                    v-if="event.live == true"
                    class="row q-pa-none justify-center text-center"
                    style="position: relative"
                  >
                    <div class="col-8 text-grey-8 text-subtitle1 text-center">
                      {{ event.timeRemaining }}
                    </div>
                  </div>
                  <div v-else class="row q-pa-none justify-center text-center">
                    <div class="col-8 text-grey-8 text-subtitle1 text-center">
                      {{ event.date }}
                    </div>
                  </div>
                  <div
                    class="row justify-center"
                    style="
                      position: absolute;
                      bottom: 0;
                      padding-bottom: 3px;
                      left: 150px;
                    "
                  >
                    <div v-if="event.live == true" class="col-auto">
                      <q-btn
                        flat
                        rounded
                        dense
                        href="https://www.nba.com/watch/nba-tv"
                        target="_blank"
                        color="white"
                        class="text-black bg-white q-px-md text-capitalize"
                        >Watch Now</q-btn
                      >
                    </div>
                    <div v-else class="col-auto">
                      <q-btn
                        flat
                        rounded
                        dense
                        href="https://sportsbook.fanduel.com/navigation/nba"
                        target="_blank"
                        color="white"
                        class="text-black bg-white q-px-lg text-capitalize"
                        >Bet Now</q-btn
                      >
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="row justify-center">
                    <div class="column">
                      <div class="row">
                        <q-avatar size="75px" class="bg-white">
                          <q-img
                            class=""
                            contain
                            style="width: 50px"
                            :src="event.teamTwoLogo"
                            spinner-color="primary"
                            spinner-size="82px"
                          >
                          </q-img>
                        </q-avatar>
                      </div>
                      <div
                        class="row justify-center z-max"
                        style="
                          margin-top: 1px;
                          z-index: 999;
                          border-radius: 20px;
                        "
                      >
                        <div
                          class="col-auto"
                          style="font-weight: bold; font-size: 23px"
                        >
                          {{ event.teamTwoLine }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { Vue3Marquee } from "vue3-marquee";

const router = useRoute();

const duration = computed(() => {
  if (router.params.delay) {
    return parseInt(router.params.delay);
  } else {
    return 55;
  }
});

const marqueeItem = ref(1);

const autoplay = ref(true);

const todaysEvents = ref([
  {
    id: 1,
    name: "NBA Dallas Mavericks vs Minnesota Timberwolves",
    live: true,
    location: "Etihad Arena, Abu Dhabi, UAE",
    date: "Yesterday",
    timeRemaining: "11:06 4th QTR",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Dallas_Mavericks.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Minnesota_Timberwolves.png",
    teamOneName: "Mavericks",
    teamTwoName: "Timberwolves",
    teamOneLine: "82",
    teamTwoLine: "87",
  },
  {
    id: 2,
    name: "NBA Los Angeles Lakers vs Golden State Warriors",
    live: false,
    location: "Chase Center, San Francisco, CA",
    date: "Starts 9:30pm",
    timeRemaining: "",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Los_Angeles_Lakers.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Golden_State_Warriors.png",
    teamOneName: "Lakers",
    teamTwoName: "Warriors",
    teamOneLine: "-105",
    teamTwoLine: "-115",
  },
  {
    id: 3,
    name: "NBA Phoenix Suns vs Detroit Pistons",
    live: true,
    location: "Little Caesars Arena, Detroit, MI",
    date: "Oct 8th 3:00pm EST",
    timeRemaining: "10:41 4th QTR",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Phoenix_Suns.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Detroit_Pistons.png",
    teamOneName: "Suns",
    teamTwoName: "Pistons",
    teamOneLine: "92",
    teamTwoLine: "78",
  },
  {
    id: 4,
    name: "NBA Chicago Bulls vs Millwaukee Bucks",
    live: true,
    location: "Fiserv Forum, Milwaukee, WI",
    date: "Starts 9:00pm EST",
    timeRemaining: "02:28 3rd QTR",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Chicago_Bulls.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Milwaukee_Bucks.png",
    teamOneName: "Bulls",
    teamTwoName: "Bucks",
    teamOneLine: "71",
    teamTwoLine: "70",
  },
  {
    id: 5,
    name: "NBA Philadelphia 76ers vs Boston Celtics",
    live: true,
    location: "TD Garden, Boston, MA",
    date: "Oct 8th 6:00pm EST",
    timeRemaining: "04:58 3rd QTR",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Philadelphia_76ers.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Boston_Celtics.png",
    teamOneName: "76ers",
    teamTwoName: "Celtics",
    teamOneLine: "80",
    teamTwoLine: "76",
  },
  {
    id: 6,
    name: "NBA Sacramento Kings vs Toronto Raptors",
    live: false,
    location: "Rogers Arena, Vancouver, BC",
    date: "Starts 9:00pm",
    timeRemaining: "",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Sacramento_Kings.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Toronto_Raptors.png",
    teamOneName: "Kings",
    teamTwoName: "Raptors",
    teamOneLine: "-170",
    teamTwoLine: "+143",
  },
  {
    id: 7,
    name: "NBA Indiana Pacers vs Memphis Grizzlies",
    live: true,
    location: "FedExForum, Memphis, TN",
    date: "Oct 8th 8:00pm EST",
    timeRemaining: "End of 3rd QTR",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Indiana_Pacers.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Memphis_Grizzlies.png",
    teamOneName: "Pacers",
    teamTwoName: "Grizzlies",
    teamOneLine: "74",
    teamTwoLine: "68",
  },
  {
    id: 8,
    name: "NBA Utah Jazz vs Los Angeles Clippers",
    live: false,
    location: "SimpliFi Arena, Honolulu, HI",
    date: "Starts 9:30pm",
    timeRemaining: "",
    leagueLogo:
      "https://storage.googleapis.com/source-uploads-production/uploads/nba_logo_vector_01_6151674455/nba_logo_vector_01_6151674455.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Utah_Jazz.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Los_Angeles_Clippers.png",
    teamOneName: "Jazz",
    teamTwoName: "Clippers",
    teamOneLine: "-165",
    teamTwoLine: "+140",
  },
]);

onMounted(() => {});
</script>
