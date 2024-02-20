import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { RouterLink } from 'src/routes/components';

import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';


// ----------------------------------------------------------------------

export default function AppTasksUpdate({ title, subheader, list, ...other }) {
    // console.log(list);
    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <Scrollbar>
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                    {list.map((tasks) => (
                        <TaskItem key={tasks.id} tasks={tasks} />
                    ))}
                </Stack>
            </Scrollbar>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Button
                    component={RouterLink}
                    href='/tasks'
                    size="small"
                    color="inherit"
                    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                >
                    View all
                </Button>
            </Box>
        </Card>
    );
}

AppTasksUpdate.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    list: PropTypes.array.isRequired,
};

// ----------------------------------------------------------------------

function TaskItem({ tasks }) {
    const { image, title, description, postedAt } = tasks;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box
                component="img"
                alt={title}
                src={image}
                sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
            />

            <Box sx={{ minWidth: 240, flexGrow: 1 }}>
                <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
                    {title}
                </Link>

                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {description}
                </Typography>
            </Box>

            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                {fToNow(postedAt)}
            </Typography>
        </Stack>
    );
}

TaskItem.propTypes = {
    tasks: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        postedAt: PropTypes.instanceOf(Date),
    }),
};