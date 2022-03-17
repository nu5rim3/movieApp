import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// component
import BackNavbar from '../../components/BackNavbar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
    minHeight: '100%',
    overflow: 'hidden',
});

const MainStyle = styled('div')(() => ({
    // flexGrow: 1,
    overflow: 'auto',
    // minHeight: '100%',
    // paddingTop: 10,
}));

// ----------------------------------------------------------------------

const DetailLayout = () => {

    return (
        <RootStyle>
            <BackNavbar />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}

export default DetailLayout;