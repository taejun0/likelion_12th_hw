import React from "react";
import { Link } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";

import { MdOutlineTrendingUp, MdRssFeed, MdArrowDropDown } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";


import { LuClock4 } from "react-icons/lu";

import styled from "styled-components";

// Hometap

const Hometap_Wrapper = styled.div`
  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Hometap_Left = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Hometap_Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Hometap_Left_view = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

const Hometap_Left_icon = styled.div`
  font-size: 18px;
  color: #868e96;
  display: flex;
  gap: 8px;

  align-items: center;
  margin-left: 1rem;

  &.active {
    font-size: 18px;
    color: #212529;
    font-weight: 700;
  }
`;

const Hometap_indicator = styled.div`
  left: 2%;
  width: 33%;

  position: absolute;
  height: 2px;
  background-color: #343a40;
  bottom: -10px;
`; // useState같은 거 활용해서 left값이 변화하도록 구현하기!

const Hometap_Left_icon_ac = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;

    color: #212529;
    font-weight: 700;
`;

const Hometap_Right_selector = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 70px;
  height: 32px;

  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  border-radius: 4px;
  margin-right: 10px;
  font-weight: 600;
  color: #495957;
  box-shadow: 0 0 4px rgba(0, 0, 0, .05);
`;

// postcard

const Postcard_Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;

  padding: 1rem;
`;

const Postcard_Griding = styled.div`
  display: grid;
  grid-gap: 24px 16px;
  row-gap: 16px;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(3, 1fr);
`;

const Postcard_block = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,.04);
  background-color: #fff;
  width: 100%;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 167px;
`;

const PostText = styled.div`
  display: flex;
  padding: 1rem;
  flex: 1 1;
  flex-direction: column;
`;

const PostTitle = styled.div`
  font-size: 1rem;
  margin: 0 0 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  color: #212529;
`;

const PostContent = styled.p`
  font-size: 0.875rem;
  height: 3.9375rem;
  margin: 0 0 1.5rem;
  line-height: 1.5;
  color: #495057;
`;

const PostCreatat = styled.div`
  margin-top: auto;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
`;

const PostInfo = styled.div`
  padding: .625rem 1rem;
  border-top: 1px solid var(--border4);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;

const PostInfo_Left = styled.div`
  display: flex;
  align-items: center;
`;

const PostInfo_Right = styled.div`
  display: flex;
  align-items: center;
`;

function Hometap() {
  return (
    <>
      <Hometap_Wrapper>
        <Hometap_Left>
          <Hometap_Left_view>
            <Hometap_Left_icon_ac>
              <MdOutlineTrendingUp size="24" />
              <span>트렌딩</span>
            </Hometap_Left_icon_ac>
            <Hometap_Left_icon>
              <LuClock4 size="24" />
              <span>최신</span>
            </Hometap_Left_icon>
            <Hometap_Left_icon>
              <MdRssFeed size="24" />
              <span>피드</span>
            </Hometap_Left_icon>
            <Hometap_indicator />
          </Hometap_Left_view>
        </Hometap_Left>
        <Hometap_Right>
          <Hometap_Right_selector>
            이번 주
            <MdArrowDropDown size="24" />
          </Hometap_Right_selector>
          <HiOutlineDotsVertical size="24" color="#868e96" />
        </Hometap_Right>
      </Hometap_Wrapper>
    </>
  );
}

const Postcard = () => {
  return (
    <>
      <Postcard_Wrapper>
        <Postcard_Griding>
          {dummy_data.map(postcard => (
            <Postcard_block key={postcard.postID}>
              <Link to={`detail/${(postcard.postID)}`}>
                <Thumbnail src={postcard.thumbnail} alt={postcard.title} />
              </Link>
              <Link to={`detail/${(postcard.postID)}`}>
                <PostText>
                  <PostTitle>{postcard.title}</PostTitle>
                  <PostContent>{postcard.content}</PostContent>
                  <PostCreatat>{postcard.createdAt}</PostCreatat>
                </PostText>
              </Link>
              <PostInfo>
                <PostInfo_Left>by 만든사람</PostInfo_Left>
                <PostInfo_Right>하트수</PostInfo_Right>
              </PostInfo>
            </Postcard_block>
          ))}
        </Postcard_Griding>
      </Postcard_Wrapper>
      
    </>
  );
};

function HomePage() {
  return (
    <>
      <Hometap />
      <Postcard />
    </>
  );
}

export default HomePage;