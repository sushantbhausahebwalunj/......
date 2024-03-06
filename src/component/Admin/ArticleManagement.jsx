import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button, Container, Paper, Typography,TextField } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { data } from './ArticleData';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DetailIcon from '@mui/icons-material/Details';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import TextEditor from '../../Global/TextEditor';

function ArticleManagement() {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showEditPaper, setShowEditPaper] = useState(false);
  
  // This will be true if the viewport width is less than or equal to 600px
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  // Set the width of the table based on the viewport width
  const tableWidth = isSmallScreen ? '90vw' : '70vw';

  const iconhandleEdit = (row) => {
    console.log('Edit clicked for row:', row);
    setSelectedRow(row);
    setIsEditOpen(true);
    setShowEditPaper(true); // Show the Paper when EditIcon is clicked
  };

  const iconhandleDetail = (row) => {
    console.log('Detail clicked for row:', row);
    setSelectedRow(row);
    setIsDetailOpen(true);
  };
  
  const iconhandleeditClose = () => {
    setIsEditOpen(false);
  };

  const iconhandleDetailClose = () => {
    setIsDetailOpen(false);
  };
  const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'AID',
    size: 50, // Reduced width
  }),
  columnHelper.accessor('article', {
    header: 'Article',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('author', {
    header: 'Author',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('domain', {
    header: 'Domain',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('subdomain', {
    header: 'Sub-Domain',
    size: 150, // Reduced width
  }),
  // columnHelper.accessor('date', {
  //   header: 'Date',
  //   size: 150, // Reduced width
  //   Cell: ({ cell }) => (
  //     <div>
  //       {cell.value ? cell.value.toLocaleDateString() : ''}
  //     </div>
  //   ),
  // }),
  columnHelper.accessor('date', {
    header: 'Date',
    size: 150, // Reduced width
    Cell: ({ cell }) => (
      <div>
        {cell.row.original.date ? new Date(cell.row.original.date).toLocaleDateString() : ''}
      </div>
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('manage', {
      header: 'Manage',
      size: 120,
      Cell: ({ cell }) => (
        <div>
          {/* Add your edit, delete, and detail icons here */}
          <IconButton onClick={() => iconhandleEdit(cell.row.original)}>
            <EditIcon  />
          </IconButton>
          <IconButton onClick={() => iconhandleDelete(cell.row.original)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => iconhandleDetail(cell.row.original)}>
            <DetailIcon />
          </IconButton>
        </div>
      ),
    }),
];

  // const [showPopup, setShowPopup] = useState(false);

  const handleEdit = (row) => {
      <EditQuesPopup/>
    };
    
    const handleDelete = (row) => {
      // Implement delete logic here
      console.log('Delete clicked for row:', row);
    };
    
    const handleDetail = (row) => {
      // Implement detail logic here
      console.log('Detail clicked for row:', row);
    };

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save('mrt-pdf-example.pdf');
  };

  const table = useMaterialReactTable({
    columns,
    layoutMode: 'grid-no-grow',
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    initialState:{density:"compact"},
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          marginTop: 0,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
     
     <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
          
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>

        </Box>
  ),
});


  return (
     <Container maxWidth="xl" style={{backgroundColor:"white",padding:"2%"}}>
      <Typography variant="h4" mt={1} mb={2}>Articles</Typography>
      <Paper elevation={3} style={{padding:"10px", backgroundColor:"#D2E0FB", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ width: '70vw' , overflow: 'auto' }}> {/* Set your desired width here*/}
          <MaterialReactTable table={table} />
        </div>
      </Paper>
      {showEditPaper && selectedRow && (
    <Paper elevation={3} style={{padding:"10px", marginTop: '20px', width: '50%', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
    <Typography variant="h6" style={{ position: 'absolute', top: '10px', right: '10px' }}>{new Date(selectedRow.date).toLocaleDateString()}</Typography>
    <Typography variant="h6">Author: {selectedRow.author}</Typography>
    <Typography variant="h6">Domain: {selectedRow.domain}</Typography>
    <Typography variant="h6">Sub-Domain: {selectedRow.subdomain}</Typography>
    <Paper style={{padding:"10px"}}>
      <TextEditor/>
      <TextField
        style={{marginTop: '10px'}}
        fullWidth
        placeholder="Reply as admin"
        variant="outlined"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Approve</Button>
        <Button variant="contained" color="secondary">Reject</Button>
      </div>
    </Paper>
  </Paper>
  )}
    </Container>
  )
}

export default ArticleManagement