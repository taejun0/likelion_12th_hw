import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  color: #FFF;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const Filter = styled.div`
  display: flex;
  
  margin-top: 3rem;

  width: 600px;

  border: 1px solid #FFF;
`;

export const NewsWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  width: 600px;
  flex-direction: row;
`;

export const NewsImage = styled.img`
  margin-right: 30px;
  width: 120px;
  height: 100%;
`;

export const NewsImageNull = styled.div`

`;