export const useAppHead = (key?: string) => {
  const { t } = useI18n()
  const appName = t('title') as string
  const seo = useLocaleHead({
    addSeoAttributes: true,
    addDirAttribute: true,
  })

  return useHead({
    title: key ? t(key) : undefined,
    titleTemplate: (c ?: string) => c ? `${c} · ${appName}` : appName,
    htmlAttrs: () => ({ ...seo.value.htmlAttrs }),
    meta: () => ([...(seo.value.meta ?? [])]),
    link: () => ([...(seo.value.link ?? [])])
  })
}
