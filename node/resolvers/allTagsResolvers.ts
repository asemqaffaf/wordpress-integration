// /* eslint-disable @typescript-eslint/camelcase */
export const allTagsResolvers = {
  wpPosts: async (
    _: any,
    {
      postsHasLessThanTags = 20,
      customDomain,
      slug,
    }: {
      postsHasLessThanTags?: number
      customDomain?: string
      slug?: [string]
    },
    ctx: Context
  ) => {
    const {
      clients: { wordpressProxy },
    } = ctx


    // ======================
    //  Category  
    // ======================

    const categoryOptions = {
      page: 1,
      per_page: 100,
      slug,
      customDomain: undefined
    }
    const { data: categoriesData } = await wordpressProxy.getCategories(categoryOptions)

    const categories = categoriesData.map((cat: WpCategory) => cat.id)

    
    // ======================
    //  Posts  
    // ======================

    const PostsOptions = {
      categories,
      page: 1,
      per_page: 1,
      status: ['publish'],
      customDomain
    }
    /**
     * @note call getPosts here to get the total number of posts.
     */
    const { headers: postsHeader } = await wordpressProxy.getPosts(PostsOptions)
    const totalPosts = postsHeader['x-wp-total']

    const upperFloorTotalPosts = Math.ceil(parseFloat(totalPosts) / 100)

    const postsIteration = new Array(upperFloorTotalPosts).fill(0);

    const resultsPostsData: WpPost[][] = await Promise.all(postsIteration.map(async (_, i): Promise<WpPost[]> => {

      const { data: remainPostsData } = await wordpressProxy.getPosts({ ...PostsOptions, ...{ page: i + 1, per_page: 100 } })

      return remainPostsData
    }));

    const allPostsData = resultsPostsData.flat()

    const allTagsIds = allPostsData.reduce((accu: any[], post: WpPost) => {

      if (post.tags.length > postsHasLessThanTags) return accu /* guard avoid any post has more than */

      accu.push(...post.tags)
      return accu
    }, [])

    const uniqTagsIds = [...new Set(allTagsIds)]


    // ======================
    //  Tags  
    // ======================

    const upperFloorTotaltags = Math.ceil(uniqTagsIds.length / 100)
    const total_count = uniqTagsIds.length

    const tagsIteration = new Array(upperFloorTotaltags).fill(0);

    const resultsTagsData: WpTag[][] = await Promise.all(tagsIteration.map(async (__, i): Promise<WpTag[]> => {

      const { data } = await wordpressProxy.getTags({ page: i + 1, per_page: 100, include: uniqTagsIds.slice(0, (i + 1) * 100) })

      return data
    }));

    const tags = resultsTagsData.flat()

    return { tags, total_count }
  },
}
