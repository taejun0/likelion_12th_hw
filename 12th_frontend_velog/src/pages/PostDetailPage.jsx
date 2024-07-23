import React from "react";
import { useParams } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";

import styled from "styled-components";

import { PiHeartFill } from "react-icons/pi";
import { MdShare } from "react-icons/md";

const Header = styled.div`
  margin-top: 5.5rem;
  margin-left: auto;
  margin-right: auto;

  width: 768px;
`;

const HeadWrapper = styled.div`
  
`;

const Posttitle = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  font-weight: 800;
  color: var(--text1);
  margin-bottom: 2rem;
  word-break: keep-all;
  overflow-wrap: break-word;
  transition: color 0.125s ease-in 0s;
`;

const PostInfo = styled.div`
  font-size: 1rem;
  color: #495057;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostInfo_Left = styled.div`
  display: flex;
  align-items: center;
`;

const PostInfo_Right = styled.div`
  display: flex;
`;

const Username = styled.p`
  color: #212529;
  font-weight: bold;
`;

const Dot = styled.p`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const PostInfo_Right_Btn_Folow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  font-weight: 700;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  outline: none;
  font-size: 1rem;

  width: 6rem;
  height: 2rem;
  font-size: 1rem;

  color: #12B886;
  border: 1px solid #12B886;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

const Tag = styled.div`
  display: flex;
  
  margin-bottom: 0.875rem;
  background: #F8F9FA;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;

  align-items: center;
  margin-right: 0.875rem;
  color: #12B886;
  font-weight: 500;
  font-size: 1rem;
`;

const Left_Sidebar_center = styled.div`
  position: relative;
  margin-top: 2rem;
`;

const Left_Sidebar = styled.div`
  position: absolute;
  left: -7rem;
`;

const Left_Sidebar_icons = styled.div`
  display: flex;
  background: #F8F9FA;
  border: 1px solid #F1F3F5;
  border-radius: 2rem;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
`;

const Like_Icon = styled.div`
  display: flex;
  
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  border-radius: 1.5rem;
  color: #868E96;
`;

const Amount_Icon = styled.div`
  margin-top: 0.5rem;
  color: #495057;
  line-height: 1;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Share_Icon = styled.div`
  display: flex;

  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #DEE2E6;
  border-radius: 1.5rem;
  color: #868E96;
`;

const Bookmark_Wrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem 1.5rem;
  background: #F8F9FA;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  position: relative;
`;

const Bookmark_Wrapper_text = styled.div`
  color: #495057;
  font-weight: bold;
  padding-right: 2rem;
  font-size: 1.5rem;
`;

const Thumbnail = styled.img`
  max-height: 100vh;
  max-width: 100%;
  width: 100%;
  margin: 2rem auto 0px;
  height: auto;
`;

const Content = styled.div`
  width: 768px;
  margin: 5rem auto 0px;
`;

const Content_Text = styled.p`
  font-size: 1.125rem;
  color: #212529;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Post = () => {
  const postID = useParams().postID;
  const FindPost = dummy_data.find(postcard =>
    postcard.postID === Number(postID)
  );
  
  return (
    <>
      <Header>
        <HeadWrapper>
          <Posttitle>{FindPost.title}</Posttitle>
          <PostInfo>
            <PostInfo_Left>
              <Username>만든사람</Username>
              <Dot>·</Dot>
              {FindPost.createdAt}
            </PostInfo_Left>
            <PostInfo_Right>
              <PostInfo_Right_Btn_Folow>
                팔로우
              </PostInfo_Right_Btn_Folow>
            </PostInfo_Right>
          </PostInfo>
          <Tags>
            <Tag>안녕</Tag>
            <Tag>하세요</Tag>
          </Tags>
          <Left_Sidebar_center>
            <Left_Sidebar>
              <Left_Sidebar_icons>
                <Like_Icon>
                  <PiHeartFill size="24" />
                </Like_Icon>
                <Amount_Icon>
                  0
                </Amount_Icon>
                <Share_Icon>
                  <MdShare size="24" />
                </Share_Icon>
              </Left_Sidebar_icons>
            </Left_Sidebar>
          </Left_Sidebar_center>
          <Bookmark_Wrapper>
            <Bookmark_Wrapper_text>
              돌아보기
            </Bookmark_Wrapper_text>

          </Bookmark_Wrapper>
        </HeadWrapper>
        <Thumbnail src={FindPost.thumbnail} alt={FindPost.title} />
      </Header>
      <Content>
        <Content_Text>
          {FindPost.content}
        </Content_Text>
      </Content>
    </>
  );
};

function PostDetailPage() {
  const postID = useParams().postID;
  const FindPost = dummy_data.find(postcard =>
    postcard.postID === Number(postID)
  );

  if (!FindPost) {
    return (
      <>
        <p>포스트가 없어요 ㅠ</p>
      </>
    )
  }
  
  return (
    <back>
      <Post />
    </back>
  )
}

export default PostDetailPage;