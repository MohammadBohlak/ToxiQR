// DetectionPage.jsx
import React, { useState, useRef, useCallback, useEffect } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle, SmallText, SubTitle } from "../../components/common/texts";
import {
  DeleteButton,
  HiddenInput,
  Select,
  UploadContent,
  UploadZone,
} from "./detection.styles";
import FormDetection from "../../components/formDetection/FormDetection";

export default function DetectionPage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const validateAndSetFile = (candidate) => {
    if (candidate && candidate.type.startsWith("image/")) {
      setFile(candidate);
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setError("");
    if (["dragenter", "dragover"].includes(e.type)) setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dropped = e.dataTransfer.files?.[0] || null;
    validateAndSetFile(dropped);
  }, []);

  const handleChange = useCallback((e) => {
    const selected = e.target.files?.[0] || null;
    validateAndSetFile(selected);
  }, []);

  const handleClickZone = () => {
    setError("");
    fileInputRef.current?.click();
  };

  const handlePaste = useCallback((e) => {
    setError("");
    const items = e.clipboardData?.items || [];
    for (let item of items) {
      if (item.kind === "file" && item.type.startsWith("image/")) {
        const blob = item.getAsFile();
        validateAndSetFile(blob);
        return;
      }
    }
    // لو وجد بيانات لكنه ليس صورة:
    setError("Pasted content is not an image.");
  }, []);

  useEffect(() => {
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [handlePaste]);

  const handleDelete = (e) => {
    e.stopPropagation();
    setFile(null);
    setError("");
  };

  return (
    <div style={{ background: "#fff0b6f0", padingTop: "var(--m-top)" }}>
      <MyContainer>
        <StyledSection>
          <Row className="m-0 mb-3">
            <Col>
              <MainTitle $align="center" className="mb-3">
                Use ToxiQR’s Detection AI to Identify Snakes and Spiders!
              </MainTitle>
              <SubTitle $align="center">
                Please read the instructions before uploading the image
              </SubTitle>
            </Col>
          </Row>

          {error && (
            <Row className="m-0 mb-3">
              <Col md={8}>
                <Alert variant="danger">{error}</Alert>
              </Col>
            </Row>
          )}

          <Row className="m-0 mb-4 justify-content-center">
            <Col md={4}>
              <Form.Group controlId="typeSelect">
                <Select>
                  <option value="">Select type</option>
                  <option value="snake">Snake</option>
                  <option value="spider">Spider</option>
                </Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="m-0 justify-content-center">
            <Col md={8}>
              <UploadZone
                $dragActive={dragActive}
                onClick={handleClickZone}
                onDragEnter={handleDrag}
                $align="center"
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <HiddenInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />

                {file ? (
                  <>
                    <DeleteButton onClick={handleDelete}>
                      <FiX />
                    </DeleteButton>
                    <img
                      className="preview"
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                    />
                  </>
                ) : (
                  <UploadContent>
                    <FiUpload size={48} />
                    <SmallText className="text-muted">
                      Drop/Upload/Paste Image here
                    </SmallText>
                  </UploadContent>
                )}
              </UploadZone>
            </Col>
            <Col md={12}>
              <FormDetection />
            </Col>
          </Row>
        </StyledSection>
      </MyContainer>
    </div>
  );
}
