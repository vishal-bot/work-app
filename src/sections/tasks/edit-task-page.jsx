import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Box, Select, Button, MenuItem, TextField, Typography, InputLabel, FormControl, Autocomplete } from '@mui/material';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';

export default function EditTaskPage() {
  const router = useRouter();
  const { taskId } = useParams();
  const [teamMembers, setTeamMembers] = useState([]);
  // const [task, setTask] = useState({});
  const [formData, setFormData] = useState({
    task_title: '',
    task_desc: '',
    stage: '',
    status: '',
    priority: '',
    assigned_to: '',
  });
  const { VITE_BACKEND_API_URL } = import.meta.env;

  useEffect(() => {
    // Fetch task data based on taskId
    const fetchTask = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_API_URL}tasks/${taskId}`);
        const data = await response.json();
        const row = data[0];
        // setTask(row);
        setFormData({
          task_title: row.task_title,
          task_desc: row.task_desc,
          stage: row.stage,
          status: row.status,
          priority: row.priority,
          assigned_to: row.assigned_to,
        });
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    fetchTask();
  }, [taskId, VITE_BACKEND_API_URL]);


  useEffect(() => {
    // Fetch task data based on taskId
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_API_URL}team/${sessionStorage.getItem('teamId')}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    fetchTeamMembers();
    // setTeamMembers(sampleTeamMemberData);
  }, [VITE_BACKEND_API_URL]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAssignedToChange = (e, values) => {
    const selectedIds = values.map(value => value.member_id);
    setFormData({ ...formData, assigned_to: selectedIds?.toString() });
    // console.log(formData)
  };

  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${VITE_BACKEND_API_URL}tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Task updated successfully, navigate to task details page
        // You can use useHistory() to navigate or any other navigation method
        router.push('/tasks');
        // console.log(formData)
      } else {
        console.error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <Box>
      <Tooltip title="Back">
        <IconButton component={RouterLink} href="/tasks">
          <Iconify sx={{ height: 32, width: 32 }} icon="ion:arrow-back" />
        </IconButton>
      </Tooltip>
      {formData && (
        <Box sx={{}}>
          <Typography variant="h4">Edit Task</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name='task_title'
              value={formData.task_title}
              onChange={handleChange}
              label="Title"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              name='task_desc'
              rows={4}
              value={formData.task_desc}
              onChange={handleChange}
              label="Description"
              variant="outlined"
              margin="normal"
            />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Stage</InputLabel>
              <Select value={formData.stage} name='stage' onChange={handleChange}>
                <MenuItem value="ToDo">ToDo</MenuItem>
                <MenuItem value="InProgress">InProgress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select value={formData.status} name='status' onChange={handleChange}>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="InActive">InActive</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Priority</InputLabel>
              <Select value={formData.priority} name='priority' onChange={handleChange}>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <Autocomplete
              multiple
              options={teamMembers}
              getOptionLabel={(option) => option.name}
              value={teamMembers?.filter(member => formData.assigned_to?.split(",")?.map(Number)?.includes(member.member_id))}
              onChange={handleAssignedToChange}
              renderInput={(params) => <TextField {...params} label="Assigned To" variant="outlined" />}
            />
            <Button type='submit' variant="contained" color="primary">
              Update Task
            </Button>
          </form>
        </Box>
      )}
    </Box>
  );
}


