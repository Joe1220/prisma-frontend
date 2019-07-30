import React from "react"
import styled from "styled-components"
import Popup from "reactjs-popup"
import Post from "../Components/Post"

const Wrapper = styled.div`
  width: 100%;
  height: 300%;
`

export default ({ post, open, toggleModal, children }) => {
  return (
    <Popup modal 
           closeOnDocumentClick 
           trigger={<Wrapper>{children}</Wrapper>}
           open={open}
           onClose={toggleModal}
    >
      <Post
        key={post.id}
        id={post.id}
        location={post.location}
        caption={post.caption}
        user={post.user}
        files={post.files}
        likeCount={post.likeCount}
        isLiked={post.isLiked}
        comments={post.comments}
        createdAt={post.createdAt}
      />
    </Popup>
  )
}