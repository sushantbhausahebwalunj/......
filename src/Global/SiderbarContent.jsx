// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
// import { styled } from '@mui/system';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

// const TopicItem = styled(ListItem)(({ theme }) => ({
//   backgroundColor: '#333', // Dark background color for topics
//   color: '#fff', // White text color for topics
//   '&:hover': {
//     color: '#000', // Black text color for topics on hover
//   },
// }));

// const SubtopicItem = styled(ListItem)({
//   backgroundColor: '#ccc', // Light background color for subtopics
//   color: '#000', // Black text color for subtopics
// });

// const SidebarContent = () => {
//   const [open, setOpen] = useState({});

//   const topics = [
//     { 
//       name: 'Topic 1', 
//       subtopics: [
//         { name: 'Subtopic 1' },
//         { name: 'Subtopic 2' }
//       ] 
//     },
//     { 
//       name: 'Topic 2', 
//       subtopics: [
//         { name: 'Subtopic 1' },
//         { name: 'Subtopic 2' }
//       ] 
//     },
//     { 
//       name: 'Topic 3', 
//       subtopics: [
//         { name: 'Subtopic 1' },
//         { name: 'Subtopic 2' }
//       ] 
//     },
//     // Add more topics here
//   ];

//   const handleClick = (index) => {
//     setOpen({ ...open, [index]: !open[index] });
//   };

//   const renderSubtopics = (subtopics, index) => (
//     <List component="div" disablePadding>
//       {subtopics.map((subtopic, subIndex) => (
//         <SubtopicItem key={`${index}-${subIndex}`} button>
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








import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// const TopicItem = styled(ListItem)(({ theme }) => ({
//   backgroundColor: '#363062', // Dark background color for topics
//   color: '#fff', // White text color for topics
//   '&:hover': {
//     color: '#000', // Black text color for topics on hover
//   },
// }));

// const SubtopicItem = styled(ListItem)({
//   backgroundColor: '#EEF5FF', // Light background color for subtopics
//   color: 'black', // Black text color for subtopics
// });

const TopicItem = styled(ListItem)({
  backgroundColor: '#363062',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#414b6f', // A slightly lighter shade for hover
  },
  // Add padding, margins, or other styles as needed
  
 
});

const SubtopicItem = styled(ListItem)({
  backgroundColor: '#EEF5FF',
  color: '#000',
  // Reduced top and bottom padding
});


const SidebarContent = ({ currentSelection }) => {
  const [open, setOpen] = useState({});

  let topics=[];
  if(currentSelection === "React") {
    topics = [
      { name: 'React Basics', subtopics: ["Introduction","Architecture", "Hooks"] },
      { name: 'React Hooks', subtopics: ["Introduction","Architecture", "Hooks"] },
      { name: 'React Routes', subtopics: ["Introduction","Architecture", "Hooks"] },
      // More React topics...
    ];
  } else if(currentSelection === "CSS") {
    topics = [
      { name: 'CSS Fundamentals', subtopics: ["Introduction","Types of css","Box Model","MediaQuery"] },
      { name: 'CSS Box Model', subtopics: ["Introduction","Types of css","Box Model","MediaQuery"] },
      { name: 'CSS Animations', subtopics: ["Introduction","Types of css","Box Model","MediaQuery"] },
      { name: 'CSS Animations', subtopics: ["Introduction","Types of css","Box Model","MediaQuery"] },
      { name: 'CSS Box Model', subtopics: ["Introduction","Types of css","Box Model","MediaQuery"] },
      // More CSS topics...
    ];
  } else if(currentSelection === "Javascript") {
    topics = [
      { name: 'Javascript-Overview.', subtopics: ["What is JavaScript?","Client-Side JavaScript","Advantages of JavaScript","Limitations of JavaScript"] },
      { name: 'Javascript-Syntax', subtopics: ["Your First JavaScript Code","Whitespace and Line Breaks","Semicolons are Optional","Case Sensitivity"] },
      { name: 'Javascript-Enabling', subtopics: ["JavaScript in Internet Explorer","JavaScript in Firefox","JavaScript in Chrome","JavaScript in Opera"] },
      { name: 'Javascript-Functions', subtopics: ["Function Definition","Calling a Function","Function Literals","Nested Functions"] },
      { name: 'Javascript–Events', subtopics: ["What is an Event?","onclick Event Type","onsubmit Event Type","onmouseover and onmouseout"] },
      // More CSS topics...
    ];
  }

  const handleClick = (index) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  const renderSubtopics = (subtopics, index) => (
    <List component="div" disablePadding>
      {subtopics.map((subtopic, subIndex) => (
        <SubtopicItem key={`${index}-${subIndex}`} button>
          <ListItemText 
            primary={subtopic}
            primaryTypographyProps={{ style: { color: 'black',fontSize: '0.77rem', padding: '0px 2px' } }} // Explicitly set text color here
          />
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
              <ListItemText primary={topic.name} primaryTypographyProps={{ style: { fontSize: '0.85rem', padding: '0px 2px'  } }}/>
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


