// import React, { createContext, useState, useContext } from 'react';

// // Create a new context
// const MyContext = createContext();

// // Create a provider component
// export const MyProvider = ({ children }) => {
//   // Define your state variables here
//   const [data, setData] = useState([8]);
//   const [contentData, setContentData] = useState(null);
//   const [SavedArticles, setSavedArticles] = useState(null);


//   // You can define functions to update state here
//   const updateData = (newData) => {
//     setData(newData);
//   };

//  //function to recive data writer have written 
//  const updateContentData = (data) => {
//     setContentData(data);
//   };

//   //function to update save articles
//   const addToSave = (data)=>{
//      setSavedArticles(data)
//   }
   
// //   const value = {
// //     data,
// //     updateData ,
// //     contentData ,
// //     updateContentData,
// //   }


//   // Provide the state and functions through the context
//   return (
//     <MyContext.Provider value={ {
//         data,
//         updateData ,
//         contentData ,
//         updateContentData,
//         addToSave,

//       }
//      }>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Custom hook to consume the context
// export default MyContext 
// // = () => useContext(MyContext);













import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a new context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  // Define your state variables here
  const [data, setData] = useState(null);
  const [contentData, setContentData] = useState("");
  const [SavedArticles, setSavedArticles] = useState(null);

  // You can define functions to update state here
  const updateData = (newData) => {
    setData(newData);
  };

  // Function to receive data writer have written
  const updateContentData = (data) => {
    setContentData(data);
  };

  // Function to update saved articles
  const addToSave = (data) => {
    setSavedArticles(data);
  };

  // Provide the state and functions through the context
  return (
    <MyContext.Provider
      value={{
        data,
        updateData,
        contentData,
        updateContentData,
        addToSave,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export default MyContext;




