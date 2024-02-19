import { faker } from '@faker-js/faker';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, CardContent } from '@mui/material';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
import AppTasksUpdate from '../app-tasks-update';
import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppSideFiller from '../app-side-filler';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {

  const [taskStatistics, setTaskStatistics] = useState({
    active: 5,
    inactive: 2,
    completed: 8,
    total: 15,
  });

  const [newTasks, setNewTasks] = useState([]);
  const [newProjects, setNewProjects] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const data = await response.json();
      setNewTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Fetch task statistics and new tasks/projects data from the backend
  useEffect(() => {
    // Fetch task statistics data from the backend
    // Update taskStatistics state with the fetched data

    // Fetch new tasks data from the backend
    // Update newTasks state with the fetched data

    // Fetch new projects data from the backend
    // Update newProjects state with the fetched data
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      {/* <Box display="flex">
        <Box p={2}>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={6}>
              <AppWidgetSummary
                title="Active Tasks"
                total={taskStatistics.active}
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/task-active.png" />}
              />
            </Grid>

            <Grid xs={12} sm={6} md={6}>
              <AppWidgetSummary
                title="InActive Tasks"
                total={taskStatistics.inactive}
                color="info"
                icon={<img alt="icon" src="/assets/icons/glass/task-inactive.png" />}
              />
            </Grid>

            <Grid xs={12} sm={6} md={6}>
              <AppWidgetSummary
                title="Completed Tasks"
                total={taskStatistics.completed}
                color="warning"
                icon={<img alt="icon" src="/assets/icons/glass/task-completed.png" />}
              />
            </Grid>

            <Grid xs={12} sm={6} md={6}>
              <AppWidgetSummary
                title="Total Tasks"
                total={taskStatistics.total}
                color="error"
                icon={<img alt="icon" src="/assets/icons/glass/task-active.png" />}
              />
            </Grid>

          </Grid>
        </Box>
        <Box p={2}>
          <Grid container spacing={3}>
            <AppOrderTimeline
              title="Projects Timeline"
              list={[...Array(3)].map((_, index) => ({
                id: faker.string.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

        </Box>
      </Box> */}

      <Grid container py={1} spacing={3} sx={{
          '--Grid-borderWidth': '1px',
          border: 'var(--Grid-borderWidth) dashed',
          borderColor: 'divider',
        }}>
        {/* First Grid Container */}
        <Grid xs={12} sm={8} md={8} lg={8}>
          <Box>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="Active Tasks"
                  total={taskStatistics.active}
                  color="success"
                  icon={<img alt="icon" src="/assets/icons/glass/task-active.png" />}
                />
              </Grid>

              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="InActive Tasks"
                  total={taskStatistics.inactive}
                  color="info"
                  icon={<img alt="icon" src="/assets/icons/glass/task-inactive.png" />}
                />
              </Grid>

              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="Completed Tasks"
                  total={taskStatistics.completed}
                  color="warning"
                  icon={<img alt="icon" src="/assets/icons/glass/task-completed.png" />}
                />
              </Grid>

              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="Total Tasks"
                  total={taskStatistics.total}
                  color="error"
                  icon={<img alt="icon" src="/assets/icons/glass/task-active.png" />}
                />
              </Grid>

            </Grid>
          </Box>
        </Grid>
        {/* Second Grid Container */}
        <Grid xs={12} sm={4} md={4} lg={4}>
          <Box>
            <Grid spacing={3}>
              <AppSideFiller
                title="Tasks Side"
                icon={<img alt="icon" src="/assets/left.png" />}
              />
            </Grid>
          </Box>
        </Grid>
      </Grid>


      {/* <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={6} md={6}>
              <AppWidgetSummary
                title="Active Tasks"
                total={taskStatistics.active}
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/task-active.png" />}
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <AppWidgetSummary
                title="InActive Tasks"
                total={taskStatistics.inactive}
                color="info"
                icon={<img alt="icon" src="/assets/icons/glass/task-inactive.png" />}
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <AppWidgetSummary
                title="Completed Tasks"
                total={taskStatistics.completed}
                color="warning"
                icon={<img alt="icon" src="/assets/icons/glass/task-completed.png" />}
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <AppWidgetSummary
                title="Total Tasks"
                total={taskStatistics.total}
                color="error"
                icon={<img alt="icon" src="/assets/icons/glass/task-active.png" />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Projects Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>
      </Grid> */}

      <Grid container py={1} spacing={3} sx={{
          '--Grid-borderWidth': '1px',
          border: 'var(--Grid-borderWidth) dashed',
          borderColor: 'divider',
        }}>
        {/* Second Grid Container */}
        <Grid xs={12} sm={4} md={4} lg={4}>
          <Box>
            <Grid spacing={3}>
              <AppSideFiller
                title="Projects Side"
                icon={<img alt="icon" src="/assets/right.png" />}
              />
            </Grid>
          </Box>
        </Grid>
        {/* First Grid Container */}
        <Grid xs={12} sm={8} md={8} lg={8}>
          <Box>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="Active Projects"
                  total={8}
                  color="success"
                  icon={<img alt="icon" src="/assets/icons/glass/project-active.png" />}
                />
              </Grid>

              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="InActive Projects"
                  total={2}
                  color="info"
                  icon={<img alt="icon" src="/assets/icons/glass/project-inactive.png" />}
                />
              </Grid>

              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="Completed Projects"
                  total={20}
                  color="warning"
                  icon={<img alt="icon" src="/assets/icons/glass/project-completed.png" />}
                />
              </Grid>

              <Grid xs={12} sm={6} md={6}>
                <AppWidgetSummary
                  title="Total Projects"
                  total={234}
                  color="error"
                  icon={<img alt="icon" src="/assets/icons/glass/project-active.png" />}
                />
              </Grid>

            </Grid>
          </Box>
        </Grid>

      </Grid>

      {/* <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Active Projects"
            total={8}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/project-active.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="InActive Projects"
            total={2}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/project-inactive.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Completed Projects"
            total={20}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/project-completed.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

      </Grid> */}

      {/* <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid> 

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

      <Stack sx={{ mb: 2, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <AppTasksUpdate
              title="Newly Added Tasks"
              list={newTasks.map((newTask, index) => ({
                id: newTask.id,
                title: newTask.title,
                description: newTask.description,
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Projects Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.string.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Follow Us"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          {/* <Grid xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', name: 'Create FireStone Logo' },
                { id: '2', name: 'Add SCSS and JS files if required' },
                { id: '3', name: 'Stakeholder Meeting' },
                { id: '4', name: 'Scoping & Estimations' },
                { id: '5', name: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}

          <Grid xs={12} md={6} lg={8}>
            <AppTasksUpdate
              title="Newly Added Projects"
              list={newTasks.map((newTask, index) => ({
                id: newTask.id,
                title: newTask.title,
                description: newTask.description,
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
        </Grid>
      </Stack>

      <Stack container spacing="10">
        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
          Projects
        </Typography>
        {/* Projects Grid */}
        <Grid container spacing={3}>
          {/* Map over newProjects array to display each project */}
          {newProjects.map((project) => (
            <Grid item xs={4} key={project.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {project.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
          Newly Added Tasks
        </Typography>
        {/* Newly Added Tasks Grid */}
        <Grid container spacing={3}>
          {/* Map over newTasks array to display each task */}
          {newTasks.map((task) => (
            <Grid item xs={4} key={task.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {task.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Button component={Link} to="/tasks" variant="contained" style={{ marginTop: '20px' }}>
            Show All Tasks
          </Button>
        </Grid>
      </Stack>
    </Container >
  );
}
