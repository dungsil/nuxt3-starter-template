<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
*,
::before,
::after {
  @apply box-border b0 b-solid light:b-gray-300 dark:b-gray-700;
}

html,
body,
#app {
  @apply w-full h-full;
}

body {
  @apply m0 bg-base font-sans font-400 text-base tracking-normal c-ui;
}

hr {
  @apply h[0] bt1 c-inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply m0 font-inherit text-size-inherit;
}

p {
  @apply m0;
}

b {
  font-weight: bolder;
}

small {
  @apply text-80%;
}

sub,
sup {
  @apply relative align-baseline text-80% leading-0;
}

sub {
  @apply -bottom-0.25em;
}

sup {
  @apply -top-0.5em;
}

a {
  @apply c-inherit decoration-inherit;
}

code,
kbd,
samp,
pre {
  @apply font-mono text-1em;
}

table {
  @apply indent-0 b-collapse;
}

input,
select,
textarea,
button,
optgroup {
  font: inherit;
  @apply m0 p0 c-inherit;
}

button,
select {
  @apply normal-case;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  @apply bg-none;
}

button,
[role="button"] {
  @apply cursor-pointer;
}

summary {
  display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre,
fieldset {
  @apply m0;
}

fieldset,
legend {
  @apply p0;
}

ol,
ul,
menu {
  @apply list-style-none p0 m0;
}

textarea {
  resize: vertical;
}

::placeholder {
  @apply opacity-100 c-gray-300;
}

:disabled {
  @apply cursor-default;
}

:-moz-focusring {
  @apply outline-auto;
}

:-moz-ui-invalid {
  @apply shadow-none;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  @apply h-auto;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  @apply block max-w-full align-middle;
}

[hidden] {
  @apply hidden;
}
</style>
