import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// component
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Logo from '../../components/Logo';

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

const HomeLayout = () => {

    return (
        <RootStyle>
            <Navbar />
            <Logo />
            <SearchBar />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}

export default HomeLayout;