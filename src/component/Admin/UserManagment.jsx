import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { data } from './UsersData';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DetailIcon from '@mui/icons-material/Details';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

const UserManagement = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // This will be true if the viewport width is less than or equal to 600px
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  // Set the width of the table based on the viewport width
  const tableWidth = isSmallScreen ? '90vw' : '70vw';

  const iconhandleEdit = (row) => {
    console.log('Edit clicked for row:', row);
    setSelectedRow(row);
    setIsEditOpen(true);
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
    header: 'UID',
    size: 50, // Reduced width
  }),
  columnHelper.accessor('username', {
    header: 'Username',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('email', {
    header: 'Email-ID',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('datecreated', {
    header: 'Date Created',
    size: 170, // Reduced width
    Cell: ({ cell }) => (
      <div>
        {cell.row.original.datecreated ? new Date(cell.row.original.datecreated).toLocaleDateString() : ''}
      </div>
    ),
  }),
  columnHelper.accessor('mobileno', {
    header: 'Mobile No.',
    size: 150, // Reduced width
  }),
  columnHelper.accessor('type', {
    header: 'Type of User',
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


    <Container maxWidth="xl" style={{backgroundColor:"white" }}>
      <Typography variant="h4" mt={2} mb={2}>Users</Typography>
    <Paper elevation={3} style={{padding:"10px", backgroundColor:"#D2E0FB", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{ width: '70vw' , overflow: 'auto' }}> {/* Set your desired width here*/}
      <MaterialReactTable table={table} />
    </div>
    </Paper>
     {/* {isEditOpen && <EditQuesPopup  iseditable={true} isopen={isEditOpen} inhandleClose={iconhandleeditClose} row={selectedRow} />}
    {isDetailOpen && <EditQuesPopup iseditable={false} isopen={isDetailOpen} inhandleClose={iconhandleDetailClose} row={selectedRow} /> } */}
    </Container>
   
    

);
};

export default UserManagement;