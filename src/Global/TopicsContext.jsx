import React, { createContext, useState } from 'react';

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(null);

  const onTabChange = (tabName) => {
    let newTopics;
    switch (tabName) {
      case 'React':
        newTopics = [
          { name: 'React Topic 1', subtopics: [] },
          { name: 'React Topic 2', subtopics: [] },
        ];
        break;
      case 'JavaScript':
        newTopics = [
          { name: 'JavaScript Topic 1', subtopics: [] },
          { name: 'JavaScript Topic 2', subtopics: [] },
        ];
        break;
      default:
        newTopics = [];
    }
    setTopics(newTopics);
  };

  const onTopicChange = (newTopic) => {
    setCurrentTopic(newTopic);
  };

  return (
    <TopicsContext.Provider value={{ topics, currentTopic, onTopicChange, onTabChange }}>
      {children}
    </TopicsContext.Provider>
  );
};