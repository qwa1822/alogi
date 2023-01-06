import { Email,Title, EmailInput, Subdescription2,Subdescription,Description, Wrapper, Container, Address, Address2, SubMenu, ImageFile, ImageAuthor, SpanMain } from '../../styles/emotion';
export default function EmotionPage(){

  // 여기는 자바스크립트 쓰는곳 



  return (
    <>
   <Wrapper>
    <Container>
      <Title>dwqdqw</Title>
    </Container>

    <Container>
    <Description>제목</Description>
    <Subdescription></Subdescription>
    </Container>
    <Container>
    <Description>제목</Description>
    <Subdescription2></Subdescription2>
    </Container>

    <Container>
    <Description>제목</Description>
    <SubMenu>
    <Address>07250</Address>
    <Address2>우편번호 검색</Address2>
    </SubMenu>

    <Subdescription></Subdescription>
    <Subdescription></Subdescription>
    </Container>

    <Container>
    <Description>제목</Description>
    <Subdescription></Subdescription>
    </Container>

    <Container>
    <Description>제목</Description> 
    <SubMenu>
    <ImageFile>
      <ImageAuthor>
  <SpanMain>+</SpanMain>        
  <SpanMain>Upload</SpanMain>        
      </ImageAuthor>
    </ImageFile>
    <ImageFile></ImageFile>
    <ImageFile></ImageFile>
    </SubMenu>

    </Container>

    
   </Wrapper>
    
    </>
    
  )
}