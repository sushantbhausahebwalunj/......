import React,{useState} from 'react';
import TextEditor from '../../Global/TextEditor';
import { useLocation } from 'react-router-dom';
import { Container, Paper ,Typography,Grid,Button, TextField} from '@mui/material';

function WriteContent() {

  const location = useLocation();

  const [preview, setPreview] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState(location.state ? location.state.title : '');
  const [domain, setDomain] = useState(location.state ? location.state.domain : '');
  const [subdomain, setSubdomain] = useState(location.state ? location.state.subDomain : '');

  const handlePreview = () => {
    setPreview(!preview);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handlePublish = () => {
    // Add your publish logic here
  };

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
            <TextEditor onChange={handleContentChange} />
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