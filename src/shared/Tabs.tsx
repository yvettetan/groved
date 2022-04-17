import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../theme";

interface ContentProps {
  title: string;
  body: string | { [key: string]: string };
  isContentList: boolean;
}

const TabsContainer = styled.div`
  font-family: ${theme.fontFamily.headline};
`;

const TabMenu = styled.div`
  border-bottom: 1px solid ${theme.color.gray};
  .active {
    color: ${theme.color.primaryLight};
    border-bottom: 2px solid ${theme.color.primary};
  }
`;

const TabMenuItem = styled.span`
  color: ${theme.color.gray};
  cursor: pointer;
  margin-right: 2rem;
  text-transform: uppercase;
`;

const TabContent = styled.div``;

const Tabs = ({ content }: { content: ContentProps[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, [content]);

  const tabMenuItems = content.map((item, i) => {
    const changeTab = () => {
      setActiveTab(i);
    };

    return (
      <TabMenuItem
        key={i}
        className={`tab-menu ${i === activeTab ? "active" : ""}`}
        onClick={changeTab}
      >
        {item.title}
      </TabMenuItem>
    );
  });

  const getTabContent = (content: ContentProps) => {
    if (content.isContentList) {
      return (
        <ul style={{ padding: "0" }}>
          {Object.entries(content.body).map(([key, value], i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: ".5em",
              }}
            >
              <img
                style={{ marginRight: "1em" }}
                src={`/assets/images/${key === "other" ? "info" : key}.svg`}
                alt={key}
              />
              <p style={{ margin: "0", padding: ".2rem" }}>{value}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>{content.body}</p>;
    }
  };

  return (
    <TabsContainer>
      <TabMenu>{tabMenuItems}</TabMenu>
      <TabContent>{getTabContent(content[activeTab])}</TabContent>
    </TabsContainer>
  );
};

export default Tabs;
