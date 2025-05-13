<template>
  <v-container class="fill-height px-10">
    <v-row align-content="center" class="fill-height">
      <h3 class="text-h3 mb-2" v-html="aboutTitle" />
      <p class="text-body2" v-html="aboutParagraph" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const aboutTitle = 'Hello'
  const aboutParagraph = `
  Based in Seattle, Washington, I’m a naturally curious and playful person who is always looking for ways to learn and grow.
  Whether it’s exploring new technologies, diving into complex problems, or expanding my knowledge in unexpected areas,
  I find joy in the process of discovery.
  <br>
  <br>
  I’m constantly seeking to improve and evolve—both personally and professionally. I believe learning is a lifelong journey,
  and I’m passionate about embracing new challenges that help push my boundaries.
  <br>
  <br>
  I love building things—whether it's web apps that users love or woodworking projects around the house for extra storage.
  When I’m not building, I’m usually riding bikes with my kids (when the weather permits), or diving into their latest curiosities
  like Minecraft, rock collecting, or soccer. Much like our home, I thrive in environments that encourage growth and foster innovation.
  <br>
  <br>
  I have been building websites using html/css since the 90's and professionally working as a Software Engineer since 2015 and love
  working in an industry that's constantly evolving and always has more room to learn and grow. <a href="https://www.linkedin.com/in/pablougas/" target="blank" style="color: lightgreen">Lets connect!</a>
`
</script>
