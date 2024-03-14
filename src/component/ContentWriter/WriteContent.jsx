// // import React,{useState , useContext} from 'react';
// // import TextEditor from '../../Global/TextEditor';
// // import { useLocation } from 'react-router-dom';
// // import { Container, Paper ,Typography,Grid,Button, TextField} from '@mui/material';

// // import MyContext from '../context/ContextData';

// // function WriteContent() {
// //   const { updateContentData } = useContext(MyContext);

// //   const location = useLocation();

// //   const [preview, setPreview] = useState(false);
// //   const [content, setContent] = useState('');
// //   const [title, setTitle] = useState(location.state ? location.state.title : '');
// //   const [domain, setDomain] = useState(location.state ? location.state.domain : '');
// //   const [subdomain, setSubdomain] = useState(location.state ? location.state.subDomain : '');

// //   const handlePreview = () => {
// //     setPreview(!preview);
// //   };

// //   const handleContentChange = (newContent) => {
// //     setContent(newContent);
// //   };

// //   const handlePublish = () => {
// //     // Add your publish logic here

// //     const data = { title, domain, subdomain, content };
// //     updateContentData(data);
// //     console.log(data) // to see what data we recive from following fields
// //     alert("Your Blog is Sent for Approval ")

// //   };

// //   const handleDiscard = () => {
// //     // Add your discard logic here
// //   };

// //   return (
// //     <Container maxWidth="xl" style={{backgroundColor:"white",padding:"2%"}}>
// //       <Paper elevation={1} style={{padding:"20px"}}>
// //         <Typography variant='h4' align="center"  style={{fontStyle: 'italic', fontFamily: 'Trattatello'}}>Create Blog</Typography>
// //       </Paper>
// //       <Paper elevation={1} style={{padding:"20px", marginTop:"20px", backgroundColor:"#D2E0FB"}}>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} sm={9} padding={2}>
// //             <TextEditor onChange={handleContentChange} />
// //           </Grid>
// //           <Grid item xs={12} sm={3}>
// //             <div style={{padding:"3%"}}>
// //             <TextField fullWidth label="Title" size='small' value={title} onChange={(e) => setTitle(e.target.value)} style={{marginBottom: '10px', backgroundColor: 'white'}}/>
// //             <TextField fullWidth label="Selected Domain" size='small' value={domain} onChange={(e) => setDomain(e.target.value)} style={{marginBottom: '10px', backgroundColor: 'white'}}/>
// //             <TextField fullWidth label="Selected Subdomain" size='small' value={subdomain} onChange={(e) => setSubdomain(e.target.value)} style={{marginBottom: '10px', backgroundColor: 'white'}}/>
// //             <Button variant="contained" fullWidth onClick={handlePreview} style={{marginBottom: '10px'}}>Preview</Button>
// //             <Button variant="contained" fullWidth onClick={handlePublish }  onDoubleClick={(e)=>setContent(e.target.value)} style={{marginBottom: '10px'}}>Publish</Button>
// //             <Button variant="contained" fullWidth onClick={handleDiscard}>Discard</Button>
// //             {preview && <div dangerouslySetInnerHTML={{ __html: content }} />}
// //             </div>
// //           </Grid>
// //         </Grid>
// //       </Paper>
// //     </Container>
// //   )
// // }

// // export default WriteContent;










// import React, { useState, useContext } from 'react';
// import TextEditor from '../../Global/TextEditor';
// import { useLocation } from 'react-router-dom';
// import { Container, Paper, Typography, Grid, Button, TextField } from '@mui/material';

// import MyContext from '../context/ContextData';

// function WriteContent() {
//   const { updateContentData } = useContext(MyContext);

//   const location = useLocation();

//   const [preview, setPreview] = useState(false);
//   const [content, setContent] = useState('');
//   const [title, setTitle] = useState(location.state ? location.state.title : '');
//   const [domain, setDomain] = useState(location.state ? location.state.domain : '');
//   const [subdomain, setSubdomain] = useState(location.state ? location.state.subDomain : '');

//   const handlePreview = () => {
//     setPreview(!preview);
//   };

//   const handleContentChange = (newContent) => {
//     setContent(newContent);
//   };

//   const handlePublish = () => {
//     // Add your publish logic here

//     const data = { title, domain, subdomain, content };
//     updateContentData(data);
//     console.log(data); // to see what data we receive from the following fields
//     alert('Your Blog is Sent for Approval');
//   };

//   const handleDiscard = () => {
//     // Add your discard logic here
//   };

