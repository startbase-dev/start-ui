import React, { useState, useEffect } from "react";
import s from "./PreviewAndCode.module.css";
import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";

interface PreviewAndCodeProps {
  component: React.ReactNode;
  code: string;
  styleOptions?: string[];
}

const PreviewAndCode: React.FC<PreviewAndCodeProps> = ({ component, code }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [formattedCode, setFormattedCode] = useState<string>("");

  const handleTabClick = (tab: "preview" | "code") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const formatCode = async () => {
      try {
        const prettyCode = await prettier.format(code, {
          parser: "html",
          plugins: [parserHtml],
          htmlWhitespaceSensitivity: "ignore",
        });
        setFormattedCode(prettyCode);
      } catch (error) {
        console.error("Error formatting code:", error);
        setFormattedCode(code);
      }
    };

    formatCode();
  }, [code]);

  const handleCopyToClickboard = () => {
    navigator.clipboard.writeText(formattedCode).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className={s.container}>
      <div className={s.tabContainer}>
        <button
          className={`${s.tabButton} ${activeTab === "preview" ? s.active : ""}`}
          onClick={() => handleTabClick("preview")}
        >
          Preview
        </button>
        <button
          className={`${s.tabButton} ${activeTab === "code" ? s.active : ""}`}
          onClick={() => handleTabClick("code")}
        >
          Code
        </button>
      </div>
      <div className={s.contentContainer}>
        <div className={s.copy}>
          <CopyToClipboardButton onClick={handleCopyToClickboard} />
        </div>
        {activeTab === "preview" ? (
          <div className={s.previewContainer}>{component}</div>
        ) : (
          <pre className={s.codeContainer}>
            <code>{formattedCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default PreviewAndCode;
