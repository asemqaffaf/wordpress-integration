# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add additional post content CSS handles

## [2.7.1] - 2021-06-04

### Added

- Add additional translations in post content meta header

## [2.7.0] - 2021-05-07

### Added

- Add block prop to customize posts per page in paginated lists
- CSS handle for post category links in post titles

## [2.6.1] - 2021-05-05

### Fixed

- Use getTags and getCategories in Post resolver to prevent too many requests error from the WordPress API

## [2.6.0] - 2021-04-26

### Added

- Scroll to top when page change

## [2.5.4] - 2021-03-08

### Fixed

- Implement try/catch for author and featured_media page resolvers so that pages can still be displayed if author or media details can't be accessed

## [2.5.3] - 2021-03-04

### Fixed

- Fetch all Post/Categories query in sitemap generation endpoint
- Add sitemap entries to all sitemaps when multiple bindings are used

## [2.5.2] - 2021-02-22

### Fixed

- `WordpressBreadcrumb` component: handle undefined `params` object

## [2.5.1] - 2021-02-05

### Fixed

- Support span tag in post html data

## [2.5.0] - 2021-02-05

### Added

- Add Blog posts and categories to sitemap

### Fixed

- Support sku-selector inside related product shelf

## [2.4.4] - 2021-02-03

### Fixed

- Added App Store metadata information

## [2.4.3] - 2021-02-03

### Added

- CSS handle for Wordpress Teaser image container

## [2.4.2] - 2021-02-02

### Fixed

- Related Product Shelf not being displayed
- Items Per Page selector in Pagination component

## [2.4.1] - 2021-01-26

### Added

- Use client locale for blog date display

## [2.4.0] - 2021-01-22

### Added

- App setting to specify an API base path other than `wp-json/v2/wp/`
- CSS handle for Wordpress Teaser header

### Changed

- Update to Node 6.x builder

## [2.3.1] - 2020-12-30

### Fixed

- Public metadata information following App Store standards

## [2.3.0] - 2020-11-18

### Changed

- Prefix CSS classes in WordPress post and page body HTML to enable them as CSS handles
- Identify pages on Site Editor with `_id` on runtime params and links
- Update docs

## [2.2.2] - 2020-11-18

### Changed

- Add CSS handle for post body in teasers
- Update docs

## [2.2.1] - 2020-11-09

### Changed

- Add CSS handles for post date, author, and category link in teasers
- Update docs

## [2.2.0] - 2020-10-23

### Fixed

- WordPress page GraphQL queries now work correctly

## [2.1.3] - 2020-10-20

### Changed

- Update ES messages

## [2.1.2] - 2020-10-20

### Changed

- Update PT messages

## [2.1.1] - 2020-10-14

### Changed

- Update docs

## [2.1.0] - 2020-10-02

### Added

- `blog-post-navigation.wordpress` and `blog-post-container.wordpress` blocks

## [2.0.3] - 2020-08-26

### Added

- ES and PT internationalization

### Changed

- Update app store descriptions

### Fixed

- Add billingOptions type and availableCountries

## [2.0.2] - 2020-07-28

### Added

- `absoluteLinks` prop to some components, to allow linking to blog posts on external WP site

## [2.0.1] - 2020-07-24

### Added

- pt-BR and es-AR descriptions

### Changed

- Update app store assets

## [2.0.0] - 2020-07-14

### Changed

- Update docs and add app store assets

## [1.6.1] - 2020-06-12

### Changed

- Improvements to URL-controlled pagination

## [1.6.0] - 2020-06-04

### Added

- Support for multiple WordPress installations

### Fixed

- `WordpressRelatedPosts` block now uses `useProduct` to get product reference code

## [1.5.0] - 2020-05-14

### Added

- Support for URL-controlled pagination on certain WP components
- Pagination controls at bottom of lists in addition to top
- Better navigation between WP store pages to allow for more flexibility in blog routes
- Backend support for custom endpoints (frontend support still pending)

### Changed

- Use `useMemo` in conjunction with any `insane` HTML sanitization calls to improve performance

## [1.4.1] - 2020-05-05

### Fixed