//   return (
//     <Container maxWidth="xl" style={{ backgroundColor: 'white', padding: '2%' }}>
//       <Paper elevation={1} style={{ padding: '20px' }}>
//         <Typography variant="h4" align="center" style={{ fontStyle: 'italic', fontFamily: 'Trattatello' }}>
//           Create Blog
//         </Typography>
//       </Paper>
//       <Paper elevation={1} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#D2E0FB' }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={9} padding={2}>
//             <TextEditor onChange={handleContentChange} />
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <div style={{ padding: '3%' }}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 size="small"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 style={{ marginBottom: '10px', backgroundColor: 'white' }}
//               />
//               <TextField
//                 fullWidth
//                 label="Selected Domain"
//                 size="small"
//                 value={domain}
//                 onChange={(e) => setDomain(e.target.value)}
//                 style={{ marginBottom: '10px', backgroundColor: 'white' }}
//               />
//               <TextField
//                 fullWidth
//                 label="Selected Subdomain"
//                 size="small"
//                 value={subdomain}
//                 onChange={(e) => setSubdomain(e.target.value)}
//                 style={{ marginBottom: '10px', backgroundColor: 'white' }}
//               />
//               <Button variant="contained" fullWidth onClick={handlePreview} style={{ marginBottom: '10px' }}>
//                 Preview
//               </Button>
//               <Button variant="contained" fullWidth onClick={handlePublish} style={{ marginBottom: '10px' }}>
//                 Publish
//               </Button>
//               <Button variant="contained" fullWidth onClick={handleDiscard}>
//                 Discard
//               </Button>
//               {preview && <div dangerouslySetInnerHTML={{ __html: content }} />}
//             </div>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// }

// export default WriteContent;





import React,{useState , useContext,useRef} from 'react';
// import TextEditor from '../../Global/TextEditor';
import JoditEditor from 'jodit-react';
import { useLocation } from 'react-router-dom';
import { Container, Paper ,Typography,Grid,Button, TextField} from '@mui/material';

import MyContext from '../context/ContextData';

function WriteContent() {
  const { updateContentData } = useContext(MyContext);

  const location = useLocation();

  const [preview, setPreview] = useState(false);
  const editor = useRef(null);
	const [content, setContent] = useState('');

  const [title, setTitle] = useState(location.state ? location.state.title : '');
  const [domain, setDomain] = useState(location.state ? location.state.domain : '');
  const [subdomain, setSubdomain] = useState(location.state ? location.state.subDomain : '');

  const handlePreview = () => {
    setPreview(!preview);
  };

 

  const handlePublish = () => {
    // Add your publish logic here

    const data = { title, domain, subdomain, content };
    console.log(content)
    updateContentData(data);
    console.log(data); // to see what data we receive from the following fields
    alert("Your Blog is Sent for Approval ");

  };
   // Handler for updating content state when text editor value changes
  //  const handleContentChange = (value) => {
  //   setContent(value);
  // };

  const handleDiscard = () => {
    // Add your discard logic here
  };

  return (
    <Container maxWidth="xl" style={{backgroundColor:"white",padding:"2%"}}>
      <Paper elevation={1} style={{padding:"20px"}}>
        <Typography variant='h4' align="center"  style={{fontStyle: 'italic', fontFamily: 'Trattatello'}}>Create Article</Typography>
      </Paper>
      <Paper elevation={1} style={{padding:"20px", marginTop:"20px", backgroundColor:"#D2E0FB"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9} padding={2}>
          {/* <TextEditor value={content} onChange={handleContentChange} /> */}
          <JoditEditor
			ref={editor}
			value={content}
			// config={config}
			tabIndex={1} // tabIndex of textarea
			// onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {setContent(newContent)}}
		/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{padding:"3%"}}>
            <TextField fullWidth label="Title" size='small' value={title} onChange={(e) => setTitle(e.target.value)} style={{marginBottom: '10px', backgroundColor: 'white'}}/>
            <TextField fullWidth label="Selected Domain" size='small' value={domain} onChange={(e) => setDomain(e.target.value)} style={{marginBottom: '10px', backgroundColor: 'white'}}/>
            <TextField fullWidth label="Selected Subdomain" size='small' value={subdomain} onChange={(e) => setSubdomain(e.target.value)} style={{marginBottom: '10px', backgroundColor: 'white'}}/>
            <Button variant="contained" fullWidth onClick={handlePreview} style={{marginBottom: '10px'}}>Preview</Button>
            <Button variant="contained" fullWidth onClick={handlePublish} style={{marginBottom: '10px'}}>Publish</Button>
            <Button variant="contained" fullWidth onClick={handleDiscard}>Discard</Button>
            {preview && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default WriteContent;
