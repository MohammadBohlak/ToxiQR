// src/components/Archive/ArchiveSection.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";
import styled from "styled-components";
import { archiveData } from "./data";
import { MainTitle, SubTitle } from "../../components/common/texts";

const StyledSection = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #343a40;
`;

const RecordsLabel = styled.div`
  font-weight: 500;
  margin: 1rem 0;
`;

const ArchiveSection = () => {
  const [query, setQuery] = useState("");

  // filter by month name
  const filtered = archiveData.filter((item) =>
    item.month.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <StyledSection>
      <InputGroup>
        <Form.Control
          placeholder="Find a post"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          onClick={() => {
            /* you could re-run filter or submit form */
          }}
        >
          Search
        </Button>
      </InputGroup>

      <SubTitle>Archive</SubTitle>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Month</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, idx) => (
            <tr key={idx}>
              <td>{item.month}</td>
              <td>{item.posts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <RecordsLabel>
        Showing {filtered.length} of {archiveData.length} records
      </RecordsLabel>
    </StyledSection>
  );
};

export default ArchiveSection;
