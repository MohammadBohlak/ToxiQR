import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import { blogPosts } from "./data";
import ArchiveSection from "./ArchiveSection";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";

const StyledSection = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  color: #343a40;
`;

const BlogCard = styled(Card)`
  border: none;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  .card-img-top {
    max-height: 180px;
    object-fit: cover;
  }

  a {
    color: #0d6efd;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const OurBlog = () => (
  <StyledSection>
    <MyContainer>
      <MainTitle $align="initial">Our Blog</MainTitle>
      <Row className="justify-content-between">
        <Col md={7}>
          {blogPosts.map((item, idx) => (
            <BlogCard key={idx}>
              <SubTitle>In the {item.location}</SubTitle>
              {item.image && (
                <Card.Img variant="top" src={item.image} alt={item.title} />
              )}
              <Card.Body className="p-0 pt-3">
                <Text $bold={false}>{item.title}</Text>
                <Text className="mb-2 text-muted">{item.date}</Text>
                <Text>
                  {item.textBeforeLink}
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link.text}
                  </a>
                  {item.textAfterLink}
                </Text>
              </Card.Body>
            </BlogCard>
          ))}
        </Col>
        <Col md={4}>
          <ArchiveSection />
        </Col>
      </Row>
    </MyContainer>
  </StyledSection>
);

export default OurBlog;
