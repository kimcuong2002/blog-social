import { FC } from 'react';

import { InputAdornment, OutlinedInput } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

import { InfoProfile, MenuItem, MenuMobile, ThemeButton } from './components';
import { HEADER_LIST_ITEM, HEADER_LOGO_TEXT } from './constant';
// import { useActiveMenu } from '@/hooks';

const HeaderComponent: FC = () => {
  // const { checkActive } = useActiveMenu();
  // const isActive = checkActive(['/computer', '/technology']);
  return (
    <header className="bg-secondary block fixed w-full inset-x-0 z-30 h-16 shadow-md">
      <div className="w-full bg-black flex justify-center items-center gap-10 py-1.5">
        <img
          src="https://seeklogo.com/images/W/web-dev-logo-E60991AA99-seeklogo.com.png"
          alt="logo"
          className="w-10"
        />
        <span className="text-3xl font-bold text-white xl:text-5xl">
          {HEADER_LOGO_TEXT}
        </span>
      </div>
      <div className="w-full bg-red-600">
        <center>
          <div className="w-full justify-around flex items-center py-2.5 xl:w-4.5/5">
            <MenuMobile className="xl:hidden" />
            <div className="hidden xl:block">
              {HEADER_LIST_ITEM.map((el) => (
                <MenuItem text={el.text} path={el.path} key={el.id} />
              ))}
            </div>
            <div className="flex justify-center items-center xl:gap-5 ">
              <OutlinedInput
                id="outlined-adornment-text"
                endAdornment={
                  <InputAdornment position="end">
                    <FiSearch />
                  </InputAdornment>
                }
              />
              <ThemeButton />
              <InfoProfile />
            </div>
          </div>
        </center>
      </div>
    </header>
  );
};

export default HeaderComponent;
