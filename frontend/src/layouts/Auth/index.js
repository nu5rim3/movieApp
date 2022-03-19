import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// component
import Logo from '../../components/Logo';
// ----------------------------------------------------------------------

const RootStyle = styled('div')({
    overflow: 'hidden',
});

const MainStyle = styled('div')(() => ({
    overflow: 'auto',
    margin: 'auto',
}));

// ----------------------------------------------------------------------

const AuthLayout = () => {

    return (
        <RootStyle>
            <Logo />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}

export default AuthLayout;