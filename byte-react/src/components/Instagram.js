import React from "react";

export default class Instagram extends React.Component {
    state = {
        photos: [],
        loading: true
    }

    //InstaID
    // // https://www.instagram.com/web/search/topsearch/?context=blended&query=INSTAGRAM_USERNAME

    ///SPECS FOR FETCH
    INSTAGRAM_ID = "31827245857"
    THUBNAIL_WIDTH = 640
    PHOTO_COUNT = 1

    async componentDidMount() {
        try {
          // Hack from https://stackoverflow.com/a/47243409/2217533
          const response = await fetch(
            `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${this.INSTAGRAM_ID}","first":${this.PHOTO_COUNT},"after":null}`
          )
          const { data } = await response.json()
          const photos = data.user.edge_owner_to_timeline_media.edges.map(
            ({ node }) => {
              const { id } = node
              const comments = node.edge_media_to_comment.count
              const likes = node.edge_media_preview_like.count
              const caption = node.edge_media_to_caption.edges[0].node.text
              const thumbnail = node.thumbnail_resources.find(
                thumbnail => thumbnail.config_width === this.THUMBNAIL_WIDTH
              )
              const { src, config_width: width, config_height: height } = thumbnail
              const url = `https://www.instagram.com/p/${node.shortcode}`
              return {
                id,
                caption,
                src,
                width,
                height,
                url,
                comments,
                likes,
              }
            }
          )
          this.setState({ photos, loading: false })
        } catch (error) {
          console.error(error)
        }
      }
    
      render() {
        return (
            <div className="post-wrapper">
            {/* map through our posts here */}
                    {this.state.photos &&
              this.state.photos.map(
                ({ src, url, id, likes, comments, caption }) => (
                  <a
                    href={url}
                    target="_blank"
                    className="post-item"
                    rel="noopener noreferrer"
                    key={id}
                  >
                    <img
                      src={src}
                      className="post-image"
                      alt={caption.substring(0, 40)}
                    />
                  </a>
                )
              )}
          </div>
        )
      }
    }