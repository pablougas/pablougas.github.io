<template>
  <div class="about-wrapper">
    <v-card class="pa-8 about" rounded="0" variant="flat">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col class="d-flex justify-end pb-0" cols="12">
              <div class="d-flex align-center ga-2">
                <h1 class="large-font">Hi!</h1>
                <p class="text-body1">
                  My name is Pablo. I'm a Seattle, WA based Software Engineer.
                  I have been making websites out of html/css since I was 16 years old and programming
                  full web apps that users rave about since 2015. I like to keep engineering fun and playful,
                  which I hope comes through what you'll find here on my site.
                  <br>
                </p>
              </div>
            </v-col>
            <v-col class="d-flex justify-end pt-0" cols="12">
              <v-btn>read more</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <SkillsSection />
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.about-wrapper {
  min-height: 80vh;
  width: 100%;
  position: relative;
  .about {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    min-height: 80vh;
    width: 100%;
    position: absolute;
    left: 0;

    .large-font {
      font-size: 30px;
      font-size: 20vh;
    }
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