- Removing html tags from the metatag description

## [1.4.0] - 2020-04-28

### Added

- Support for Wordpress pages

## [1.3.4] - 2020-04-26

### Fixed

- Add error handling for featured media resolver failures

## [1.3.3] - 2020-04-16

### Fixed

- Strip paragraph tags from Wordpress meta descriptions.

### Added

- Support for Wordpress post image meta tagging.

## [1.3.2] - 2020-04-13

### Fixed

- fix extra parentheses problem, add extra supported class attributes on tags for WP posts of related categories

## [1.3.1] - 2020-03-31

### Added

- New CSS handler `teaserTitleLink`.

## [1.3.0] - 2020-03-19

### Changed

- Simplified outbound access rule to allow any host but only at the path `/wp-json/wp/v2/*`
- Updated docs

### Removed

- Removed unnecessary props from `WordpressCategoryRelatedPostsBlock`

## [1.2.3] - 2020-03-18

### Fixed

- Interface for `WordpressCategoryRelatedPostsBlock`

## [1.2.2] - 2020-03-16

### Added

- Outbound access for Bennemann blog URL

## [1.2.1] - 2020-03-12

### Changed

- rebase local branch onto master in preparation of new release with interfaces update

## [1.2.0] - 2020-03-10

### Added

- new block to support posts related to categories by tag, update to sanitzer configs

## [1.1.0] - 2020-02-17

### Changed

- Use `insane` for html sanitization, remove unused modules

## [1.0.3] - 2020-02-13

### Added

- Outbound access for Localiza blog URL

## [1.0.2] - 2020-02-10

### Fixed

- Fixed the way `WordpressProductSearchResult` accesses the current search query
- Added missing `slug` field in some GraphQL queries

## [1.0.1] - 2020-01-17

### Fixed

- WordpressCategoryBlock was still using old URL structure for link to "All (category) Posts"
- Additional null checking for ProductQuery in WordpressRelatedPosts

## [1.0.0] - 2020-01-16

### Changed

- Blog post and category URLs are now based on slugs rather than numeric IDs

## [0.1.2] - 2020-01-13

### Fixed

- WordpressRelatedPostsBlock now checks to make sure productQuery is defined before rendering

## [0.1.1] - 2020-01-13

### Fixed

- Fixed bug preventing some blog breadcrumbs from displaying
- Fixed double Link in blog teasers with text overlays

## [0.1.0] - 2020-01-13

### Changed

- All components are now FunctionComponents
- Moved components out of root folder
- Updated components to use React-Apollo `useQuery` hook
- Implemented CSS Handles

## [0.0.12] - 2019-11-08

### Fixed

- Changed the way `WordpressProductSearchResult` accesses the current search query per the new requirements of `withSearchContext`

## [0.0.11] - 2019-10-24

### Fixed

- Fixed render issue with `withSettings` HOCs (container div was not being re-rendered after loading completed)

## [0.0.10] - 2019-10-18

### Changed

- Removed min-height styling from `withSettings` HOCs

## [0.0.9] - 2019-10-16

### Fixed

- Article search now uses the param `term` instead of `terms` (`terms` is reserved by `render-runtime`)
- Applied standard VTEX prettier to react files
- Updated documentation and deleted README.md in root folder

## [0.0.8] - 2019-09-23

### Added

- `search-blog-articles-list` to allow paginated article search results on product search page
- `wordpress-breadcrumb` now shows search query on article search result pages

### Changed

- Use `defineMessages` from `react-intl`

### Fixed

- Allow `h1` and `h2` tags in Wordpress blog post content

## [0.0.7] - 2019-09-18

### Changed

- Start using `search-graphql` for product queries.

## [0.0.6] - 2019-09-16

### Added

- `search-blog-articles-preview` block to show article search results on product search result page

### Fixed

- Disabled SSR for appSettings calls except where necessary

## [0.0.5] - 2019-09-09

### Fixed

- App settings query for blogRoute fixed
- Disabled SSR for paginated lists to avoid SSR timeouts
- General performance improvements

## [0.0.4] - 2019-08-06

### Changed

- Docs migration
