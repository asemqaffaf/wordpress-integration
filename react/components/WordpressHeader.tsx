import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

interface WordpressHeaderProps {
  postData: PostData
  dataS: any
  totalPages?: number
  currentPage?: number
}

const buildMetaTag = ({ name, property, content }: MetaTags) => {
  if (name) return <meta name={name} content={content} />

  return <meta property={property} content={content} />
}

const WordpressHeader: FunctionComponent<WordpressHeaderProps> = props => {
  const { postData, dataS, totalPages, currentPage } = props
  const {
    type,
    title,
    featured_media: featuredMedia,
    excerpt,
    headerTags,
  } = postData

  const headerTitle = dataS?.appSettings?.titleTag
    ? `${title.rendered} | ${dataS?.appSettings?.titleTag}`
    : title.rendered

  if (headerTags) {
    return (
      <Helmet>
        <title>{headerTitle}</title>
        {headerTags.metaTags.map(tag => buildMetaTag(tag))}
        <script type="application/ld+json">{headerTags.ldJson}</script>
      </Helmet>
    )
  }

  const description =
    type === 'page'
      ? excerpt?.rendered
          ?.replace(/<p>/gi, '')
          .replace(/<\/p>/gi, '')
          .trim()
      : excerpt?.rendered?.replace(/(<([^>]+)>)/gi, '').trim()

  return (
    <Helmet>
      <title>{headerTitle}</title>
      {currentPage && currentPage > 1 &&
        <link data-react-helmet="true" rel="prev" href={`${window?.location?.href?.split('?')[0]}?page=${currentPage - 1}`} />}
      {totalPages && currentPage && currentPage < totalPages &&
        <link data-react-helmet="true" rel="next" href={`${window?.location?.href?.split('?')[0]}?page=${currentPage + 1}`} />}
      {featuredMedia?.media_type === 'image' && featuredMedia?.source_url ? (
        <meta property="og:image" content={featuredMedia?.source_url} />
      ) : (
        ''
      )}
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default WordpressHeader
