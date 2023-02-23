<script lang="ts" setup>
import { useAppHead } from '~/composables/head'

const { t } = useI18n()

useAppHead('error.title')
</script>

<template>
  <div class="fullscreen flex flex-col justify-center items-center">
    <h1 class="font-700 text-3xl leading-6 tracking-tight">
      {{ t('error.title') }}
    </h1>
    <div class="mt10 space-x-4">
      <nuxt-link to="/">
        {{ t('error.go_home') }}
      </nuxt-link>
    </div>
  </div>
</template>
