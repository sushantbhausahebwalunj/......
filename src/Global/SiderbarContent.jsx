import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const TopicItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#333', // Dark background color for topics
  color: '#fff', // White text color for topics
  '&:hover': {
    color: '#000', // Black text color for topics on hover
  },
}));

const SubtopicItem = styled(ListItem)({
  backgroundColor: '#ccc', // Light background color for subtopics
  color: '#000', // Black text color for subtopics
});

const SidebarContent = () => {
  const [open, setOpen] = useState({});

  const topics = [
    { 
      name: 'Topic 1', 
      subtopics: [
        { name: 'Subtopic 1' },
        { name: 'Subtopic 2' }
      ] 
    },
    { 
      name: 'Topic 2', 
      subtopics: [
        { name: 'Subtopic 1' },
        { name: 'Subtopic 2' }
      ] 
    },
    { 
      name: 'Topic 3', 
      subtopics: [
        { name: 'Subtopic 1' },
        { name: 'Subtopic 2' }
      ] 
    },
    // Add more topics here
  ];

  const handleClick = (index) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  const renderSubtopics = (subtopics, index) => (
    <List component="div" disablePadding>
      {subtopics.map((subtopic, subIndex) => (
        <SubtopicItem key={`${index}-${subIndex}`} button>
          <ListItemText primary={subtopic.name} />
        </SubtopicItem>
      ))}
    </List>
  );

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        position: 'relative',
        width: 210,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          position: 'relative',
          width: 210,
        },
      }}
    >
      <List>
        {topics.map((topic, index) => (
          <div key={index}>
            <TopicItem button onClick={() => handleClick(index)}>
              <ListItemText primary={topic.name} />
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </TopicItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              {renderSubtopics(topic.subtopics, index)}
            </Collapse>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarContent;











// import React, { useState, useContext } from 'react';
// import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
// import { styled } from '@mui/system';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import { TopicsContext } from '../Global/TopicsContext'; // Import the TopicsContext

// const TopicItem = styled(ListItem)(({ theme }) => ({
//   backgroundColor: '#333', // Dark background color for topics
//   color: '#fff', // White text color for topics
//   '&:hover': {
//     color: '#000', // Black text color for topics on hover
//   },
// }));

// const SubtopicItem = styled(ListItem)(({
//   backgroundColor: '#ccc', // Light background color for subtopics
//   color: '#000', // Black text color for subtopics
// }));

// const SidebarContent = () => {
//   const [open, setOpen] = useState({});
//   const { topics, currentTopic, onTopicChange } = useContext(TopicsContext); // Use the TopicsContext to get the topics and currentTopic

//   const handleClick = (index) => {
//     setOpen({ ...open, [index]: !open[index] });
//   };

//   const handleSubtopicClick = (subtopic) => {
//     onTopicChange(subtopic.name); // Call onTopicChange when a subtopic is clicked
//   };

//   const renderSubtopics = (subtopics, index) => (
//     <List component="div" disablePadding>
//       {subtopics.map((subtopic, subIndex) => (
//         <SubtopicItem 
//           key={`${index}-${subIndex}`} 
//           button
//           onClick={() => handleSubtopicClick(subtopic)} // Call handleSubtopicClick when a subtopic is clicked
//           selected={currentTopic === subtopic.name} // Highlight the subtopic if it's the current topic
//         >
//           <ListItemText primary={subtopic.name} />
//         </SubtopicItem>
//       ))}
//     </List>
//   );

//   return (
//     <Drawer
//       variant="permanent"
//       open
//       sx={{
//         position: 'relative',
//         width: 210,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           position: 'relative',
//           width: 210,
//         },
//       }}
//     >
//       <List>
//         {topics.map((topic, index) => (
//           <div key={index}>
//             <TopicItem button onClick={() => handleClick(index)}>
//               <ListItemText primary={topic.name} />
//               {open[index] ? <ExpandLess /> : <ExpandMore />}
//             </TopicItem>
//             <Collapse in={open[index]} timeout="auto" unmountOnExit>
//               {renderSubtopics(topic.subtopics, index)}
//             </Collapse>
//           </div>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default SidebarContent;