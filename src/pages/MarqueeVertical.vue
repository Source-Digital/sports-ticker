<template>
  <div class="row justify-center transparent">
    <div class="col-auto">
      <Vue3Marquee :duration="duration" pauseOnHover="true" :vertical="true">
        <q-card
          style="width: 95vw; max-width: 500px; border-radius: 25px;"
          class="q-pa-sm q-ma-md roundedBorders"
          v-for="event in todaysEvents"
          :key="event.id"
        >
          <div class="row no-wrap">
            <div class="col q-mx-xs">
              <div class="row">
                <div class="col">
                  <div class="row justify-start">
                    <div class="col-auto">
                      <q-avatar color="white" text-color="white" class="">
                        <q-img
                          :src="event.leagueLogo"
                          spinner-color="white"
                          fill
                          style="max-width: 80%"
                        />
                      </q-avatar>
                    </div>
                    <div class="col q-ma-xs">
                      <div>
                        <div class="text-weight-medium">
                          {{ event.name }}
                        </div>
                      </div>
                      <div>
                        <div class="text-weight-light text-grey-8">
                          {{ event.date }} | {{ event.location }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <q-space />
                <div class="col-auto items-center q-mt-sm q-mr-xs">
                  <q-btn
                    size="sm"
                    color="grey-2"
                    round
                    text-color="grey-9"
                    icon="favorite_border"
                  />
                </div>
              </div>
            </div>
            <div class="col-auto q-mx-xs"></div>
          </div>
          <div class="row no-wrap q-ma-xs q-pa-none justify-around" >
            <q-btn flat rounded class="bg-white col-auto">
              <div class="row no-wrap items-center">
                <q-avatar class="q-mr-xs" size="25px">
                  <q-img
                    class=""
                    contain
                    :src="event.teamOneLogo"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                </q-avatar>
                <div class="text-weight-light">
                  {{ event.teamOneName }}
                </div>
                <div class="q-ml-sm">
                  <q-btn
                    rounded
                    dense
                    class="q-px-sm"
                    color="grey-1"
                    text-color="blue-8"
                    :label="event.teamOneLine"
                  />
                </div>
              </div>
            </q-btn>
            <q-btn flat rounded class="bg-white col-auto">
              <div class="row no-wrap items-center">
                <q-avatar class="q-mr-xs" size="25px">
                  <q-img
                    class=""
                    contain
                    style=""
                    :src="event.teamTwoLogo"
                    spinner-color="primary"
                    spinner-size="82px"
                  />
                </q-avatar>
                <div class="text-weight-light">
                  {{ event.teamTwoName }}
                </div>
                <div class="q-ml-sm">
                  <q-btn
                    rounded
                    dense
                    class="q-px-sm"
                    color="grey-1"
                    text-color="blue-8"
                    :label="event.teamTwoLine"
                  />
                </div>
              </div>
            </q-btn>
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

const marqueeItem = ref(1);

const duration = computed(() => {
  if (router.params.delay) {
    return parseInt(router.params.delay)
  } else {
    return 55
  }
})

const autoplay = ref(true);

const todaysEvents = ref([
  {
    id: 1,
    name: "NBA Dallas Mavericks vs Minnesota Timberwolves",
    location: "Etihad Arena, Abu Dhabi, UAE",
    date: "Oct 5th 12:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Dallas_Mavericks.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Minnesota_Timberwolves.png",
    teamOneName: "Mavericks",
    teamTwoName: "Timberwolves",
    teamOneLine: "-235",
    teamTwoLine: "+194",
  },
  {
    id: 2,
    name: "NBA Los Angeles Lakers vs Golden State Warriors",
    location: "Chase Center, San Francisco, CA",
    date: "Oct 7th 8:30pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
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
    location: "Little Caesars Arena, Detroit, MI",
    date: "Oct 8th 3:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Phoenix_Suns.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Detroit_Pistons.png",
    teamOneName: "Suns",
    teamTwoName: "Pistons",
    teamOneLine: "-190",
    teamTwoLine: "-200",
  },
  {
    id: 4,
    name: "NBA Chicago Bulls vs Millwaukee Bucks",
    location: "Fiserv Forum, Milwaukee, WI",
    date: "Oct 8th 1:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Chicago_Bulls.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Milwaukee_Bucks.png",
    teamOneName: "Bulls",
    teamTwoName: "Bucks",
    teamOneLine: "-330",
    teamTwoLine: "-222",
  },
  {
    id: 5,
    name: "NBA Philadelphia 76ers vs Boston Celtics",
    location: "TD Garden, Boston, MA",
    date: "Oct 8th 6:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Philadelphia_76ers.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Boston_Celtics.png",
    teamOneName: "76ers",
    teamTwoName: "Celtics",
    teamOneLine: "-112",
    teamTwoLine: "-109",
  },
  {
    id: 6,
    name: "NBA Sacramento Kings vs Toronto Raptors",
    location: "Rogers Arena, Vancouver, BC",
    date: "Oct 8th 8:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
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
    location: "FedExForum, Memphis, TN",
    date: "Oct 8th 8:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
    teamOneLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Indiana_Pacers.png",
    teamTwoLogo:
      "https://s3.amazonaws.com/cdn.fanduel.com/images/2019/Sportsbook/NBA+Logos/Memphis_Grizzlies.png",
    teamOneName: "Pacers",
    teamTwoName: "Grizzlies",
    teamOneLine: "+285",
    teamTwoLine: "-365",
  },
    {
    id: 8,
    name: "NBA Utah Jazz vs Los Angeles Clippers",
    location: "SimpliFi Arena, Honolulu, HI",
    date: "Oct 8th 8:00pm EST",
    leagueLogo:
      "https://storage.googleapis.com/apps.sourcesync.io/dynamic-apps/bareknuckle/assets/betApp/leagues/nba-logo-vector-01.png",
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

onMounted(() => {

});
</script>

